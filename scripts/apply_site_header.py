# scripts/apply_site_header.py
import os
import re

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"

HEADER_HTML = """<header class="site-header">
  <div class="header-container">
    <!-- Logo Area -->
    <div class="logo-area">
      <a href="/" class="logo-link">
        <svg class="logo-icon" width="40" height="40" viewBox="0 0 40 40" aria-label="NanoToMicro logo icon">
          <rect width="40" height="40" rx="8" fill="url(#logoGradient)"/>
          <text x="20" y="28" text-anchor="middle" fill="white" font-weight="700" font-size="20">nµ</text>
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#1a1a2e"/>
              <stop offset="100%" style="stop-color:#4fc3f7"/>
            </linearGradient>
          </defs>
        </svg>
        <span class="logo-text">Nano<span>To</span>Micro</span>
      </a>
      <span class="logo-tagline">Precision Metric Conversions</span>
    </div>

    <!-- Main Navigation -->
    <nav class="main-nav" aria-label="Main Navigation">
      <ul class="nav-list">
        <li><a href="/" class="nav-link">Home</a></li>
        <li class="nav-dropdown">
          <a href="/converters/" class="nav-link">Converters <span class="dropdown-arrow">▾</span></a>
          <ul class="dropdown-menu">
            <li><a href="/converters/length.html">Length (nm → µm)</a></li>
            <li><a href="/converters/mass.html">Mass (ng → µg)</a></li>
            <li><a href="/converters/volume.html">Volume</a></li>
            <li><a href="/converters/time.html">Time</a></li>
            <li><a href="/converters/current.html">Current</a></li>
            <li><a href="/converters/charge.html">Charge</a></li>
          </ul>
        </li>
        <li><a href="/physics/" class="nav-link">Physics Hub</a></li>
        <li><a href="/guides/" class="nav-link">Guides</a></li>
      </ul>
    </nav>

    <!-- Right Side Actions -->
    <div class="header-actions">
      <button class="search-toggle" aria-label="Search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </button>
      <button class="theme-toggle" aria-label="Toggle dark mode">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      </button>
    </div>

    <!-- Mobile Hamburger -->
    <button class="mobile-menu-toggle" aria-label="Toggle menu" onclick="document.querySelector('.main-nav').classList.toggle('is-open')">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>"""

HEADER_CSS = """
    /* Header Architecture */
    .site-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #e8ecf1;
      box-shadow: 0 2px 12px rgba(26, 26, 46, 0.06);
    }
    .header-container {
      max-width: var(--max-width-main, 1280px);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding: 10px 20px;
    }
    .logo-area {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .logo-link {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none !important;
      color: #1a1a2e !important;
    }
    .logo-text {
      font-size: 1.35rem;
      font-weight: 700;
      color: #1a1a2e;
      letter-spacing: -0.02em;
    }
    .logo-text span {
      color: #4fc3f7;
    }
    .logo-tagline {
      font-size: 0.72rem;
      color: #717182;
      font-weight: 500;
    }
    .main-nav {
      display: flex;
      align-items: center;
    }
    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 8px;
      align-items: center;
    }
    .nav-link {
      position: relative;
      padding: 8px 16px;
      color: #4a4a5a !important;
      font-weight: 500;
      text-decoration: none !important;
      font-size: 0.95rem;
      transition: color 0.2s;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 16px;
      right: 16px;
      height: 2px;
      background: #4fc3f7;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    .nav-link:hover::after,
    .nav-link.active::after {
      transform: scaleX(1);
    }
    .nav-link:hover {
      color: #1a1a2e !important;
    }
    .nav-dropdown {
      position: relative;
    }
    .dropdown-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: #ffffff;
      border: 1px solid #e8ecf1;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(26, 26, 46, 0.08);
      list-style: none;
      padding: 8px 0;
      margin: 8px 0 0 0;
      min-width: 190px;
      z-index: 100;
    }
    .nav-dropdown:hover .dropdown-menu {
      display: block;
    }
    .dropdown-menu li a {
      display: block;
      padding: 8px 16px;
      color: #4a4a5a !important;
      text-decoration: none !important;
      font-size: 0.88rem;
      transition: background 0.15s ease, color 0.15s ease;
    }
    .dropdown-menu li a:hover {
      background: #f8f9fc;
      color: #1a1a2e !important;
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .search-toggle, .theme-toggle {
      background: #ffffff;
      border: 1px solid #e8ecf1;
      border-radius: 6px;
      color: #4a4a5a;
      padding: 6px 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
    }
    .search-toggle:hover, .theme-toggle:hover {
      border-color: #4fc3f7;
      color: #1a1a2e;
    }
    .mobile-menu-toggle {
      display: none;
      flex-direction: column;
      gap: 4px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
    }
    .mobile-menu-toggle span {
      display: block;
      width: 22px;
      height: 2px;
      background: #1a1a2e;
      border-radius: 2px;
    }

    @media (max-width: 860px) {
      .mobile-menu-toggle { display: flex; }
      .header-actions { display: none; }
      .main-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #ffffff;
        border-top: 1px solid #e8ecf1;
        box-shadow: 0 4px 12px rgba(26, 26, 46, 0.08);
        padding: 16px 20px;
      }
      .main-nav.is-open { display: block; }
      .nav-list { flex-direction: column; align-items: flex-start; gap: 8px; }
      .nav-link { width: 100%; padding: 8px 0; }
      .nav-link::after { left: 0; right: 0; }
      .dropdown-menu { position: static; box-shadow: none; border: none; padding-left: 12px; }
      .nav-dropdown:hover .dropdown-menu { display: block; }
    }
"""

print("Applying translucent light sticky header & animated nav link underlines...")

count = 0
for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.endswith(".html"):
            filepath = os.path.join(root, f)
            with open(filepath, "r", encoding="utf-8") as fp:
                content = fp.read()

            # Replace CSS block for header
            if '/* Header Architecture */' in content:
                content = re.sub(r'/\* Header Architecture \*/[\s\S]*?(?=\n\s*(?:/\*|</style>))', HEADER_CSS.strip(), content, count=1)
            elif '</style>' in content:
                content = content.replace('</style>', f'{HEADER_CSS}\n</style>')

            # Replace old nav or header
            if '<header class="site-header">' not in content:
                if '<header' in content:
                    content = re.sub(r'<header[^>]*>[\s\S]*?</header>', HEADER_HTML, content, count=1)
                elif '<nav class="main-nav">' in content:
                    content = re.sub(r'<nav class="main-nav">[\s\S]*?</nav>', HEADER_HTML, content, count=1)
                elif '<body>' in content:
                    content = content.replace('<body>', f'<body>\n{HEADER_HTML}')

            with open(filepath, "w", encoding="utf-8") as fp:
                fp.write(content)
            count += 1

print(f"Header styles updated across {count} public pages!")
