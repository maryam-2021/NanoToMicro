# scripts/apply_brand_color_palette.py
import os
import re

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"

COMPLETE_DESIGN_SYSTEM = """
    :root {
      /* Primary Brand Palette */
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
      
      /* Layout Container Dimensions */
      --max-width-main: 1280px;      /* Main content */
      --max-width-narrow: 860px;     /* Article content */
      --max-width-full: 100vw;       /* Hero sections */

      /* Typography Fonts */
      --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-body: 'Inter', 'Segoe UI', Roboto, sans-serif;
      --font-mono: 'JetBrains Mono', 'Courier New', monospace;

      /* Font Weights */
      --fw-light: 300;               /* Rare */
      --fw-regular: 400;             /* Body copy */
      --fw-medium: 500;              /* Subheadings & navigation */
      --fw-semibold: 600;            /* Strong emphasis & card titles */
      --fw-bold: 700;                /* Headings H1-H4 */

      /* Precise Typographic Scale & Line Heights */
      --font-size-h1: 3.0rem;        /* 48px */
      --line-height-h1: 1.2;
      --font-size-h2: 2.25rem;       /* 36px */
      --line-height-h2: 1.3;
      --font-size-h3: 1.5rem;        /* 24px */
      --line-height-h3: 1.4;
      --font-size-h4: 1.25rem;       /* 20px */
      --line-height-h4: 1.5;
      --font-size-body: 1.125rem;    /* 18px */
      --line-height-body: 1.7;
      --font-size-small: 0.875rem;   /* 14px */
      --line-height-small: 1.5;
      --font-size-tiny: 0.75rem;     /* 12px */
      --line-height-tiny: 1.4;
    }

    body {
      font-family: var(--font-body);
      font-size: var(--font-size-body);
      line-height: var(--line-height-body);
      font-weight: var(--fw-regular);
      color: var(--text-gray);
      background-color: var(--bg-white, #ffffff);
      margin: 0;
      padding: 0;
    }

    /* Container Architecture */
    .container, .main-container, .wrapper, .main-nav, header, footer {
      max-width: var(--max-width-main);
      margin-left: auto;
      margin-right: auto;
    }

    main, article, .article-content, .narrow-container, .guide-content {
      max-width: var(--max-width-narrow);
      margin-left: auto;
      margin-right: auto;
    }

    .hero-full, .full-bleed {
      width: var(--max-width-full);
      max-width: 100vw;
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
    }

    h1 {
      font-family: var(--font-heading);
      font-size: var(--font-size-h1);
      line-height: var(--line-height-h1);
      font-weight: var(--fw-bold);
      color: var(--text-dark);
      letter-spacing: -0.02em;
    }

    h2 {
      font-family: var(--font-heading);
      font-size: var(--font-size-h2);
      line-height: var(--line-height-h2);
      font-weight: var(--fw-bold);
      color: var(--text-dark);
      letter-spacing: -0.015em;
    }

    h3 {
      font-family: var(--font-heading);
      font-size: var(--font-size-h3);
      line-height: var(--line-height-h3);
      font-weight: var(--fw-bold);
      color: var(--text-dark);
    }

    h4 {
      font-family: var(--font-heading);
      font-size: var(--font-size-h4);
      line-height: var(--line-height-h4);
      font-weight: var(--fw-bold);
      color: var(--text-dark);
    }

    .subheading, .subtitle, .section-subtitle, .lead {
      font-weight: var(--fw-medium);
      color: var(--text-muted);
    }

    strong, b, .strong, .emphasis, .gold-link, .nav-links a {
      font-weight: var(--fw-semibold);
    }

    p, li {
      font-size: var(--font-size-body);
      line-height: var(--line-height-body);
      font-weight: var(--fw-regular);
      color: var(--text-gray);
    }

    small, .small, .meta, .caption, figcaption {
      font-size: var(--font-size-small);
      line-height: var(--line-height-small);
      font-weight: var(--fw-regular);
    }

    .tiny, .badge, .tag, .cat-tag {
      font-size: var(--font-size-tiny);
      line-height: var(--line-height-tiny);
      font-weight: var(--fw-semibold);
    }

    code, pre, .formula-box, .math, kbd, samp {
      font-family: var(--font-mono);
    }

    @media (max-width: 768px) {
      :root {
        --font-size-h1: 2.25rem;
        --font-size-h2: 1.75rem;
        --font-size-h3: 1.25rem;
        --font-size-body: 1.0rem;
      }
    }
"""

print("Applying container layout rules (1280px main, 860px article, 100vw full)...")

count = 0
for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.endswith(".html"):
            filepath = os.path.join(root, f)
            with open(filepath, "r", encoding="utf-8") as fp:
                content = fp.read()

            if ':root' in content:
                content = re.sub(r':root\s*\{[^}]*\}', COMPLETE_DESIGN_SYSTEM.strip(), content, count=1)
            else:
                content = content.replace('<style>', f'<style>\n{COMPLETE_DESIGN_SYSTEM}')

            with open(filepath, "w", encoding="utf-8") as fp:
                fp.write(content)
            count += 1

print(f"Applied layout dimensions across {count} public pages!")
