# scripts/patch_generators_breadcrumbs.py
import os
import re

SCRIPTS_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\scripts"

NAV_OLD_REGEX = r'<nav class="breadcrumb"[^>]*>.*?</nav>'

# Check each generator script
for f in os.listdir(SCRIPTS_DIR):
    if f.startswith("generate_") and f.endswith(".py"):
        filepath = os.path.join(SCRIPTS_DIR, f)
        with open(filepath, "r", encoding="utf-8") as fp:
            content = fp.read()
        
        # Check if it has old breadcrumb markup
        # Replace breadcrumb style in CSS if needed
        old_css = """.breadcrumb {
      font-size: 13px;
      color: var(--text-muted);
      margin-bottom: 24px;
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }

    .breadcrumb a {
      color: var(--text-muted);
      text-decoration: none;
    }

    .breadcrumb a:hover {
      color: var(--accent-amber-light);
    }"""
        
        new_css = """.breadcrumb { padding: 10px 0; margin: 0 0 20px 0; list-style: none; display: flex; flex-wrap: wrap; align-items: center; }
    .breadcrumb-item { display: inline; font-size: 13px; }
    .breadcrumb-item + .breadcrumb-item::before { content: "›"; padding: 0 8px; color: #94a3b8; }
    .breadcrumb-item a { color: #38bdf8; text-decoration: none; font-weight: 500; }
    .breadcrumb-item a:hover { text-decoration: underline; color: #fbbf24; }
    .breadcrumb-item.active { color: #94a3b8; font-weight: 500; }"""

        if old_css in content:
            content = content.replace(old_css, new_css)
            with open(filepath, "w", encoding="utf-8") as fp:
                fp.write(content)
            print(f"Updated CSS in {f}")

print("Generator scripts patched.")
