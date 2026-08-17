# scripts/apply_brand_color_palette.py
import os
import re

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"
BASE_ASTRO = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src\layouts\Base.astro"

COMPLETE_COLOR_TOKENS = """
    :root {
      /* Primary Brand Colors */
      --primary-dark: #1a1a2e;       /* Navigation background */
      --primary-teal: #4fc3f7;       /* Accents, links, buttons */
      --primary-teal-hover: #039be5; /* Active/focus state */
      --hover-dark: #2d2d4e;         /* Nav hover state */

      /* Semantic Status Colors */
      --success-green: #2ecc71;      /* Converter success states */
      --warning-amber: #f39c12;      /* Highlighting important notes */

      /* Typography & Neutral Colors */
      --text-dark: #1a1a2e;          /* Headings */
      --text-gray: #4a4a5a;          /* Body text */
      --text-muted: #717182;         /* Footnotes & metadata */
      --bg-white: #ffffff;           /* Canvas backgrounds */
      --bg-light: #f8f9fc;           /* Section backgrounds */

      /* Borders & Depth */
      --border-light: #e8ecf1;       /* Subtle dividers */
      --border-subtle: #e8ecf1;
      --card-shadow: 0 4px 12px rgba(26, 26, 46, 0.08);
      --card-shadow-hover: 0 8px 24px rgba(26, 26, 46, 0.12);
      
      --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
"""

print("Applying full brand color palette with status & shadow tokens...")

count = 0
for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.endswith(".html"):
            filepath = os.path.join(root, f)
            with open(filepath, "r", encoding="utf-8") as fp:
                content = fp.read()

            # Ensure theme variables are declared
            if ':root' in content:
                content = re.sub(r':root\s*\{[^}]*\}', COMPLETE_COLOR_TOKENS.strip(), content, count=1)
            else:
                content = content.replace('<style>', f'<style>\n{COMPLETE_COLOR_TOKENS}')

            with open(filepath, "w", encoding="utf-8") as fp:
                fp.write(content)
            count += 1

print(f"Applied full brand token system across {count} public pages!")
