import os
import re

PHYSICS_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public\physics"

GUIDES = [
    ("antigravity-definition.html", "What Is Antigravity? A Scientific Definition"),
    ("gravitational-shielding.html", "Gravitational Shielding: Physics, Experiments & Why It Fails"),
    ("antimatter-gravity.html", "Does Antimatter Fall Up or Down? CERN ALPHA-g Experiment Results"),
    ("negative-mass.html", "Negative Mass in General Relativity: Warp Drives & Runaway Motion"),
    ("magnetic-levitation.html", "Magnetic Levitation vs Real Antigravity: Earnshaw's Theorem Explained"),
    ("metrology-checklist.html", "Laboratory Metrology & Calibration Checklist: Nano to Micro Scale")
]

def update_physics_guides():
    for filename, title in GUIDES:
        file_path = os.path.join(PHYSICS_DIR, filename)
        if not os.path.exists(file_path):
            print(f"Skipping missing file: {file_path}")
            continue
        
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # 1. Canonical
        canonical_tag = f'<link rel="canonical" href="https://nanotomicro.com/physics/{filename}" />'
        if '<link rel="canonical"' in content:
            content = re.sub(r'<link rel="canonical"[^>]*>', canonical_tag, content)
        else:
            content = content.replace("</head>", f'    {canonical_tag}\n</head>')

        # 2. Breadcrumb Schema
        schema_json = f"""    <!-- ===== BREADCRUMB SCHEMA MARKUP ===== -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://nanotomicro.com/"
            }},
            {{
                "@type": "ListItem",
                "position": 2,
                "name": "Physics Hub",
                "item": "https://nanotomicro.com/physics/"
            }},
            {{
                "@type": "ListItem",
                "position": 3,
                "name": "{title}",
                "item": "https://nanotomicro.com/physics/{filename}"
            }}
        ]
    }}
    </script>"""

        if "BreadcrumbList" not in content:
            content = content.replace("</head>", f"{schema_json}\n</head>")

        # 3. Breadcrumb HTML
        breadcrumb_html = f"""<!-- ===== BREADCRUMB NAVIGATION ===== -->
<nav aria-label="Breadcrumb" class="breadcrumb-nav">
  <ol class="breadcrumb" style="display: flex; list-style: none; padding: 0; margin: 0 0 20px 0; font-size: 0.9rem; flex-wrap: wrap; gap: 5px; align-items: center;">
    <li class="breadcrumb-item"><a href="/" style="color: #38bdf8; text-decoration: none;">Home</a></li>
    <li class="breadcrumb-item" style="color: #94a3b8; user-select: none;">›</li>
    <li class="breadcrumb-item"><a href="/physics/" style="color: #38bdf8; text-decoration: none;">Physics Hub</a></li>
    <li class="breadcrumb-item" style="color: #94a3b8; user-select: none;">›</li>
    <li class="breadcrumb-item active" aria-current="page" style="color: #cbd5e1; font-weight: 500;">{title}</li>
  </ol>
</nav>"""

        # Replace existing breadcrumb nav if present, or add before <main>
        if re.search(r'<nav[^>]*aria-label=["\']Breadcrumb["\'][^>]*>.*?</nav>', content, re.DOTALL):
            content = re.sub(r'<nav[^>]*aria-label=["\']Breadcrumb["\'][^>]*>.*?</nav>', breadcrumb_html, content, flags=re.DOTALL)
        elif "<main" in content:
            content = content.replace("<main", f"{breadcrumb_html}\n<main")

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated physics guide: {filename}")

if __name__ == "__main__":
    update_physics_guides()
