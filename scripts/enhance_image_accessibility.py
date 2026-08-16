# scripts/enhance_image_accessibility.py
import os
import re

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"
SRC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src"

# 1. Update public HTML files
SVG_ALT_MAP = {
    "negative-mass.html": "Diagram showing Alcubierre warp drive spacetime metric with forward space contraction, rear space expansion, and flat central passenger bubble",
    "metrology-checklist.html": "Schematic of ultra-high-vacuum torsion balance with laser optical lever, dual Mu-metal magnetic shielding, and seismic vibration isolation",
    "magnetic-levitation.html": "Diagram showing Earnshaw's theorem with magnetic field lines, superconductor flux pinning, and diamagnetic repulsion",
    "antigravity-definition.html": "Diagram illustrating four operational categories of physical mass and General Relativity geodesic motion",
    "gravitational-shielding.html": "Diagram showing Gauss's law for gravity and rotating superconductor magnetic flux expulsion",
    "antimatter-gravity.html": "CERN ALPHA-g magnetic trap and vertical antihydrogen free-fall gravimetry experiment setup",
    "length.html": "Chart comparing nanometer and micrometer measurements in semiconductor transistors, DNA, and bacteria",
    "index.html": "Screenshot and interactive interface of the nano to micro converter tool with real-time decimal precision",
}

for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.endswith(".html"):
            filepath = os.path.join(root, f)
            with open(filepath, "r", encoding="utf-8") as fp:
                content = fp.read()
            
            # Check if there are SVGs and add aria-label and role="img" if missing
            svg_desc = SVG_ALT_MAP.get(f, "Scientific diagram and precision metrology illustration")
            
            # Update SVG tag
            def update_svg(match):
                tag = match.group(0)
                if 'role="img"' not in tag:
                    tag = tag.replace('<svg ', f'<svg role="img" aria-label="{svg_desc}" ')
                return tag

            content = re.sub(r'<svg\b[^>]*>', update_svg, content)

            # Ensure og:image:alt is present and descriptive
            if '<meta property="og:image:alt"' not in content:
                og_alt_tag = f'  <meta property="og:image:alt" content="{svg_desc}" />\n'
                content = content.replace('</head>', f'{og_alt_tag}</head>')
            else:
                content = re.sub(r'<meta property="og:image:alt"[^>]*>', f'<meta property="og:image:alt" content="{svg_desc}" />', content)

            with open(filepath, "w", encoding="utf-8") as fp:
                fp.write(content)
            print(f"Enhanced accessibility & alt attributes in public/{f}")

print("Image and SVG accessibility enhancements completed successfully!")
