# scripts/generate_sitemap_xml.py
import os
import datetime

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"
DIST_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\dist"

today = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d")

# Define structure
ENTRIES = [
    # Main pages
    ("https://nanotomicro.com/", "1.0", "weekly"),
    ("https://nanotomicro.com/converters/", "0.9", "monthly"),
    ("https://nanotomicro.com/physics/", "0.9", "monthly"),
    ("https://nanotomicro.com/conversion-charts/", "0.9", "monthly"),
    ("https://nanotomicro.com/si-prefix-converter/", "0.9", "monthly"),

    # Converters
    ("https://nanotomicro.com/converters/length.html", "0.8", "monthly"),
    ("https://nanotomicro.com/converters/mass.html", "0.8", "monthly"),
    ("https://nanotomicro.com/converters/volume.html", "0.8", "monthly"),
    ("https://nanotomicro.com/converters/time.html", "0.8", "monthly"),
    ("https://nanotomicro.com/converters/current.html", "0.8", "monthly"),
    ("https://nanotomicro.com/converters/charge.html", "0.8", "monthly"),
    ("https://nanotomicro.com/converters/concentration.html", "0.8", "monthly"),

    # Converter routes
    ("https://nanotomicro.com/convert/nano-to-micro/", "0.9", "weekly"),
    ("https://nanotomicro.com/convert/micro-to-nano/", "0.8", "monthly"),
    ("https://nanotomicro.com/convert/nanometers-to-micrometers/", "0.8", "monthly"),
    ("https://nanotomicro.com/convert/micrometers-to-nanometers/", "0.8", "monthly"),
    ("https://nanotomicro.com/convert/nanograms-to-micrograms/", "0.8", "monthly"),
    ("https://nanotomicro.com/convert/micrograms-to-nanograms/", "0.8", "monthly"),
    ("https://nanotomicro.com/convert/nanofarads-to-microfarads/", "0.8", "monthly"),
    ("https://nanotomicro.com/convert/microfarads-to-nanofarads/", "0.8", "monthly"),
    ("https://nanotomicro.com/convert/nanomolar-to-micromolar/", "0.8", "monthly"),
    ("https://nanotomicro.com/convert/nanoseconds-to-microseconds/", "0.8", "monthly"),
    ("https://nanotomicro.com/convert/newton-to-micronewton/", "0.8", "monthly"),
    ("https://nanotomicro.com/convert/tesla-to-gauss/", "0.8", "monthly"),

    # Physics Authority Pages
    ("https://nanotomicro.com/physics/antigravity-definition.html", "0.8", "monthly"),
    ("https://nanotomicro.com/physics/what-is-antigravity.html", "0.8", "monthly"),
    ("https://nanotomicro.com/physics/gravitational-shielding.html", "0.8", "monthly"),
    ("https://nanotomicro.com/physics/antimatter-gravity.html", "0.8", "monthly"),
    ("https://nanotomicro.com/physics/negative-mass.html", "0.8", "monthly"),
    ("https://nanotomicro.com/physics/magnetic-levitation.html", "0.8", "monthly"),
    ("https://nanotomicro.com/physics/metrology-checklist.html", "0.8", "monthly"),

    # Guides & Blog
    ("https://nanotomicro.com/guides/si-prefixes-guide.html", "0.8", "monthly"),
    ("https://nanotomicro.com/blog/", "0.7", "weekly"),
]

xml = ['<?xml version="1.0" encoding="UTF-8"?>']
xml.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

# Main section
xml.append('  <!-- Main pages -->')
for loc, prio, freq in ENTRIES[:5]:
    xml.append(f'  <url><loc>{loc}</loc><lastmod>{today}</lastmod><priority>{prio}</priority><changefreq>{freq}</changefreq></url>')

# Converters
xml.append('\n  <!-- Converters -->')
for loc, prio, freq in ENTRIES[5:19]:
    xml.append(f'  <url><loc>{loc}</loc><lastmod>{today}</lastmod><priority>{prio}</priority><changefreq>{freq}</changefreq></url>')

# Physics pages
xml.append('\n  <!-- Physics pages -->')
for loc, prio, freq in ENTRIES[19:26]:
    xml.append(f'  <url><loc>{loc}</loc><lastmod>{today}</lastmod><priority>{prio}</priority><changefreq>{freq}</changefreq></url>')

# Guides & Blog
xml.append('\n  <!-- Guides & Blog -->')
for loc, prio, freq in ENTRIES[26:]:
    xml.append(f'  <url><loc>{loc}</loc><lastmod>{today}</lastmod><priority>{prio}</priority><changefreq>{freq}</changefreq></url>')

xml.append('</urlset>')

sitemap_content = "\n".join(xml) + "\n"

# Write to public/
os.makedirs(PUBLIC_DIR, exist_ok=True)
with open(os.path.join(PUBLIC_DIR, "sitemap.xml"), "w", encoding="utf-8") as f:
    f.write(sitemap_content)

# Write to dist/ if exists
if os.path.exists(DIST_DIR):
    with open(os.path.join(DIST_DIR, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(sitemap_content)

print("Generated sitemap.xml in root and public directories successfully!")
