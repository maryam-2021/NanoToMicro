# scripts/build_complete_dictionaries.py
import os
import re
import json

DICT_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src\i18n\dictionaries"

def load_data():
    with open(r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\scripts\all_locale_data.json", "r", encoding="utf-8") as f:
        return json.load(f)

def to_ts_obj(obj, indent=2):
    lines = ["{\n"]
    sp = " " * indent
    for k, v in obj.items():
        if isinstance(v, dict):
            lines.append(f"{sp}{k}: {to_ts_obj(v, indent + 2)},\n")
        else:
            # Escape single quotes and newlines
            escaped = v.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")
            lines.append(f"{sp}{k}: '{escaped}',\n")
    lines.append(" " * (indent - 2) + "}")
    return "".join(lines)

def update_dictionary_file(locale_code, data_map):
    filename = f"{locale_code}.ts"
    filepath = os.path.join(DICT_DIR, filename)
    if not os.path.exists(filepath):
        print(f"File {filename} not found, skipping.")
        return

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract variable name, e.g. "export const es: Dictionary = {" or "export const ptBR: Dictionary = {"
    m = re.search(r"export const (\w+):\s*Dictionary\s*=\s*\{", content)
    if not m:
        m = re.search(r"export const (\w+)\s*=\s*\{", content)
    var_name = m.group(1) if m else locale_code.replace("-", "")

    # We want to insert the new sections before the closing "};"
    # Find the last closing "};" or "}"
    last_brace_idx = content.rfind("};")
    if last_brace_idx == -1:
        last_brace_idx = content.rfind("}")

    # Remove existing 'units', 'convertPage', 'siPrefixPage', 'chartsPage', 'errorPage' if already present
    # To do this safely, we can check if content has existing units / convertPage / etc.
    # If so, strip everything from the first added key
    split_keys = ["  units:", "  convertPage:", "  siPrefixPage:", "  chartsPage:", "  errorPage:"]
    cut_idx = last_brace_idx
    for sk in split_keys:
        idx = content.find(sk)
        if idx != -1 and idx < cut_idx:
            cut_idx = idx

    prefix = content[:cut_idx].rstrip()
    if prefix.endswith(","):
        pass
    else:
        prefix += ","

    new_sections = ""
    for sec_name in ["units", "convertPage", "siPrefixPage", "chartsPage", "errorPage"]:
        if sec_name in data_map:
            sec_ts = to_ts_obj(data_map[sec_name], indent=4)
            new_sections += f"\n  {sec_name}: {sec_ts},\n"

    new_content = f"{prefix}{new_sections}};\n"
    
    # Ensure import of Dictionary type is at the top
    if "import type { Dictionary } from './en';" not in new_content and locale_code != "en":
        new_content = "// src/i18n/dictionaries/" + filename + "\nimport type { Dictionary } from './en';\n\n" + new_content.replace("// src/i18n/dictionaries/" + filename + "\n", "")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"✔ Updated {filename} with 5 new sections.")

print("Builder ready.")
