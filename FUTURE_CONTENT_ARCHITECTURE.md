# NanoToMicro Future Authority Content Architecture

This document defines the content strategy, semantic purpose, heading hierarchy, target search intent, and primary sources for 15 planned supporting authority articles across the Length, Time, and Radiation clusters.

---

## 1. Length Cluster Architecture

### 1.1 `/length/nanometer-vs-micrometer/`
* **Title**: Nanometer vs Micrometer: Key Differences, Scale & Uses
* **Distinct Question Answered**: What is the fundamental difference between nanometer and micrometer scales?
* **Semantic Purpose**: Direct side-by-side comparison of $10^{-9}\text{ m}$ vs $10^{-6}\text{ m}$ with physical scale benchmarks.
* **Key Outline**:
  - H1: Nanometer vs Micrometer: What Is the Difference?
  - H2: Prefix & Scale Comparison Table ($10^{-9}\text{ m}$ vs $10^{-6}\text{ m}$)
  - H2: The Nanometer Scale (Molecules, Light Wavelengths, Transistors)
  - H2: The Micrometer Scale (Cells, Dust, Microscopic Fibers)
  - H2: How to Convert Between Nanometers and Micrometers
* **Primary Sources**: BIPM SI Brochure (9th Ed), NIST SP 330.

### 1.2 `/guides/semiconductor-process-nodes-explained/`
* **Title**: Semiconductor Process Nodes Explained: What 3nm and 5nm Really Mean
* **Distinct Question Answered**: Why are 3nm and 5nm chip process nodes technology generation names rather than literal gate widths?
* **Semantic Purpose**: Demystify transistor logic node terminology vs physical contact gate pitch and fin height.
* **Key Outline**:
  - H1: Semiconductor Process Nodes Explained
  - H2: The Evolution from Physical Gate Lengths to Technology Generations
  - H2: FinFET, GAAFET, and N nanosheet Architectures
  - H2: Why a "3nm" Transistor Is Not Literally 3 Nanometers Wide
  - H2: Converting Process Node Metrics (nm to µm)
* **Primary Sources**: IEEE International Roadmap for Devices and Systems (IRDS), TSMC Technical Papers.

### 1.3 `/guides/visible-light-wavelength-nm-to-um/`
* **Title**: Visible Light Wavelength Spectrum: Nanometers (nm) to Micrometers (µm)
* **Distinct Question Answered**: How do optical engineers convert electromagnetic spectrum wavelengths from nanometers (nm) to micrometers (µm)?
* **Semantic Purpose**: Provide exact color wavelength boundaries (380–700 nm = 0.38–0.70 µm) and optical fiber bands.
* **Key Outline**:
  - H1: Visible Light Wavelength Spectrum in nm and µm
  - H2: Visible Color Spectrum Wavelength Table (Violet to Red)
  - H2: Ultraviolet and Infrared Boundary Transitions
  - H2: Why Optics Uses Both Nanometers and Micrometers
  - H2: Wavelength Conversion Formula ($nm \div 1000 = \mu m$)
* **Primary Sources**: NASA Science Electromagnetic Spectrum, NIST Physics Laboratory.

### 1.4 `/guides/cell-size-in-micrometers/`
* **Title**: Cellular Scale Guide: Biological Dimensions in Micrometers and Nanometers
* **Distinct Question Answered**: What are the typical physical dimensions of human cells, organelles, and viruses in micrometers?
* **Semantic Purpose**: Comprehensive biological dimension reference for erythrocytes, leukocytes, bacteria, and organelles.
* **Key Outline**:
  - H1: Cell Size in Micrometers & Nanometers
  - H2: Human Cell Dimensions (Red Blood Cells, Neurons, Sperm Cells)
  - H2: Bacterial and Organelle Sizes (E. coli, Mitochondria, Ribosomes)
  - H2: Virus vs Bacteria Scale Comparison (nm vs µm)
  - H2: Light Microscopy vs Electron Microscopy Resolution Limits
* **Primary Sources**: NCBI Cell Biology, NIH National Human Genome Research Institute.

### 1.5 `/length/um-to-nm/`
* **Title**: Micrometers to Nanometers Converter (µm to nm)
* **Distinct Question Answered**: How do you convert micrometers (µm) back to nanometers (nm)?
* **Semantic Purpose**: Reverse-conversion spoke multiplying micrometer values by 1,000.
* **Key Outline**:
  - H1: Convert Micrometers to Nanometers (µm to nm)
  - H2: Micrometers to Nanometers Calculator ($nm = \mu m \times 1000$)
  - H2: Reverse Conversion Formula & Worked Examples
  - H2: Conversion Reference Table (0.001 µm to 1,000 µm)
* **Primary Sources**: BIPM SI Brochure, NIST.

---

## 2. Time Cluster Architecture

### 2.1 `/time/nanosecond-vs-microsecond/`
* **Title**: Nanosecond vs Microsecond: Latency Scales & System Performance
* **Distinct Question Answered**: What is the difference between nanosecond and microsecond timing in computing and physics?
* **Semantic Purpose**: Direct comparison of $10^{-9}\text{ s}$ vs $10^{-6}\text{ s}$ for software engineers and hardware architects.
* **Key Outline**:
  - H1: Nanosecond vs Microsecond: Key Differences & Latency Guide
  - H2: Time Scale Comparison Table ($10^{-9}\text{ s}$ vs $10^{-6}\text{ s}$)
  - H2: What Happens in One Nanosecond? (Light travel, CPU cycles)
  - H2: What Happens in One Microsecond? (OS context switches, NVMe reads)
  - H2: Conversion Guide between ns and µs
* **Primary Sources**: BIPM SI Brochure, IEEE.

### 2.2 `/guides/cpu-clock-period-calculator/`
* **Title**: CPU Clock Period Calculator & Frequency Guide (GHz to ns)
* **Distinct Question Answered**: How do you calculate a processor clock cycle period in nanoseconds from frequency in gigahertz?
* **Semantic Purpose**: Provide mathematical formula $t = 1/f$ for converting CPU frequency (e.g. 4.0 GHz = 0.25 ns clock period).
* **Key Outline**:
  - H1: CPU Clock Period Calculator
  - H2: Clock Frequency to Clock Period Conversion Formula ($t = 1/f$)
  - H2: Frequency vs Period Lookup Table (1 MHz to 6 GHz)
  - H2: Clock Cycles vs Instruction Execution (IPC & Pipelining)
* **Primary Sources**: Intel 64 and IA-32 Architectures Manual, AMD Software Optimization.

### 2.3 `/guides/latency-units-ns-us-ms/`
* **Title**: Computer Latency Units: Nanoseconds (ns), Microseconds (µs), and Milliseconds (ms)
* **Distinct Question Answered**: How do hardware and software latency numbers span from nanoseconds to milliseconds?
* **Semantic Purpose**: Complete latency numbers every programmer should know (L1 cache vs RAM vs SSD vs Network Ping).
* **Key Outline**:
  - H1: Latency Units Explained: ns, µs, and ms
  - H2: The Programmer's Latency Hierarchy Spectrum
  - H2: Hardware Latency (Cycles, Caches, DRAM)
  - H2: Operating System & I/O Latency (Context Switches, NVMe SSD)
  - H2: Network & Web Latency (Datacenter RTT, WAN Ping)
* **Primary Sources**: ACM SIGARCH, Peter Norvig Latency Numbers.

### 2.4 `/guides/ram-latency-nanoseconds/`
* **Title**: RAM Latency in Nanoseconds: CAS Timings & Memory Speed Guide
* **Distinct Question Answered**: How do you convert DDR4/DDR5 CAS latency cycle counts into true nanoseconds?
* **Semantic Purpose**: Guide for converting RAM timing specs (e.g. DDR4-3200 CL16 = 10 ns) into actual latency time.
* **Key Outline**:
  - H1: RAM Latency in Nanoseconds
  - H2: CAS Latency (CL) Cycle Count vs Absolute Time
  - H2: The Formula for True RAM Latency ($t_{\text{ns}} = (\text{CL} / f_{\text{clock}}) \times 1000$)
  - H2: DDR4 vs DDR5 Latency Comparison Matrix
* **Primary Sources**: JEDEC SDRAM Specifications (JESD79).

### 2.5 `/time/us-to-ns/`
* **Title**: Microseconds to Nanoseconds Converter (µs to ns)
* **Distinct Question Answered**: How do you convert microseconds (µs) back to nanoseconds (ns)?
* **Semantic Purpose**: Reverse-conversion spoke multiplying microsecond values by 1,000.
* **Key Outline**:
  - H1: Convert Microseconds to Nanoseconds (µs to ns)
  - H2: Microseconds to Nanoseconds Calculator ($ns = \mu s \times 1000$)
  - H2: Reverse Conversion Formula & Worked Examples
  - H2: Reference Conversion Table (0.001 µs to 1,000 µs)
* **Primary Sources**: BIPM SI Brochure, NIST.

---

## 3. Radiation Cluster Architecture

### 3.1 `/radiation/nanosievert-vs-microsievert/`
* **Title**: Nanosievert vs Microsievert: Scale Comparison & Radiation Units
* **Distinct Question Answered**: What is the difference between nanosievert (nSv) and microsievert (µSv) radiation units?
* **Semantic Purpose**: Side-by-side comparison of $10^{-9}\text{ Sv}$ vs $10^{-6}\text{ Sv}$ with strict educational disclaimers.
* **Key Outline**:
  - H1: Nanosievert vs Microsievert
  - H2: Sievert Prefix Scale Table (nSv vs µSv)
  - H2: When Are Nanosieverts Used? (Low background scintillation monitoring)
  - H2: When Are Microsieverts Used? (Personal dosimetry, diagnostic imaging)
  - H2: Conversion Formula ($1\text{ }\mu\text{Sv} = 1,000\text{ nSv}$)
* **Primary Sources**: ICRP Publication 103, IAEA GSR Part 3.

### 3.2 `/radiation/usv-vs-usv-per-hour/`
* **Title**: µSv vs µSv/h: Accumulated Radiation Dose vs Dose Rate
* **Distinct Question Answered**: What is the crucial difference between an accumulated dose in µSv and a dose rate in µSv/h?
* **Semantic Purpose**: Educational article explaining dose quantity vs time rate of exposure to prevent unit confusion.
* **Key Outline**:
  - H1: Difference Between µSv and µSv/h
  - H2: Dose (µSv) vs Dose Rate (µSv/h) Comparison Table
  - H2: Calculating Total Accumulated Dose ($Dose = Rate \times Time$)
  - H2: Radiation Detector Displays and Operational Quantities
* **Primary Sources**: UK Health Security Agency (UKHSA), IAEA.

### 3.3 `/radiation/usv-to-msv/`
* **Title**: Microsieverts to Millisieverts Converter (µSv to mSv)
* **Distinct Question Answered**: How do you convert microsieverts (µSv) to millisieverts (mSv)?
* **Semantic Purpose**: Adjacent dosimetric scale converter dividing microsievert values by 1,000.
* **Key Outline**:
  - H1: Convert Microsieverts to Millisieverts (µSv to mSv)
  - H2: Microsievert to Millisievert Calculator ($mSv = \mu Sv \div 1000$)
  - H2: Reference Conversion Table (1 µSv to 100,000 µSv)
  - H2: Annual Radiation Exposure Limits Context (1 mSv public limit)
* **Primary Sources**: ICRP Publication 103, IAEA.

### 3.4 `/guides/sievert-gray-becquerel-difference/`
* **Title**: Sievert vs Gray vs Becquerel: Radiation Units Explained
* **Distinct Question Answered**: What is the difference between Becquerel (activity), Gray (absorbed dose), and Sievert (effective dose)?
* **Semantic Purpose**: Authoritative guide on SI radiation units and why they cannot be converted without physical parameters.
* **Key Outline**:
  - H1: Sievert vs Gray vs Becquerel
  - H2: Radioactivity vs Absorbed Energy vs Biological Detriment
  - H2: The Becquerel (Bq) — Disintegrations per Second
  - H2: The Gray (Gy) — Absorbed Dose Energy ($J/kg$)
  - H2: The Sievert (Sv) — Radiation Weighting ($W_R$) and Tissue Weighting ($W_T$)
* **Primary Sources**: BIPM SI Brochure, NIST SP 330, ICRP.

### 3.5 `/radiation/usv-to-nsv/`
* **Title**: Microsieverts to Nanosieverts Converter (µSv to nSv)
* **Distinct Question Answered**: How do you convert microsieverts (µSv) back to nanosieverts (nSv)?
* **Semantic Purpose**: Reverse-conversion spoke multiplying microsievert values by 1,000.
* **Key Outline**:
  - H1: Convert Microsieverts to Nanosieverts (µSv to nSv)
  - H2: Microsieverts to Nanosieverts Calculator ($nSv = \mu Sv \times 1000$)
  - H2: Formula & Worked Calculation Examples
  - H2: Reference Conversion Table (0.001 µSv to 1,000 µSv)
* **Primary Sources**: ICRP Publication 103, IAEA.
