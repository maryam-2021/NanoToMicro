# scripts/dict_all.py
import os
import re

DICT_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src\i18n\dictionaries"

def to_ts_obj(obj, indent=2):
    lines = ["{\n"]
    sp = " " * indent
    for k, v in obj.items():
        if isinstance(v, dict):
            lines.append(f"{sp}{k}: {to_ts_obj(v, indent + 2)},\n")
        else:
            escaped = str(v).replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")
            lines.append(f"{sp}{k}: '{escaped}',\n")
    lines.append(" " * (indent - 2) + "}")
    return "".join(lines)

def apply_to_file(locale_code, data_map):
    filename = f"{locale_code}.ts"
    filepath = os.path.join(DICT_DIR, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename}: does not exist")
        return

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    last_brace_idx = content.rfind("};")
    if last_brace_idx == -1:
        last_brace_idx = content.rfind("}")

    split_keys = ["  units:", "  convertPage:", "  siPrefixPage:", "  chartsPage:", "  errorPage:"]
    cut_idx = last_brace_idx
    for sk in split_keys:
        idx = content.find(sk)
        if idx != -1 and idx < cut_idx:
            cut_idx = idx

    prefix = content[:cut_idx].rstrip()
    if not prefix.endswith(","):
        prefix += ","

    new_sections = ""
    for sec_name in ["units", "convertPage", "siPrefixPage", "chartsPage", "errorPage"]:
        if sec_name in data_map:
            sec_ts = to_ts_obj(data_map[sec_name], indent=4)
            new_sections += f"\n  {sec_name}: {sec_ts},\n"

    new_content = f"{prefix}{new_sections}};\n"

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)

print("Setup ready in dict_all.py")
