# scripts/inject_performance_optimizations.py
import os
import re

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"
BASE_ASTRO = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src\layouts\Base.astro"

GOOGLE_FONTS_HTML = """    <!-- Google Fonts CDN -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />"""

# 1. Update Base.astro
with open(BASE_ASTRO, "r", encoding="utf-8") as f:
    base_content = f.read()

if "fonts.googleapis.com" not in base_content:
    base_content = base_content.replace('<link rel="icon" type="image/svg+xml" href="/favicon.svg" />', f'<link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n\n{GOOGLE_FONTS_HTML}')
    with open(BASE_ASTRO, "w", encoding="utf-8") as f:
        f.write(base_content)
    print("Updated Base.astro with Google Fonts CDN.")

# 2. Update all public HTML files
for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.endswith(".html"):
            filepath = os.path.join(root, f)
            with open(filepath, "r", encoding="utf-8") as fp:
                content = fp.read()

            # Add Google Fonts if not present
            if "fonts.googleapis.com" not in content:
                content = content.replace('</head>', f'{GOOGLE_FONTS_HTML}\n</head>')

            # Add loading="lazy" to <img> tags
            content = re.sub(r'<img\b(?![^>]*\bloading=)[^>]*>', lambda m: m.group(0).replace('<img ', '<img loading="lazy" '), content)

            # Add loading="lazy" to <iframe> tags
            content = re.sub(r'<iframe\b(?![^>]*\bloading=)[^>]*>', lambda m: m.group(0).replace('<iframe ', '<iframe loading="lazy" '), content)

            with open(filepath, "w", encoding="utf-8") as fp:
                fp.write(content)
            
            print(f"Performance optimizations applied to public/{f}")

print("Performance & CDN font optimizations finished successfully!")
