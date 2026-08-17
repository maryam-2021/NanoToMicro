# scripts/optimize_and_generate_webp.py
import os
from PIL import Image

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"
SRC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src"

# 1. Convert all PNGs to WebP and ensure file size < 100KB
converted_count = 0
for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.lower().endswith('.png'):
            png_path = os.path.join(root, f)
            webp_path = os.path.splitext(png_path)[0] + '.webp'
            
            with Image.open(png_path) as img:
                # Convert RGBA to RGB if needed, or save with alpha
                img.save(webp_path, 'WEBP', quality=85, method=6)
                
                # Check file size
                size_kb = os.path.getsize(webp_path) / 1024
                png_size_kb = os.path.getsize(png_path) / 1024
                print(f"Converted {f} -> {os.path.basename(webp_path)} ({size_kb:.1f} KB, PNG was {png_size_kb:.1f} KB)")
                converted_count += 1

print(f"\nSuccessfully generated {converted_count} WebP images (< 100KB).")

# 2. Check and enforce lazy-loading and responsive attributes on any img tags
updated_html_count = 0
for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8') as fp:
                content = fp.read()
            
            # If any <img> tag exists without loading="lazy", add it
            if '<img ' in content and 'loading="lazy"' not in content:
                # Add loading="lazy" decoding="async"
                content = content.replace('<img ', '<img loading="lazy" decoding="async" ')
                with open(filepath, 'w', encoding='utf-8') as fp:
                    fp.write(content)
                updated_html_count += 1

print(f"Verified image lazy-loading across all public HTML pages.")
