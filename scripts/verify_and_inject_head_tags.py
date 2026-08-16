# scripts/verify_and_inject_head_tags.py
import os
import re

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"

for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.endswith(".html"):
            filepath = os.path.join(root, f)
            rel_path = os.path.relpath(filepath, PUBLIC_DIR).replace("\\", "/")
            
            with open(filepath, "r", encoding="utf-8") as fp:
                content = fp.read()
            
            # 1. Ensure <html lang="en">
            if '<html lang="en">' not in content and '<html' in content:
                content = re.sub(r'<html[^>]*>', '<html lang="en">', content, count=1)

            # 2. Ensure robots tag
            if '<meta name="robots"' not in content:
                # Insert right before </head>
                robots_tag = '  <!-- Robots (for SEO) -->\n  <meta name="robots" content="index, follow" />\n'
                content = content.replace('</head>', f'{robots_tag}</head>')

            # 3. Ensure twitter:card
            if '<meta name="twitter:card"' not in content:
                twitter_tag = '  <meta name="twitter:card" content="summary_large_image" />\n'
                content = content.replace('</head>', f'{twitter_tag}</head>')

            with open(filepath, "w", encoding="utf-8") as fp:
                fp.write(content)
            
            print(f"Verified & updated head tags in public/{rel_path}")

print("All public HTML files verified and updated with required head tags!")
