# scripts/build_public_pages.py
import os
from create_public_structure import PUBLIC_DIR, make_page

os.makedirs(os.path.join(PUBLIC_DIR, "converters"), exist_ok=True)
os.makedirs(os.path.join(PUBLIC_DIR, "physics"), exist_ok=True)
os.makedirs(os.path.join(PUBLIC_DIR, "guides"), exist_ok=True)
os.makedirs(os.path.join(PUBLIC_DIR, "blog"), exist_ok=True)

# 1. /public/converters/index.html
c_index_html = make_page(
    title="Metric Unit Converters Index — Length, Mass, Volume, Time & Charge",
    meta_desc="Complete directory of high-precision nanoscale to microscale metric calculators across length, mass, volume, time, current, charge, and concentration.",
    breadcrumb_items=[("Home", "/"), ("Converters", None)],
    content_html="""
    <div class="pill">Metric Tools Index</div>
    <h1>Metric Unit Converters Directory</h1>
    <p>Explore dedicated scientific calculators and conversion tables for all primary physical metric domains. Every tool provides exact formulas, step-by-step math, and zero floating-point drift.</p>
    
    <div class="tag-grid">
      <a href="/converters/length.html" class="tag-card">
        <h4>📏 Length</h4>
        <p>Nanometers, Micrometers, Picometers, Millimeters, Meters</p>
      </a>
      <a href="/converters/mass.html" class="tag-card">
        <h4>⚖️ Mass</h4>
        <p>Nanograms, Micrograms, Milligrams, Grams, Kilograms</p>
      </a>
      <a href="/converters/volume.html" class="tag-card">
        <h4>🧪 Volume</h4>
        <p>Nanoliters, Microliters, Milliliters, Liters</p>
      </a>
      <a href="/converters/time.html" class="tag-card">
        <h4>⏱️ Time</h4>
        <p>Nanoseconds, Microseconds, Milliseconds, Seconds</p>
      </a>
      <a href="/converters/current.html" class="tag-card">
        <h4>⚡ Current</h4>
        <p>Nanoamperes, Microamperes, Milliamperes, Amperes</p>
      </a>
      <a href="/converters/charge.html" class="tag-card">
        <h4>🔋 Charge</h4>
        <p>Nanocoulombs, Microcoulombs, Millicoulombs, Coulombs</p>
      </a>
      <a href="/converters/concentration.html" class="tag-card">
        <h4>🧬 Concentration</h4>
        <p>Nanomolar, Micromolar, Millimolar, Molar</p>
      </a>
      <a href="/convert/nano-to-micro/" class="tag-card">
        <h4>⚡ Nano to Micro</h4>
        <p>Main Interactive n ↔ µ Converter</p>
      </a>
    </div>
    """
)
with open(os.path.join(PUBLIC_DIR, "converters", "index.html"), "w", encoding="utf-8") as f:
    f.write(c_index_html)

# 2. /public/converters/length.html
c_length_html = make_page(
    title="Nanometers to Micrometers Length Conversion Guide",
    meta_desc="Convert nanometers (nm) to micrometers (µm) with exact formulas, reference tables, and physical scale comparisons across semiconductors, optics, and cell biology.",
    breadcrumb_items=[("Home", "/"), ("Converters", "/converters/"), ("Length", None)],
    content_html="""
    <div class="pill">Length Domain</div>
    <h1>Nanometers to Micrometers (nm to µm) Length Conversion</h1>
    <p>In the International System of Units (SI), length at the nanoscale ($10^{-9}\\text{ m}$) and microscale ($10^{-6}\\text{ m}$) represents the boundary between atomic physics, semiconductor lithography, and cellular biology.</p>
    
    <div class="panel panel-highlight">
      <h2>Conversion Formula</h2>
      <div class="formula-box">µm = nm ÷ 1,000 &nbsp;|&nbsp; µm = nm × 0.001</div>
      <div class="formula-box">nm = µm × 1,000</div>
      <p>Because $1\\text{ µm} = 10^{-6}\\text{ m}$ and $1\\text{ nm} = 10^{-9}\\text{ m}$, one micrometer contains exactly 1,000 nanometers.</p>
    </div>

    <h2>Length Conversion Reference Matrix</h2>
    <table>
      <thead>
        <tr><th>Nanometers (nm)</th><th>Micrometers (µm)</th><th>Millimeters (mm)</th><th>Physical Reference Benchmark</th></tr>
      </thead>
      <tbody>
        <tr><td>0.1 nm</td><td>0.0001 µm</td><td>0.0000001 mm</td><td>Single Hydrogen Atom Diameter</td></tr>
        <tr><td>2.5 nm</td><td>0.0025 µm</td><td>0.0000025 mm</td><td>DNA Double Helix Width</td></tr>
        <tr><td>50 nm</td><td>0.05 µm</td><td>0.00005 mm</td><td>Typical Virus Capsid Diameter</td></tr>
        <tr><td>500 nm</td><td>0.5 µm</td><td>0.0005 mm</td><td>Visible Light Wavelength (Cyan-Green)</td></tr>
        <tr><td>1,000 nm</td><td>1.0 µm</td><td>0.001 mm</td><td>Standard E. coli Bacterium Length</td></tr>
        <tr><td>7,000 nm</td><td>7.0 µm</td><td>0.007 mm</td><td>Human Red Blood Cell (Erythrocyte)</td></tr>
        <tr><td>80,000 nm</td><td>80.0 µm</td><td>0.08 mm</td><td>Human Hair Width</td></tr>
      </tbody>
    </table>

    <p><a href="/convert/nano-to-micro/">Launch Interactive Nanometer to Micrometer Calculator →</a></p>
    """
)
with open(os.path.join(PUBLIC_DIR, "converters", "length.html"), "w", encoding="utf-8") as f:
    f.write(c_length_html)

# 3. /public/converters/mass.html
c_mass_html = make_page(
    title="Nanograms to Micrograms Mass Conversion Guide",
    meta_desc="Convert nanograms (ng) to micrograms (µg) instantly. Exact mathematical formulas, laboratory pipetting tables, and pharmaceutical dosage standards.",
    breadcrumb_items=[("Home", "/"), ("Converters", "/converters/"), ("Mass", None)],
    content_html="""
    <div class="pill">Mass Domain</div>
    <h1>Nanograms to Micrograms (ng to µg) Mass Conversion</h1>
    <p>Precision mass metrology at the microgram and nanogram levels is essential in pharmacology, molecular biochemistry, analytical chemistry, and gravitational force calibration.</p>
    
    <div class="panel panel-highlight">
      <h2>Conversion Formula</h2>
      <div class="formula-box">µg = ng ÷ 1,000 &nbsp;|&nbsp; µg = ng × 0.001</div>
      <div class="formula-box">ng = µg × 1,000</div>
    </div>

    <h2>Mass Conversion Lookup Table</h2>
    <table>
      <thead>
        <tr><th>Nanograms (ng)</th><th>Micrograms (µg)</th><th>Milligrams (mg)</th><th>Application Field</th></tr>
      </thead>
      <tbody>
        <tr><td>1 ng</td><td>0.001 µg</td><td>0.000001 mg</td><td>Mass of Single Mammalian Cell DNA</td></tr>
        <tr><td>100 ng</td><td>0.1 µg</td><td>0.0001 mg</td><td>PCR Amplification Threshold</td></tr>
        <tr><td>1,000 ng</td><td>1.0 µg</td><td>0.001 mg</td><td>Target Therapeutic Protein Dose</td></tr>
        <tr><td>25,000 ng</td><td>25.0 µg</td><td>0.025 mg</td><td>Microgram Vaccine Antigen Mass</td></tr>
      </tbody>
    </table>

    <p><a href="/convert/nanograms-to-micrograms/">Launch Dedicated Nanograms to Micrograms Calculator →</a></p>
    """
)
with open(os.path.join(PUBLIC_DIR, "converters", "mass.html"), "w", encoding="utf-8") as f:
    f.write(c_mass_html)

# 4. /public/converters/volume.html
c_volume_html = make_page(
    title="Nanoliters to Microliters Volume Conversion Guide",
    meta_desc="Convert nanoliters (nL) to microliters (µL) with exact liquid volume formulas, microfluidic scaling tables, and laboratory pipetting guides.",
    breadcrumb_items=[("Home", "/"), ("Converters", "/converters/"), ("Volume", None)],
    content_html="""
    <div class="pill">Volume Domain</div>
    <h1>Nanoliters to Microliters (nL to µL) Volume Conversion</h1>
    <p>Nanoliter and microliter liquid handling is the foundational standard for microfluidics, high-throughput drug screening, automated acoustic dispensing, and robotic liquid handlers.</p>
    
    <div class="panel panel-highlight">
      <h2>Conversion Formula</h2>
      <div class="formula-box">µL = nL ÷ 1,000 &nbsp;|&nbsp; µL = nL × 0.001</div>
      <div class="formula-box">nL = µL × 1,000</div>
    </div>

    <h2>Volume Standards in Microfluidics</h2>
    <table>
      <thead>
        <tr><th>Nanoliters (nL)</th><th>Microliters (µL)</th><th>Milliliters (mL)</th><th>Lab Technique</th></tr>
      </thead>
      <tbody>
        <tr><td>2.5 nL</td><td>0.0025 µL</td><td>0.0000025 mL</td><td>Acoustic Droplet Ejection</td></tr>
        <tr><td>100 nL</td><td>0.1 µg</td><td>0.0001 mL</td><td>Microfluidic Channel Flow</td></tr>
        <tr><td>1,000 nL</td><td>1.0 µL</td><td>0.001 mL</td><td>Standard P2 Micropipette Minimum</td></tr>
        <tr><td>10,000 nL</td><td>10.0 µL</td><td>0.01 mL</td><td>Standard PCR Reaction Volume</td></tr>
      </tbody>
    </table>
    """
)
with open(os.path.join(PUBLIC_DIR, "converters", "volume.html"), "w", encoding="utf-8") as f:
    f.write(c_volume_html)

# 5. /public/converters/time.html
c_time_html = make_page(
    title="Nanoseconds to Microseconds Time Conversion Guide",
    meta_desc="Convert nanoseconds (ns) to microseconds (µs). Precise formulas, CPU clock cycle comparisons, and latency hierarchies for high-frequency computing.",
    breadcrumb_items=[("Home", "/"), ("Converters", "/converters/"), ("Time", None)],
    content_html="""
    <div class="pill">Time Domain</div>
    <h1>Nanoseconds to Microseconds (ns to µs) Time Conversion</h1>
    <p>In computer architecture, telecommunications, and quantum electrodynamics, nanoseconds ($10^{-9}\\text{ s}$) and microseconds ($10^{-6}\\text{ s}$) determine computing performance and latency bounds.</p>
    
    <div class="panel panel-highlight">
      <h2>Conversion Formula</h2>
      <div class="formula-box">µs = ns ÷ 1,000 &nbsp;|&nbsp; µs = ns × 0.001</div>
      <div class="formula-box">ns = µs × 1,000</div>
    </div>

    <h2>Computing Latency Hierarchy</h2>
    <table>
      <thead>
        <tr><th>Time Unit</th><th>Microseconds (µs)</th><th>Physical Computing Event</th></tr>
      </thead>
      <tbody>
        <tr><td>0.25 ns</td><td>0.00025 µs</td><td>1 Clock Cycle at 4.0 GHz CPU</td></tr>
        <tr><td>1.0 ns</td><td>0.001 µs</td><td>Light travels ~30 cm in vacuum / L1 Cache Access</td></tr>
        <tr><td>100 ns</td><td>0.1 µs</td><td>Main DRAM Memory Access Latency</td></tr>
        <tr><td>1,000 ns</td><td>1.0 µs</td><td>NVMe SSD Read Latency</td></tr>
        <tr><td>10,000 ns</td><td>10.0 µs</td><td>OS Kernel Context Switch Overhead</td></tr>
      </tbody>
    </table>

    <p><a href="/convert/nanoseconds-to-microseconds/">Launch Interactive Nanoseconds to Microseconds Converter →</a></p>
    """
)
with open(os.path.join(PUBLIC_DIR, "converters", "time.html"), "w", encoding="utf-8") as f:
    f.write(c_time_html)

# 6. /public/converters/current.html
c_current_html = make_page(
    title="Nanoamperes to Microamperes Current Conversion Guide",
    meta_desc="Convert nanoamperes (nA) to microamperes (µA) with exact formulas, electrical sensor current tables, and semiconductor leakage specifications.",
    breadcrumb_items=[("Home", "/"), ("Converters", "/converters/"), ("Current", None)],
    content_html="""
    <div class="pill">Current Domain</div>
    <h1>Nanoamperes to Microamperes (nA to µA) Current Conversion</h1>
    <p>Sub-microampere currents govern electrochemical biosensors, semiconductor gate oxide leakage, and ultra-low-power IoT microcontroller sleep states.</p>
    
    <div class="panel panel-highlight">
      <h2>Conversion Formula</h2>
      <div class="formula-box">µA = nA ÷ 1,000 &nbsp;|&nbsp; µA = nA × 0.001</div>
      <div class="formula-box">nA = µA × 1,000</div>
    </div>

    <h2>Electric Current Scaling Table</h2>
    <table>
      <thead>
        <tr><th>Nanoamperes (nA)</th><th>Microamperes (µA)</th><th>Milliamperes (mA)</th><th>Electrical System</th></tr>
      </thead>
      <tbody>
        <tr><td>1 nA</td><td>0.001 µA</td><td>0.000001 mA</td><td>Gate Dielectric Leakage</td></tr>
        <tr><td>50 nA</td><td>0.05 µA</td><td>0.00005 mA</td><td>Patch-Clamp Ion Channel Recording</td></tr>
        <tr><td>1,000 nA</td><td>1.0 µA</td><td>0.001 mA</td><td>Photodiode Dark Current Threshold</td></tr>
        <tr><td>100,000 nA</td><td>100.0 µA</td><td>0.1 mA</td><td>Microcontroller Sleep Current</td></tr>
      </tbody>
    </table>
    """
)
with open(os.path.join(PUBLIC_DIR, "converters", "current.html"), "w", encoding="utf-8") as f:
    f.write(c_current_html)

# 7. /public/converters/charge.html
c_charge_html = make_page(
    title="Nanocoulombs to Microcoulombs Charge Conversion Guide",
    meta_desc="Convert nanocoulombs (nC) to microcoulombs (µC). Electric charge calculations, electrostatic formulas, and capacitor charging models.",
    breadcrumb_items=[("Home", "/"), ("Converters", "/converters/"), ("Charge", None)],
    content_html="""
    <div class="pill">Charge Domain</div>
    <h1>Nanocoulombs to Microcoulombs (nC to µC) Charge Conversion</h1>
    <p>Electric charge ($Q = C \\times V$) at the micro- and nanoscale determines electrostatic force, gate charge in power MOSFETs, and particle ionization dynamics.</p>
    
    <div class="panel panel-highlight">
      <h2>Conversion Formula</h2>
      <div class="formula-box">µC = nC ÷ 1,000 &nbsp;|&nbsp; µC = nC × 0.001</div>
      <div class="formula-box">nC = µC × 1,000</div>
    </div>

    <h2>Electrostatic Charge Reference Table</h2>
    <table>
      <thead>
        <tr><th>Nanocoulombs (nC)</th><th>Microcoulombs (µC)</th><th>Elementary Charges ($e$)</th><th>Physical System</th></tr>
      </thead>
      <tbody>
        <tr><td>0.16 nC</td><td>0.00016 µC</td><td>$10^9$ electrons</td><td>Small Electrostatic Charge</td></tr>
        <tr><td>10 nC</td><td>0.01 µC</td><td>$6.24 \\times 10^{10}$ electrons</td><td>MOSFET Gate Turn-On Charge</td></tr>
        <tr><td>1,000 nC</td><td>1.0 µC</td><td>$6.24 \\times 10^{12}$ electrons</td><td>ESD Static Shock Discharge</td></tr>
      </tbody>
    </table>
    """
)
with open(os.path.join(PUBLIC_DIR, "converters", "charge.html"), "w", encoding="utf-8") as f:
    f.write(c_charge_html)

# 8. /public/converters/concentration.html
c_conc_html = make_page(
    title="Nanomolar to Micromolar Concentration Conversion Guide",
    meta_desc="Convert nanomolar (nM) to micromolar (µM) chemical concentration. Biochemical binding affinity tables, dissociation constants, and molarity calculations.",
    breadcrumb_items=[("Home", "/"), ("Converters", "/converters/"), ("Concentration", None)],
    content_html="""
    <div class="pill">Concentration Domain</div>
    <h1>Nanomolar to Micromolar (nM to µM) Concentration Conversion</h1>
    <p>In pharmacology, biochemistry, and receptor-ligand binding kinetics, nanomolar ($10^{-9}\\text{ M}$) and micromolar ($10^{-6}\\text{ M}$) concentrations quantify drug affinity ($K_d, IC_{50}$) and enzyme saturation.</p>
    
    <div class="panel panel-highlight">
      <h2>Conversion Formula</h2>
      <div class="formula-box">µM = nM ÷ 1,000 &nbsp;|&nbsp; µM = nM × 0.001</div>
      <div class="formula-box">nM = µM × 1,000</div>
    </div>

    <h2>Biochemical Affinity Ranges</h2>
    <table>
      <thead>
        <tr><th>Nanomolar (nM)</th><th>Micromolar (µM)</th><th>Affinity Classification ($K_d$)</th><th>Biological Example</th></tr>
      </thead>
      <tbody>
        <tr><td>0.1–10 nM</td><td>0.0001–0.01 µM</td><td>High Affinity (Picomolar–Low Nanomolar)</td><td>Monoclonal Antibody Binding</td></tr>
        <tr><td>10–500 nM</td><td>0.01–0.5 µM</td><td>Moderate High Affinity</td><td>Target Drug Receptor Antagonist</td></tr>
        <tr><td>1,000 nM</td><td>1.0 µM</td><td>Moderate Affinity ($1\\text{ µM}$ Threshold)</td><td>Enzyme-Substrate Complex</td></tr>
        <tr><td>10,000+ nM</td><td>10.0+ µM</td><td>Weak Affinity</td><td>Non-specific Protein Association</td></tr>
      </tbody>
    </table>

    <p><a href="/convert/nanomolar-to-micromolar/">Launch Dedicated Nanomolar to Micromolar Calculator →</a></p>
    """
)
with open(os.path.join(PUBLIC_DIR, "converters", "concentration.html"), "w", encoding="utf-8") as f:
    f.write(c_conc_html)

# ----------------- PHYSICS HUB -----------------

# 9. /public/physics/index.html
p_index_html = make_page(
    title="Antigravity & Precision Physics Hub — Educational Curriculum",
    meta_desc="Explore our 22-topic educational physics curriculum separating physical levitation mechanisms from speculative antigravity claims and gravitational shielding.",
    breadcrumb_items=[("Home", "/"), ("Physics Hub", None)],
    content_html="""
    <div class="pill">Evidence-Based Physics Curriculum</div>
    <h1>Antigravity & Precision Physics Research Hub</h1>
    <p>A comprehensive 22-guide curriculum examining the empirical physics of levitation, General Relativity limits, antimatter gravity tests, exotic matter constraints, and micro-Newton force metrology.</p>

    <div class="tag-grid">
      <a href="/physics/antigravity-definition.html" class="tag-card">
        <h4>1. What Is Antigravity?</h4>
        <p>Scientific definition, General Relativity & zero-g vs microgravity.</p>
      </a>
      <a href="/physics/gravitational-shielding.html" class="tag-card">
        <h4>2. Gravitational Shielding</h4>
        <p>Gauss's law for gravity, Podkletnov claims & NASA null tests.</p>
      </a>
      <a href="/physics/antimatter-gravity.html" class="tag-card">
        <h4>3. Does Antimatter Fall Up?</h4>
        <p>CERN ALPHA-g free-fall tests & Weak Equivalence Principle.</p>
      </a>
      <a href="/physics/negative-mass.html" class="tag-card">
        <h4>4. Negative Mass & Exotic Matter</h4>
        <p>Bondi relativistic equations, runaway motion & warp drives.</p>
      </a>
      <a href="/physics/magnetic-levitation.html" class="tag-card">
        <h4>5. Magnetic Levitation Physics</h4>
        <p>Earnshaw's Theorem, diamagnetism & superconductor Meissner effect.</p>
      </a>
      <a href="/physics/metrology-checklist.html" class="tag-card">
        <h4>6. Metrology Checklist</h4>
        <p>Eliminating thermal expansion, electrostatic forces & air drift.</p>
      </a>
      <a href="/antigravity/" class="tag-card">
        <h4>🚀 Full 22-Topic Portal</h4>
        <p>Browse all 22 peer-reviewed topic guides on the live site.</p>
      </a>
    </div>
    """
)
with open(os.path.join(PUBLIC_DIR, "physics", "index.html"), "w", encoding="utf-8") as f:
    f.write(p_index_html)

# 10. /public/physics/antigravity-definition.html
p_def_html = make_page(
    title="What Is Antigravity? Formal Definition & Physical Constraints",
    meta_desc="Formal scientific definition of antigravity, General Relativity constraints, zero-g vs microgravity, and why electromagnetic levitation is not antigravity.",
    breadcrumb_items=[("Home", "/"), ("Physics Hub", "/physics/"), ("Antigravity Definition", None)],
    content_html="""
    <div class="pill">Fundamental Physics</div>
    <h1>What Is Antigravity? Formal Definition & Physical Constraints</h1>
    <p>In theoretical physics, true <strong>antigravity</strong> refers to a hypothetical gravitational field that repels mass rather than attracting it, or a mechanism that blocks or shields gravitational interaction.</p>

    <div class="panel">
      <h2>Why Levitation Is Not Antigravity</h2>
      <p>Physical levitation (such as magnetic levitation, acoustic traps, aerodynamic lift, or optical tweezers) works by applying an <em>opposing upward force</em> (Lorentz force, pressure gradients, radiation pressure) to counterbalance gravitational downward force ($F_g = mg$).</p>
      <p>The gravitational field itself is completely unaltered; if the power source is disconnected, the object falls immediately at $9.81\\text{ m/s}^2$.</p>
    </div>

    <h2>General Relativity & Equivalence Principle Constraints</h2>
    <p>Einstein's General Theory of Relativity describes gravity not as a conventional force, but as the curvature of spacetime caused by the Stress-Energy Tensor ($T_{\\mu\\nu}$):</p>
    <div class="formula-box">G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}</div>
    <p>For standard matter with positive energy density, spacetime curves attractively. Repulsive gravitation would require negative energy densities that violate standard energy conditions.</p>

    <p><a href="/antigravity/what-is-antigravity/">Read the Complete Interactive Deep Dive on What Is Antigravity →</a></p>
    """
)
with open(os.path.join(PUBLIC_DIR, "physics", "antigravity-definition.html"), "w", encoding="utf-8") as f:
    f.write(p_def_html)

# 11. /public/physics/gravitational-shielding.html
p_shield_html = make_page(
    title="Gravitational Shielding: Gauss's Law & Experimental Null Tests",
    meta_desc="Theoretical physics of gravitational shielding, Gauss's law for gravity, Podkletnov rotating superconductor claims, and NASA Delta-G null tests.",
    breadcrumb_items=[("Home", "/"), ("Physics Hub", "/physics/"), ("Gravitational Shielding", None)],
    content_html="""
    <div class="pill">Field Metrology</div>
    <h1>Gravitational Shielding: Field Physics & Experimental Null Tests</h1>
    <p>Can gravitational fields be blocked or attenuated by intervening matter or superconducting materials? The consensus of empirical physics is <strong>no</strong>.</p>

    <div class="panel">
      <h2>Gauss's Law for Gravitational Fields</h2>
      <p>Unlike electromagnetism (where equal positive and negative charges allow Faraday cages to cancel internal fields), mass has only one sign (positive monopole):</p>
      <div class="formula-box">\\oint \\mathbf{g} \\cdot d\\mathbf{A} = -4\\pi G M_{\\text{enclosed}}</div>
      <p>Because there are no negative gravitational charges, the gravitational flux passing through any closed surface depends strictly on the total enclosed mass, irrespective of intervening shielding.</p>
    </div>

    <h2>The Podkletnov Rotating Superconductor Claims</h2>
    <p>In 1992, Russian researcher Eugene Podkletnov claimed that test masses suspended above a rotating YBCO superconductor lost 0.5% to 2% of their weight. Subsequent independent replication efforts by NASA (Project Delta-G) and international metrology institutes observed zero shielding effect within a precision of $10^{-8}\\text{ m/s}^2$.</p>

    <p><a href="/antigravity/gravitational-shielding/">Read the Full Gravitational Shielding Analysis →</a></p>
    """
)
with open(os.path.join(PUBLIC_DIR, "physics", "gravitational-shielding.html"), "w", encoding="utf-8") as f:
    f.write(p_shield_html)

# 12. /public/physics/antimatter-gravity.html
p_antimatter_html = make_page(
    title="Does Antimatter Fall Up? CERN ALPHA-g Free Fall Experiments",
    meta_desc="CERN ALPHA-g free-fall experiments, antihydrogen gravity measurements, and empirical testing of the Weak Equivalence Principle for antimatter.",
    breadcrumb_items=[("Home", "/"), ("Physics Hub", "/physics/"), ("Antimatter Gravity", None)],
    content_html="""
    <div class="pill">Quantum & Particle Physics</div>
    <h1>Does Antimatter Fall Up? CERN ALPHA-g Experimental Results</h1>
    <p>For decades, a major open question in fundamental physics was whether antimatter experiences normal gravitational acceleration downwards or negative gravity upwards.</p>

    <div class="panel">
      <h2>CERN ALPHA-g Direct Free-Fall Measurement (2023)</h2>
      <p>In September 2023, the ALPHA collaboration at CERN released breakthrough results using magnetic traps to drop neutral antihydrogen atoms ($\\bar{\\text{H}}$ consisting of an antiproton and a positron):</p>
      <div class="formula-box">g_{\\text{antihydrogen}} = (0.75 \\pm 0.13 \\pm 0.16) \\times g</div>
      <p>The experiment definitively ruled out repulsive upward antigravity ($g = -1g$) with overwhelming statistical significance ($> 5\\sigma$). Antimatter falls downwards under gravity, confirming the Weak Equivalence Principle.</p>
    </div>

    <p><a href="/antigravity/antimatter-gravity/">Explore the Complete Antimatter Gravity Experiment Deep Dive →</a></p>
    """
)
with open(os.path.join(PUBLIC_DIR, "physics", "antimatter-gravity.html"), "w", encoding="utf-8") as f:
    f.write(p_antimatter_html)

# 13. /public/physics/negative-mass.html
p_negmass_html = make_page(
    title="Negative Mass & Exotic Matter: Relativistic Paradoxes & Warp Drives",
    meta_desc="Bondi relativistic equations, Null Energy Conditions (NEC/WEC), runaway motion paradoxes, and exotic matter requirements in Alcubierre warp metrics.",
    breadcrumb_items=[("Home", "/"), ("Physics Hub", "/physics/"), ("Negative Mass", None)],
    content_html="""
    <div class="pill">Theoretical Physics</div>
    <h1>Negative Mass & Exotic Matter: Relativistic Paradoxes</h1>
    <p>In 1957, physicist Hermann Bondi published a foundational General Relativity paper examining the behavior of hypothetical matter with negative inertial and gravitational mass ($m < 0$).</p>

    <div class="panel">
      <h2>The Runaway Motion Paradox</h2>
      <p>If a positive mass ($+m$) and a negative mass ($-m$) are placed near each other:</p>
      <ul>
        <li>$+m$ attracts $-m$ with gravitational force directed towards $+m$.</li>
        <li>$-m$ repels $+m$ with gravitational force directed away from $-m$.</li>
      </ul>
      <p>Both masses accelerate continuously in the same direction at constant separation, achieving infinite velocity without violating conservation of momentum (since $+mv + (-mv) = 0$).</p>
    </div>

    <h2>Null Energy Condition Violations</h2>
    <p>Standard Quantum Field Theory and General Relativity enforce Energy Conditions (WEC, NEC, SEC). Matter with negative mass violates the Null Energy Condition ($T_{\\mu\\nu} k^\\mu k^\\nu \\ge 0$), leading to vacuum instability unless forbidden by quantum energy inequalities.</p>

    <p><a href="/antigravity/negative-mass/">Explore the Negative Mass & Exotic Matter Technical Guide →</a></p>
    """
)
with open(os.path.join(PUBLIC_DIR, "physics", "negative-mass.html"), "w", encoding="utf-8") as f:
    f.write(p_negmass_html)

# 14. /public/physics/magnetic-levitation.html
p_maglev_html = make_page(
    title="Magnetic Levitation Physics: Earnshaw's Theorem & Diamagnetism",
    meta_desc="Earnshaw's Theorem, diamagnetic levitation, superconductor Meissner effect, and how magnetic pressure counteracts gravitational acceleration.",
    breadcrumb_items=[("Home", "/"), ("Physics Hub", "/physics/"), ("Magnetic Levitation", None)],
    content_html="""
    <div class="pill">Electromagnetism & Solid State</div>
    <h1>Magnetic Levitation Physics: Earnshaw's Theorem & Diamagnetism</h1>
    <p>Magnetic levitation is often mistaken for antigravity by the general public. However, it is an electromagnetic phenomenon where Lorentz forces exactly balance the gravitational force vector.</p>

    <div class="panel">
      <h2>Earnshaw's Theorem</h2>
      <p>Earnshaw's Theorem (1842) states that a collection of stationary electric charges or static permanent magnets cannot maintain a stable, unassisted 3D equilibrium in free space because Laplace's equation for electrostatic/magnetostatic potential satisfies $\\nabla^2 \\Phi = 0$ (no local minima).</p>
    </div>

    <h2>Bypassing Earnshaw's Theorem with Diamagnetism</h2>
    <p>Diamagnetic materials (such as pyrolytic graphite, water, and superconductors) have relative magnetic permeability $\\mu_r < 1$. When placed in an external magnetic field, they induce an internal magnetic moment directed <em>opposite</em> to the applied field, generating stable passive levitation without feedback control.</p>

    <p><a href="/antigravity/magnetic-levitation/">Read the Complete Magnetic Levitation Guide →</a></p>
    """
)
with open(os.path.join(PUBLIC_DIR, "physics", "magnetic-levitation.html"), "w", encoding="utf-8") as f:
    f.write(p_maglev_html)

# 15. /public/physics/metrology-checklist.html
p_metro_html = make_page(
    title="Precision Force Metrology Checklist for Gravitational Experiments",
    meta_desc="Scientific checklist for testing propellantless propulsion and anomalous forces: eliminating thermal expansion, electrostatic charges, and air convection drift.",
    breadcrumb_items=[("Home", "/"), ("Physics Hub", "/physics/"), ("Metrology Checklist", None)],
    content_html="""
    <div class="pill">Experimental Rigor</div>
    <h1>Precision Force Metrology Checklist for Gravitational Experiments</h1>
    <p>Every breakthrough claim of anomalous propellantless thrust or gravitational modification requires rigorous sub-micro-Newton force metrology. Over 99% of claimed anomalies are false positives caused by experimental artifacts.</p>

    <div class="panel panel-highlight">
      <h2>Mandatory Artifact Elimination Checklist</h2>
      <ol>
        <li><strong>Thermal Expansion & Center-of-Mass Shift:</strong> Ohmic heating causes structural expansion of torsion arms, shifting the balance center-of-mass by sub-micrometer distances and mimicking micro-Newton thrust.</li>
        <li><strong>Lorentz Forces with Earth's Magnetic Field:</strong> DC supply currents flowing through test rigs generate $\\mathbf{F} = I(\\mathbf{L} \\times \\mathbf{B}_{\\text{Earth}})$ forces of $0.1\\text{–}10\\text{ µN}$.</li>
        <li><strong>Electrostatic Charging:</strong> High voltages induce image charges on vacuum chamber walls producing spurious Coulomb forces.</li>
        <li><strong>Vacuum Outgassing & Air Convection:</strong> Thermal gradients create Knudsen radiometric forces and buoyancy shifts unless tested in ultra-high vacuum ($< 10^{-6}\\text{ Torr}$).</li>
      </ol>
    </div>

    <p><a href="/antigravity/reproducibility-and-experimental-errors/">Read the Full Evidence & Metrology Checklist →</a></p>
    """
)
with open(os.path.join(PUBLIC_DIR, "physics", "metrology-checklist.html"), "w", encoding="utf-8") as f:
    f.write(p_metro_html)

# 16. /public/guides/si-prefixes-guide.html
g_prefixes_html = make_page(
    title="Complete 24 SI Prefixes Guide — Powers of 10 & Metric Matrix",
    meta_desc="Comprehensive guide to all 24 metric SI prefixes from quecto (10⁻³⁰) to quetta (10³⁰). Multiplier tables, etymology, and conversion relationships.",
    breadcrumb_items=[("Home", "/"), ("Guides", None), ("SI Prefixes Guide", None)],
    content_html="""
    <div class="pill">Metric Standards</div>
    <h1>Complete 24 SI Prefixes Guide & Multiplier Matrix</h1>
    <p>The International System of Units (SI) establishes 24 metric prefixes spanning 60 orders of magnitude. Adopted by the General Conference on Weights and Measures (CGPM), these prefixes ensure consistent scaling across all physical quantities.</p>

    <div class="panel">
      <h2>The Core Nano-to-Micro Step</h2>
      <div class="formula-box">1 Micro (µ) = 1,000 Nano (n) &nbsp;|&nbsp; 10⁻⁶ = 10⁻⁹ × 10³</div>
      <p>Every prefix on the SI ladder differs from its neighboring named prefix by exactly $10^3 = 1,000$. This eliminates the irregular conversion factors common in imperial measurement systems.</p>
    </div>

    <h2>Full 24 SI Prefixes Table</h2>
    <table>
      <thead>
        <tr><th>Prefix</th><th>Symbol</th><th>Factor (Power of 10)</th><th>Numeric Multiplier</th></tr>
      </thead>
      <tbody>
        <tr><td>quetta</td><td>Q</td><td>$10^{30}$</td><td>1,000,000,000,000,000,000,000,000,000,000</td></tr>
        <tr><td>ronna</td><td>R</td><td>$10^{27}$</td><td>1,000,000,000,000,000,000,000,000,000</td></tr>
        <tr><td>yotta</td><td>Y</td><td>$10^{24}$</td><td>1,000,000,000,000,000,000,000,000</td></tr>
        <tr><td>zetta</td><td>Z</td><td>$10^{21}$</td><td>1,000,000,000,000,000,000,000</td></tr>
        <tr><td>exa</td><td>E</td><td>$10^{18}$</td><td>1,000,000,000,000,000,000</td></tr>
        <tr><td>peta</td><td>P</td><td>$10^{15}$</td><td>1,000,000,000,000,000</td></tr>
        <tr><td>tera</td><td>T</td><td>$10^{12}$</td><td>1,000,000,000,000</td></tr>
        <tr><td>giga</td><td>G</td><td>$10^{9}$</td><td>1,000,000,000</td></tr>
        <tr><td>mega</td><td>M</td><td>$10^{6}$</td><td>1,000,000</td></tr>
        <tr><td>kilo</td><td>k</td><td>$10^{3}$</td><td>1,000</td></tr>
        <tr><td>hecto</td><td>h</td><td>$10^{2}$</td><td>100</td></tr>
        <tr><td>deca</td><td>da</td><td>$10^{1}$</td><td>10</td></tr>
        <tr><td><strong>base unit</strong></td><td>—</td><td><strong>$10^{0}$</strong></td><td><strong>1</strong></td></tr>
        <tr><td>deci</td><td>d</td><td>$10^{-1}$</td><td>0.1</td></tr>
        <tr><td>centi</td><td>c</td><td>$10^{-2}$</td><td>0.01</td></tr>
        <tr><td>milli</td><td>m</td><td>$10^{-3}$</td><td>0.001</td></tr>
        <tr style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; font-weight: 700;"><td>micro</td><td>µ</td><td>10⁻⁶</td><td>0.000 001</td></tr>
        <tr style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; font-weight: 700;"><td>nano</td><td>n</td><td>10⁻⁹</td><td>0.000 000 001</td></tr>
        <tr><td>pico</td><td>p</td><td>$10^{-12}$</td><td>0.000 000 000 001</td></tr>
        <tr><td>femto</td><td>f</td><td>$10^{-15}$</td><td>0.000 000 000 000 001</td></tr>
        <tr><td>atto</td><td>a</td><td>$10^{-18}$</td><td>0.000 000 000 000 000 001</td></tr>
        <tr><td>zepto</td><td>z</td><td>$10^{-21}$</td><td>0.000 000 000 000 000 000 001</td></tr>
        <tr><td>yocto</td><td>y</td><td>$10^{-24}$</td><td>0.000 000 000 000 000 000 000 001</td></tr>
        <tr><td>ronto</td><td>r</td><td>$10^{-27}$</td><td>$10^{-27}$</td></tr>
        <tr><td>quecto</td><td>q</td><td>$10^{-30}$</td><td>$10^{-30}$</td></tr>
      </tbody>
    </table>

    <p><a href="/si-prefix-converter/">Open the Full Interactive SI Prefix Matrix →</a></p>
    """
)
with open(os.path.join(PUBLIC_DIR, "guides", "si-prefixes-guide.html"), "w", encoding="utf-8") as f:
    f.write(g_prefixes_html)

# 17. /public/blog/.gitkeep
with open(os.path.join(PUBLIC_DIR, "blog", ".gitkeep"), "w", encoding="utf-8") as f:
    f.write("")

# 18. /public/blog/index.html
blog_index_html = make_page(
    title="Scientific Articles & Physics Research Blog",
    meta_desc="Peer-reviewed explainers, semiconductor scaling analysis, and precision measurement articles from NanoToMicro.",
    breadcrumb_items=[("Home", "/"), ("Blog", None)],
    content_html="""
    <div class="pill">Editorial & Research</div>
    <h1>NanoToMicro Scientific Articles & Research Blog</h1>
    <p>In-depth technical guides, metrological case studies, and updates on precision force measurement.</p>
    <div class="panel">
      <h3>Upcoming Supporting Guides</h3>
      <ul>
        <li>Semiconductor Process Nodes: What 3nm and 5nm Really Mean</li>
        <li>Visible Light Wavelength Spectrum: Nanometers (nm) to Micrometers (µm)</li>
        <li>Cellular Scale Guide: Biological Dimensions in Micrometers</li>
        <li>CPU Clock Period Calculator: Frequency to Period Conversion ($t = 1/f$)</li>
      </ul>
    </div>
    """
)
with open(os.path.join(PUBLIC_DIR, "blog", "index.html"), "w", encoding="utf-8") as f:
    f.write(blog_index_html)

print("All static public pages created successfully!")
