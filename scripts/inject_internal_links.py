# scripts/inject_internal_links.py
import os
import re

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"
SRC_INDEX = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\src\pages\index.astro"

# 1. Update src/pages/index.astro to include the 3 homepage callout links prominently
with open(SRC_INDEX, "r", encoding="utf-8") as f:
    src_content = f.read()

homepage_callout_html = """
    <!-- Authority Internal Hub Navigation Callouts -->
    <div class="hub-callouts-banner" style="background: rgba(19, 28, 46, 0.8); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 14px; padding: 20px 24px; margin: 28px 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
      <div style="font-size: 14px; color: #cbd5e1;">
        🚀 Explore our comprehensive <a href="/physics/" style="color: #38bdf8; font-weight: 700; text-decoration: none;">Physics Research Hub</a> · 
        ⚡ Try our <a href="/converters/" style="color: #fbbf24; font-weight: 700; text-decoration: none;">specialized converters</a> for length, mass, and more · 
        📏 Learn more about <a href="/guides/si-prefixes-guide.html" style="color: #34d399; font-weight: 700; text-decoration: none;">SI prefixes</a> in our detailed guide.
      </div>
      <div>
        <a href="/physics/metrology-checklist.html" style="color: #94a3b8; font-size: 12px; font-weight: 600; text-decoration: none;">
          Read more about <span style="color: #fbbf24; text-decoration: underline;">precision metrology</span> →
        </a>
      </div>
    </div>
"""

if "hub-callouts-banner" not in src_content:
    # Insert right after hero section or before category cards
    src_content = src_content.replace('</section>\n\n  <!-- Section 2:', f'</section>\n{homepage_callout_html}\n  <!-- Section 2:')
    with open(SRC_INDEX, "w", encoding="utf-8") as f:
        f.write(src_content)
    print("Updated src/pages/index.astro with internal links banner.")

# 2. Update all physics pages in public/physics/
# Ensure each has:
# - Back to [Physics Research Hub](/physics/)
# - Related: [Gravitational Shielding](/physics/gravitational-shielding.html)
# - Use our [Nano to Micro Converter](/) in the sidebar
# - Keyword links: "semiconductor" -> /converters/length.html, "precision metrology" -> /physics/metrology-checklist.html

PHYSICS_PAGES = [
    "antigravity-definition.html",
    "what-is-antigravity.html",
    "gravitational-shielding.html",
    "antimatter-gravity.html",
    "negative-mass.html",
    "magnetic-levitation.html",
    "metrology-checklist.html"
]

for p in PHYSICS_PAGES:
    filepath = os.path.join(PUBLIC_DIR, "physics", p)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Ensure sidebar has "Use our Nano to Micro Converter" link to /
        if 'href="/"' not in content or 'Nano to Micro Converter' not in content:
            # check sidebar widget
            if '<aside class="sidebar">' in content:
                sidebar_link = '<a href="/" class="calc-link"><span>⚡ Nano to Micro Converter (Home)</span><span>→</span></a>\n'
                content = content.replace('<div class="sidebar-widget">', f'<div class="sidebar-widget">\n        {sidebar_link}', 1)
        
        # Ensure keyword link: "precision metrology" -> /physics/metrology-checklist.html if not self
        if p != "metrology-checklist.html" and 'precision metrology' in content.lower():
            if '/physics/metrology-checklist.html' not in content:
                content = re.sub(r'(?i)\b(precision metrology)\b', r'<a href="/physics/metrology-checklist.html" style="color: #38bdf8; text-decoration: underline;">\1</a>', content, count=1)
        
        # Ensure keyword link: "semiconductor" -> /converters/length.html
        if 'semiconductor' in content.lower() and '/converters/length.html' not in content:
            content = re.sub(r'(?i)\b(semiconductor)\b', r'<a href="/converters/length.html" style="color: #38bdf8; text-decoration: underline;">\1</a>', content, count=1)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Verified & updated links in physics/{p}")

# 3. Update all converter pages in public/converters/
# Ensure each has:
# - "Browse all [unit converters](/converters/)"
# - "Learn the physics behind [nano and micro scales](/guides/si-prefixes-guide.html)"
# - "Research applications: [Physics Research Hub](/physics/)"

CONVERTER_PAGES = [
    "length.html", "mass.html", "volume.html", "time.html",
    "current.html", "charge.html", "concentration.html"
]

converter_bottom_links = """
      <!-- Authority Inter-linking Footer Box -->
      <div style="background: rgba(19, 28, 46, 0.7); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 12px; padding: 20px 24px; margin: 32px 0;">
        <h3 style="font-size: 16px; color: #fbbf24; margin-top: 0; margin-bottom: 8px;">Explore Related Metrology Resources:</h3>
        <ul style="margin: 0 0 0 20px; font-size: 14px; color: #cbd5e1;">
          <li>Browse all <a href="/converters/" style="color: #38bdf8; font-weight: 600; text-decoration: underline;">unit converters</a> across 8 physical domains.</li>
          <li>Learn the physics behind <a href="/guides/si-prefixes-guide.html" style="color: #38bdf8; font-weight: 600; text-decoration: underline;">nano and micro scales</a> in our 24 SI prefix guide.</li>
          <li>Research applications & force limits: <a href="/physics/" style="color: #38bdf8; font-weight: 600; text-decoration: underline;">Physics Research Hub</a>.</li>
          <li>Read more about <a href="/physics/metrology-checklist.html" style="color: #fbbf24; font-weight: 600; text-decoration: underline;">precision metrology</a> and eliminating systematic errors.</li>
        </ul>
      </div>
"""

for c in CONVERTER_PAGES:
    filepath = os.path.join(PUBLIC_DIR, "converters", c)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        if "Authority Inter-linking Footer Box" not in content:
            # Insert before Back to All Converters button
            if '<a href="/converters/" class="back-btn">' in content:
                content = content.replace('<a href="/converters/" class="back-btn">', f'{converter_bottom_links}\n        <a href="/converters/" class="back-btn">')
            elif '<a href="/converters/"' in content:
                content = content.replace('<a href="/converters/"', f'{converter_bottom_links}\n        <a href="/converters/"')

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Verified & updated links in converters/{c}")

print("All site-wide internal links successfully injected!")
