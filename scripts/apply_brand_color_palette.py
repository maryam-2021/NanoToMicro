# scripts/apply_brand_color_palette.py
import os
import re

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"

THEME_CSS_VARS = """
    :root {
      --primary-dark: #1a1a2e;
      --primary-teal: #4fc3f7;
      --primary-teal-hover: #039be5;
      --text-dark: #1a1a2e;
      --text-gray: #4a4a5a;
      --text-muted: #717182;
      --bg-white: #ffffff;
      --bg-light: #f8f9fc;
      --border-subtle: #e2e8f0;
      --card-bg: #ffffff;
      --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
"""

NAV_FOOTER_CSS = """
    /* Main Navigation */
    .main-nav { background: var(--primary-dark, #1a1a2e); padding: 15px 20px; border-radius: 8px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; }
    .logo { color: #ffffff; font-size: 24px; font-weight: bold; text-decoration: none; display: flex; align-items: center; gap: 8px; }
    .logo span { color: var(--primary-teal, #4fc3f7); }
    .nav-links { display: flex; gap: 20px; flex-wrap: wrap; align-items: center; }
    .nav-links a { color: #cbd5e1; text-decoration: none; transition: color 0.2s; font-size: 14px; font-weight: 600; }
    .nav-links a:hover { color: var(--primary-teal, #4fc3f7); }

    /* Footer */
    footer { margin-top: 50px; padding-top: 30px; border-top: 1px solid #ddd; text-align: center; color: var(--text-gray, #4a4a5a); }
    .footer-links { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 15px; }
    .footer-links a { color: #0366d6; text-decoration: none; font-weight: 500; }
    .footer-links a:hover { text-decoration: underline; color: var(--primary-teal-hover, #039be5); }
"""

print("Applying brand color palette to public HTML pages...")

count = 0
for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.endswith(".html"):
            filepath = os.path.join(root, f)
            with open(filepath, "r", encoding="utf-8") as fp:
                content = fp.read()

            # Ensure theme variables are declared
            if ':root' in content:
                content = re.sub(r':root\s*\{[^}]*\}', THEME_CSS_VARS.strip(), content, count=1)
            else:
                content = content.replace('<style>', f'<style>\n{THEME_CSS_VARS}')

            with open(filepath, "w", encoding="utf-8") as fp:
                fp.write(content)
            count += 1

print(f"Brand color palette successfully applied across {count} pages!")
