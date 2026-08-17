# scripts/create_legal_pages.py
import os

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"

pages = {
    "about.html": {
        "title": "About Us — NanoToMicro Precision Metric Metrology",
        "description": "Learn about the mission, precision metrology standards, and peer-reviewed educational goals behind NanoToMicro.com.",
        "canonical": "https://nanotomicro.com/about.html",
        "h1": "About NanoToMicro",
        "content": """
        <p><strong>NanoToMicro.com</strong> is dedicated to providing ultra-precise, zero-drift metric unit conversions and rigorous, evidence-based educational resources for researchers, engineers, students, and metrologists worldwide.</p>
        
        <h2>Our Mission</h2>
        <p>In modern scientific research, precision at micro and nano scales is paramount. Whether analyzing semiconductor fabrication node sizes (nanometers), biological cell structures (micrometers), or testing force anomalies in torsion balances (nano-Newtons to micro-Newtons), rounding errors and floating-point drift can lead to costly mistakes. NanoToMicro was developed to provide exact, IEEE-754 and arbitrary-precision conversion algorithms with instant visual feedback.</p>

        <h2>Evidence-Based Physics Curriculum</h2>
        <p>Beyond dimensional analysis calculators, we host a 22-guide comprehensive physics research curriculum covering gravitational metrology, Casimir force testing, magnetic levitation physics, and theoretical warp metrics.</p>

        <h2>Editorial and Metrological Standards</h2>
        <p>All formulas, ratios, and constants on NanoToMicro are aligned with the International Bureau of Weights and Measures (BIPM) SI Brochure 9th Edition and National Institute of Standards and Technology (NIST) Special Publication 330.</p>
        """
    },
    "contact.html": {
        "title": "Contact Us — NanoToMicro",
        "description": "Get in touch with the NanoToMicro editorial and technical metrology team for inquiries, feedback, or corrections.",
        "canonical": "https://nanotomicro.com/contact.html",
        "h1": "Contact the Metrology Team",
        "content": """
        <p>Have a question regarding our conversion algorithms, suggestions for new physical dimensions, or physics research feedback? We welcome contributions and peer-review feedback from the scientific and educational community.</p>
        
        <h2>General Inquiries & Feedback</h2>
        <p>For questions, feature requests, or technical bug reports, please email us directly:</p>
        <p><a href="mailto:contact@nanotomicro.com" style="color: var(--primary-teal); font-weight: 700; font-size: 1.1rem;">contact@nanotomicro.com</a></p>

        <h2>Research Contributions & Peer Review</h2>
        <p>If you represent an academic institution or metrology lab and wish to contribute or review articles in our Physics Hub, reach out to our editorial desk at <a href="mailto:research@nanotomicro.com" style="color: var(--primary-teal); font-weight: 700;">research@nanotomicro.com</a>.</p>
        """
    },
    "privacy.html": {
        "title": "Privacy Policy — NanoToMicro",
        "description": "Privacy policy for NanoToMicro.com detailing data protection, cookie usage, and zero personal data tracking commitments.",
        "canonical": "https://nanotomicro.com/privacy.html",
        "h1": "Privacy Policy",
        "content": """
        <p><em>Last Updated: January 2026</em></p>
        <p>At <strong>NanoToMicro.com</strong>, accessible from https://nanotomicro.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by NanoToMicro and how we use it.</p>
        
        <h2>Zero Personal Data Storage in Calculators</h2>
        <p>All calculations, prefix conversions, and dimensional evaluations performed on our interactive tools are computed entirely client-side inside your web browser. No conversion numbers, formulas, or scientific inputs are stored or transmitted to our servers.</p>

        <h2>Log Files</h2>
        <p>NanoToMicro follows a standard procedure of using log files through our CDN (Cloudflare). These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information.</p>

        <h2>Contact Us</h2>
        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:privacy@nanotomicro.com" style="color: var(--primary-teal);">privacy@nanotomicro.com</a>.</p>
        """
    },
    "terms.html": {
        "title": "Terms of Service — NanoToMicro",
        "description": "Terms of service and usage conditions for the NanoToMicro metric unit converters and educational physics guides.",
        "canonical": "https://nanotomicro.com/terms.html",
        "h1": "Terms of Service",
        "content": """
        <p><em>Last Updated: January 2026</em></p>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using <strong>NanoToMicro.com</strong>, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2>2. Educational and Reference Purpose</h2>
        <p>The calculators, dimensional conversion ratios, and physics research papers provided on NanoToMicro are designed for educational, informational, and general scientific reference. While every calculation is verified against SI BIPM standards, mission-critical engineering implementations should always be checked against official calibration instrumentation.</p>

        <h2>3. Intellectual Property</h2>
        <p>The code, custom SVG scale continuum diagrams, written physics analyses, and interface design are the intellectual property of NanoToMicro.com.</p>
        """
    },
    "cookies.html": {
        "title": "Cookie Policy — NanoToMicro",
        "description": "Information on cookie usage, technical storage, and privacy settings on NanoToMicro.com.",
        "canonical": "https://nanotomicro.com/cookies.html",
        "h1": "Cookie Policy",
        "content": """
        <p><em>Last Updated: January 2026</em></p>
        <h2>What Are Cookies</h2>
        <p>Cookies are tiny files that are downloaded to your computer to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.</p>

        <h2>How We Use Cookies</h2>
        <p>We use essential cookies purely for performance caching via our global Content Delivery Network and to remember local UI preferences (such as light/dark mode and active precision decimal places). We do not use third-party tracking or behavioral advertising cookies.</p>

        <h2>Disabling Cookies</h2>
        <p>You can prevent the setting of cookies by adjusting the settings on your browser. Disabling cookies will not impair your ability to use the conversion tools.</p>
        """
    }
}

TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content="{description}" />
  <link rel="canonical" href="{canonical}" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "{h1}",
    "description": "{description}",
    "url": "{canonical}"
  }}
  </script>

  <style>
    :root {{
      --primary-dark: #1a1a2e;
      --primary-teal: #4fc3f7;
      --primary-teal-hover: #039be5;
      --text-dark: #1a1a2e;
      --text-gray: #4a4a5a;
      --text-muted: #717182;
      --bg-white: #ffffff;
      --bg-light: #f8f9fc;
      --border-light: #e8ecf1;
      --max-width-main: 1280px;
      --max-width-narrow: 860px;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      color: var(--text-gray);
      background-color: var(--bg-white);
      line-height: 1.7;
      font-size: 1.05rem;
    }}
    .page-container {{
      max-width: var(--max-width-narrow);
      margin: 48px auto 80px;
      padding: 0 24px;
    }}
    .breadcrumbs {{
      display: flex;
      gap: 8px;
      align-items: center;
      font-size: 0.85rem;
      margin-bottom: 24px;
      color: var(--text-muted);
    }}
    .breadcrumbs a {{
      color: var(--primary-teal);
      text-decoration: none;
    }}
    .breadcrumbs a:hover {{ text-decoration: underline; }}
    h1 {{
      font-size: 2.5rem;
      color: var(--text-dark);
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 24px;
      line-height: 1.2;
    }}
    h2 {{
      font-size: 1.5rem;
      color: var(--text-dark);
      font-weight: 700;
      margin: 36px 0 12px;
    }}
    p {{
      margin-bottom: 18px;
    }}
    ul {{
      margin: 0 0 18px 24px;
    }}
    li {{
      margin-bottom: 8px;
    }}
  </style>
</head>
<body>

  <header class="site-header">
    <div class="header-container">
      <div class="logo-area">
        <a href="/" class="logo-link">
          <svg class="logo-icon" width="40" height="40" viewBox="0 0 40 40">
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

      <nav class="main-nav" aria-label="Main Navigation">
        <ul class="nav-list">
          <li><a href="/" class="nav-link">Home</a></li>
          <li><a href="/converters/" class="nav-link">Converters</a></li>
          <li><a href="/physics/" class="nav-link">Physics Hub</a></li>
          <li><a href="/guides/" class="nav-link">Guides</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="page-container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a> <span>›</span> <span>{h1}</span>
    </nav>

    <h1>{h1}</h1>

    <div class="content-body">
      {content}
    </div>
  </main>

  <footer class="site-footer">
    <!-- Will be standardized by apply_site_footer.py -->
  </footer>

</body>
</html>
"""

for filename, data in pages.items():
    outpath = os.path.join(PUBLIC_DIR, filename)
    rendered = TEMPLATE.format(
        title=data["title"],
        description=data["description"],
        canonical=data["canonical"],
        h1=data["h1"],
        content=data["content"]
    )
    with open(outpath, "w", encoding="utf-8") as f:
        f.write(rendered)
    print(f"Created {outpath}")

print("All legal and reference pages created successfully!")
