# scripts/apply_site_footer.py
import os
import re

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"

FOOTER_HTML = """<footer class="site-footer">
  <div class="footer-container">
    <!-- Footer Grid -->
    <div class="footer-grid">
      <!-- Brand Column -->
      <div class="footer-brand">
        <a href="/" class="footer-logo">
          <svg class="logo-icon" width="36" height="36" viewBox="0 0 40 40" aria-label="NanoToMicro logo icon">
            <rect width="40" height="40" rx="8" fill="url(#footerLogoGrad)"/>
            <text x="20" y="28" text-anchor="middle" fill="white" font-weight="700" font-size="20">nµ</text>
            <defs>
              <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#1a1a2e"/>
                <stop offset="100%" style="stop-color:#4fc3f7"/>
              </linearGradient>
            </defs>
          </svg>
          <span class="logo-text">Nano<span>To</span>Micro</span>
        </a>
        <p class="footer-description">
          The definitive reference for all nano ↔ micro conversions. 
          Precision metric conversions and evidence-based physics education.
        </p>
        <div class="footer-social">
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="GitHub">🐙</a>
          <a href="#" aria-label="YouTube">📺</a>
          <a href="#" aria-label="RSS">📡</a>
        </div>
      </div>

      <!-- Converters Column -->
      <div class="footer-column">
        <h4>Converters</h4>
        <ul>
          <li><a href="/converters/length.html">Length (nm → µm)</a></li>
          <li><a href="/converters/mass.html">Mass (ng → µg)</a></li>
          <li><a href="/converters/volume.html">Volume</a></li>
          <li><a href="/converters/time.html">Time</a></li>
          <li><a href="/converters/current.html">Current</a></li>
          <li><a href="/converters/charge.html">Charge</a></li>
        </ul>
      </div>

      <!-- Physics Column -->
      <div class="footer-column">
        <h4>Physics Hub</h4>
        <ul>
          <li><a href="/physics/antigravity-definition.html">What Is Antigravity?</a></li>
          <li><a href="/physics/gravitational-shielding.html">Gravitational Shielding</a></li>
          <li><a href="/physics/antimatter-gravity.html">Does Antimatter Fall Up?</a></li>
          <li><a href="/physics/negative-mass.html">Negative Mass</a></li>
          <li><a href="/physics/magnetic-levitation.html">Magnetic Levitation</a></li>
          <li><a href="/physics/metrology-checklist.html">Metrology Checklist</a></li>
        </ul>
      </div>

      <!-- Resources Column -->
      <div class="footer-column">
        <h4>Resources</h4>
        <ul>
          <li><a href="/guides/si-prefixes-guide.html">SI Prefixes Guide</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/contact.html">Contact</a></li>
          <li><a href="/sitemap.xml">Sitemap</a></li>
        </ul>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p>© 2026 NanoToMicro.com — Precision Metric Conversions & Physics Education</p>
      <div class="footer-legal">
        <a href="/privacy.html">Privacy</a>
        <span class="legal-separator">•</span>
        <a href="/terms.html">Terms</a>
        <span class="legal-separator">•</span>
        <a href="/cookies.html">Cookies</a>
      </div>
    </div>
  </div>
</footer>"""

FOOTER_CSS = """
    /* Footer Architecture */
    .site-footer {
      background: #1a1a2e;
      color: #cbd5e1;
      padding: 64px 0 32px;
      margin-top: 64px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 0.95rem;
    }
    .footer-container {
      max-width: var(--max-width-main, 1280px);
      margin: 0 auto;
      padding: 0 24px;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 48px 32px;
      margin-bottom: 48px;
    }
    .footer-logo {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      text-decoration: none !important;
      color: #ffffff !important;
      margin-bottom: 16px;
    }
    .footer-logo .logo-text {
      font-size: 1.35rem;
      font-weight: 700;
      color: #ffffff;
    }
    .footer-logo .logo-text span {
      color: #4fc3f7;
    }
    .footer-description {
      color: #94a3b8;
      font-size: 0.92rem;
      line-height: 1.6;
      margin-bottom: 20px;
      max-width: 340px;
    }
    .footer-social {
      display: flex;
      gap: 14px;
      font-size: 1.2rem;
    }
    .footer-social a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background: rgba(255, 255, 255, 0.06);
      border-radius: 8px;
      text-decoration: none !important;
      transition: all 0.2s ease;
    }
    .footer-social a:hover {
      background: #4fc3f7;
      transform: translateY(-2px);
    }
    .footer-column h4 {
      font-size: 1.05rem;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 18px 0;
      letter-spacing: -0.01em;
    }
    .footer-column ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .footer-column ul li a {
      color: #94a3b8 !important;
      text-decoration: none !important;
      font-size: 0.9rem;
      transition: color 0.2s ease;
    }
    .footer-column ul li a:hover {
      color: #4fc3f7 !important;
    }
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 0.88rem;
      color: #64748b;
    }
    .footer-bottom p {
      margin: 0;
    }
    .footer-legal {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .footer-legal a {
      color: #94a3b8 !important;
      text-decoration: none !important;
      transition: color 0.2s;
    }
    .footer-legal a:hover {
      color: #4fc3f7 !important;
    }
    .legal-separator {
      color: #475569;
    }
    @media (max-width: 960px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media (max-width: 600px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }
      .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
      }
    }
"""

count = 0
for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.endswith(".html"):
            filepath = os.path.join(root, f)
            with open(filepath, "r", encoding="utf-8") as fp:
                content = fp.read()

            # Replace footer
            if '<footer' in content:
                content = re.sub(r'<footer.*?</footer>', FOOTER_HTML, content, flags=re.DOTALL)
            else:
                content = content.replace('</body>', f'{FOOTER_HTML}\n</body>')

            # Inject CSS if not already present
            if '/* Footer Architecture */' not in content:
                content = content.replace('</style>', f'{FOOTER_CSS}\n  </style>')
            else:
                # Update existing
                content = re.sub(r'/\* Footer Architecture \*/.*?(?=</style>)', FOOTER_CSS.strip() + '\n  ', content, flags=re.DOTALL)

            with open(filepath, "w", encoding="utf-8") as fp:
                fp.write(content)
            count += 1

print(f"Applied site footer to {count} HTML pages in public/")
