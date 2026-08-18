# scripts/generate_all_unit_converters.py
import os

PAGES = [
    {
        "filename": "nanometers-to-micrometers.html",
        "title": "Convert Nanometers to Micrometers (nm to µm) | NanoToMicro",
        "description": "Instantly convert nanometers (nm) to micrometers (µm) with our exact calculator. Used by semiconductor engineers, biologists, and researchers. 1 nm = 0.001 µm.",
        "headline": "Convert Nanometers (nm) to Micrometers (µm)",
        "subheading": "Exact conversion tool for semiconductor, biology, and research applications. 1 nm = 0.001 µm (exact SI ratio).",
        "primary_keyword": "nm to µm",
        "secondary_keywords": "convert nm to µm, nanometer to micrometer",
        "target_audience": "Engineers, Biologists",
        "from_unit": "Nanometers",
        "from_symbol": "nm",
        "to_unit": "Micrometers",
        "to_symbol": "µm",
        "default_val": "2500",
        "default_res": "2.5",
        "category": "Length",
        "table_rows": [
            ("1 nm", "0.001 µm", "DNA helix diameter"),
            ("10 nm", "0.01 µm", "Protein molecule size"),
            ("100 nm", "0.1 µm", "Virus particle capsid"),
            ("500 nm", "0.5 µm", "Visible light wavelength (green)"),
            ("1,000 nm", "1 µm", "Single bacterium length"),
            ("5,000 nm", "5 µm", "Red blood cell diameter"),
            ("10,000 nm", "10 µm", "Human cell nucleus"),
            ("70,000 nm", "70 µm", "Human hair cross-section width")
        ],
        "apps": [
            ("🧬 Molecular Biology", "DNA helix width is <strong>2.5 nm</strong> (0.0025 µm). Protein molecules range from 5-50 nm. When working with gene fragments, converting ng to µg is essential for experiments.", "A DNA fragment of 2,500 nm is 2.5 µm long.", "#4fc3f7"),
            ("💻 Semiconductor Engineering", "Current transistor gate lengths are <strong>5 nm</strong> (0.005 µm). Chip manufacturers measure features in nanometers, while photolithography uses micrometers.", "A 7 nm processor has gates = 0.007 µm.", "#2ecc71"),
            ("🔌 Electronics & Capacitors", "Capacitance values: 100 nF = 0.1 µF. Converting between nanofarads and microfarads is crucial for circuit design and component selection.", "A 470 nF capacitor = 0.47 µF.", "#e74c3c")
        ],
        "faqs": [
            ("How do you convert nm to µm?", "To convert nanometers (nm) to micrometers (µm), divide the value by 1,000 (or multiply by 0.001). Formula: <code>µm = nm ÷ 1,000</code>. For example: 2,500 nm ÷ 1,000 = 2.5 µm."),
            ("How many nanometers are in 1 micrometer?", "1 micrometer (µm) contains exactly 1,000 nanometers (nm). This is because micro represents 10⁻⁶ and nano represents 10⁻⁹, giving an exact ratio of 10³ (1,000)."),
            ("What is the difference between a nanometer and a micrometer?", "A nanometer (nm) is one-billionth of a meter (10⁻⁹ m), whereas a micrometer (µm) is one-millionth of a meter (10⁻⁶ m). A micrometer is exactly 1,000 times larger."),
            ("What items are measured in nm vs µm?", "Nanometers measure atoms, DNA strands (2.5 nm), and transistor gates (5 nm). Micrometers measure red blood cells (6–8 µm), bacteria (1–2 µm), and human hair (70 µm).")
        ]
    },
    {
        "filename": "nanograms-to-micrograms.html",
        "title": "Convert Nanograms to Micrograms (ng to µg) | NanoToMicro",
        "description": "Instantly convert nanograms (ng) to micrograms (µg) with our exact calculator. Used in biochemistry, molecular biology, and pharmacology. 1 ng = 0.001 µg.",
        "headline": "Convert Nanograms (ng) to Micrograms (µg)",
        "subheading": "Precision mass calculator for molecular biologists, assay protocols, and clinical pharmacology. 1 ng = 0.001 µg (exact SI mass ratio).",
        "primary_keyword": "ng to µg",
        "secondary_keywords": "nanogram to microgram, convert ng to µg",
        "target_audience": "Molecular Biologists",
        "from_unit": "Nanograms",
        "from_symbol": "ng",
        "to_unit": "Micrograms",
        "to_symbol": "µg",
        "default_val": "5000",
        "default_res": "5",
        "category": "Mass",
        "table_rows": [
            ("1 ng", "0.001 µg", "PCR DNA amplicon trace"),
            ("10 ng", "0.01 µg", "ELISA antibody threshold"),
            ("100 ng", "0.1 µg", "RNA sequencing library input"),
            ("500 ng", "0.5 µg", "Plasmid DNA transfection sample"),
            ("1,000 ng", "1 µg", "Standard microgram drug dosage"),
            ("5,000 ng", "5 µg", "Therapeutic protein load"),
            ("10,000 ng", "10 µg", "Clinical vitamin D aliquot"),
            ("50,000 ng", "50 µg", "Mass spectrometry sample peak")
        ],
        "apps": [
            ("🧪 PCR & DNA Extraction", "Quantifying nucleic acids on NanoDrop spectrophotometers requires converting ng/µL concentrations to total microgram yields.", "A 5,000 ng amplicon yield = 5 µg total DNA.", "#4fc3f7"),
            ("💊 Pharmacology & Dosing", "Potent active pharmaceutical ingredients (APIs), hormones, and peptides are dosed in micrograms from nanogram serum concentrations.", "A 250 ng/mL serum concentration in a 1 mL vial = 0.25 µg.", "#2ecc71"),
            ("🧬 Western Blot Loading", "Western blot and SDS-PAGE sample loading buffers require precise microgram protein loads prepared from nanogram cell lysate stocks.", "A 1,500 ng cell lysate load = 1.5 µg total protein.", "#e74c3c")
        ],
        "faqs": [
            ("How do you convert ng to µg?", "To convert nanograms (ng) to micrograms (µg), divide the mass value by 1,000. Formula: <code>µg = ng ÷ 1,000</code>. For example: 5,000 ng ÷ 1,000 = 5 µg."),
            ("How many nanograms are in 1 microgram?", "There are exactly 1,000 nanograms in 1 microgram (1 µg = 1,000 ng). Micro is 10⁻⁶ grams and nano is 10⁻⁹ grams."),
            ("Why is ng to µg conversion important in biology?", "Assay kits, enzyme reactions, and pharmaceutical doses specify microgram quantities, while spectrophotometers and qPCR outputs report nanograms per microliter.")
        ]
    },
    {
        "filename": "nanoseconds-to-microseconds.html",
        "title": "Convert Nanoseconds to Microseconds (ns to µs) | NanoToMicro",
        "description": "Instantly convert nanoseconds (ns) to microseconds (µs) with our exact calculator. Used in CPU cycle timing, laser physics, and network latency. 1 ns = 0.001 µs.",
        "headline": "Convert Nanoseconds (ns) to Microseconds (µs)",
        "subheading": "High-speed time converter for CPU architecture, ultrafast lasers, and telecommunications. 1 ns = 0.001 µs (exact SI time ratio).",
        "primary_keyword": "ns to µs",
        "secondary_keywords": "nanosecond to microsecond, time conversion",
        "target_audience": "Physicists, Engineers",
        "from_unit": "Nanoseconds",
        "from_symbol": "ns",
        "to_unit": "Microseconds",
        "to_symbol": "µs",
        "default_val": "1000",
        "default_res": "1",
        "category": "Time",
        "table_rows": [
            ("1 ns", "0.001 µs", "1 GHz microprocessor clock cycle"),
            ("10 ns", "0.01 µs", "DDR5 RAM access CAS latency"),
            ("100 ns", "0.1 µs", "L3 CPU cache lookup latency"),
            ("500 ns", "0.5 µs", "Flash memory command trigger"),
            ("1,000 ns", "1 µs", "1 microsecond benchmark"),
            ("5,000 ns", "5 µs", "Fiber optic propagation across 1 km"),
            ("10,000 ns", "10 µs", "NVMe SSD random read latency"),
            ("100,000 ns", "100 µs", "High-frequency trading roundtrip")
        ],
        "apps": [
            ("⚡ Computer Architecture & Memory", "Modern 4 GHz processor cores execute clock cycles in 0.25 ns. Memory controllers budget DRAM timings in nanoseconds and bus transactions in microseconds.", "A 250 ns instruction pipeline burst = 0.25 µs.", "#4fc3f7"),
            ("📡 Photonics & LiDAR Rangefinding", "Laser pulses in LiDAR rangefinders measure photon time-of-flight in nanoseconds to generate millimeter-precise 3D point clouds.", "A 1,000 ns laser echo corresponds to a 1 µs roundtrip.", "#2ecc71"),
            ("🌐 High-Frequency Trading Networks", "Ultra-low-latency network switches execute order matching in hundreds of nanoseconds, reporting analytics in microseconds.", "A 500 ns gateway switch duration = 0.5 µs latency.", "#e74c3c")
        ],
        "faqs": [
            ("How do you convert ns to µs?", "To convert nanoseconds (ns) to microseconds (µs), divide the time value by 1,000. Formula: <code>µs = ns ÷ 1,000</code>. For example: 1,000 ns ÷ 1,000 = 1 µs."),
            ("How many nanoseconds make 1 microsecond?", "Exactly 1,000 nanoseconds make 1 microsecond (1 µs = 1,000 ns = 10⁻⁶ seconds)."),
            ("How fast is 1 nanosecond?", "Light travels approximately 30 centimeters (about 1 foot) in 1 nanosecond in a vacuum.")
        ]
    },
    {
        "filename": "nanofarads-to-microfarads.html",
        "title": "Convert Nanofarads to Microfarads (nF to µF) | NanoToMicro",
        "description": "Instantly convert nanofarads (nF) to microfarads (µF) with our exact calculator. Used in electronics, capacitor sizing, and PCB design. 1 nF = 0.001 µF.",
        "headline": "Convert Nanofarads (nF) to Microfarads (µF)",
        "subheading": "Capacitance conversion calculator for electronics engineering, filter circuit design, and PCB decoupling networks. 1 nF = 0.001 µF.",
        "primary_keyword": "nF to µF",
        "secondary_keywords": "nanofarad to microfarad, capacitance",
        "target_audience": "Electronics Engineers",
        "from_unit": "Nanofarads",
        "from_symbol": "nF",
        "to_unit": "Microfarads",
        "to_symbol": "µF",
        "default_val": "100",
        "default_res": "0.1",
        "category": "Capacitance",
        "table_rows": [
            ("1 nF", "0.001 µF", "RF ceramic bypass capacitor"),
            ("10 nF", "0.01 µF", "Audio tone control filter capacitor"),
            ("100 nF", "0.1 µF", "Standard digital IC decoupling cap (0.1 µF / 104 code)"),
            ("220 nF", "0.22 µF", "Op-amp feedback bandpass network"),
            ("470 nF", "0.47 µF", "EMI suppression filter"),
            ("1,000 nF", "1 µF", "Switching regulator input smoothing"),
            ("4,700 nF", "4.7 µF", "Low-dropout (LDO) output stabilizer"),
            ("10,000 nF", "10 µF", "Tantalum power rail reservoir")
        ],
        "apps": [
            ("🔌 Power Decoupling Networks", "Microcontroller power pins use 100 nF (0.1 µF) ceramic capacitors in parallel with 10 µF bulk capacitors to suppress high-frequency noise.", "A standard 100 nF decoupling cap = 0.1 µF (Capacitor Code 104).", "#4fc3f7"),
            ("🎛️ Active Analog Filters", "Sallen-Key and Butterworth low-pass filter poles are calculated using nanofarad-range capacitors with precise tolerances.", "A 220 nF filter cap = 0.22 µF.", "#2ecc71"),
            ("⚡ DC-DC Power Regulators", "Buck and boost switching converters require microfarad-range output ripple filters assembled from multi-layer ceramic capacitors (MLCCs).", "A 4,700 nF output buffer = 4.7 µF.", "#e74c3c")
        ],
        "faqs": [
            ("How do you convert nF to µF?", "To convert nanofarads (nF) to microfarads (µF), divide the capacitance by 1,000. Formula: <code>µF = nF ÷ 1,000</code>. For example: 100 nF ÷ 1,000 = 0.1 µF."),
            ("What capacitor code corresponds to 100 nF in µF?", "The standard 3-digit capacitor code '104' equals 100,000 pF, which is 100 nF or 0.1 µF."),
            ("Why do schematics mix nF and µF?", "European standards frequently use nF (e.g. 47 nF) while North American schematics often write 0.047 µF for the identical component.")
        ]
    },
    {
        "filename": "nanoamperes-to-microamperes.html",
        "title": "Convert Nanoamperes to Microamperes (nA to µA) | NanoToMicro",
        "description": "Instantly convert nanoamperes (nA) to microamperes (µA) with our exact calculator. Used in ultra-low-power electronics and sensor circuits. 1 nA = 0.001 µA.",
        "headline": "Convert Nanoamperes (nA) to Microamperes (µA)",
        "subheading": "Precision electric current converter for battery-powered IoT devices, CMOS leakage measurement, and biosensors. 1 nA = 0.001 µA.",
        "primary_keyword": "nA to µA",
        "secondary_keywords": "nanoamp to microamp, current",
        "target_audience": "Electrical Engineers",
        "from_unit": "Nanoamperes",
        "from_symbol": "nA",
        "to_unit": "Microamperes",
        "to_symbol": "µA",
        "default_val": "1500",
        "default_res": "1.5",
        "category": "Current",
        "table_rows": [
            ("1 nA", "0.001 µA", "Photodiode dark leakage current"),
            ("10 nA", "0.01 µA", "CMOS transistor gate oxide leakage"),
            ("100 nA", "0.1 µA", "Ultra-low-power RTC standby current"),
            ("500 nA", "0.5 µA", "Deep-sleep IoT sensor node current"),
            ("1,000 nA", "1 µA", "Standard 1 microampere test current"),
            ("5,000 nA", "5 µA", "Energy-harvesting standby budget"),
            ("10,000 nA", "10 µA", "Low-power operational amplifier quiescent current"),
            ("100,000 nA", "100 µA", "Active sensor acquisition burst")
        ],
        "apps": [
            ("🔋 IoT & Wearable Battery Life", "Estimating 10-year coin cell longevity requires summing 500 nA deep-sleep currents with periodic active sensor bursts.", "A 500 nA deep-sleep mode draws 0.5 µA from the battery.", "#4fc3f7"),
            ("🔬 Electrochemical Biosensors", "Glucose meters and potentiostats measure redox current reactions in the 10–500 nA range.", "A 1,200 nA enzymatic current response = 1.2 µA.", "#2ecc71"),
            ("💻 Sub-threshold CMOS Circuitry", "Ultra-low-voltage microcontrollers operate near transistor threshold voltages, utilizing sub-microampere operating currents.", "A 50 nA static gate leakage current = 0.05 µA.", "#e74c3c")
        ],
        "faqs": [
            ("How do you convert nA to µA?", "To convert nanoamperes (nA) to microamperes (µA), divide the electric current by 1,000. Formula: <code>µA = nA ÷ 1,000</code>. For example: 1,500 nA ÷ 1,000 = 1.5 µA."),
            ("How many nanoamperes are in 1 microampere?", "There are exactly 1,000 nanoamperes in 1 microampere (1 µA = 1,000 nA = 10⁻⁶ Amperes)."),
            ("How is nanoamp current measured in the lab?", "Precision source-measure units (SMUs) and electrometer amplifiers with guarded triaxial cabling are required to prevent stray leakage currents.")
        ]
    },
    {
        "filename": "nanovolts-to-microvolts.html",
        "title": "Convert Nanovolts to Microvolts (nV to µV) | NanoToMicro",
        "description": "Instantly convert nanovolts (nV) to microvolts (µV) with our exact calculator. Used in precision metrology, thermoelectric physics, and EEG neuroscience. 1 nV = 0.001 µV.",
        "headline": "Convert Nanovolts (nV) to Microvolts (µV)",
        "subheading": "Precision voltage converter for metrologists, cryogenic quantum physics, and EEG signal processing. 1 nV = 0.001 µV.",
        "primary_keyword": "nV to µV",
        "secondary_keywords": "nanovolt to microvolt, voltage",
        "target_audience": "Physicists",
        "from_unit": "Nanovolts",
        "from_symbol": "nV",
        "to_unit": "Microvolts",
        "to_symbol": "µV",
        "default_val": "250",
        "default_res": "0.25",
        "category": "Voltage",
        "table_rows": [
            ("1 nV", "0.001 µV", "Josephson voltage standard quantization step"),
            ("10 nV", "0.01 µV", "Johnson-Nyquist thermal noise floor across 50 Ω"),
            ("50 nV", "0.05 µV", "High-precision thermocouple drift resolution"),
            ("100 nV", "0.1 µV", "Nanovoltmeter offset uncertainty limit"),
            ("1,000 nV", "1 µV", "1 microvolt reference level"),
            ("10,000 nV", "10 µV", "Human EEG alpha brainwave amplitude"),
            ("50,000 nV", "50 µV", "ECG cardiac electrical potential threshold"),
            ("1,000,000 nV", "1,000 µV", "1 millivolt standard sensor signal")
        ],
        "apps": [
            ("🧠 Neuroscience & Electrophysiology", "EEG scalp electrodes detect cortical brainwave signals between 10 µV and 100 µV, with baseline noise rejection calibrated in nanovolts.", "A 10,000 nV EEG alpha wave peak = 10 µV amplitude.", "#4fc3f7"),
            ("🌡️ Thermoelectric Metrology", "Seebeck effect sensors and precision Kelvin bridges measure temperature-induced voltages in sub-microvolt increments.", "A 250 nV thermocouple drift signal = 0.25 µV.", "#2ecc71"),
            ("⚛️ Superconductivity & SQUIDs", "Superconducting Quantum Interference Devices (SQUIDs) measure magnetic flux changes producing nanovolt electrical responses.", "A 1,000 nV magnetic flux response = 1 µV.", "#e74c3c")
        ],
        "faqs": [
            ("How do you convert nV to µV?", "To convert nanovolts (nV) to microvolts (µV), divide the voltage by 1,000. Formula: <code>µV = nV ÷ 1,000</code>. For example: 250 nV ÷ 1,000 = 0.25 µV."),
            ("How many nanovolts are in 1 microvolt?", "There are exactly 1,000 nanovolts in 1 microvolt (1 µV = 1,000 nV = 10⁻⁶ Volts)."),
            ("What is the Johnson noise limit?", "Thermal agitation of electrons in a resistor creates noise voltage, typically producing nanovolt-level spectral noise density.")
        ]
    },
    {
        "filename": "nanoliters-to-microliters.html",
        "title": "Convert Nanoliters to Microliters (nL to µL) | NanoToMicro",
        "description": "Instantly convert nanoliters (nL) to microliters (µL) with our exact calculator. Used in analytical chemistry, microfluidics, and robotic liquid handling. 1 nL = 0.001 µL.",
        "headline": "Convert Nanoliters (nL) to Microliters (µL)",
        "subheading": "Accurate fluid volume calculator for analytical chemists, microfluidic chip design, and automated pipetting workstations. 1 nL = 0.001 µL.",
        "primary_keyword": "nL to µL",
        "secondary_keywords": "nanoliter to microliter, volume",
        "target_audience": "Chemists",
        "from_unit": "Nanoliters",
        "from_symbol": "nL",
        "to_unit": "Microliters",
        "to_symbol": "µL",
        "default_val": "750",
        "default_res": "0.75",
        "category": "Volume",
        "table_rows": [
            ("1 nL", "0.001 µL", "Acoustic droplet dispensing volume"),
            ("10 nL", "0.01 µL", "Microfluidic droplet reactor droplet"),
            ("50 nL", "0.05 µL", "Capillary electrophoresis injection plug"),
            ("100 nL", "0.1 µL", "Protein crystallization screening drop"),
            ("500 nL", "0.5 µL", "High-throughput screening assay well aliquot"),
            ("1,000 nL", "1 µL", "Minimum manual micropipette volume (P2 pipette)"),
            ("5,000 nL", "5 µL", "Standard PCR reaction master mix component"),
            ("50,000 nL", "50 µL", "Standard 96-well microplate working volume")
        ],
        "apps": [
            ("🤖 Acoustic Liquid Handling", "Echo acoustic liquid handlers transfer 2.5 nL to 250 nL compound aliquots into 1536-well microplates with zero tip contact.", "A 250 nL acoustic droplet transfer = 0.25 µL.", "#4fc3f7"),
            ("💧 Microfluidic 'Lab-on-a-Chip'", "Micro-channels manipulate discrete fluid droplets measured in nanoliters for single-cell assays.", "A 750 nL segmented droplet reactor volume = 0.75 µL.", "#2ecc71"),
            ("💎 Protein Crystallography", "Vapor diffusion hanging drops combine 100 nL protein solution with 100 nL precipitant to grow diffraction crystals.", "A 100 nL crystallization droplet = 0.1 µL.", "#e74c3c")
        ],
        "faqs": [
            ("How do you convert nL to µL?", "To convert nanoliters (nL) to microliters (µL), divide the volume by 1,000. Formula: <code>µL = nL ÷ 1,000</code>. For example: 750 nL ÷ 1,000 = 0.75 µL."),
            ("How many nanoliters are in 1 microliter?", "There are exactly 1,000 nanoliters in 1 microliter (1 µL = 1,000 nL = 10⁻⁶ Liters = 1 cubic millimeter)."),
            ("How can nanoliter volumes be dispensed accurately?", "Contact-free acoustic dispensing, piezoelectric micro-valves, and microfluidic syringe pumps are utilized for sub-microliter precision.")
        ]
    },
    {
        "filename": "nanocoulombs-to-microcoulombs.html",
        "title": "Convert Nanocoulombs to Microcoulombs (nC to µC) | NanoToMicro",
        "description": "Instantly convert nanocoulombs (nC) to microcoulombs (µC) with our exact calculator. Used in electrostatics, particle physics, and ionization chambers. 1 nC = 0.001 µC.",
        "headline": "Convert Nanocoulombs (nC) to Microcoulombs (µC)",
        "subheading": "Precision electric charge converter for physicists, electrostatic discharge (ESD) testing, and particle accelerators. 1 nC = 0.001 µC.",
        "primary_keyword": "nC to µC",
        "secondary_keywords": "nanocoulomb to microcoulomb, charge",
        "target_audience": "Physicists",
        "from_unit": "Nanocoulombs",
        "from_symbol": "nC",
        "to_unit": "Microcoulombs",
        "to_symbol": "µC",
        "default_val": "2000",
        "default_res": "2",
        "category": "Charge",
        "table_rows": [
            ("1 nC", "0.001 µC", "Electrostatic charge from rubbing a glass rod (6.24 × 10⁹ electrons)"),
            ("10 nC", "0.01 µC", "ESD human body model spark threshold"),
            ("100 nC", "0.1 µC", "Triboelectric charging on conveyor belt packaging"),
            ("500 nC", "0.5 µC", "Ionization chamber radiation exposure measurement"),
            ("1,000 nC", "1 µC", "1 microcoulomb benchmark charge"),
            ("5,000 nC", "5 µC", "Flash lamp discharge trigger charge"),
            ("10,000 nC", "10 µC", "High-voltage electrostatic generator storage"),
            ("100,000 nC", "100 µC", "Laser wakefield electron bunch total charge")
        ],
        "apps": [
            ("⚡ Electrostatic Discharge (ESD) Testing", "Semiconductor fabs enforce strict ESD controls where 2,000 nC discharges can permanently rupture gate oxide dielectric layers.", "A 2,000 nC static discharge spark = 2 µC.", "#4fc3f7"),
            ("☢️ Radiation Dosimetry & Ionization", "Ionization chambers measure absorbed ionizing radiation doses by integrating charge collected across electrode plates.", "A 500 nC collected detector charge = 0.5 µC.", "#2ecc71"),
            ("⚛️ Particle Accelerator Beams", "Synchrotrons and linear accelerators quantify relativistic electron bunch packet charges in nanocoulombs per pulse.", "A 10,000 nC bunch packet = 10 µC total charge.", "#e74c3c")
        ],
        "faqs": [
            ("How do you convert nC to µC?", "To convert nanocoulombs (nC) to microcoulombs (µC), divide the charge value by 1,000. Formula: <code>µC = nC ÷ 1,000</code>. For example: 2,000 nC ÷ 1,000 = 2 µC."),
            ("How many electrons equal 1 nanocoulomb?", "Since the elementary charge is approximately 1.602 × 10⁻¹⁹ C, 1 nC equals approximately 6.24 billion electrons (6.24 × 10⁹ e)."),
            ("What is the ratio between nC and µC?", "1 microcoulomb (µC) is exactly 1,000 times larger than 1 nanocoulomb (nC).")
        ]
    }
]

OUTPUT_DIR = r"C:\Users\marya\.gemini\antigravity\scratch\antigravity-site\public\converters"

def build_html(p):
    rows_html = "\n".join([f"                <tr><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>" for r in p["table_rows"]])
    
    apps_items = []
    for app in p["apps"]:
        title = app[0]
        desc = app[1]
        example = app[2] if len(app) > 2 else ""
        border_color = app[3] if len(app) > 3 else "#4fc3f7"
        ex_html = f'<p style="margin-top: 10px;"><strong>Example:</strong> {example}</p>' if example else ""
        apps_items.append(f"""        <div class="app-card" style="background: #f0f7ff; padding: 20px; border-radius: 8px; border-left: 4px solid {border_color};">
            <h3>{title}</h3>
            <p>{desc}</p>
            {ex_html}
        </div>""")
    apps_html = "\n".join(apps_items)
    
    faqs_html = ""
    for idx, (q, a) in enumerate(p["faqs"]):
        is_first = (idx == 0)
        expanded_attr = 'aria-expanded="true"' if is_first else 'aria-expanded="false"'
        active_class = " active" if is_first else ""
        icon = "−" if is_first else "+"
        faqs_html += f"""    <div class="faq-item">
        <button type="button" class="faq-question" onclick="toggleFAQ(this)" {expanded_attr}>
            <span>{q}</span>
            <span class="faq-icon">{icon}</span>
        </button>
        <div class="faq-answer{active_class}">
            <p>{a}</p>
        </div>
    </div>\n"""

    all_links = [
        ("nanometers-to-micrometers.html", "Nanometers to Micrometers (nm to µm)"),
        ("nanograms-to-micrograms.html", "Nanograms to Micrograms (ng to µg)"),
        ("nanoseconds-to-microseconds.html", "Nanoseconds to Microseconds (ns to µs)"),
        ("nanofarads-to-microfarads.html", "Nanofarads to Microfarads (nF to µF)"),
        ("nanoamperes-to-microamperes.html", "Nanoamperes to Microamperes (nA to µA)"),
        ("nanovolts-to-microvolts.html", "Nanovolts to Microvolts (nV to µV)"),
        ("nanoliters-to-microliters.html", "Nanoliters to Microliters (nL to µL)"),
        ("nanocoulombs-to-microcoulombs.html", "Nanocoulombs to Microcoulombs (nC to µC)")
    ]
    related_items = [f'            <li>➡️ <a href="/converters/{l[0]}">{l[1]}</a></li>' for l in all_links if l[0] != p["filename"]]
    related_html = "\n".join(related_items[:4]) + '\n            <li>➡️ <a href="/physics/">Physics Research Hub</a></li>'

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="{p['primary_keyword']}, {p['secondary_keywords']}">
    
    <!-- Title & Description -->
    <title>{p['title']}</title>
    <meta name="description" content="{p['description']}" />
    
    <link rel="canonical" href="https://nanotomicro.com/converters/{p['filename']}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Nano to Micro" />
    <meta property="og:title" content="{p['title']}" />
    <meta property="og:description" content="{p['description']}" />
    <meta property="og:url" content="https://nanotomicro.com/converters/{p['filename']}" />
    <meta property="og:image" content="https://nanotomicro.com/og-image.png" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{p['title']}" />
    <meta name="twitter:description" content="{p['description']}" />
    <meta name="twitter:image" content="https://nanotomicro.com/og-image.png" />
    
    <!-- Schema Markup -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "{p['title']}",
        "description": "{p['description']}",
        "author": {{"@type": "Organization", "name": "NanoToMicro"}},
        "datePublished": "2026-08-18",
        "mainEntity": {{
            "@type": "WebApplication",
            "name": "{p['from_symbol']} to {p['to_symbol']} Converter",
            "applicationCategory": "Tool",
            "operatingSystem": "All"
        }}
    }}
    </script>
    
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #1a1a2e;
            background: #ffffff;
            max-width: 1280px;
            margin: 0 auto;
            padding: 20px;
        }}
        
        /* Sticky Progress Bar */
        .progress-bar {{
            height: 3px;
            background: linear-gradient(90deg, #4fc3f7, #1a1a2e);
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            z-index: 1000;
        }}
        
        /* Navigation */
        .nav {{
            background: #1a1a2e;
            padding: 15px 24px;
            border-radius: 12px;
            margin-bottom: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            box-shadow: 0 4px 16px rgba(26, 26, 46, 0.15);
        }}
        .logo {{
            color: white;
            font-size: 22px;
            font-weight: 800;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }}
        .logo span {{ color: #4fc3f7; }}
        .nav-links {{ display: flex; gap: 20px; flex-wrap: wrap; align-items: center; }}
        .nav-links a {{
            color: #cbd5e1;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: color 0.2s;
        }}
        .nav-links a:hover {{ color: #4fc3f7; }}
        
        /* Breadcrumbs */
        .breadcrumb {{
            padding: 10px 0;
            margin-bottom: 20px;
            list-style: none;
            border-bottom: 1px solid #e8ecf1;
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            font-size: 0.9rem;
        }}
        .breadcrumb-item {{ display: inline-flex; align-items: center; }}
        .breadcrumb-item + .breadcrumb-item::before {{ content: "›"; padding: 0 8px; color: #94a3b8; }}
        .breadcrumb-item a {{ color: #0284c7; text-decoration: none; font-weight: 500; }}
        .breadcrumb-item a:hover {{ text-decoration: underline; }}
        .breadcrumb-item.active {{ color: #64748b; font-weight: 600; }}
        
        /* Main Headings */
        h1 {{
            font-size: clamp(1.85rem, 4vw, 2.5rem);
            margin-bottom: 12px;
            color: #1a1a2e;
            font-weight: 800;
            letter-spacing: -0.02em;
        }}
        h2 {{
            font-size: clamp(1.4rem, 3vw, 1.8rem);
            margin: 40px 0 16px;
            color: #1a1a2e;
            font-weight: 800;
            letter-spacing: -0.01em;
        }}
        h3 {{
            font-size: 1.25rem;
            margin: 0 0 8px;
            color: #1a1a2e;
            font-weight: 700;
        }}
        p {{ margin-bottom: 16px; line-height: 1.7; color: #4a4a5a; }}
        
        /* Converter Card */
        .converter-card {{
            background: linear-gradient(135deg, #f8f9fc 0%, #edf2f7 100%);
            padding: 30px;
            border-radius: 16px;
            margin: 24px 0;
            border: 1px solid #e2e8f0;
            box-shadow: 0 8px 24px rgba(26, 26, 46, 0.06);
        }}
        .converter-grid {{
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 20px;
            align-items: center;
        }}
        .input-group label {{
            display: block;
            font-weight: 700;
            margin-bottom: 8px;
            color: #1a1a2e;
            font-size: 0.95rem;
        }}
        .input-group input {{
            width: 100%;
            padding: 14px 16px;
            font-size: 1.25rem;
            font-family: ui-monospace, monospace;
            font-weight: 700;
            color: #1a1a2e;
            background: #ffffff;
            border: 2px solid #cbd5e1;
            border-radius: 10px;
            transition: border-color 0.2s, box-shadow 0.2s;
        }}
        .input-group input:focus {{
            border-color: #4fc3f7;
            box-shadow: 0 0 0 3px rgba(79, 195, 247, 0.25);
            outline: none;
        }}
        .swap-btn {{
            padding: 12px 18px;
            background: #ffffff;
            color: #1a1a2e;
            border: 2px solid #cbd5e1;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 700;
            font-size: 1rem;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }}
        .swap-btn:hover {{
            background: #4fc3f7;
            color: #1a1a2e;
            border-color: #4fc3f7;
            transform: scale(1.04);
        }}
        
        .formula-display-wrap {{
            text-align: center;
            margin-top: 18px;
        }}
        .formula-display {{
            font-family: ui-monospace, monospace;
            background: #1a1a2e;
            color: #4fc3f7;
            padding: 10px 20px;
            border-radius: 8px;
            display: inline-block;
            font-weight: 700;
            font-size: 1.05rem;
        }}
        
        /* Formula Box */
        .formula-box {{
            background: #1a1a2e;
            color: white;
            padding: 20px;
            border-radius: 12px;
            margin: 20px 0;
            text-align: center;
            font-size: 1.35rem;
            font-family: ui-monospace, monospace;
            border: 1px solid rgba(79, 195, 247, 0.3);
        }}
        .formula-box span {{ color: #4fc3f7; font-weight: 800; }}
        
        /* Applications Section & Grid */
        .applications-section {{
            margin: 36px 0;
        }}
        .application-grid, .applications-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }}
        .app-card {{
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 4px 12px rgba(26, 26, 46, 0.04);
        }}
        .app-card:hover {{
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(26, 26, 46, 0.08);
        }}
        
        /* Table */
        .table-wrap {{
            overflow-x: auto;
            margin: 20px 0;
            border-radius: 12px;
            border: 1px solid #e8ecf1;
        }}
        table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 0.95rem;
        }}
        th, td {{
            padding: 12px 16px;
            text-align: left;
            border-bottom: 1px solid #e8ecf1;
        }}
        th {{
            background: #1a1a2e;
            color: white;
            font-weight: 700;
        }}
        tr:nth-child(even) {{ background: #f8f9fa; }}
        
        /* FAQ Accordion */
        .faq-item {{
            border: 1px solid #e8ecf1;
            border-radius: 10px;
            margin: 12px 0;
            overflow: hidden;
            background: #ffffff;
        }}
        .faq-question {{
            width: 100%;
            padding: 16px 20px;
            background: #f8f9fc;
            border: none;
            text-align: left;
            font-size: 1.05rem;
            font-weight: 700;
            color: #1a1a2e;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background 0.2s;
        }}
        .faq-question:hover {{ background: #edf2f7; }}
        .faq-icon {{
            font-size: 1.4rem;
            color: #4fc3f7;
            transition: transform 0.3s;
        }}
        .faq-answer {{
            padding: 18px 20px;
            display: none;
            color: #4a4a5a;
            line-height: 1.7;
        }}
        .faq-answer.active {{ display: block; }}
        
        /* Related Links */
        .related-links {{
            background: #f0f9ff;
            border: 1px solid #bae6fd;
            padding: 24px;
            border-radius: 12px;
            margin: 36px 0;
        }}
        .related-links h3 {{
            margin-top: 0;
            color: #0369a1;
        }}
        .related-links ul {{ list-style: none; padding-left: 0; }}
        .related-links li {{ margin: 10px 0; }}
        .related-links a {{
            color: #0284c7;
            text-decoration: none;
            font-weight: 600;
        }}
        .related-links a:hover {{ text-decoration: underline; }}
        
        /* Footer */
        .site-footer {{
            margin-top: 60px;
            padding: 48px 0 24px;
            border-top: 1px solid #e8ecf1;
            color: #64748b;
        }}
        .footer-grid {{
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 32px;
            margin-bottom: 36px;
        }}
        .footer-logo {{
            font-size: 1.25rem;
            font-weight: 800;
            color: #1a1a2e;
            text-decoration: none;
            display: inline-block;
            margin-bottom: 12px;
        }}
        .footer-logo span {{ color: #4fc3f7; }}
        .footer-col h4 {{
            color: #1a1a2e;
            font-size: 0.95rem;
            margin-bottom: 12px;
            font-weight: 700;
        }}
        .footer-col ul {{ list-style: none; }}
        .footer-col li {{ margin-bottom: 8px; }}
        .footer-col a {{
            color: #64748b;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.2s;
        }}
        .footer-col a:hover {{ color: #0284c7; }}
        .footer-bottom {{
            border-top: 1px solid #e8ecf1;
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
            font-size: 0.88rem;
        }}
        .footer-bottom a {{ color: #64748b; text-decoration: none; }}
        .footer-bottom a:hover {{ color: #0284c7; }}
        
        /* Mobile Breakpoints */
        @media (max-width: 768px) {{
            body {{ padding: 14px; }}
            .nav {{ flex-direction: column; align-items: flex-start; gap: 14px; padding: 14px 18px; }}
            .nav-links {{ width: 100%; justify-content: space-between; }}
            .converter-grid {{ grid-template-columns: 1fr; gap: 14px; }}
            .swap-btn {{ width: 100%; justify-content: center; }}
            .footer-grid {{ grid-template-columns: 1fr; gap: 24px; }}
            .footer-bottom {{ flex-direction: column; align-items: flex-start; }}
        }}
    </style>
</head>
<body>

<div class="progress-bar" id="readingProgress"></div>

<!-- ===== NAVIGATION ===== -->
<nav class="nav">
    <a href="/" class="logo">Nano<span>To</span>Micro</a>
    <div class="nav-links">
        <a href="/">Home</a>
        <a href="/converters/">Converters</a>
        <a href="/physics/">Physics Hub</a>
        <a href="/guides/">Guides</a>
    </div>
</nav>

<!-- ===== BREADCRUMB ===== -->
<nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="/converters/">Converters</a></li>
        <li class="breadcrumb-item active" aria-current="page">{p['from_unit']} to {p['to_unit']}</li>
    </ol>
</nav>

<!-- ===== MAIN CONTENT ===== -->
<main>
    <h1>{p['headline']}</h1>
    <p style="font-size: 1.1rem; color: #4a4a5a;">{p['subheading']}</p>
    
    <!-- ===== CONVERTER ===== -->
    <div class="converter-card">
        <div class="converter-grid">
            <div class="input-group">
                <label for="nanoInput">{p['from_unit']} ({p['from_symbol']})</label>
                <input type="number" id="nanoInput" value="{p['default_val']}" step="any" placeholder="0">
            </div>
            <div>
                <button type="button" class="swap-btn" onclick="swapValues()">⇄ Swap</button>
            </div>
            <div class="input-group">
                <label for="microOutput">{p['to_unit']} ({p['to_symbol']})</label>
                <input type="text" id="microOutput" value="{p['default_res']}" readonly style="background: #ffffff; cursor: default;">
            </div>
        </div>
        <div class="formula-display-wrap">
            <span class="formula-display" id="formulaBanner">
                {p['default_val']} {p['from_symbol']} ÷ 1,000 = {p['default_res']} {p['to_symbol']}
            </span>
        </div>
    </div>
    
    <!-- ===== QUICK REFERENCE TABLE ===== -->
    <h2>Quick Conversion Table: {p['from_symbol']} to {p['to_symbol']}</h2>
    <div class="table-wrap">
        <table>
            <thead>
                <tr><th>{p['from_unit']} ({p['from_symbol']})</th><th>{p['to_unit']} ({p['to_symbol']})</th><th>Real-World Example</th></tr>
            </thead>
            <tbody>
{rows_html}
            </tbody>
        </table>
    </div>
    
    <!-- ===== THE FORMULA ===== -->
    <h2>The Formula: {p['from_symbol']} to {p['to_symbol']}</h2>
    <div class="formula-box">
        <span>{p['to_symbol']} = {p['from_symbol']} ÷ 1,000</span>
    </div>
    <p>To convert {p['from_unit'].lower()} to {p['to_unit'].lower()}, simply <strong>divide by 1,000</strong>. This is because 1 {p['to_unit'].lower()} = 1,000 {p['from_unit'].lower()} (10⁻⁶ vs 10⁻⁹ base units in the International System of Units).</p>
    
    <!-- ===== REAL-WORLD APPLICATIONS ===== -->
    <section class="applications-section">
        <h2>🔬 Real-World Applications</h2>
        <div class="application-grid">
{apps_html}
        </div>
    </section>
    
    <!-- ===== WHY IT MATTERS ===== -->
    <h2>Why Convert {p['from_symbol']} to {p['to_symbol']}?</h2>
    <p>Understanding the exact 1,000x step ratio is essential across specialized disciplines:</p>
    <ul style="margin-left: 24px; margin-bottom: 18px; line-height: 1.7; color: #4a4a5a;">
        <li><strong>Precision Metrology:</strong> Eliminates floating-point conversion drift when switching between scientific instruments and reports.</li>
        <li><strong>Interdisciplinary Collaboration:</strong> Enables clear specifications between hardware designers, molecular scientists, and physicists.</li>
        <li><strong>Standard Metric Calibration:</strong> Adheres directly to NIST and BIPM SI brochure definitions.</li>
    </ul>
    
    <!-- ===== FAQ SECTION (People Also Ask) ===== -->
    <h2>Frequently Asked Questions</h2>
    
{faqs_html}
    
    <!-- ===== RELATED LINKS ===== -->
    <div class="related-links">
        <h3>📚 Explore More Converters</h3>
        <ul>
{related_html}
        </ul>
    </div>
    
</main>

<!-- ===== FOOTER ===== -->
<footer class="site-footer">
    <div class="footer-grid">
        <div>
            <a href="/" class="footer-logo">Nano<span>To</span>Micro</a>
            <p style="font-size: 0.9rem; line-height: 1.6;">The definitive reference for all nano ↔ micro conversions. Precision metric calculations and evidence-based physics education.</p>
        </div>
        <div class="footer-col">
            <h4>Converters</h4>
            <ul>
                <li><a href="/converters/nanometers-to-micrometers.html">Length (nm → µm)</a></li>
                <li><a href="/converters/nanograms-to-micrograms.html">Mass (ng → µg)</a></li>
                <li><a href="/converters/nanoseconds-to-microseconds.html">Time (ns → µs)</a></li>
                <li><a href="/converters/nanofarads-to-microfarads.html">Capacitance (nF → µF)</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Physics Hub</h4>
            <ul>
                <li><a href="/physics/antigravity-definition.html">What Is Antigravity?</a></li>
                <li><a href="/physics/antimatter-gravity.html">Antimatter Gravity</a></li>
                <li><a href="/physics/gravitational-shielding.html">Gravitational Shielding</a></li>
                <li><a href="/physics/negative-mass.html">Negative Mass</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Resources</h4>
            <ul>
                <li><a href="/about.html">About Us</a></li>
                <li><a href="/contact.html">Contact</a></li>
                <li><a href="/privacy.html">Privacy Policy</a></li>
                <li><a href="/terms.html">Terms of Service</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>© 2026 NanoToMicro.com — Precision Metric Conversions & Physics Education</p>
        <div style="display: flex; gap: 16px;">
            <a href="/privacy.html">Privacy</a>
            <a href="/terms.html">Terms</a>
            <a href="/cookies.html">Cookies</a>
        </div>
    </div>
</footer>

<!-- ===== JAVASCRIPT ===== -->
<script>
    // Scroll progress bar
    window.addEventListener('scroll', function() {{
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        document.getElementById('readingProgress').style.width = progress + '%';
    }});

    // Live Converter Logic
    let isNanoToMicro = true;
    const fromUnitName = "{p['from_unit']}";
    const toUnitName = "{p['to_unit']}";
    const fromSymbol = "{p['from_symbol']}";
    const toSymbol = "{p['to_symbol']}";
    
    function recalculate() {{
        const nanoInput = document.getElementById('nanoInput');
        const microOutput = document.getElementById('microOutput');
        const banner = document.getElementById('formulaBanner');
        
        const val = parseFloat(nanoInput.value) || 0;
        if (isNanoToMicro) {{
            const micro = val / 1000;
            microOutput.value = micro.toString();
            banner.textContent = `${{val.toLocaleString()}} ${{fromSymbol}} ÷ 1,000 = ${{micro.toLocaleString()}} ${{toSymbol}}`;
        }} else {{
            const nano = val * 1000;
            microOutput.value = nano.toString();
            banner.textContent = `${{val.toLocaleString()}} ${{toSymbol}} × 1,000 = ${{nano.toLocaleString()}} ${{fromSymbol}}`;
        }}
    }}
    
    document.getElementById('nanoInput').addEventListener('input', recalculate);
    
    function swapValues() {{
        isNanoToMicro = !isNanoToMicro;
        const labelFrom = document.querySelector('label[for="nanoInput"]');
        const labelTo = document.querySelector('label[for="microOutput"]');
        const nanoInput = document.getElementById('nanoInput');
        const microOutput = document.getElementById('microOutput');
        
        if (isNanoToMicro) {{
            labelFrom.textContent = `${{fromUnitName}} (${{fromSymbol}})`;
            labelTo.textContent = `${{toUnitName}} (${{toSymbol}})`;
        }} else {{
            labelFrom.textContent = `${{toUnitName}} (${{toSymbol}})`;
            labelTo.textContent = `${{fromUnitName}} (${{fromSymbol}})`;
        }}
        
        const currentVal = microOutput.value;
        nanoInput.value = currentVal;
        recalculate();
    }}
    
    // FAQ Toggle
    function toggleFAQ(button) {{
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.faq-icon');
        const isOpen = answer.classList.contains('active');
        
        if (isOpen) {{
            answer.classList.remove('active');
            button.setAttribute('aria-expanded', 'false');
            icon.textContent = '+';
        }} else {{
            answer.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
            icon.textContent = '−';
        }}
    }}
</script>

</body>
</html>"""
    return html

for page_info in PAGES:
    filepath = os.path.join(OUTPUT_DIR, page_info["filename"])
    content = build_html(page_info)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {page_info['filename']} ({page_info['primary_keyword']} / {page_info['target_audience']})")

print("\nSuccessfully updated all 8 Unit-Specific converter pages with Real-World Applications.")
