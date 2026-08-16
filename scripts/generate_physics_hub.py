# scripts/generate_physics_hub.py
import os

PUBLIC_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public"
os.makedirs(os.path.join(PUBLIC_DIR, "physics"), exist_ok=True)

PAGE_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <!-- Meta Title & Description -->
  <title>Antigravity & Precision Physics Research Hub | NanoToMicro</title>
  <meta name="description" content="Explore peer-reviewed research on antigravity physics, CERN ALPHA-g antimatter gravity, gravitational shielding, negative mass warp metrics, and nano-Newton metrology." />

  <!-- Canonical -->
  <link rel="canonical" href="https://nanotomicro.com/physics/" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Nano to Micro" />
  <meta property="og:title" content="Antigravity & Precision Physics Research Hub | NanoToMicro" />
  <meta property="og:description" content="Explore peer-reviewed research on antigravity physics, CERN ALPHA-g antimatter gravity, gravitational shielding, negative mass warp metrics, and nano-Newton metrology." />
  <meta property="og:url" content="https://nanotomicro.com/physics/" />
  <meta property="og:image" content="https://nanotomicro.com/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Antigravity and Precision Physics Research Hub" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Antigravity & Precision Physics Research Hub | NanoToMicro" />
  <meta name="twitter:description" content="Explore peer-reviewed research on antigravity physics, CERN ALPHA-g antimatter gravity, gravitational shielding, negative mass warp metrics, and nano-Newton metrology." />
  <meta name="twitter:image" content="https://nanotomicro.com/og-image.png" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />

  <!-- Schema Markup: CollectionPage & BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nanotomicro.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Physics",
            "item": "https://nanotomicro.com/physics/"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "headline": "Physics Research Hub: Antigravity, Metrology & Exotic Matter",
        "description": "Explore peer-reviewed research on antigravity physics, CERN ALPHA-g antimatter gravity, gravitational shielding, negative mass warp metrics, and nano-Newton metrology.",
        "url": "https://nanotomicro.com/physics/",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "url": "https://nanotomicro.com/physics/antigravity-definition.html",
              "name": "What Is Antigravity? A Scientific Definition"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "url": "https://nanotomicro.com/physics/gravitational-shielding.html",
              "name": "Gravitational Shielding: Physics & Debunking Myths"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "url": "https://nanotomicro.com/physics/antimatter-gravity.html",
              "name": "Does Antimatter Fall Up? CERN ALPHA-g Explained"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "url": "https://nanotomicro.com/physics/negative-mass.html",
              "name": "Negative Mass & Exotic Matter: Bondi Equations & Warp Drives"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "url": "https://nanotomicro.com/physics/magnetic-levitation.html",
              "name": "Magnetic Levitation Physics: Earnshaw's Theorem & Applications"
            },
            {
              "@type": "ListItem",
              "position": 6,
              "url": "https://nanotomicro.com/physics/metrology-checklist.html",
              "name": "Evidence-Based Metrology: Precision Force Measurements"
            }
          ]
        }
      }
    ]
  }
  </script>

  <style>
    :root {
      --bg-primary: #0b0f19;
      --bg-secondary: #131c2e;
      --bg-card: rgba(19, 28, 46, 0.7);
      --border-color: rgba(245, 158, 11, 0.2);
      --border-subtle: rgba(255, 255, 255, 0.08);
      --text-primary: #f8fafc;
      --text-secondary: #cbd5e1;
      --text-muted: #94a3b8;
      --accent-amber: #f59e0b;
      --accent-amber-light: #fbbf24;
      --accent-cyan: #38bdf8;
      --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      font-family: var(--font-sans);
      line-height: 1.6;
    }

    header {
      background: rgba(11, 15, 25, 0.9);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-subtle);
      padding: 16px 24px;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 18px;
      font-weight: 800;
      color: var(--accent-amber-light);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .nav-links {
      display: flex;
      gap: 20px;
      align-items: center;
    }

    .nav-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      transition: color 0.2s;
    }

    .nav-links a:hover {
      color: var(--accent-amber-light);
    }

    .hub-layout {
      max-width: 1200px;
      margin: 40px auto 80px;
      padding: 0 24px;
    }

    .breadcrumb {
      font-size: 13px;
      color: var(--text-muted);
      margin-bottom: 24px;
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .breadcrumb a {
      color: var(--text-muted);
      text-decoration: none;
    }

    .breadcrumb a:hover {
      color: var(--accent-amber-light);
    }

    .pill {
      display: inline-block;
      background: rgba(245, 158, 11, 0.15);
      color: var(--accent-amber-light);
      border: 1px solid var(--border-color);
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    h1 {
      font-size: 36px;
      font-weight: 900;
      line-height: 1.2;
      margin-bottom: 16px;
      color: #ffffff;
    }

    p.lead {
      color: var(--text-secondary);
      font-size: 18px;
      max-width: 860px;
      margin-bottom: 30px;
    }

    /* Nanotech & Metrology Connection Banner */
    .metrology-banner {
      background: linear-gradient(135deg, rgba(30, 58, 138, 0.4) 0%, rgba(19, 28, 46, 0.8) 100%);
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: 16px;
      padding: 24px 30px;
      margin-bottom: 40px;
      display: flex;
      gap: 20px;
      align-items: center;
    }

    .banner-icon {
      font-size: 36px;
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid rgba(56, 189, 248, 0.3);
      width: 64px;
      height: 64px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .banner-content h3 {
      color: var(--accent-cyan);
      font-size: 18px;
      margin-bottom: 6px;
    }

    .banner-content p {
      color: var(--text-secondary);
      font-size: 14px;
      line-height: 1.5;
      margin: 0;
    }

    /* Search & Filter Bar */
    .search-filter-wrap {
      margin-bottom: 36px;
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .search-input-box {
      flex: 1;
      min-width: 280px;
      position: relative;
    }

    .search-input-box input {
      width: 100%;
      background: #090d16;
      border: 1px solid var(--border-color);
      padding: 14px 18px 14px 44px;
      border-radius: 10px;
      color: #ffffff;
      font-size: 15px;
      outline: none;
      transition: all 0.2s;
    }

    .search-input-box input:focus {
      border-color: var(--accent-cyan);
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
    }

    .search-icon {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
      color: var(--text-muted);
    }

    /* Featured Guide Hero Card */
    .featured-section {
      margin-bottom: 48px;
    }

    .section-title {
      font-size: 22px;
      font-weight: 800;
      color: var(--accent-amber-light);
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .featured-card {
      background: radial-gradient(circle at top right, rgba(245, 158, 11, 0.12) 0%, rgba(19, 28, 46, 0.9) 100%);
      border: 1px solid var(--accent-amber);
      border-radius: 16px;
      padding: 32px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 24px;
      align-items: center;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 800px) {
      .featured-card {
        grid-template-columns: 1fr;
      }
    }

    .featured-badge {
      display: inline-block;
      background: #f59e0b;
      color: #0b0f19;
      font-weight: 900;
      font-size: 11px;
      padding: 3px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 12px;
    }

    .featured-card h2 {
      font-size: 24px;
      color: #ffffff;
      margin-bottom: 12px;
    }

    .featured-card p {
      color: var(--text-secondary);
      font-size: 15px;
      margin-bottom: 20px;
      max-width: 650px;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--accent-amber);
      color: #0b0f19;
      font-weight: 800;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 14px;
      transition: all 0.2s;
    }

    .btn-primary:hover {
      background: var(--accent-amber-light);
      transform: translateY(-2px);
    }

    /* 6 Physics Guides Grid */
    .guides-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 24px;
      margin-bottom: 50px;
    }

    .guide-box {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.25s;
    }

    .guide-box:hover {
      border-color: var(--accent-amber);
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
      background: rgba(19, 28, 46, 0.95);
    }

    .guide-box-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 14px;
    }

    .guide-box-icon {
      font-size: 26px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-subtle);
      width: 48px;
      height: 48px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .guide-box h3 {
      font-size: 18px;
      color: #ffffff;
      font-weight: 800;
      line-height: 1.3;
    }

    .guide-box p {
      color: var(--text-secondary);
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 20px;
      flex-grow: 1;
    }

    .read-more-link {
      color: var(--accent-amber-light);
      text-decoration: none;
      font-weight: 700;
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: gap 0.2s;
    }

    .guide-box:hover .read-more-link {
      gap: 10px;
      color: #ffffff;
    }

    /* Latest Research Section */
    .research-updates {
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      padding: 28px;
      margin-bottom: 40px;
    }

    .update-item {
      display: flex;
      gap: 20px;
      padding: 16px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      align-items: flex-start;
    }

    .update-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .update-tag {
      background: rgba(56, 189, 248, 0.15);
      color: var(--accent-cyan);
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 6px;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .update-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 4px;
    }

    .update-desc {
      font-size: 13px;
      color: var(--text-muted);
      margin: 0;
    }

    footer {
      border-top: 1px solid var(--border-subtle);
      padding: 40px 24px;
      text-align: center;
      font-size: 14px;
      color: var(--text-muted);
    }
  </style>
</head>
<body>

  <!-- Site Header -->
  <header>
    <div class="nav-container">
      <a href="/" class="logo">⚡ Nano to Micro</a>
      <nav class="nav-links">
        <a href="/converters/">Converters</a>
        <a href="/guides/si-prefixes-guide.html">SI Prefixes</a>
        <a href="/conversion-charts/">Charts</a>
        <a href="/physics/">Physics Hub</a>
      </nav>
    </div>
  </header>

  <div class="hub-layout">
    
    <!-- Top Breadcrumb Navigation: Home > Physics -->
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span aria-hidden="true" style="opacity: 0.5;">/</span>
      <span aria-current="page">Physics</span>
    </nav>

    <div class="pill">Fundamental Physics & Metrology</div>
    <h1>Physics Research Hub: Antigravity, Metrology & Exotic Matter</h1>
    <p class="lead">
      A peer-reviewed scientific repository investigating gravitational anomalies, quantum vacuum physics, General Relativity constraints, and high-precision force metrology.
    </p>

    <!-- Metrology Connection Banner -->
    <div class="metrology-banner">
      <div class="banner-icon">🔬</div>
      <div class="banner-content">
        <h3>Bridging Fundamental Physics with Nano-to-Micro Metrology</h3>
        <p>
          Testing theoretical gravity anomalies, Casimir vacuum forces, and Equivalence Principle violations requires sub-micro-Newton (\(\\mu\\text{N}\)) balances and nanometer-scale (\(\\text{nm}\)) interferometry. NanoToMicro provides the exact conversion and calibration foundations necessary to distinguish authentic physical discoveries from environmental thermal and acoustic artifacts.
        </p>
      </div>
    </div>

    <!-- Topic Search Bar -->
    <div class="search-filter-wrap">
      <div class="search-input-box">
        <span class="search-icon">🔍</span>
        <input 
          type="text" 
          id="topicSearch" 
          placeholder="Search physics guides (e.g., CERN ALPHA-g, Podkletnov, Earnshaw, Bondi warp, error analysis)..." 
          oninput="filterPhysicsTopics()" 
        />
      </div>
    </div>

    <!-- Featured Guide Section -->
    <section class="featured-section">
      <div class="section-title">⭐ Featured Research Investigation</div>
      <div class="featured-card">
        <div>
          <span class="featured-badge">Landmark Experiment</span>
          <h2>The CERN ALPHA-g Experiment: Does Antimatter Fall Up?</h2>
          <p>
            Explore direct free-fall measurements of trapped neutral antihydrogen atoms at CERN's Antiproton Decelerator. Discover how the Weak Equivalence Principle and General Relativity rule out gravitational repulsion at greater than 5-sigma significance.
          </p>
          <a href="/physics/antimatter-gravity.html" class="btn-primary">
            <span>Read ALPHA-g Analysis & Calculator</span>
            <span>➔</span>
          </a>
        </div>
      </div>
    </section>

    <!-- 6 Physics Guides Grid -->
    <section>
      <div class="section-title">📚 Core Physics Guides & Theoretical Analyses</div>
      
      <div class="guides-grid" id="guidesGrid">
        
        <!-- Guide 1: Antigravity Definition -->
        <div class="guide-box" data-keywords="antigravity scientific definition general relativity forces four categories levitation">
          <div>
            <div class="guide-box-header">
              <div class="guide-box-icon">🌌</div>
              <h3>What Is Antigravity? A Scientific Definition</h3>
            </div>
            <p>
              A formal physics breakdown of antigravity into 4 operational categories and why true gravity cancellation requires altering gravitational mass rather than applying mechanical lift.
            </p>
          </div>
          <a href="/physics/antigravity-definition.html" class="read-more-link">
            <span>Read Scientific Definition</span>
            <span>→</span>
          </a>
        </div>

        <!-- Guide 2: Gravitational Shielding -->
        <div class="guide-box" data-keywords="gravitational shielding podkletnov rotating superconductor gauss law nasa msfc debunking">
          <div>
            <div class="guide-box-header">
              <div class="guide-box-icon">🛡️</div>
              <h3>Gravitational Shielding: Physics & Debunking Myths</h3>
            </div>
            <p>
              An analysis of Gauss's Law for gravity, testing Eugene Podkletnov's rotating superconductor claims, and reviewing NASA MSFC replication null results.
            </p>
          </div>
          <a href="/physics/gravitational-shielding.html" class="read-more-link">
            <span>Read Shielding Analysis</span>
            <span>→</span>
          </a>
        </div>

        <!-- Guide 3: Antimatter Gravity -->
        <div class="guide-box" data-keywords="antimatter gravity cern alpha-g antihydrogen weak equivalence principle does antimatter fall up">
          <div>
            <div class="guide-box-header">
              <div class="guide-box-icon">⚛️</div>
              <h3>Does Antimatter Fall Up? CERN ALPHA-g Explained</h3>
            </div>
            <p>
              Direct free-fall measurements of antihydrogen atoms at CERN, testing the Weak Equivalence Principle and General Relativity with direct experimental data.
            </p>
          </div>
          <a href="/physics/antimatter-gravity.html" class="read-more-link">
            <span>Read CERN Results & F=mg Calc</span>
            <span>→</span>
          </a>
        </div>

        <!-- Guide 4: Negative Mass & Warp -->
        <div class="guide-box" data-keywords="negative mass exotic matter bondi runaway motion alcubierre warp drive null energy conditions nec">
          <div>
            <div class="guide-box-header">
              <div class="guide-box-icon">🚀</div>
              <h3>Negative Mass & Exotic Matter: Bondi Equations & Warp Drives</h3>
            </div>
            <p>
              Relativistic analysis of Hermann Bondi's runaway motion paradox, Alcubierre warp drive spacetime metrics, and Null Energy Condition (NEC) violations.
            </p>
          </div>
          <a href="/physics/negative-mass.html" class="read-more-link">
            <span>Explore Warp Mechanics & Calc</span>
            <span>→</span>
          </a>
        </div>

        <!-- Guide 5: Magnetic Levitation -->
        <div class="guide-box" data-keywords="magnetic levitation earnshaw theorem diamagnetism superconductivity meissner flux pinning maglev train">
          <div>
            <div class="guide-box-header">
              <div class="guide-box-icon">🧲</div>
              <h3>Magnetic Levitation Physics: Earnshaw's Theorem & Applications</h3>
            </div>
            <p>
              How diamagnetism, quantum flux pinning in Type-II superconductors, and active feedback bypass Earnshaw's theorem to achieve stable levitation.
            </p>
          </div>
          <a href="/physics/magnetic-levitation.html" class="read-more-link">
            <span>Explore Maglev & Quantum Video</span>
            <span>→</span>
          </a>
        </div>

        <!-- Guide 6: Metrology Checklist -->
        <div class="guide-box" data-keywords="metrology checklist force measurements nano-newton micro-newton error analysis thermal expansion lorentz vibration torsion balance">
          <div>
            <div class="guide-box-header">
              <div class="guide-box-icon">📋</div>
              <h3>Precision Metrology Checklist: Nano-Newton Force Measurements</h3>
            </div>
            <p>
              A laboratory checklist and error source matrix for eliminating thermal expansion, Lorentz forces, and acoustic artifacts in sub-micro-Newton experiments.
            </p>
          </div>
          <a href="/physics/metrology-checklist.html" class="read-more-link">
            <span>View Laboratory Checklist & Log</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>

    <!-- Latest Research Updates Section -->
    <section class="research-updates">
      <div class="section-title" style="font-size: 20px;">🔬 Latest Research & Theoretical Developments</div>
      
      <div class="update-item">
        <span class="update-tag">2026 BENCHMARK</span>
        <div>
          <div class="update-title">ALPHA-g & GBAR Sub-1% Gravitational Acceleration Runs</div>
          <p class="update-desc">
            Ongoing magnetic trap and interferometry runs at CERN's ELENA facility aim to constrain antimatter gravitational acceleration down to 1% and 0.1% precision benchmarks.
          </p>
        </div>
      </div>

      <div class="update-item">
        <span class="update-tag">EQUIVALENCE TEST</span>
        <div>
          <div class="update-title">MICROSCOPE Satellite Final Eötvös Parameter: η &lt; 10⁻¹⁵</div>
          <p class="update-desc">
            Space-based differential accelerometer measurements confirm the Weak Equivalence Principle between titanium and platinum-rhodium test masses to 15 decimal places.
          </p>
        </div>
      </div>

      <div class="update-item">
        <span class="update-tag">QUANTUM VACUUM</span>
        <div>
          <div class="update-title">Nanoscale Casimir Force & Dynamic Vacuum Metrology</div>
          <p class="update-desc">
            Advances in atomic force microscopy and micro-electromechanical systems (MEMS) enable direct measurement of zero-point vacuum boundary forces at sub-100 nanometer gaps.
          </p>
        </div>
      </div>
    </section>

  </div>

  <!-- Search Filter Script -->
  <script>
    function filterPhysicsTopics() {
      const query = document.getElementById('topicSearch').value.toLowerCase();
      const cards = document.querySelectorAll('#guidesGrid .guide-box');
      
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const keywords = card.getAttribute('data-keywords') || '';
        if (text.includes(query) || keywords.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
  </script>

  <!-- Site Footer -->
  <footer>
    <p>© 2026 Nano to Micro. Precision SI Conversions & Peer-Reviewed Physical Metrology.</p>
    <p style="margin-top: 8px; font-size: 12px; color: #64748b;">NIST & BIPM Compliant · Zero Floating-Point Drift</p>
  </footer>

</body>
</html>
"""

with open(os.path.join(PUBLIC_DIR, "physics", "index.html"), "w", encoding="utf-8") as f:
    f.write(PAGE_HTML)

print("Generated Physics Hub landing page successfully!")
