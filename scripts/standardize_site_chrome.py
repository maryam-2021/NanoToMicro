# scripts/standardize_site_chrome.py
import os
import re

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"

HEADER_HTML = """  <!-- Site Header -->
  <header>
    <nav>
      <a href="/" class="logo">⚡ NanoToMicro</a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/converters/">Converters</a></li>
        <li><a href="/physics/">Physics Hub</a></li>
        <li><a href="/guides/">Guides</a></li>
      </ul>
      <input type="text" class="header-search" placeholder="Search..." onkeydown="if(event.key==='Enter') window.location.href='/physics/?q='+encodeURIComponent(this.value)" />
    </nav>
  </header>"""

FOOTER_HTML = """  <!-- Site Footer -->
  <footer>
    <div class="footer-grid">
      <div>
        <h4>Converters</h4>
        <a href="/converters/length.html">Length</a>
        <a href="/converters/mass.html">Mass</a>
        <a href="/converters/volume.html">Volume</a>
      </div>
      <div>
        <h4>Physics</h4>
        <a href="/physics/antigravity-definition.html">Antigravity</a>
        <a href="/physics/magnetic-levitation.html">Magnetic Levitation</a>
      </div>
      <div>
        <h4>Resources</h4>
        <a href="/guides/si-prefixes-guide.html">SI Prefixes</a>
        <a href="/blog/">Blog</a>
      </div>
    </div>
    <p class="copyright">© 2026 NanoToMicro.com - All Rights Reserved</p>
  </footer>"""

CHROME_CSS = """
    /* Standard Header & Footer Chrome Styling */
    header { background: rgba(11, 15, 25, 0.95); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border-subtle, rgba(255,255,255,0.08)); padding: 14px 24px; position: sticky; top: 0; z-index: 100; }
    header nav { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap; }
    header .logo { font-size: 20px; font-weight: 800; color: var(--accent-amber-light, #fbbf24); text-decoration: none; display: flex; align-items: center; gap: 8px; }
    header ul { display: flex; gap: 20px; list-style: none; align-items: center; margin: 0; padding: 0; }
    header ul li a { color: var(--text-secondary, #cbd5e1); text-decoration: none; font-size: 14px; font-weight: 600; transition: color 0.2s; }
    header ul li a:hover { color: var(--accent-amber-light, #fbbf24); }
    .header-search { background: #090d16; border: 1px solid var(--border-subtle, rgba(255,255,255,0.1)); border-radius: 8px; padding: 8px 14px; color: #fff; font-size: 13px; outline: none; width: 180px; }
    .header-search:focus { border-color: var(--accent-cyan, #38bdf8); }

    footer { border-top: 1px solid var(--border-subtle, rgba(255,255,255,0.08)); background: #080c14; padding: 48px 24px 24px; color: var(--text-muted, #94a3b8); font-size: 14px; margin-top: 60px; }
    .footer-grid { max-width: 1200px; margin: 0 auto 36px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; text-align: left; }
    .footer-grid h4 { color: #ffffff; font-size: 15px; font-weight: 700; margin-bottom: 14px; }
    .footer-grid a { display: block; color: var(--text-secondary, #cbd5e1); text-decoration: none; font-size: 13px; margin-bottom: 8px; transition: color 0.2s; }
    .footer-grid a:hover { color: var(--accent-amber-light, #fbbf24); }
    footer p.copyright { text-align: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 24px; font-size: 13px; margin: 0; }
"""

for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.endswith(".html"):
            filepath = os.path.join(root, f)
            with open(filepath, "r", encoding="utf-8") as fp:
                content = fp.read()

            # 1. Replace header
            content = re.sub(r'<header>.*?</header>', HEADER_HTML, content, flags=re.DOTALL)

            # 2. Replace footer
            content = re.sub(r'<footer>.*?</footer>', FOOTER_HTML, content, flags=re.DOTALL)

            # 3. Inject CSS
            if '/* Standard Header & Footer Chrome Styling */' not in content:
                content = content.replace('</style>', f'{CHROME_CSS}\n  </style>')

            with open(filepath, "w", encoding="utf-8") as fp:
                fp.write(content)
            
            print(f"Standardized header/footer in public/{f}")

print("Site chrome standardized successfully!")
