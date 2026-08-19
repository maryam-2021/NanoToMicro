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
            ("🧬 Molecular Biology", "DNA helix width is <strong>2.5 nm</strong> (0.0025 µm). Protein molecules range from 5-50 nm. When working with gene fragments, converting ng to µg is essential for experiments.", "A DNA fragment of 2,500 nm is 2.5 µm long.", "#38bdf8"),
            ("💻 Semiconductor Engineering", "Current transistor gate lengths are <strong>5 nm</strong> (0.005 µm). Chip manufacturers measure features in nanometers, while photolithography uses micrometers.", "A 7 nm processor has gates = 0.007 µm.", "#22c55e"),
            ("🔌 Electronics & Capacitors", "Capacitance values: 100 nF = 0.1 µF. Converting between nanofarads and microfarads is crucial for circuit design and component selection.", "A 470 nF capacitor = 0.47 µF.", "#ef4444")
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
        "default_val": "750",
        "default_res": "0.75",
        "category": "Mass",
        "table_rows": [
            ("1 ng", "0.001 µg", "Trace DNA amount"),
            ("10 ng", "0.01 µg", "Low-concentration protein"),
            ("50 ng", "0.05 µg", "PCR template DNA"),
            ("100 ng", "0.1 µg", "Drug dose in research"),
            ("500 ng", "0.5 µg", "Enzyme assay amount"),
            ("1,000 ng", "1 µg", "Standard lab sample"),
            ("5,000 ng", "5 µg", "High-concentration sample"),
            ("10,000 ng", "10 µg", "Maximum lab concentration")
        ],
        "apps": [
            ("🧬 DNA/RNA Quantification", "In molecular biology, DNA and RNA samples are often measured in nanograms (ng) and micrograms (µg). Converting between these is essential for preparing samples for sequencing or PCR.", "500 ng DNA = 0.5 µg DNA for a sequencing reaction.", "#38bdf8"),
            ("💊 Pharmacology", "Drug dosages in research are often specified in ng/g or µg/g. Converting helps researchers prepare accurate concentrations for animal studies.", "A dose of 2,000 ng/kg = 2 µg/kg for a mouse study.", "#22c55e"),
            ("🧪 Analytical Chemistry", "Trace element analysis often measures in ng/mL or µg/mL. Converting ensures proper reporting and compliance with regulatory standards.", "50 ng/mL = 0.05 µg/mL for water quality testing.", "#ef4444")
        ],
        "faqs": [
            ("How do you convert ng to µg?", "To convert nanograms (ng) to micrograms (µg), divide by 1,000. Formula: <code>µg = ng ÷ 1,000</code>. For example, 750 ng ÷ 1,000 = 0.75 µg."),
            ("How many nanograms are in 1 microgram?", "1 microgram (µg) contains exactly 1,000 nanograms (ng). This is because micro = 10⁻⁶ and nano = 10⁻⁹, making the ratio 10⁻⁶/10⁻⁹ = 10³ = 1,000."),
            ("What is the difference between a nanogram and a microgram?", "A nanogram (ng) is one-billionth of a gram (10⁻⁹ g), while a microgram (µg) is one-millionth of a gram (10⁻⁶ g). A microgram is 1,000 times larger than a nanogram."),
            ("When would I need to convert ng to µg in research?", "Molecular Biology: Preparing DNA/RNA samples (100 ng/µL = 0.1 µg/µL). Pharmacology: Calculating drug doses (5,000 ng/kg = 5 µg/kg). Analytical Chemistry: Trace element testing.")
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
        "default_res": "1.0",
        "category": "Time",
        "table_rows": [
            ("1 ns", "0.001 µs", "Single transistor switching"),
            ("10 ns", "0.01 µs", "100 MHz processor cycle"),
            ("50 ns", "0.05 µs", "Memory access time"),
            ("100 ns", "0.1 µs", "Optical pulse duration"),
            ("500 ns", "0.5 µs", "Sound wave period"),
            ("1,000 ns", "1 µs", "Time for light to travel 300m"),
            ("10,000 ns", "10 µs", "Microcontroller timer interval")
        ],
        "apps": [
            ("💻 Electronics & Microcontrollers", "Microcontrollers operate in nanoseconds (clock cycles) while timing peripherals often use microseconds (interrupt timers). Converting between them is essential for accurate timing.", "A 100 MHz processor = 10 ns cycle = 0.01 µs.", "#38bdf8"),
            ("🔭 Physics & Optics", "Laser pulse durations are often in nanoseconds (ns) and microseconds (µs). Converting helps in setting up experiments and understanding signal timing.", "A 50 ns laser pulse = 0.05 µs for spectroscopy.", "#f59e0b"),
            ("📡 Telecommunications", "Signal propagation delays are measured in nanoseconds and microseconds. Converting helps calculate latency in fiber optic and wireless networks.", "500 ns delay = 0.5 µs network latency.", "#22c55e")
        ],
        "faqs": [
            ("How do you convert ns to µs?", "To convert nanoseconds (ns) to microseconds (µs), divide by 1,000. Formula: <code>µg = ns ÷ 1,000</code>. For example, 1,000 ns ÷ 1,000 = 1.0 µs."),
            ("How many nanoseconds are in 1 microsecond?", "1 microsecond (µs) contains exactly 1,000 nanoseconds (ns). This is because micro = 10⁻⁶ and nano = 10⁻⁹, making the ratio 10⁻⁶/10⁻⁹ = 10³ = 1,000."),
            ("What is the difference between a nanosecond and a microsecond?", "A nanosecond (ns) is one-billionth of a second (10⁻⁹ s), while a microsecond (µs) is one-millionth of a second (10⁻⁶ s). A microsecond is 1,000 times longer than a nanosecond.")
        ]
    },
    {
        "filename": "nanofarads-to-microfarads.html",
        "title": "Convert Nanofarads to Microfarads (nF to µF) | NanoToMicro",
        "description": "Instantly convert nanofarads (nF) to microfarads (µF) with our exact calculator. Used in electronics design, RF filters, and capacitor sizing. 1 nF = 0.001 µF.",
        "headline": "Convert Nanofarads (nF) to Microfarads (µF)",
        "subheading": "Accurate capacitance converter for circuit designers, power supply engineers, and audio electronics. 1 nF = 0.001 µF (exact SI capacitance ratio).",
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
            ("1 nF", "0.001 µF", "RF tuning capacitor"),
            ("10 nF", "0.01 µF", "Decoupling capacitor"),
            ("47 nF", "0.047 µF", "Filter capacitor"),
            ("100 nF", "0.1 µF", "Common decoupling cap"),
            ("220 nF", "0.22 µF", "Timing capacitor"),
            ("470 nF", "0.47 µF", "Audio coupling cap"),
            ("1,000 nF", "1 µF", "Power supply smoothing"),
            ("10,000 nF", "10 µF", "Bulk capacitor")
        ],
        "apps": [
            ("🔄 Circuit Design", "Decoupling capacitors in digital circuits are often specified in nanofarads (nF) and microfarads (µF). Converting helps select the right components.", "A 100 nF capacitor = 0.1 µF for power supply decoupling.", "#38bdf8"),
            ("📡 RF Engineering", "RF circuits use capacitors in nanofarads for tuning. Converting to microfarads helps when using standard value component charts.", "470 nF = 0.47 µF in a filter design.", "#a855f7"),
            ("⏱️ Timing Circuits", "555 timer circuits and oscillators often use capacitors in nanofarads. Converting helps calculate timing intervals accurately.", "220 nF = 0.22 µF for a 1 Hz oscillator.", "#22c55e")
        ],
        "faqs": [
            ("How do you convert nF to µF?", "To convert nanofarads (nF) to microfarads (µF), divide by 1,000. Formula: <code>µF = nF ÷ 1,000</code>. For example, 100 nF ÷ 1,000 = 0.1 µF."),
            ("How many nanofarads are in 1 microfarad?", "1 microfarad (µF) contains exactly 1,000 nanofarads (nF). This is because micro = 10⁻⁶ and nano = 10⁻⁹, making the ratio 10⁻⁶/10⁻⁹ = 10³ = 1,000."),
            ("What is the difference between a nanofarad and a microfarad?", "A nanofarad (nF) is one-billionth of a farad (10⁻⁹ F), while a microfarad (µF) is one-millionth of a farad (10⁻⁶ F). A microfarad is 1,000 times larger than a nanofarad.")
        ]
    },
    {
        "filename": "nanoamperes-to-microamperes.html",
        "title": "Convert Nanoamperes to Microamperes (nA to µA) | NanoToMicro",
        "description": "Instantly convert nanoamperes (nA) to microamperes (µA) with our exact calculator. Essential for electronics, sensor design, and electrical engineering. 1 nA = 0.001 µA.",
        "headline": "Convert Nanoamperes (nA) to Microamperes (µA)",
        "subheading": "Exact conversion tool for electronics, sensor design, and electrical engineering. 1 nA = 0.001 µA (exact SI ratio).",
        "primary_keyword": "nA to µA",
        "secondary_keywords": "nanoamp to microamp, current",
        "target_audience": "Electrical Engineers",
        "from_unit": "Nanoamperes",
        "from_symbol": "nA",
        "to_unit": "Microamperes",
        "to_symbol": "µA",
        "default_val": "500",
        "default_res": "0.5",
        "category": "Current",
        "table_rows": [
            ("1 nA", "0.001 µA", "Sensor leakage current"),
            ("10 nA", "0.01 µA", "Low-power sensor"),
            ("50 nA", "0.05 µA", "Battery-powered device"),
            ("100 nA", "0.1 µA", "Biosensor current"),
            ("500 nA", "0.5 µA", "Photodiode current"),
            ("1,000 nA", "1 µA", "Microcontroller standby"),
            ("5,000 nA", "5 µA", "Analog sensor output")
        ],
        "apps": [
            ("📱 Low-Power Electronics", "Battery-powered devices often measure current consumption in nanoamperes and microamperes. Converting helps optimize power budgets.", "500 nA standby current = 0.5 µA for battery life calculation.", "#38bdf8"),
            ("🧬 Biosensors", "Biosensors produce currents in the nanoampere range. Converting to microamperes helps when interfacing with standard measurement equipment.", "100 nA sensor output = 0.1 µA for amplifier design.", "#f97316"),
            ("🔬 Analytical Chemistry", "Electrochemical sensors measure currents in nanoamperes. Converting helps in data analysis and reporting.", "1,000 nA = 1 µA for calibration curves.", "#22c55e")
        ],
        "faqs": [
            ("How do you convert nA to µA?", "To convert nanoamperes (nA) to microamperes (µA), divide by 1,000. Formula: <code>µA = nA ÷ 1,000</code>. For example, 500 nA ÷ 1,000 = 0.5 µA."),
            ("How many nanoamperes are in 1 microampere?", "1 microampere (µA) contains exactly 1,000 nanoamperes (nA). This is because micro = 10⁻⁶ and nano = 10⁻⁹, making the ratio 10⁻⁶/10⁻⁹ = 10³ = 1,000."),
            ("What is the difference between a nanoampere and a microampere?", "A nanoampere (nA) is one-billionth of an ampere (10⁻⁹ A), while a microampere (µA) is one-millionth of an ampere (10⁻⁶ A). A microampere is 1,000 times larger than a nanoampere.")
        ]
    },
    {
        "filename": "nanovolts-to-microvolts.html",
        "title": "Convert Nanovolts to Microvolts (nV to µV) | NanoToMicro",
        "description": "Instantly convert nanovolts (nV) to microvolts (µV) with our exact calculator. Essential for precision metrology, EEG neuroscience, and physics research. 1 nV = 0.001 µV.",
        "headline": "Convert Nanovolts (nV) to Microvolts (µV)",
        "subheading": "Exact conversion tool for precision metrology, EEG neuroscience, and physics research. 1 nV = 0.001 µV (exact SI ratio).",
        "primary_keyword": "nV to µV",
        "secondary_keywords": "nanovolt to microvolt, voltage",
        "target_audience": "Physicists",
        "from_unit": "Nanovolts",
        "from_symbol": "nV",
        "to_unit": "Microvolts",
        "to_symbol": "µV",
        "default_val": "1000",
        "default_res": "1.0",
        "category": "Voltage",
        "table_rows": [
            ("1 nV", "0.001 µV", "Precision voltmeter resolution"),
            ("10 nV", "0.01 µV", "Thermal noise limit in sensors"),
            ("50 nV", "0.05 µV", "Josephson voltage standard step"),
            ("100 nV", "0.1 µV", "Thermoelectric EMF measurement"),
            ("500 nV", "0.5 µV", "High-sensitivity strain gauge"),
            ("1,000 nV", "1 µV", "Evoked brain potentials (EEG)"),
            ("5,000 nV", "5 µV", "Medical bio-potential signal")
        ],
        "apps": [
            ("🧠 Neuroscience & EEG", "Brain waves and evoked potentials produce microvolt signals, while background baseline drift occurs at nanovolt scales. Converting enables precise bio-amplifier calibration.", "1,000 nV EEG potential = 1.0 µV brain signal.", "#38bdf8"),
            ("🔬 Precision Metrology & Thermoelectrics", "Thermocouple Seebeck effect voltages and precision resistance measurements require nanovolt accuracy. Converting helps verify calibration against microvolt reference standards.", "250 nV thermocouple offset = 0.25 µV thermal EMF.", "#22c55e")
        ],
        "faqs": [
            ("How do you convert nV to µV?", "To convert nanovolts (nV) to microvolts (µV), divide by 1,000. Formula: <code>µV = nV ÷ 1,000</code>. For example, 1,000 nV ÷ 1,000 = 1.0 µV."),
            ("How many nanovolts are in 1 microvolt?", "1 microvolt (µV) contains exactly 1,000 nanovolts (nV). This is because micro = 10⁻⁶ and nano = 10⁻⁹, making the ratio 10⁻⁶/10⁻⁹ = 10³ = 1,000."),
            ("What is the difference between a nanovolt and a microvolt?", "A nanovolt (nV) is one-billionth of a volt (10⁻⁹ V), while a microvolt (µV) is one-millionth of a volt (10⁻⁶ V). A microvolt is 1,000 times larger than a nanovolt.")
        ]
    },
    {
        "filename": "nanoliters-to-microliters.html",
        "title": "Convert Nanoliters to Microliters (nL to µL) | NanoToMicro",
        "description": "Instantly convert nanoliters (nL) to microliters (µL) with our exact calculator. Essential for chemistry, biology, and lab research. 1 nL = 0.001 µL.",
        "headline": "Convert Nanoliters (nL) to Microliters (µL)",
        "subheading": "Exact conversion tool for chemistry, biology, and lab research. 1 nL = 0.001 µL (exact SI ratio).",
        "primary_keyword": "nL to µL",
        "secondary_keywords": "nanoliter to microliter, volume",
        "target_audience": "Chemists",
        "from_unit": "Nanoliters",
        "from_symbol": "nL",
        "to_unit": "Microliters",
        "to_symbol": "µL",
        "default_val": "500",
        "default_res": "0.5",
        "category": "Volume",
        "table_rows": [
            ("1 nL", "0.001 µL", "Microfluidic drop"),
            ("10 nL", "0.01 µL", "Inkjet print drop"),
            ("50 nL", "0.05 µL", "Cell culture volume"),
            ("100 nL", "0.1 µL", "PCR reagent volume"),
            ("500 nL", "0.5 µL", "ELISA sample volume"),
            ("1,000 nL", "1 µL", "Standard pipette volume"),
            ("5,000 nL", "5 µL", "Chemical synthesis volume")
        ],
        "apps": [
            ("🧬 Molecular Biology", "PCR reactions often use nanoliter volumes for precise reagent mixing. Converting to microliters helps when preparing master mixes.", "500 nL primer solution = 0.5 µL per reaction.", "#38bdf8"),
            ("💊 Pharmaceutical Research", "Drug discovery uses nanoliter dispensing for high-throughput screening. Converting helps in scaling up to larger volumes.", "100 nL compound = 0.1 µL in assay plate.", "#ef4444"),
            ("🔬 Microfluidics", "Microfluidic devices handle nanoliter volumes for lab-on-a-chip applications. Converting helps in designing experiments.", "1,000 nL channel volume = 1 µL for calibration.", "#22c55e")
        ],
        "faqs": [
            ("How do you convert nL to µL?", "To convert nanoliters (nL) to microliters (µL), divide by 1,000. Formula: <code>µL = nL ÷ 1,000</code>. For example, 500 nL ÷ 1,000 = 0.5 µL."),
            ("How many nanoliters are in 1 microliter?", "1 microliter (µL) contains exactly 1,000 nanoliters (nL). This is because micro = 10⁻⁶ and nano = 10⁻⁹, making the ratio 10⁻⁶/10⁻⁹ = 10³ = 1,000."),
            ("What is the difference between a nanoliter and a microliter?", "A nanoliter (nL) is one-billionth of a liter (10⁻⁹ L), while a microliter (µL) is one-millionth of a liter (10⁻⁶ L). A microliter is 1,000 times larger than a nanoliter.")
        ]
    },
    {
        "filename": "nanocoulombs-to-microcoulombs.html",
        "title": "Convert Nanocoulombs to Microcoulombs (nC to µC) | NanoToMicro",
        "description": "Instantly convert nanocoulombs (nC) to microcoulombs (µC) with our exact calculator. Essential for physics, electronics, and charge measurement. 1 nC = 0.001 µC.",
        "headline": "Convert Nanocoulombs (nC) to Microcoulombs (µC)",
        "subheading": "Exact conversion tool for physics, electronics, and charge measurement. 1 nC = 0.001 µC (exact SI ratio).",
        "primary_keyword": "nC to µC",
        "secondary_keywords": "nanocoulomb to microcoulomb, charge",
        "target_audience": "Physicists",
        "from_unit": "Nanocoulombs",
        "from_symbol": "nC",
        "to_unit": "Microcoulombs",
        "to_symbol": "µC",
        "default_val": "2500",
        "default_res": "2.5",
        "category": "Charge",
        "table_rows": [
            ("1 nC", "0.001 µC", "Single charge measurement"),
            ("10 nC", "0.01 µC", "Electrostatic discharge"),
            ("50 nC", "0.05 µC", "Charge in capacitor"),
            ("100 nC", "0.1 µC", "Sensor charge accumulation"),
            ("500 nC", "0.5 µC", "Piezoelectric charge"),
            ("1,000 nC", "1 µC", "Standard charge quantity"),
            ("5,000 nC", "5 µC", "High charge accumulation")
        ],
        "apps": [
            ("⚡ Electronics", "Capacitor charge calculations often use nanocoulombs and microcoulombs. Converting helps in determining energy storage and discharge characteristics.", "500 nC charge = 0.5 µC in a timing circuit.", "#38bdf8"),
            ("🔬 Physics Research", "Charge measurements in particle physics and material science use nanocoulombs. Converting helps in reporting and comparing data.", "2,500 nC = 2.5 µC in an electrostatic experiment.", "#f97316"),
            ("🔄 Sensor Development", "Piezoelectric and capacitive sensors produce charges in nanocoulombs. Converting helps in designing signal conditioning circuits.", "100 nC = 0.1 µC for amplifier gain calculation.", "#22c55e")
        ],
        "faqs": [
            ("How do you convert nC to µC?", "To convert nanocoulombs (nC) to microcoulombs (µC), divide by 1,000. Formula: <code>µC = nC ÷ 1,000</code>. For example, 2,500 nC ÷ 1,000 = 2.5 µC."),
            ("How many nanocoulombs are in 1 microcoulomb?", "1 microcoulomb (µC) contains exactly 1,000 nanocoulombs (nC). This is because micro = 10⁻⁶ and nano = 10⁻⁹, making the ratio 10⁻⁶/10⁻⁹ = 10³ = 1,000."),
            ("What is the difference between a nanocoulomb and a microcoulomb?", "A nanocoulomb (nC) is one-billionth of a coulomb (10⁻⁹ C), while a microcoulomb (µC) is one-millionth of a coulomb (10⁻⁶ C). A microcoulomb is 1,000 times larger than a nanocoulomb.")
        ]
    },
    {
        "filename": "micro-to-nano.html",
        "title": "Convert Micro to Nano — Instant µ to n Conversion | NanoToMicro",
        "description": "Convert micro to nano instantly with our exact calculator. 1 µ = 1,000 n — always exact. Free online tool for length, mass, time, and more.",
        "headline": "Convert Micro (µ) to Nano (n)",
        "subheading": "Instant calculation tool for scaling from microscale (10⁻⁶) to nanoscale (10⁻⁹). 1 µ = 1,000 n (exact SI ratio).",
        "primary_keyword": "micro to nano",
        "secondary_keywords": "convert micro to nano, micro to nano converter, u to n",
        "target_audience": "Engineers, Scientists, Students",
        "from_unit": "Micro",
        "from_symbol": "µ",
        "to_unit": "Nano",
        "to_symbol": "n",
        "default_val": "2.5",
        "default_res": "2500",
        "direction": "micro_to_nano",
        "formula_op": "× 1,000",
        "formula_desc": "To convert from micro (µ) to nano (n), multiply the numerical value by <strong>1,000</strong>. This standard 10³ scale ratio applies across all SI metric units.",
        "category": "Universal",
        "table_rows": [
            ("0.001 µ", "1 n", "DNA helix diameter (0.0025 µm = 2.5 nm)"),
            ("0.01 µ", "10 n", "Small viral capsid size"),
            ("0.1 µ", "100 n", "Large virus / nanoparticle boundary"),
            ("0.5 µ", "500 n", "Visible green light wavelength"),
            ("1 µ", "1,000 n", "Single bacterium length"),
            ("2.5 µ", "2,500 n", "Cellular organelle size"),
            ("10 µ", "10,000 n", "Human red blood cell width"),
            ("70 µ", "70,000 n", "Human hair cross section width")
        ],
        "apps": [
            ("🔬 Nanotechnology & Metrology", "Translating micron-scale blueprints into atomic-scale nanofabrication masks. When stepping down from microfluidic channels to nanopores, multiplying by 1,000 is required.", "2.5 µm channel feature = 2,500 nm electron-beam spot.", "#38bdf8"),
            ("🧬 Molecular Biology", "Cellular dimensions are specified in micrometers (µm) while proteins and nucleic acids are measured in nanometers (nm).", "1.5 µm bacterium = 1,500 nm length.", "#22c55e"),
            ("💻 Semiconductor Fabrication", "Photolithography stepper reticles designed in micrometers project down to nanometer-scale gate features.", "0.05 µm gate design = 50 nm physical gate.", "#ef4444")
        ],
        "faqs": [
            ("How do you convert micro to nano?", "To convert from micro (µ) to nano (n), multiply the value by 1,000. Formula: <code>nano = micro × 1,000</code>. For example: 2.5 µm × 1,000 = 2,500 nm."),
            ("How many nano are in 1 micro?", "There are exactly 1,000 nano in 1 micro. This is because micro represents 10⁻⁶ and nano represents 10⁻⁹, making the ratio 10⁻⁶ / 10⁻⁹ = 1,000."),
            ("What is the formula for converting micro to nano?", "The formula is: <code>nano = micro × 1,000</code>. If converting in reverse (nano to micro), divide by 1,000.")
        ]
    },
    {
        "filename": "nano-to-milli.html",
        "title": "Convert Nano to Milli — Instant n to m Conversion | NanoToMicro",
        "description": "Convert nano to milli instantly with our exact calculator. 1 n = 0.000001 m — always exact. Free online tool for length, mass, volume, and more.",
        "headline": "Convert Nano (n) to Milli (m)",
        "subheading": "Precision SI metric conversion tool from nanoscale (10⁻⁹) to milliscale (10⁻³). 1 n = 0.000001 m (exact 1,000,000x ratio).",
        "primary_keyword": "nano to milli",
        "secondary_keywords": "convert nano to milli, nano to milli converter, nm to mm, n to m",
        "target_audience": "Engineers, Chemists, Metrologists",
        "from_unit": "Nano",
        "from_symbol": "n",
        "to_unit": "Milli",
        "to_symbol": "m",
        "default_val": "1000000",
        "default_res": "1",
        "factor": 1000000,
        "formula_op": "÷ 1,000,000",
        "formula_desc": "To convert from nano (n) to milli (m), divide the numerical value by <strong>1,000,000</strong> (or multiply by 0.000001). This exact 10⁻⁶ ratio bridges atomic scales directly to macroscopic millimeter dimensions.",
        "category": "Universal",
        "table_rows": [
            ("1 n", "0.000001 m", "Single atom width (0.1 nm = 0.0000001 mm)"),
            ("1,000 n", "0.001 m", "1 µm = 0.001 mm (Bacterial cell length)"),
            ("10,000 n", "0.01 m", "Cell nucleus diameter (0.01 mm)"),
            ("100,000 n", "0.1 m", "Fine human hair diameter (0.1 mm)"),
            ("500,000 n", "0.5 m", "Mechanical pencil lead tip width (0.5 mm)"),
            ("1,000,000 n", "1 m", "1 millimeter exact benchmark (1,000,000 nm = 1 mm)"),
            ("5,000,000 n", "5 m", "Small sesame seed width (5 mm)"),
            ("10,000,000 n", "10 m", "1 centimeter (10 mm = 10,000,000 nm)")
        ],
        "apps": [
            ("🔬 Precision Manufacturing & Machining", "Translating semiconductor e-beam lithography features (nm) into CNC macro tooling and precision tolerances (mm).", "1,000,000 nm precision tolerance = 1.0 mm.", "#38bdf8"),
            ("🧪 Analytical Chemistry & Pharmacology", "Converting nanograms (ng) or nanoliters (nL) directly to milligrams (mg) or milliliters (mL) for standard drug dosage formulations.", "5,000,000 ng pharmaceutical active API = 5.0 mg.", "#22c55e"),
            ("📡 Optical Engineering & Lasers", "Converting laser cavity beam diameters and optical fiber core dimensions from nanometers to millimeters.", "250,000 nm fiber cladding = 0.25 mm.", "#ef4444")
        ],
        "faqs": [
            ("How do you convert nano to milli?", "To convert from nano (n) to milli (m), divide the value by 1,000,000 (or multiply by 0.000001). Formula: <code>milli = nano ÷ 1,000,000</code>. For example: 1,000,000 nm ÷ 1,000,000 = 1 mm."),
            ("How many nano are in 1 milli?", "There are exactly 1,000,000 nano in 1 milli. Because milli is 10⁻³ and nano is 10⁻⁹, the ratio is 10⁻³ / 10⁻⁹ = 10⁶ = 1,000,000."),
            ("How many nanometers are in a millimeter?", "1 millimeter (mm) contains exactly 1,000,000 nanometers (nm). For example: a 0.5 mm pencil lead is 500,000 nm wide.")
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
        border_color = app[3] if len(app) > 3 else "#38bdf8"
        ex_html = f'<p style="margin-top: 10px; color: #94a3b8;"><strong style="color: #ffffff;">Example:</strong> {example}</p>' if example else ""
        apps_items.append(f"""        <div class="app-card" style="border-left: 4px solid {border_color};">
            <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 8px;">{title}</h4>
            <p style="color: #cbd5e1; margin-bottom: 0;">{desc}</p>
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
        ("nanocoulombs-to-microcoulombs.html", "Nanocoulombs to Microcoulombs (nC to µC)"),
        ("micro-to-nano.html", "Micro to Nano (µ to n)"),
        ("nano-to-milli.html", "Nano to Milli (n to m)")
    ]
    related_items = [f'            <li>➡️ <a href="/converters/{l[0]}">{l[1]}</a></li>' for l in all_links if l[0] != p["filename"]]
    related_html = "\n".join(related_items[:4]) + '\n            <li>➡️ <a href="/physics/">Physics Research Hub</a></li>'
    
    factor = p.get("factor", 1000)
    factor_str = f"{factor:,}"
    formula_op = p.get("formula_op", f"÷ {factor_str}")
    formula_box_init = f"{p['to_symbol']} = {p['from_symbol']} {formula_op}"
    formula_desc_text = p.get("formula_desc", f"To convert from {p['from_unit'].lower()} ({p['from_symbol']}) to {p['to_unit'].lower()} ({p['to_symbol']}), divide the numerical value by <strong>{factor_str}</strong>. This standard scale ratio applies across all SI metric units.")
    init_direction = "false" if p.get("direction") == "micro_to_nano" else "true"
    init_formula_display = f"{p['default_val']} {p['from_symbol']} {formula_op} = {p['default_res']} {p['to_symbol']}"

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
    
    <!-- ===== BREADCRUMB SCHEMA MARKUP ===== -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://nanotomicro.com/"
            }},
            {{
                "@type": "ListItem",
                "position": 2,
                "name": "Converters",
                "item": "https://nanotomicro.com/converters/"
            }},
            {{
                "@type": "ListItem",
                "position": 3,
                "name": "{p['from_unit']} to {p['to_unit']}",
                "item": "https://nanotomicro.com/converters/{p['filename']}"
            }}
        ]
    }}
    </script>
    
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #cbd5e1;
            background: #070b12;
            background-image: radial-gradient(circle at 50% 0%, #152033 0%, #070b12 100%);
            background-attachment: fixed;
            max-width: 1280px;
            margin: 0 auto;
            padding: 20px;
        }}
        
        /* Sticky Progress Bar */
        .progress-bar {{
            height: 3px;
            background: linear-gradient(90deg, #38bdf8, #fbbf24);
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            z-index: 1000;
        }}
        
        /* Navigation */
        .nav {{
            background: rgba(15, 22, 35, 0.95);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(79, 195, 247, 0.2);
            padding: 15px 24px;
            border-radius: 12px;
            margin-bottom: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }}
        .logo {{
            color: #ffffff;
            font-size: 22px;
            font-weight: 800;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }}
        .logo span {{ color: #38bdf8; }}
        .nav-links {{ display: flex; gap: 20px; flex-wrap: wrap; align-items: center; }}
        .nav-links a {{
            color: #cbd5e1;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: color 0.2s;
        }}
        .nav-links a:hover {{ color: #38bdf8; }}
        
        /* Breadcrumb Styles */
        .breadcrumb-nav {{
            margin-bottom: 20px;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }}
        .breadcrumb {{
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
            font-size: 0.9rem;
            flex-wrap: wrap;
            gap: 5px;
            align-items: center;
        }}
        .breadcrumb-item {{ display: inline-flex; align-items: center; }}
        .breadcrumb-item a {{
            color: #38bdf8;
            text-decoration: none;
            transition: color 0.2s;
        }}
        .breadcrumb-item a:hover {{
            color: #fbbf24;
            text-decoration: underline;
        }}
        .breadcrumb-item.active {{
            color: #cbd5e1;
            font-weight: 500;
        }}
        
        /* Main Headings */
        h1 {{
            font-size: clamp(1.85rem, 4vw, 2.5rem);
            margin-bottom: 12px;
            color: #ffffff;
            font-weight: 800;
            letter-spacing: -0.02em;
        }}
        h2 {{
            font-size: clamp(1.4rem, 3vw, 1.8rem);
            margin: 40px 0 16px;
            color: #ffffff;
            font-weight: 800;
            letter-spacing: -0.01em;
        }}
        h3 {{
            font-size: 1.25rem;
            margin: 0 0 8px;
            color: #ffffff;
            font-weight: 700;
        }}
        p {{ margin-bottom: 16px; line-height: 1.7; color: #cbd5e1; }}
        
        /* Converter Card */
        .converter-card {{
            background: #0f1623;
            padding: 30px;
            border-radius: 16px;
            margin: 24px 0;
            border: 1px solid rgba(79, 195, 247, 0.25);
            box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.6);
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
            color: #f8fafc;
            font-size: 0.95rem;
        }}
        .input-group input {{
            width: 100%;
            padding: 14px 16px;
            font-size: 1.25rem;
            font-family: ui-monospace, monospace;
            font-weight: 700;
            color: #ffffff;
            background: #152033;
            border: 2px solid rgba(79, 195, 247, 0.3);
            border-radius: 10px;
            transition: border-color 0.2s, box-shadow 0.2s;
        }}
        .input-group input:focus {{
            border-color: #38bdf8;
            box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);
            outline: none;
        }}
        #microOutput {{
            background: #090e17 !important;
            border-color: rgba(79, 195, 247, 0.35) !important;
            color: #38bdf8 !important;
        }}
        .swap-btn {{
            padding: 12px 18px;
            background: #152033;
            color: #38bdf8;
            border: 2px solid rgba(79, 195, 247, 0.35);
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
            background: #38bdf8;
            color: #070b12;
            border-color: #38bdf8;
            transform: scale(1.04);
        }}
        
        .formula-display-wrap {{
            text-align: center;
            margin-top: 18px;
        }}
        .formula-display {{
            font-family: ui-monospace, monospace;
            background: #0b111e;
            color: #38bdf8;
            padding: 10px 20px;
            border-radius: 8px;
            display: inline-block;
            font-weight: 700;
            font-size: 1.05rem;
            border: 1px solid rgba(79, 195, 247, 0.25);
        }}
        
        /* Formula Box */
        .formula-box {{
            background: #0b111e;
            color: #ffffff;
            padding: 20px;
            border-radius: 12px;
            margin: 20px 0;
            text-align: center;
            font-size: 1.35rem;
            font-family: ui-monospace, monospace;
            border: 1px solid rgba(79, 195, 247, 0.3);
        }}
        .formula-box span {{ color: #38bdf8; font-weight: 800; }}
        
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
            background: #0f1623;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            padding: 20px;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }}
        .app-card:hover {{
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
        }}
        
        /* Table */
        .table-wrap {{
            overflow-x: auto;
            margin: 20px 0;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: #0f1623;
        }}
        table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 0.95rem;
        }}
        th, td {{
            padding: 12px 16px;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }}
        th {{
            background: #152033;
            color: #38bdf8;
            font-weight: 700;
            border-bottom: 1px solid rgba(79, 195, 247, 0.3);
        }}
        tr:nth-child(even) {{ background: rgba(255, 255, 255, 0.02); }}
        tr:hover {{ background: rgba(56, 189, 248, 0.04); }}
        
        /* FAQ Accordion */
        .faq-item {{
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            margin: 12px 0;
            overflow: hidden;
            background: #0f1623;
        }}
        .faq-question {{
            width: 100%;
            padding: 16px 20px;
            background: #0f1623;
            border: none;
            text-align: left;
            font-size: 1.05rem;
            font-weight: 700;
            color: #ffffff;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background 0.2s;
        }}
        .faq-question:hover {{ background: #152033; }}
        .faq-icon {{
            font-size: 1.4rem;
            color: #38bdf8;
            transition: transform 0.3s;
        }}
        .faq-answer {{
            padding: 18px 20px;
            display: none;
            background: #0b111e;
            color: #cbd5e1;
            line-height: 1.7;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
        }}
        .faq-answer.active {{ display: block; }}
        
        /* Related Links */
        .related-links {{
            background: #0f1623;
            border: 1px solid rgba(79, 195, 247, 0.25);
            padding: 24px;
            border-radius: 12px;
            margin: 36px 0;
        }}
        .related-links h3 {{
            margin-top: 0;
            color: #38bdf8;
        }}
        .related-links ul {{ list-style: none; padding-left: 0; }}
        .related-links li {{ margin: 10px 0; }}
        .related-links a {{
            color: #38bdf8;
            text-decoration: none;
            font-weight: 600;
        }}
        .related-links a:hover {{ text-decoration: underline; color: #fbbf24; }}
        
        /* Footer */
        .site-footer {{
            margin-top: 60px;
            padding: 48px 0 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: #94a3b8;
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
            color: #ffffff;
            text-decoration: none;
            display: inline-block;
            margin-bottom: 12px;
        }}
        .footer-logo span {{ color: #38bdf8; }}
        .footer-col h4 {{
            color: #ffffff;
            font-size: 0.95rem;
            margin-bottom: 12px;
            font-weight: 700;
        }}
        .footer-col ul {{ list-style: none; }}
        .footer-col li {{ margin-bottom: 8px; }}
        .footer-col a {{
            color: #94a3b8;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.2s;
        }}
        .footer-col a:hover {{ color: #38bdf8; }}
        .footer-bottom {{
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
            font-size: 0.88rem;
        }}
        .footer-bottom a {{ color: #94a3b8; text-decoration: none; }}
        .footer-bottom a:hover {{ color: #38bdf8; }}
        
        /* Mobile Breakpoints */
        @media (max-width: 768px) {{
            body {{ padding: 14px; }}
            .nav {{ flex-direction: column; align-items: flex-start; gap: 14px; padding: 14px 18px; }}
            .nav-links {{ width: 100%; justify-content: space-between; }}
            .converter-grid {{ grid-template-columns: 1fr; gap: 14px; }}
            .swap-btn {{ width: 100%; justify-content: center; }}
            .footer-grid {{ grid-template-columns: 1fr; gap: 24px; }}
        }}
    </style>
</head>
<body>

<div class="progress-bar" id="progressBar"></div>

<nav class="nav">
    <a href="/" class="logo">Nano<span>To</span>Micro</a>
    <div class="nav-links">
        <a href="/">Home</a>
        <a href="/converters/">Converters</a>
        <a href="/physics/">Physics Hub</a>
        <a href="/guides/">Guides</a>
    </div>
<!-- ===== BREADCRUMB NAVIGATION ===== -->
<nav aria-label="Breadcrumb" class="breadcrumb-nav">
    <ol class="breadcrumb" style="display: flex; list-style: none; padding: 0; margin: 0 0 20px 0; font-size: 0.9rem; flex-wrap: wrap; gap: 5px; align-items: center;">
        <li class="breadcrumb-item">
            <a href="/" style="color: #38bdf8; text-decoration: none;">Home</a>
        </li>
        <li class="breadcrumb-item" style="color: #94a3b8; user-select: none;">›</li>
        
        <!-- ===== CHANGE THIS SECTION FOR EACH PAGE ===== -->
        
        <!-- For Converter Pages (e.g., {p['filename']}) -->
        <li class="breadcrumb-item">
            <a href="/converters/" style="color: #38bdf8; text-decoration: none;">Converters</a>
        </li>
        <li class="breadcrumb-item" style="color: #94a3b8; user-select: none;">›</li>
        <li class="breadcrumb-item active" aria-current="page" style="color: #cbd5e1; font-weight: 500;">{p['from_unit']} to {p['to_unit']}</li>
        
        <!-- ===== END OF VARIABLE SECTION ===== -->
        
    </ol>
</nav>

<main>
    <h1>{p['headline']}</h1>
    <p style="font-size: 1.1rem; color: #94a3b8;">{p['subheading']}</p>
    
    <div class="converter-card">
        <div class="converter-grid">
            <div class="input-group">
                <label for="nanoInput">{p['from_unit']} ({p['from_symbol']})</label>
                <input type="number" id="nanoInput" value="{p['default_val']}" step="any">
            </div>
            <div>
                <button class="swap-btn" onclick="swapValues()">⇄ Swap</button>
            </div>
            <div class="input-group">
                <label for="microOutput">{p['to_unit']} ({p['to_symbol']})</label>
                <input type="text" id="microOutput" value="{p['default_res']}" readonly>
            </div>
        </div>
        <div class="formula-display-wrap">
            <span class="formula-display" id="liveFormula">
                {init_formula_display}
            </span>
        </div>
    </div>
    
    <h2>Quick Conversion Table: {p['from_symbol']} to {p['to_symbol']}</h2>
    <div class="table-wrap">
        <table>
            <thead>
                <tr><th>{p['from_unit']} ({p['from_symbol']})</th><th>{p['to_unit']} ({p['to_symbol']})</th><th>Real-World Benchmark</th></tr>
            </thead>
            <tbody>
{rows_html}
            </tbody>
        </table>
    </div>
    
    <h2>The Formula: {p['from_symbol']} to {p['to_symbol']}</h2>
    <div class="formula-box">
        <span id="formulaBoxText">{formula_box_init}</span>
    </div>
    <p>{formula_desc_text}</p>
    
    <section class="applications-section">
        <h2>🔬 Real-World Applications</h2>
        <div class="application-grid">
{apps_html}
        </div>
    </section>
    
    <h2>Frequently Asked Questions</h2>
{faqs_html}
    
    <div class="related-links">
        <h3>📚 Explore More Converters & Precision Guides</h3>
        <ul>
{related_html}
        </ul>
    </div>
</main>

<footer class="site-footer">
    <div class="footer-grid">
        <div>
            <a href="/" class="footer-logo">Nano<span>To</span>Micro</a>
            <p style="color: #94a3b8; font-size: 0.9rem; margin-top: 8px;">Precision SI metric prefix conversion calculators and physics metrology guides for engineers, scientists, and researchers worldwide.</p>
        </div>
        <div class="footer-col">
            <h4>Converters</h4>
            <ul>
                <li><a href="/converters/nanometers-to-micrometers.html">nm to µm</a></li>
                <li><a href="/converters/nanograms-to-micrograms.html">ng to µg</a></li>
                <li><a href="/converters/nanoseconds-to-microseconds.html">ns to µs</a></li>
                <li><a href="/converters/nanofarads-to-microfarads.html">nF to µF</a></li>
                <li><a href="/converters/micro-to-nano.html">µ to n</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Physics Hub</h4>
            <ul>
                <li><a href="/physics/">Physics Research</a></li>
                <li><a href="/guides/">All Guides</a></li>
                <li><a href="/converters/">All Converters</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/physics/#faq">FAQ</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>© 2026 NanoToMicro.com — Precision Metric Conversions & Physics Education</p>
        <p><a href="/">Privacy & Terms</a></p>
    </div>
</footer>

<script>
    let isNanoToMicro = {init_direction};
    const fromSymbol = "{p['from_symbol']}";
    const toSymbol = "{p['to_symbol']}";
    const fromUnit = "{p['from_unit']}";
    const toUnit = "{p['to_unit']}";
    const factor = {factor};
    const factorStr = "{factor_str}";
    const isMicroToNano = {"true" if p.get("direction") == "micro_to_nano" else "false"};
    
    const nanoInput = document.getElementById('nanoInput');
    const microOutput = document.getElementById('microOutput');
    const liveFormula = document.getElementById('liveFormula');
    const formulaBoxText = document.getElementById('formulaBoxText');
    
    function calculate() {{
        const val = parseFloat(nanoInput.value);
        if (isNaN(val)) {{
            microOutput.value = "";
            liveFormula.textContent = "Please enter a valid number";
            return;
        }}
        if (!isMicroToNano) {{
            if (isNanoToMicro) {{
                const res = val / factor;
                microOutput.value = (Math.round(res * 100000000) / 100000000).toString();
                liveFormula.textContent = `${{val.toLocaleString()}} ${{fromSymbol}} ÷ ${{factorStr}} = ${{microOutput.value}} ${{toSymbol}}`;
            }} else {{
                const res = val * factor;
                microOutput.value = (Math.round(res * 100000000) / 100000000).toString();
                liveFormula.textContent = `${{val.toLocaleString()}} ${{toSymbol}} × ${{factorStr}} = ${{microOutput.value}} ${{fromSymbol}}`;
            }}
        }} else {{
            if (!isNanoToMicro) {{
                const res = val * factor;
                microOutput.value = (Math.round(res * 100000000) / 100000000).toString();
                liveFormula.textContent = `${{val.toLocaleString()}} ${{fromSymbol}} × ${{factorStr}} = ${{microOutput.value}} ${{toSymbol}}`;
            }} else {{
                const res = val / factor;
                microOutput.value = (Math.round(res * 100000000) / 100000000).toString();
                liveFormula.textContent = `${{val.toLocaleString()}} ${{toSymbol}} ÷ ${{factorStr}} = ${{microOutput.value}} ${{fromSymbol}}`;
            }}
        }}
    }}
    
    nanoInput.addEventListener('input', calculate);
    
    function swapValues() {{
        isNanoToMicro = !isNanoToMicro;
        const currentInput = nanoInput.value;
        const currentOutput = microOutput.value;
        
        const labelLeft = document.querySelector('.input-group:first-child label');
        const labelRight = document.querySelector('.input-group:last-child label');
        
        if (!isMicroToNano) {{
            if (isNanoToMicro) {{
                labelLeft.textContent = `${{fromUnit}} (${{fromSymbol}})`;
                labelRight.textContent = `${{toUnit}} (${{toSymbol}})`;
                formulaBoxText.textContent = `${{toSymbol}} = ${{fromSymbol}} ÷ ${{factorStr}}`;
            }} else {{
                labelLeft.textContent = `${{toUnit}} (${{toSymbol}})`;
                labelRight.textContent = `${{fromUnit}} (${{fromSymbol}})`;
                formulaBoxText.textContent = `${{fromSymbol}} = ${{toSymbol}} × ${{factorStr}}`;
            }}
        }} else {{
            if (!isNanoToMicro) {{
                labelLeft.textContent = `${{fromUnit}} (${{fromSymbol}})`;
                labelRight.textContent = `${{toUnit}} (${{toSymbol}})`;
                formulaBoxText.textContent = `${{toSymbol}} = ${{fromSymbol}} × ${{factorStr}}`;
            }} else {{
                labelLeft.textContent = `${{toUnit}} (${{toSymbol}})`;
                labelRight.textContent = `${{fromUnit}} (${{fromSymbol}})`;
                formulaBoxText.textContent = `${{fromSymbol}} = ${{toSymbol}} ÷ ${{factorStr}}`;
            }}
        }}
        
        nanoInput.value = currentOutput || "1";
        calculate();
    }}
    
    function toggleFAQ(button) {{
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.faq-icon');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {{
            button.setAttribute('aria-expanded', 'false');
            answer.classList.remove('active');
            icon.textContent = '+';
        }} else {{
            button.setAttribute('aria-expanded', 'true');
            answer.classList.add('active');
            icon.textContent = '−';
        }}
    }}
    
    window.addEventListener('scroll', () => {{
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('progressBar').style.width = scrolled + '%';
    }});
</script>

</body>
</html>"""
    return html

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for p in PAGES:
        file_path = os.path.join(OUTPUT_DIR, p["filename"])
        content = build_html(p)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Generated dark theme: {file_path}")

if __name__ == "__main__":
    main()
