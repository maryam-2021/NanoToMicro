# scripts/standardize_all_breadcrumbs.py
import os
import re
import json

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"
SCRIPTS_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\scripts"

# Define metadata mapping for all public pages
PAGES_META = {
    # Physics Pages
    "physics/antigravity-definition.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Physics Research Hub", "https://nanotomicro.com/physics/"),
            ("What Is Antigravity?", "https://nanotomicro.com/physics/antigravity-definition.html")
        ]
    },
    "physics/what-is-antigravity.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Physics Research Hub", "https://nanotomicro.com/physics/"),
            ("What Is Antigravity?", "https://nanotomicro.com/physics/what-is-antigravity.html")
        ]
    },
    "physics/gravitational-shielding.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Physics Research Hub", "https://nanotomicro.com/physics/"),
            ("Gravitational Shielding", "https://nanotomicro.com/physics/gravitational-shielding.html")
        ]
    },
    "physics/antimatter-gravity.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Physics Research Hub", "https://nanotomicro.com/physics/"),
            ("Does Antimatter Fall Up?", "https://nanotomicro.com/physics/antimatter-gravity.html")
        ]
    },
    "physics/negative-mass.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Physics Research Hub", "https://nanotomicro.com/physics/"),
            ("Negative Mass & Exotic Matter", "https://nanotomicro.com/physics/negative-mass.html")
        ]
    },
    "physics/magnetic-levitation.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Physics Research Hub", "https://nanotomicro.com/physics/"),
            ("Magnetic Levitation", "https://nanotomicro.com/physics/magnetic-levitation.html")
        ]
    },
    "physics/metrology-checklist.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Physics Research Hub", "https://nanotomicro.com/physics/"),
            ("Metrology Checklist", "https://nanotomicro.com/physics/metrology-checklist.html")
        ]
    },
    "physics/index.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Physics Research Hub", "https://nanotomicro.com/physics/")
        ]
    },

    # Converters Pages
    "converters/index.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Converters Hub", "https://nanotomicro.com/converters/")
        ]
    },
    "converters/length.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Converters Hub", "https://nanotomicro.com/converters/"),
            ("Nanometers to Micrometers (Length)", "https://nanotomicro.com/converters/length.html")
        ]
    },
    "converters/mass.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Converters Hub", "https://nanotomicro.com/converters/"),
            ("Nanograms to Micrograms (Mass)", "https://nanotomicro.com/converters/mass.html")
        ]
    },
    "converters/volume.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Converters Hub", "https://nanotomicro.com/converters/"),
            ("Nanoliters to Microliters (Volume)", "https://nanotomicro.com/converters/volume.html")
        ]
    },
    "converters/time.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Converters Hub", "https://nanotomicro.com/converters/"),
            ("Nanoseconds to Microseconds (Time)", "https://nanotomicro.com/converters/time.html")
        ]
    },
    "converters/current.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Converters Hub", "https://nanotomicro.com/converters/"),
            ("Nanoamperes to Microamperes (Current)", "https://nanotomicro.com/converters/current.html")
        ]
    },
    "converters/charge.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Converters Hub", "https://nanotomicro.com/converters/"),
            ("Nanofarads to Microfarads (Capacitance)", "https://nanotomicro.com/converters/charge.html")
        ]
    },
    "converters/concentration.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Converters Hub", "https://nanotomicro.com/converters/"),
            ("Nanomolar to Micromolar (Concentration)", "https://nanotomicro.com/converters/concentration.html")
        ]
    },

    # Guides & Blog
    "guides/si-prefixes-guide.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Guides", "https://nanotomicro.com/guides/si-prefixes-guide.html"),
            ("24 SI Prefixes Complete Guide", "https://nanotomicro.com/guides/si-prefixes-guide.html")
        ]
    },
    "blog/index.html": {
        "crumbs": [
            ("Home", "https://nanotomicro.com/"),
            ("Blog & Articles", "https://nanotomicro.com/blog/")
        ]
    }
}

def generate_breadcrumb_html(crumbs):
    html = '<nav aria-label="Breadcrumb">\n'
    html += '  <ol class="breadcrumb">\n'
    for i, (name, url) in enumerate(crumbs):
        is_last = (i == len(crumbs) - 1)
        if is_last:
            html += f'    <li class="breadcrumb-item active" aria-current="page">{name}</li>\n'
        else:
            # relative root link or relative url
            href = url.replace("https://nanotomicro.com", "")
            if not href:
                href = "/"
            html += f'    <li class="breadcrumb-item"><a href="{href}">{name}</a></li>\n'
    html += '  </ol>\n'
    html += '</nav>'
    return html

def generate_breadcrumb_schema(crumbs):
    items = []
    for i, (name, url) in enumerate(crumbs):
        items.append({
            "@type": "ListItem",
            "position": i + 1,
            "name": name,
            "item": url
        })
    return {
        "@type": "BreadcrumbList",
        "itemListElement": items
    }

CSS_SNIPPET = """
    /* Standardized Breadcrumbs */
    .breadcrumb { padding: 10px 0; margin: 0 0 20px 0; list-style: none; display: flex; flex-wrap: wrap; align-items: center; }
    .breadcrumb-item { display: inline; font-size: 13px; }
    .breadcrumb-item + .breadcrumb-item::before { content: "›"; padding: 0 8px; color: #94a3b8; }
    .breadcrumb-item a { color: #38bdf8; text-decoration: none; font-weight: 500; }
    .breadcrumb-item a:hover { text-decoration: underline; color: #fbbf24; }
    .breadcrumb-item.active { color: #94a3b8; font-weight: 500; }
"""

def update_file(rel_path, meta):
    filepath = os.path.join(PUBLIC_DIR, rel_path.replace("/", os.sep))
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}, does not exist")
        return

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    crumbs = meta["crumbs"]
    new_nav = generate_breadcrumb_html(crumbs)
    new_crumb_schema = generate_breadcrumb_schema(crumbs)

    # 1. Replace or insert nav breadcrumbs
    # Match existing <nav class="breadcrumb"...>...</nav> or <nav aria-label="Breadcrumb"...>...</nav>
    nav_pattern = r'<nav[^>]*aria-label="Breadcrumb"[^>]*>.*?</nav>|<nav class="breadcrumb"[^>]*>.*?</nav>'
    if re.search(nav_pattern, content, flags=re.DOTALL):
        content = re.sub(nav_pattern, new_nav, content, flags=re.DOTALL)
    else:
        # insert after <main ...> or <div class="page-layout"> or <div class="hub-layout">
        if '<main class="main-content">' in content:
            content = content.replace('<main class="main-content">', f'<main class="main-content">\n      {new_nav}\n')
        elif '<div class="hub-layout">' in content:
            content = content.replace('<div class="hub-layout">', f'<div class="hub-layout">\n    {new_nav}\n')

    # 2. Update CSS
    if '.breadcrumb-item + .breadcrumb-item::before' not in content:
        content = content.replace('</style>', f'{CSS_SNIPPET}\n  </style>')

    # 3. Update Schema
    # Parse existing JSON-LD
    json_ld_matches = list(re.finditer(r'<script type="application/ld\+json">\s*({.*?})\s*</script>', content, flags=re.DOTALL))
    if json_ld_matches:
        for match in json_ld_matches:
            raw_json = match.group(1)
            try:
                data = json.loads(raw_json)
                if "@graph" in data:
                    # Update or insert BreadcrumbList in @graph
                    updated_graph = []
                    found = False
                    for entry in data["@graph"]:
                        if entry.get("@type") == "BreadcrumbList":
                            updated_graph.append(new_crumb_schema)
                            found = True
                        else:
                            updated_graph.append(entry)
                    if not found:
                        updated_graph.insert(0, new_crumb_schema)
                    data["@graph"] = updated_graph
                    new_json_str = json.dumps(data, indent=2)
                    content = content[:match.start(1)] + new_json_str + content[match.end(1):]
                    break
                elif data.get("@type") == "BreadcrumbList":
                    new_json_str = json.dumps(new_crumb_schema, indent=2)
                    content = content[:match.start(1)] + new_json_str + content[match.end(1):]
                    break
            except Exception as e:
                print(f"Error parsing json-ld in {rel_path}: {e}")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated {rel_path} with standardized breadcrumbs & schema.")

for rel_path, meta in PAGES_META.items():
    update_file(rel_path, meta)

print("Standardization script finished successfully!")
