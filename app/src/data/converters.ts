import { EXPANSION_CONVERTERS } from './converters-expansion';

export interface Faq {
  q: string;
  a: string;
}

export interface ConverterDef {
  slug: string;
  category: string;
  fromName: string;
  fromNamePlural: string;
  fromSymbol: string;
  toName: string;
  toNamePlural: string;
  toSymbol: string;
  /** multiply a value in "from" by this factor to get "to" */
  factor: number;
  reverseSlug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  aboutFrom: string;
  aboutTo: string;
  useCases: string[];
  exampleInput: number;
  faqs: Faq[];
  tableValues: number[];
}

const STD_TABLE = [1, 2, 3, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000, 10000];

export const CONVERTERS: ConverterDef[] = [
  // ───────────────────────── LENGTH ─────────────────────────
  {
    slug: 'nanometers-to-micrometers',
    category: 'Length',
    fromName: 'Nanometer', fromNamePlural: 'Nanometers', fromSymbol: 'nm',
    toName: 'Micrometer', toNamePlural: 'Micrometers', toSymbol: 'µm',
    factor: 0.001,
    reverseSlug: 'micrometers-to-nanometers',
    title: 'Nanometers to Micrometers Converter (nm to µm) | NanoToMicro',
    description: 'Convert nanometers to micrometers instantly. 1 nm = 0.001 µm. Live nm to µm calculator with formula, worked examples, conversion table and FAQs.',
    h1: 'Nanometers to Micrometers Converter',
    intro: 'Nanometers and micrometers are the two workhorse units of the microscopic world. Semiconductor process nodes, thin-film coatings, microscope resolution and the wavelength of visible light are all quoted in nanometers, while cells, bacteria, pollen and machining tolerances are quoted in micrometers. Converting between them is one of the most common tasks in optics, nanotechnology and biology: divide the nanometer value by 1,000 to get micrometers.',
    aboutFrom: 'A nanometer (symbol: nm) is one billionth of a meter — 1 nm = 10⁻⁹ m. It is the natural scale of atoms, molecules and modern transistor gates: a DNA helix is about 2 nm wide, and a "7 nm" chip process refers to features measured in tens of nanometers.',
    aboutTo: 'A micrometer (symbol: µm), sometimes called a micron, is one millionth of a meter — 1 µm = 10⁻⁶ m. Human hair is roughly 50–70 µm thick, a red blood cell about 7–8 µm, and typical bacteria 1–5 µm long.',
    useCases: [
      'Semiconductors — translate process-node figures (e.g. 3,000 nm metal pitch) into µm for layout tools',
      'Optics & lasers — express visible-light wavelengths (380–700 nm) as 0.38–0.70 µm',
      'Microscopy — compare diffraction limits given in nm with specimen sizes given in µm',
      'Thin films & coatings — convert deposition thickness between datasheets that use different units',
    ],
    exampleInput: 2500,
    faqs: [
      { q: 'How many micrometers are in 1 nanometer?', a: 'There are 0.001 micrometers in 1 nanometer. One micrometer is 1,000 times larger than one nanometer, so 1 nm = 0.001 µm and 1 µm = 1,000 nm.' },
      { q: 'What is the formula to convert nm to µm?', a: 'Divide the nanometer value by 1,000: µm = nm ÷ 1,000. For example, 2,500 nm ÷ 1,000 = 2.5 µm. To go the other way, multiply micrometers by 1,000.' },
      { q: 'Is a nanometer smaller than a micrometer?', a: 'Yes. A nanometer is 1,000 times smaller than a micrometer. The SI prefix nano means 10⁻⁹ (one billionth), while micro means 10⁻⁶ (one millionth) — three orders of magnitude apart.' },
      { q: 'What is the wavelength of visible light in micrometers?', a: 'Visible light spans roughly 380–700 nm, which is 0.38–0.70 µm. Ultraviolet starts below 0.38 µm and near-infrared extends beyond 0.7 µm up to about 1.4 µm.' },
      { q: 'Why do chip makers use nm while microscopes use µm?', a: 'Each field picks the unit that keeps everyday numbers convenient. Transistor features are a few nanometers, so nm avoids decimals; cells and optical components are a few micrometers, so µm avoids huge numbers. Converting between them keeps both communities on the same page.' },
    ],
    tableValues: STD_TABLE,
  },
  {
    slug: 'micrometers-to-nanometers',
    category: 'Length',
    fromName: 'Micrometer', fromNamePlural: 'Micrometers', fromSymbol: 'µm',
    toName: 'Nanometer', toNamePlural: 'Nanometers', toSymbol: 'nm',
    factor: 1000,
    reverseSlug: 'nanometers-to-micrometers',
    title: 'Micrometers to Nanometers Converter (µm to nm) | NanoToMicro',
    description: 'Convert micrometers to nanometers instantly. 1 µm = 1,000 nm. Live µm to nm calculator with formula, worked examples, conversion table and FAQs.',
    h1: 'Micrometers to Nanometers Converter',
    intro: 'Need to express a microscopic measurement at the nanoscale? Multiply the micrometer value by 1,000. This conversion shows up constantly when biological samples measured in microns must be compared with nanoscale structures — for example checking whether a 0.22 µm sterilizing filter (220 nm) can block a given nanoparticle, or translating microscope stage movements into nanometer steps.',
    aboutFrom: 'A micrometer (symbol: µm), also called a micron, is one millionth of a meter — 1 µm = 10⁻⁶ m. It is the everyday unit of cell biology, precision machining and air-quality standards such as PM2.5 (particles of 2.5 µm).',
    aboutTo: 'A nanometer (symbol: nm) is one billionth of a meter — 1 nm = 10⁻⁹ m. Atoms are roughly 0.1–0.3 nm across, a glucose molecule about 1.5 nm, and the gate length of advanced transistors just a few tens of nanometers.',
    useCases: [
      'Filtration — express 0.22 µm and 0.45 µm filter pores as 220 nm and 450 nm to compare with particle sizes',
      'Cell biology — convert organelle dimensions (e.g. 0.5 µm mitochondria width = 500 nm)',
      'Precision engineering — turn surface-roughness specs in µm into nm for optical-grade finishes',
      'Air quality — interpret PM2.5 and PM10 particle classes on the nanometer scale',
    ],
    exampleInput: 2.5,
    faqs: [
      { q: 'How many nanometers are in 1 micrometer?', a: 'There are exactly 1,000 nanometers in 1 micrometer: 1 µm = 1,000 nm. Multiply any micrometer value by 1,000 to get nanometers.' },
      { q: 'What is the formula to convert µm to nm?', a: 'Multiply by 1,000: nm = µm × 1,000. For example, 2.5 µm × 1,000 = 2,500 nm. The conversion is exact because both units are decimal SI multiples of the meter.' },
      { q: 'Is 0.1 µm the same as 100 nm?', a: 'Yes — 0.1 µm × 1,000 = 100 nm. Filter and lithography specifications often switch between the two notations, so being able to move between them quickly avoids costly misreads.' },
      { q: 'How big is a bacterium in nanometers?', a: 'Typical bacteria are 1–5 µm long, which is 1,000–5,000 nm. Viruses are far smaller — 20–300 nm (0.02–0.3 µm) — which is why 0.22 µm (220 nm) filters remove bacteria but not all viruses.' },
    ],
    tableValues: STD_TABLE,
  },

  // ───────────────────────── MASS ─────────────────────────
  {
    slug: 'nanograms-to-micrograms',
    category: 'Mass',
    fromName: 'Nanogram', fromNamePlural: 'Nanograms', fromSymbol: 'ng',
    toName: 'Microgram', toNamePlural: 'Micrograms', toSymbol: 'µg',
    factor: 0.001,
    reverseSlug: 'micrograms-to-nanograms',
    title: 'Nanograms to Micrograms Converter (ng to µg/mcg) | NanoToMicro',
    description: 'Convert nanograms to micrograms instantly. 1 ng = 0.001 µg (mcg). Live ng to µg calculator with formula, worked examples, conversion table and FAQs.',
    h1: 'Nanograms to Micrograms Converter',
    intro: 'Nanograms and micrograms are the language of trace measurement — vitamin and hormone doses, pesticide residues, DNA yields and forensic samples. Analytical instruments often report in nanograms while labels and protocols demand micrograms, so this conversion is a daily task in pharmacology, clinical labs and environmental testing. Divide nanograms by 1,000 to get micrograms.',
    aboutFrom: 'A nanogram (symbol: ng) is one billionth of a gram — 1 ng = 10⁻⁹ g. It is the scale of trace analysis: a typical PCR reaction uses nanogram quantities of DNA, and drinking-water contaminants are regulated at nanogram-per-liter levels.',
    aboutTo: 'A microgram (symbol: µg, often written mcg in medicine to avoid handwriting errors) is one millionth of a gram — 1 µg = 10⁻⁶ g. Vitamin B12, vitamin D, folate and many potent drugs are dosed in micrograms.',
    useCases: [
      'Pharmacology — convert assay results in ng into the µg units used on dosage labels',
      'Molecular biology — express DNA/RNA yields from extraction kits in the units your protocol expects',
      'Environmental testing — move between instrument output (ng) and regulatory limits (µg)',
      'Nutrition — reconcile lab measurements with supplement facts printed in mcg',
    ],
    exampleInput: 750,
    faqs: [
      { q: 'How many micrograms are in 1 nanogram?', a: '1 nanogram = 0.001 micrograms. There are 1,000 nanograms in a single microgram, so divide ng by 1,000 to get µg: 750 ng ÷ 1,000 = 0.75 µg.' },
      { q: 'Is mcg the same as µg?', a: 'Yes. mcg and µg both mean microgram. Pharmacists prefer "mcg" because a handwritten µ can be misread as "mg" (milligram) — a 1,000-fold dosing error. On this site µg and mcg are interchangeable.' },
      { q: 'How do I convert ng to µg without a calculator?', a: 'Move the decimal point three places to the left: 4,200 ng becomes 4.2 µg. Going the other way, move it three places right: 0.6 µg becomes 600 ng.' },
      { q: 'Why are vitamins like B12 dosed in micrograms instead of milligrams?', a: 'Because the body needs them only in trace amounts. The recommended daily intake of vitamin B12 is about 2.4 µg (2,400 ng). Expressing that in milligrams (0.0024 mg) would invite decimal errors.' },
    ],
    tableValues: STD_TABLE,
  },
  {
    slug: 'micrograms-to-nanograms',
    category: 'Mass',
    fromName: 'Microgram', fromNamePlural: 'Micrograms', fromSymbol: 'µg',
    toName: 'Nanogram', toNamePlural: 'Nanograms', toSymbol: 'ng',
    factor: 1000,
    reverseSlug: 'nanograms-to-micrograms',
    title: 'Micrograms to Nanograms Converter (µg/mcg to ng) | NanoToMicro',
    description: 'Convert micrograms to nanograms instantly. 1 µg = 1,000 ng. Live µg (mcg) to ng calculator with formula, worked examples, conversion table and FAQs.',
    h1: 'Micrograms to Nanograms Converter',
    intro: 'Laboratory instruments — mass spectrometers, fluorometers, microbalances — frequently read out in nanograms while your source material is specified in micrograms. Multiply the microgram value by 1,000 to switch. This is the standard conversion when preparing calibration curves, diluting standards, or checking whether a trace detection limit is sensitive enough for a µg-level sample.',
    aboutFrom: 'A microgram (symbol: µg, or mcg in clinical writing) is one millionth of a gram — 1 µg = 10⁻⁶ g. It is the practical unit for potent nutrients, hormones and drug microdoses.',
    aboutTo: 'A nanogram (symbol: ng) is one billionth of a gram — 1 ng = 10⁻⁹ g. Modern LC-MS/MS instruments routinely detect quantities of a few nanograms or less, making ng the native unit of trace analysis.',
    useCases: [
      'Analytical chemistry — convert µg/L water-quality limits into ng/L instrument readings',
      'Clinical dosing — translate mcg-based prescriptions into ng for pharmacokinetic calculations',
      'Forensics — compare trace evidence measured in ng against reference standards in µg',
      'Food safety — express additive or contaminant limits in the units your lab reports',
    ],
    exampleInput: 0.75,
    faqs: [
      { q: 'How many nanograms are in 1 microgram?', a: 'There are exactly 1,000 nanograms in 1 microgram: 1 µg = 1,000 ng. Multiply µg by 1,000 to get ng — for example 0.75 µg = 750 ng.' },
      { q: 'What is the formula to convert µg to ng?', a: 'ng = µg × 1,000. Both units are decimal SI multiples of the gram (10⁻⁶ g and 10⁻⁹ g), so the factor between them is exactly 1,000 with no rounding.' },
      { q: 'Is 500 mcg the same as 500,000 ng?', a: 'Yes. mcg is another way of writing µg, and 500 µg × 1,000 = 500,000 ng. A 500 mcg vitamin B12 tablet therefore contains half a million nanograms of B12.' },
      { q: 'When would I need ng instead of µg?', a: 'Whenever you work at detection-limit scale: mass-spec readouts, DNA quantification, hormone assays and contamination monitoring are all reported in ng (or ng/L, ng/mL). Converting your µg specification into ng lets you compare directly with instrument data.' },
    ],
    tableValues: STD_TABLE,
  },

  // ───────────────────── CONCENTRATION ─────────────────────
  {
    slug: 'nanomolar-to-micromolar',
    category: 'Concentration',
    fromName: 'Nanomolar', fromNamePlural: 'Nanomolar', fromSymbol: 'nM',
    toName: 'Micromolar', toNamePlural: 'Micromolar', toSymbol: 'µM',
    factor: 0.001,
    reverseSlug: 'micromolar-to-nanomolar',
    title: 'Nanomolar to Micromolar Converter (nM to µM) | NanoToMicro',
    description: 'Convert nanomolar to micromolar instantly. 1 nM = 0.001 µM. Live nM to µM calculator with formula, IC50 examples, conversion table and FAQs.',
    h1: 'Nanomolar to Micromolar Converter',
    intro: 'Drug potency lives in the nM–µM range. IC50, EC50, Ki and Kd values are reported in nanomolar for potent compounds and micromolar for weaker ones — and comparing candidates means constantly hopping between the two. Divide the nanomolar figure by 1,000 to express it in micromolar: a 250 nM inhibitor is a 0.25 µM inhibitor.',
    aboutFrom: 'Nanomolar (symbol: nM) means 10⁻⁹ moles per liter — one nanomole of solute per liter of solution. Highly potent drugs, receptor ligands and enzyme inhibitors typically show activity in the 1–100 nM range.',
    aboutTo: 'Micromolar (symbol: µM) means 10⁻⁶ moles per liter — one micromole per liter. It is the default currency of biochemical assays, cell-culture treatments and early-stage screening hits.',
    useCases: [
      'Medicinal chemistry — compare IC50/Ki values published in nM with in-house data in µM',
      'Assay development — convert stock-solution concentrations when designing dilution series',
      'Literature review — normalize potency figures from different papers into a single unit',
      'Cell biology — translate treatment doses between nM-scale signaling studies and µM-scale protocols',
    ],
    exampleInput: 5000,
    faqs: [
      { q: 'How many micromolar is 1 nanomolar?', a: '1 nM = 0.001 µM. A micromolar solution is 1,000 times more concentrated than a nanomolar one, so divide nM by 1,000: 5,000 nM = 5 µM.' },
      { q: 'How do I convert an IC50 from nM to µM?', a: 'Divide by 1,000. An IC50 of 350 nM is 0.35 µM; 25 nM is 0.025 µM. Many journals and databases (ChEMBL, PubChem) mix units, so normalizing before comparing compounds is essential.' },
      { q: 'Which is more concentrated, nM or µM?', a: 'Micromolar. 1 µM contains 1,000 times more solute molecules per liter than 1 nM. A compound active at 10 nM is roughly 100 times more potent than one active at 1 µM.' },
      { q: 'How does nM relate to molar (M)?', a: '1 M = 10⁹ nM and 1 M = 10⁶ µM. The full ladder is M → mM (10⁻³) → µM (10⁻⁶) → nM (10⁻⁹) → pM (10⁻¹²), each step a factor of 1,000.' },
      { q: 'Is a lower nM value a stronger drug?', a: 'Generally yes for potency metrics: an inhibitor with Ki = 5 nM binds its target more tightly than one with Ki = 500 nM. Potency is only one part of drug quality — selectivity, solubility and safety matter too.' },
    ],
    tableValues: STD_TABLE,
  },
  {
    slug: 'micromolar-to-nanomolar',
    category: 'Concentration',
    fromName: 'Micromolar', fromNamePlural: 'Micromolar', fromSymbol: 'µM',
    toName: 'Nanomolar', toNamePlural: 'Nanomolar', toSymbol: 'nM',
    factor: 1000,
    reverseSlug: 'nanomolar-to-micromolar',
    title: 'Micromolar to Nanomolar Converter (µM to nM) | NanoToMicro',
    description: 'Convert micromolar to nanomolar instantly. 1 µM = 1,000 nM. Live µM to nM calculator with formula, assay examples, conversion table and FAQs.',
    h1: 'Micromolar to Nanomolar Converter',
    intro: 'Screening libraries and cell assays are usually run in micromolar, but once a hit is optimized its potency is reported in nanomolar. Multiply the micromolar value by 1,000 to make the switch: a 0.05 µM lead is a 50 nM lead. This conversion keeps your assay plates, stock solutions and publication data speaking the same language.',
    aboutFrom: 'Micromolar (symbol: µM) is 10⁻⁶ moles per liter. It is the standard working range for biochemical assays, cell-culture treatments and high-throughput screens.',
    aboutTo: 'Nanomolar (symbol: nM) is 10⁻⁹ moles per liter. Optimized drug candidates, high-affinity antibodies and receptor ligands are characterized in nM because their effects occur at extremely low concentrations.',
    useCases: [
      'Hit-to-lead — track potency improvements as candidates move from µM screening hits to nM leads',
      'Stock solutions — convert a 10 µM working solution into nM for serial-dilution planning',
      'Data normalization — express older µM literature values in nM for side-by-side comparison',
      'Teaching — show students the 1,000-fold steps of the molarity ladder with concrete numbers',
    ],
    exampleInput: 0.05,
    faqs: [
      { q: 'How many nanomolar are in 1 micromolar?', a: 'Exactly 1,000: 1 µM = 1,000 nM. Multiply the µM value by 1,000 — for example 0.05 µM = 50 nM and 2.5 µM = 2,500 nM.' },
      { q: 'What is the formula to convert µM to nM?', a: 'nM = µM × 1,000. Both are decimal multiples of moles per liter (10⁻⁶ vs 10⁻⁹), so the conversion is exact with no rounding error.' },
      { q: 'Is 10 µM a high or low drug concentration?', a: 'For cell assays, 10 µM (10,000 nM) is a typical screening concentration. Approved drugs usually act at much lower levels — often below 1 µM — so hits are optimized down into the nM range before becoming candidates.' },
      { q: 'How do I convert between µM and ng/mL?', a: 'That needs the molecular weight: ng/mL = µM × MW (g/mol). For example, 1 µM of a 500 g/mol compound is 500 ng/mL. Convert nM↔µM here, then apply the molecular-weight factor for mass concentration.' },
    ],
    tableValues: STD_TABLE,
  },

  // ───────────────────── CAPACITANCE ─────────────────────
  {
    slug: 'nanofarads-to-microfarads',
    category: 'Capacitance',
    fromName: 'Nanofarad', fromNamePlural: 'Nanofarads', fromSymbol: 'nF',
    toName: 'Microfarad', toNamePlural: 'Microfarads', toSymbol: 'µF',
    factor: 0.001,
    reverseSlug: 'microfarads-to-nanofarads',
    title: 'Nanofarads to Microfarads Converter (nF to µF) | NanoToMicro',
    description: 'Convert nanofarads to microfarads instantly. 1 nF = 0.001 µF. Live nF to µF calculator with capacitor codes, formula, conversion table and FAQs.',
    h1: 'Nanofarads to Microfarads Converter',
    intro: 'Capacitor values sprawl across picofarads, nanofarads and microfarads — and datasheets, schematics and part markings rarely agree on which to use. The classic 100 nF decoupling capacitor is 0.1 µF; a 103-marked ceramic is 10 nF, or 0.01 µF. Divide nanofarads by 1,000 to read the value in microfarads and match any schematic to the part in your hand.',
    aboutFrom: 'A nanofarad (symbol: nF) is one billionth of a farad — 1 nF = 10⁻⁹ F. Ceramic and film capacitors in the 1 nF–1 µF range dominate decoupling, filtering and timing circuits.',
    aboutTo: 'A microfarad (symbol: µF) is one millionth of a farad — 1 µF = 10⁻⁶ F. Bulk decoupling, power-supply smoothing and motor-start capacitors are rated in µF, from 0.1 µF ceramics up to thousands of µF electrolytics.',
    useCases: [
      'PCB design — convert 100 nF decoupling values to the 0.1 µF notation used by many CAD libraries',
      'Reading capacitor codes — decode 103 (10 nF), 104 (100 nF) and 105 (1,000 nF = 1 µF) markings',
      'Cross-referencing parts — match a schematic calling for µF to a supplier listing in nF',
      'Audio & RF — translate coupling and tone-capacitor values between vintage schematics and modern parts',
    ],
    exampleInput: 100,
    faqs: [
      { q: 'How many microfarads are in 1 nanofarad?', a: '1 nF = 0.001 µF. A microfarad is 1,000 times larger than a nanofarad, so divide nF by 1,000: 100 nF = 0.1 µF.' },
      { q: 'Is 100 nF the same as 0.1 µF?', a: 'Yes — 100 nF and 0.1 µF are exactly the same capacitance. This is the most common decoupling capacitor in electronics; you will see it written both ways on schematics and bills of materials.' },
      { q: 'How do I read a ceramic capacitor marked 104?', a: 'The three-digit code gives the value in picofarads: the first two digits are significant figures and the third is the number of zeros. 104 = 10 followed by 4 zeros = 100,000 pF = 100 nF = 0.1 µF.' },
      { q: 'What does "mF" mean on a capacitor?', a: 'On capacitors, mF almost always (incorrectly) means microfarad, not millifarad — a legacy of American naming. A true millifarad (10⁻³ F = 1,000 µF) is rare outside supercapacitors. Check context carefully before substituting parts.' },
      { q: 'Why are decoupling capacitors usually 100 nF?', a: '100 nF (0.1 µF) ceramics have low equivalent series inductance and resonate in the MHz range where digital ICs demand current spikes. Modern designs often add 1 µF and 10 µF capacitors in parallel for lower-frequency bulk decoupling.' },
    ],
    tableValues: STD_TABLE,
  },
  {
    slug: 'microfarads-to-nanofarads',
    category: 'Capacitance',
    fromName: 'Microfarad', fromNamePlural: 'Microfarads', fromSymbol: 'µF',
    toName: 'Nanofarad', toNamePlural: 'Nanofarads', toSymbol: 'nF',
    factor: 1000,
    reverseSlug: 'nanofarads-to-microfarads',
    title: 'Microfarads to Nanofarads Converter (µF to nF) | NanoToMicro',
    description: 'Convert microfarads to nanofarads instantly. 1 µF = 1,000 nF. Live µF to nF calculator with capacitor codes, formula, conversion table and FAQs.',
    h1: 'Microfarads to Nanofarads Converter',
    intro: 'Suppliers list film and ceramic capacitors in nanofarads while schematics often specify microfarads — so a 0.047 µF tone capacitor becomes the 47 nF part you actually search for. Multiply microfarads by 1,000 to get nanofarads and bridge the gap between your design documents and distributor catalogs.',
    aboutFrom: 'A microfarad (symbol: µF) is one millionth of a farad — 1 µF = 10⁻⁶ F. Power-supply filters, motor-run capacitors and audio coupling capacitors are commonly specified in µF.',
    aboutTo: 'A nanofarad (symbol: nF) is one billionth of a farad — 1 nF = 10⁻⁹ F. Distributor catalogs for film and C0G/NP0 ceramic capacitors are dominated by nF listings between 1 nF and 1,000 nF.',
    useCases: [
      'Parts sourcing — find the 47 nF catalog listing for a schematic that says 0.047 µF',
      'Guitar & audio electronics — convert tone-cap values (0.022 µF = 22 nF) when shopping for parts',
      'BOM cleanup — normalize mixed µF/nF entries into one unit before ordering',
      'Education — practice the pF → nF → µF ladder used in every electronics course',
    ],
    exampleInput: 0.047,
    faqs: [
      { q: 'How many nanofarads are in 1 microfarad?', a: 'Exactly 1,000: 1 µF = 1,000 nF. Multiply µF by 1,000 — for example 0.1 µF = 100 nF and 0.047 µF = 47 nF.' },
      { q: 'What is 0.022 µF in nF?', a: '0.022 µF × 1,000 = 22 nF. This is the classic guitar tone-capacitor value, which is why parts are sold as both "0.022 µF" and "22 nF".' },
      { q: 'Is 1,000 nF equal to 1 µF?', a: 'Yes. 1,000 nF is exactly 1 µF. Capacitors at this boundary are labeled either way, and the three-digit code version is 105 (10 followed by 5 zeros = 1,000,000 pF).' },
      { q: 'Why do catalogs mix µF and nF?', a: 'Tradition and readability. European suppliers favor nF for film and ceramic parts, while American schematics historically use µF. Both describe the same SI units, so converting by 1,000 reconciles any two documents.' },
    ],
    tableValues: STD_TABLE,
  },

  // ───────────────────────── TIME ─────────────────────────
  {
    slug: 'nanoseconds-to-microseconds',
    category: 'Time',
    fromName: 'Nanosecond', fromNamePlural: 'Nanoseconds', fromSymbol: 'ns',
    toName: 'Microsecond', toNamePlural: 'Microseconds', toSymbol: 'µs',
    factor: 0.001,
    reverseSlug: 'microseconds-to-nanoseconds',
    title: 'Nanoseconds to Microseconds Converter (ns to µs) | NanoToMicro',
    description: 'Convert nanoseconds to microseconds instantly. 1 ns = 0.001 µs. Live ns to µs calculator with formula, latency examples, conversion table and FAQs.',
    h1: 'Nanoseconds to Microseconds Converter',
    intro: 'Computing performance is measured in nanoseconds — CPU cycles, memory latency, cache hits — while buses, interrupts and network round-trips are often quoted in microseconds. Divide nanoseconds by 1,000 to compare them: a 100 ns DRAM access is 0.1 µs, and a 0.25 ns CPU cycle at 4 GHz is 0.00025 µs.',
    aboutFrom: 'A nanosecond (symbol: ns) is one billionth of a second — 1 ns = 10⁻⁹ s. Light travels only about 30 cm in a nanosecond, which is why modern electronics treat it as a meaningful slice of time.',
    aboutTo: 'A microsecond (symbol: µs) is one millionth of a second — 1 µs = 10⁻⁶ s. Interrupt latency, flash-memory reads, radar pulses and high-speed trading systems are all characterized in microseconds.',
    useCases: [
      'Hardware design — convert CPU clock periods (ns) into µs for bus-timing budgets',
      'Systems performance — compare cache (ns), memory (tens of ns) and SSD (tens of µs) latencies on one scale',
      'Networking — translate switch and kernel timings between ns counters and µs logs',
      'Radar & sonar — convert pulse timings for range calculations',
    ],
    exampleInput: 100,
    faqs: [
      { q: 'How many microseconds are in 1 nanosecond?', a: '1 ns = 0.001 µs. A microsecond lasts 1,000 times longer than a nanosecond, so divide ns by 1,000: 2,500 ns = 2.5 µs.' },
      { q: 'How do I convert a CPU clock speed to cycle time?', a: 'Cycle time in nanoseconds = 1,000 ÷ frequency in GHz. A 4 GHz CPU has a 0.25 ns cycle (0.00025 µs); a 2 GHz CPU has a 0.5 ns cycle. Every 1 GHz step removes 1 ns from the period at 1 GHz.' },
      { q: 'How far does light travel in 1 microsecond?', a: 'About 300 meters (299.8 m in vacuum). In 1 nanosecond it travels only ~30 cm — Admiral Grace Hopper famously handed out "nanoseconds" of wire about a foot long to illustrate this.' },
      { q: 'What are typical computer latencies in ns and µs?', a: 'L1 cache ≈ 1 ns, DRAM ≈ 100 ns (0.1 µs), NVMe SSD read ≈ 10–100 µs (10,000–100,000 ns). Seeing all of these on one scale explains why memory hierarchy matters so much to performance.' },
    ],
    tableValues: STD_TABLE,
  },
  {
    slug: 'microseconds-to-nanoseconds',
    category: 'Time',
    fromName: 'Microsecond', fromNamePlural: 'Microseconds', fromSymbol: 'µs',
    toName: 'Nanosecond', toNamePlural: 'Nanoseconds', toSymbol: 'ns',
    factor: 1000,
    reverseSlug: 'nanoseconds-to-microseconds',
    title: 'Microseconds to Nanoseconds Converter (µs to ns) | NanoToMicro',
    description: 'Convert microseconds to nanoseconds instantly. 1 µs = 1,000 ns. Live µs to ns calculator with formula, timing examples, conversion table and FAQs.',
    h1: 'Microseconds to Nanoseconds Converter',
    intro: 'High-resolution timers, oscilloscopes and hardware counters often report in microseconds while digital logic works in nanoseconds. Multiply the microsecond value by 1,000: a 2.5 µs interrupt latency is 2,500 ns — about 10,000 cycles on a 4 GHz processor. That kind of conversion turns an abstract timing budget into a concrete cycle count.',
    aboutFrom: 'A microsecond (symbol: µs) is one millionth of a second — 1 µs = 10⁻⁶ s. Real-time operating systems, servo loops and data-acquisition hardware specify deadlines in microseconds.',
    aboutTo: 'A nanosecond (symbol: ns) is one billionth of a second — 1 ns = 10⁻⁹ s. It is the native unit of digital logic: clock periods, setup-and-hold windows and propagation delays are all measured in ns.',
    useCases: [
      'FPGA/ASIC design — translate µs system deadlines into ns clock-cycle budgets',
      'Embedded systems — convert RTOS tick and interrupt timings for cycle-accurate analysis',
      'Oscilloscope work — move between µs/division sweeps and ns-scale edge measurements',
      'High-frequency trading — express network and kernel latencies in the ns units used by exchange feeds',
    ],
    exampleInput: 2.5,
    faqs: [
      { q: 'How many nanoseconds are in 1 microsecond?', a: 'Exactly 1,000: 1 µs = 1,000 ns. Multiply µs by 1,000 — for example 2.5 µs = 2,500 ns and 0.02 µs = 20 ns.' },
      { q: 'How many CPU cycles fit in 1 microsecond?', a: 'Cycles = frequency (GHz) × 1,000. A 4 GHz CPU executes about 4,000 cycles per microsecond; a 1 GHz CPU executes 1,000. That is why a 10 µs context switch costs tens of thousands of cycles.' },
      { q: 'What is the formula to convert µs to ns?', a: 'ns = µs × 1,000. Both units are decimal SI multiples of the second (10⁻⁶ s and 10⁻⁹ s), so the factor is exactly 1,000.' },
      { q: 'Why do datasheets mix µs and ns?', a: 'Each unit keeps its numbers readable: slow events (reset pulses, I²C timeouts) look tidy in µs, while fast edges (setup times, skew) look tidy in ns. Converting by 1,000 lets you budget an entire timing chain in one unit.' },
    ],
    tableValues: STD_TABLE,
  },
];

// ───────────────────────── VOLUME ─────────────────────────
CONVERTERS.push(
  {
    slug: 'nanoliters-to-microliters',
    category: 'Volume',
    fromName: 'Nanoliter', fromNamePlural: 'Nanoliters', fromSymbol: 'nL',
    toName: 'Microliter', toNamePlural: 'Microliters', toSymbol: 'µL',
    factor: 0.001,
    reverseSlug: 'microliters-to-nanoliters',
    title: 'Nanoliters to Microliters Converter (nL to µL) | NanoToMicro',
    description: 'Convert nanoliters to microliters instantly. 1 nL = 0.001 µL. Live nL to µL calculator with formula, pipetting examples, conversion table and FAQs.',
    h1: 'Nanoliters to Microliters Converter',
    intro: 'Microfluidic chips, acoustic dispensers and inkjet printheads meter liquids in nanoliters, while micropipettes and assay protocols work in microliters. Bridging the two is routine in lab automation: divide nanoliters by 1,000 to get microliters — a 500 nL dispense is 0.5 µL, right at the bottom of a P2 pipette\'s range.',
    aboutFrom: 'A nanoliter (symbol: nL) is one billionth of a liter — 1 nL = 10⁻⁹ L. A 1 nL droplet is a cube about 100 µm on each side; inkjet printers eject droplets of just a few nanoliters, and microfluidic devices manipulate nL-scale plugs.',
    aboutTo: 'A microliter (symbol: µL) is one millionth of a liter — 1 µL = 10⁻⁶ L. It is the standard unit of bench biology: PCR reactions run at 10–50 µL and precision micropipettes cover 0.1 µL to 1,000 µL.',
    useCases: [
      'Lab automation — convert acoustic-dispenser volumes (nL) into the µL units of assay protocols',
      'Microfluidics — translate droplet and channel volumes for comparison with pipetted reagents',
      'Genomics — normalize low-volume library-prep protocols written in mixed nL/µL units',
      'Printing & dispensing — specify inkjet and micro-dispense volumes consistently',
    ],
    exampleInput: 500,
    faqs: [
      { q: 'How many microliters are in 1 nanoliter?', a: '1 nL = 0.001 µL. There are 1,000 nanoliters in a microliter, so divide nL by 1,000: 500 nL = 0.5 µL.' },
      { q: 'How big is a 1 µL droplet compared with 1 nL?', a: 'A 1 µL droplet is a sphere roughly 1.24 mm across; a 1 nL droplet is about 124 µm across — one tenth the diameter and one thousandth the volume, which is why nL handling needs specialized dispensers.' },
      { q: 'Can a regular micropipette measure nanoliters?', a: 'Not accurately. Even a P2 pipette bottoms out around 0.1–0.2 µL (100–200 nL) with rising error. True nanoliter work uses acoustic dispensers, positive-displacement nanoliter pipettes or microfluidic chips.' },
      { q: 'What is the formula to convert nL to µL?', a: 'µL = nL ÷ 1,000. Both are decimal SI multiples of the liter (10⁻⁹ L and 10⁻⁶ L), so the conversion is exact.' },
    ],
    tableValues: STD_TABLE,
  },
  {
    slug: 'microliters-to-nanoliters',
    category: 'Volume',
    fromName: 'Microliter', fromNamePlural: 'Microliters', fromSymbol: 'µL',
    toName: 'Nanoliter', toNamePlural: 'Nanoliters', toSymbol: 'nL',
    factor: 1000,
    reverseSlug: 'nanoliters-to-microliters',
    title: 'Microliters to Nanoliters Converter (µL to nL) | NanoToMicro',
    description: 'Convert microliters to nanoliters instantly. 1 µL = 1,000 nL. Live µL to nL calculator with formula, dispensing examples, conversion table and FAQs.',
    h1: 'Microliters to Nanoliters Converter',
    intro: 'When a protocol written for microliter pipetting moves onto a nanoliter dispenser, every volume must be re-expressed: multiply microliters by 1,000. A 2.5 µL reagent addition becomes 2,500 nL — exactly the language acoustic and piezo dispensers understand. This conversion is the daily glue of miniaturized assays and 1,536-well screening.',
    aboutFrom: 'A microliter (symbol: µL) is one millionth of a liter — 1 µL = 10⁻⁶ L. Bench protocols, reagent kits and micropipettes all speak microliters.',
    aboutTo: 'A nanoliter (symbol: nL) is one billionth of a liter — 1 nL = 10⁻⁹ L. High-throughput screening and microfluidics adopted nL volumes to cut reagent costs by orders of magnitude.',
    useCases: [
      'Assay miniaturization — scale a 10 µL reaction down to nL volumes for high-density plates',
      'Dispenser programming — enter µL protocol values into instruments that accept only nL',
      'Reagent budgeting — compute how many nL dispenses a µL-scale stock will support',
      'Microfluidic design — match chip channel volumes to pipetted input volumes',
    ],
    exampleInput: 2.5,
    faqs: [
      { q: 'How many nanoliters are in 1 microliter?', a: 'Exactly 1,000: 1 µL = 1,000 nL. Multiply µL by 1,000 — for example 2.5 µL = 2,500 nL and 0.4 µL = 400 nL.' },
      { q: 'How many 50 nL dispenses fit in 10 µL?', a: '10 µL is 10,000 nL, so 10,000 ÷ 50 = 200 dispenses. This kind of calculation sets reagent consumption in miniaturized screens.' },
      { q: 'What is the formula to convert µL to nL?', a: 'nL = µL × 1,000. Because both units are decimal multiples of the liter, the conversion introduces no rounding error.' },
      { q: 'Why miniaturize assays into nanoliters?', a: 'Cost and throughput. Moving a 20 µL assay to 500 nL cuts reagent use 40-fold, letting the same kit run 40 times as many tests — the reason 1,536-well plates and acoustic dispensers exist.' },
    ],
    tableValues: STD_TABLE,
  },
);

// ───────────────────────── CURRENT ─────────────────────────
CONVERTERS.push(
  {
    slug: 'nanoamps-to-microamps',
    category: 'Electric Current',
    fromName: 'Nanoamp', fromNamePlural: 'Nanoamps', fromSymbol: 'nA',
    toName: 'Microamp', toNamePlural: 'Microamps', toSymbol: 'µA',
    factor: 0.001,
    reverseSlug: 'microamps-to-nanoamps',
    title: 'Nanoamps to Microamps Converter (nA to µA) | NanoToMicro',
    description: 'Convert nanoamps to microamps instantly. 1 nA = 0.001 µA. Live nA to µA calculator with formula, leakage-current examples, table and FAQs.',
    h1: 'Nanoamps to Microamps Converter',
    intro: 'Battery-powered and energy-harvesting devices live and die by nanoamps: sleep currents, RTC backup draw and CMOS leakage are all specified in nA, while multimeters and power budgets often read in µA. Divide nanoamps by 1,000 to switch — a 350 nA sleep current is 0.35 µA, the difference between a coin cell lasting one year or ten.',
    aboutFrom: 'A nanoamp (symbol: nA) is one billionth of an ampere — 1 nA = 10⁻⁹ A. It is the unit of ultra-low-power design: deep-sleep microcontrollers, sensor leakage and biosensor signals are measured in nA.',
    aboutTo: 'A microamp (symbol: µA) is one millionth of an ampere — 1 µA = 10⁻⁶ A. Quiescent currents, LDO ground-pin draw and low-power sensor operating currents are quoted in µA.',
    useCases: [
      'IoT power budgets — convert nA sleep currents into µA to estimate battery life',
      'Datasheet reading — reconcile leakage specs (nA) with multimeter ranges (µA)',
      'Biosensing — interpret nA-scale electrochemical signals against µA instrument ranges',
      'Low-power design — budget total system draw across sleep (nA) and active (µA–mA) states',
    ],
    exampleInput: 350,
    faqs: [
      { q: 'How many microamps are in 1 nanoamp?', a: '1 nA = 0.001 µA. A microamp is 1,000 times larger than a nanoamp, so divide nA by 1,000: 350 nA = 0.35 µA.' },
      { q: 'How do I estimate battery life from a sleep current?', a: 'Battery life (hours) ≈ capacity (mAh) ÷ current (mA). Convert nA to mA first (divide by 1,000,000): a 220 mAh CR2032 powering a 500 nA (0.0005 mA) load lasts roughly 440,000 hours — about 50 years, in theory.' },
      { q: 'Can a normal multimeter measure nanoamps?', a: 'Most handheld meters resolve 0.1 µA (100 nA) at best. True nA measurements need a microcurrent meter, electrometer or a dedicated low-power analyzer such as a Joulescope or Otii.' },
      { q: 'What is the formula to convert nA to µA?', a: 'µA = nA ÷ 1,000. Both are decimal SI multiples of the ampere (10⁻⁹ A and 10⁻⁶ A), so the conversion is exact.' },
    ],
    tableValues: STD_TABLE,
  },
  {
    slug: 'microamps-to-nanoamps',
    category: 'Electric Current',
    fromName: 'Microamp', fromNamePlural: 'Microamps', fromSymbol: 'µA',
    toName: 'Nanoamp', toNamePlural: 'Nanoamps', toSymbol: 'nA',
    factor: 1000,
    reverseSlug: 'nanoamps-to-microamps',
    title: 'Microamps to Nanoamps Converter (µA to nA) | NanoToMicro',
    description: 'Convert microamps to nanoamps instantly. 1 µA = 1,000 nA. Live µA to nA calculator with formula, power-budget examples, table and FAQs.',
    h1: 'Microamps to Nanoamps Converter',
    intro: 'When a datasheet quotes quiescent current in microamps but your power budget counts every nanoamp, multiply by 1,000 to line the numbers up. A 2 µA watchdog timer is a 2,000 nA load — on a coin cell, that distinction decides whether the product ships with a 5-year or 5-month battery life.',
    aboutFrom: 'A microamp (symbol: µA) is one millionth of an ampere — 1 µA = 10⁻⁶ A. It is the default unit for low-power operating currents: sensors, RTCs and standby regulators.',
    aboutTo: 'A nanoamp (symbol: nA) is one billionth of an ampere — 1 nA = 10⁻⁹ A. State-of-the-art sleep modes, leakage paths and energy-harvesting inputs are engineered in nA.',
    useCases: [
      'Power budgeting — convert µA datasheet figures into nA for fine-grained battery models',
      'Sensor interfaces — express µA signal currents in nA when characterizing noise floors',
      'Component comparison — line up competing parts that spec standby draw in different units',
      'Education — practice the mA → µA → nA ladder used throughout electronics',
    ],
    exampleInput: 2,
    faqs: [
      { q: 'How many nanoamps are in 1 microamp?', a: 'Exactly 1,000: 1 µA = 1,000 nA. Multiply µA by 1,000 — for example 2 µA = 2,000 nA and 0.6 µA = 600 nA.' },
      { q: 'What is the formula to convert µA to nA?', a: 'nA = µA × 1,000. The ampere prefixes micro (10⁻⁶) and nano (10⁻⁹) sit three orders of magnitude apart, so the factor is exactly 1,000.' },
      { q: 'Is 1 µA a lot for a battery-powered sensor?', a: 'It depends on the battery. 1 µA (1,000 nA) drains a 220 mAh coin cell in about 25 years in theory — negligible. But 100 µA cuts that to three months, which is why designers fight for every nanoamp in sleep mode.' },
      { q: 'Why do low-power datasheets mix nA and µA?', a: 'Marketing and readability: headline sleep currents look impressive in nA (e.g. 350 nA), while block-level currents stay readable in µA. Converting everything to one unit is the only way to build an honest power budget.' },
    ],
    tableValues: STD_TABLE,
  },
);

// ───────────────────────── CHARGE ─────────────────────────
CONVERTERS.push(
  {
    slug: 'nanocoulombs-to-microcoulombs',
    category: 'Electric Charge',
    fromName: 'Nanocoulomb', fromNamePlural: 'Nanocoulombs', fromSymbol: 'nC',
    toName: 'Microcoulomb', toNamePlural: 'Microcoulombs', toSymbol: 'µC',
    factor: 0.001,
    reverseSlug: 'microcoulombs-to-nanocoulombs',
    title: 'Nanocoulombs to Microcoulombs Converter (nC to µC) | NanoToMicro',
    description: 'Convert nanocoulombs to microcoulombs instantly. 1 nC = 0.001 µC. Live nC to µC calculator with Q=CV formula, examples, table and FAQs.',
    h1: 'Nanocoulombs to Microcoulombs Converter',
    intro: 'Charge calculations span capacitor banks, electrostatic discharges and pacing pulses — and the numbers come out in nanocoulombs or microcoulombs depending on the instrument. Divide nC by 1,000 to get µC: a 40 nC capacitor charge is 0.04 µC. Pair this with Q = C × V to move freely between charge, capacitance and voltage.',
    aboutFrom: 'A nanocoulomb (symbol: nC) is one billionth of a coulomb — 1 nC = 10⁻⁹ C. Electrostatic discharges, piezoelectric sensors and small capacitors store charge in the nC range.',
    aboutTo: 'A microcoulomb (symbol: µC) is one millionth of a coulomb — 1 µC = 10⁻⁶ C. Defibrillator and pacemaker pulses, photoflash capacitors and electrochemical cells are characterized in µC.',
    useCases: [
      'Capacitor math — use Q = C × V to find stored charge, then express it in the unit your datasheet uses',
      'ESD analysis — convert discharge measurements (nC) into µC for standard test models',
      'Medical devices — translate stimulation-pulse charge between nC bench readings and µC specifications',
      'Physics labs — move between electrometer readings in nC and problem sets written in µC',
    ],
    exampleInput: 40,
    faqs: [
      { q: 'How many microcoulombs are in 1 nanocoulomb?', a: '1 nC = 0.001 µC. A microcoulomb is 1,000 times larger than a nanocoulomb, so divide nC by 1,000: 40 nC = 0.04 µC.' },
      { q: 'How do I calculate charge from capacitance and voltage?', a: 'Use Q = C × V. A 10 nF capacitor at 5 V stores Q = 10 × 10⁻⁹ F × 5 V = 50 nC = 0.05 µC. Convert capacitance first with the nF↔µF tool if needed.' },
      { q: 'How much charge is in a static shock?', a: 'A typical carpet shock involves microcoulombs of charge at thousands of volts — the current is brief but the energy is tiny, which is why it stings without harming you. Sensitive electronics, however, can be damaged by discharges under 100 nC.' },
      { q: 'What is the formula to convert nC to µC?', a: 'µC = nC ÷ 1,000. Both are decimal SI multiples of the coulomb (10⁻⁹ C and 10⁻⁶ C), so the conversion is exact.' },
    ],
    tableValues: STD_TABLE,
  },
  {
    slug: 'microcoulombs-to-nanocoulombs',
    category: 'Electric Charge',
    fromName: 'Microcoulomb', fromNamePlural: 'Microcoulombs', fromSymbol: 'µC',
    toName: 'Nanocoulomb', toNamePlural: 'Nanocoulombs', toSymbol: 'nC',
    factor: 1000,
    reverseSlug: 'nanocoulombs-to-microcoulombs',
    title: 'Microcoulombs to Nanocoulombs Converter (µC to nC) | NanoToMicro',
    description: 'Convert microcoulombs to nanocoulombs instantly. 1 µC = 1,000 nC. Live µC to nC calculator with Q=CV formula, examples, table and FAQs.',
    h1: 'Microcoulombs to Nanocoulombs Converter',
    intro: 'Electrometers and sensor front-ends often read out in nanocoulombs while specifications are written in microcoulombs. Multiply µC by 1,000 to make the comparison: a 0.025 µC pacing artifact is 25 nC on the bench. This conversion keeps charge budgets, sensor calibrations and test reports in agreement.',
    aboutFrom: 'A microcoulomb (symbol: µC) is one millionth of a coulomb — 1 µC = 10⁻⁶ C. Stimulation pulses, capacitor banks and electrochemical measurements are commonly specified in µC.',
    aboutTo: 'A nanocoulomb (symbol: nC) is one billionth of a coulomb — 1 nC = 10⁻⁹ C. Precision electrometers, piezoelectric transducers and radiation detectors report charge in nC.',
    useCases: [
      'Sensor calibration — convert µC reference charges into the nC units your electrometer displays',
      'Test reports — express specification limits in the same unit as the measurement instrument',
      'Electrochemistry — translate µC faradaic charge into nC for microelectrode work',
      'Physics teaching — demonstrate the 1,000-fold SI prefix steps with real charge values',
    ],
    exampleInput: 0.025,
    faqs: [
      { q: 'How many nanocoulombs are in 1 microcoulomb?', a: 'Exactly 1,000: 1 µC = 1,000 nC. Multiply µC by 1,000 — for example 0.025 µC = 25 nC and 0.5 µC = 500 nC.' },
      { q: 'What is the formula to convert µC to nC?', a: 'nC = µC × 1,000. The prefixes micro (10⁻⁶) and nano (10⁻⁹) are three orders of magnitude apart, so the conversion is exact with no rounding.' },
      { q: 'How does charge relate to current and time?', a: 'Charge is current × time: Q = I × t. One µA flowing for one second delivers 1 µC (1,000 nC). This links the nC↔µC conversion directly to the nA↔µA one.' },
      { q: 'Why do pacemaker specs use µC?', a: 'Because the charge delivered per pulse — typically tens of µC — determines both tissue response and battery drain. Expressing it in µC keeps safety limits and longevity calculations in convenient numbers.' },
    ],
    tableValues: STD_TABLE,
  },
);

CONVERTERS.push(...EXPANSION_CONVERTERS);

// ───────────────────────── HELPERS ─────────────────────────

export function getConverter(slug: string): ConverterDef | undefined {
  return CONVERTERS.find((c) => c.slug === slug);
}

export const CATEGORIES: { name: string; icon: string; slugs: string[] }[] = (() => {
  const map = new Map<string, string[]>();
  for (const c of CONVERTERS) {
    if (!map.has(c.category)) map.set(c.category, []);
    map.get(c.category)!.push(c.slug);
  }
  const icons: Record<string, string> = {
    Length: 'ruler',
    Mass: 'scale',
    Concentration: 'flask-conical',
    Capacitance: 'zap',
    Time: 'timer',
    Volume: 'droplets',
    'Electric Current': 'activity',
    'Electric Charge': 'battery-charging',
  };
  return Array.from(map.entries()).map(([name, slugs]) => ({ name, icon: icons[name] ?? 'calculator', slugs }));
})();

export interface SiPrefix {
  name: string;
  symbol: string;
  exponent: number;
}

export const SI_PREFIXES: SiPrefix[] = [
  { name: 'quetta', symbol: 'Q', exponent: 30 },
  { name: 'ronna', symbol: 'R', exponent: 27 },
  { name: 'yotta', symbol: 'Y', exponent: 24 },
  { name: 'zetta', symbol: 'Z', exponent: 21 },
  { name: 'exa', symbol: 'E', exponent: 18 },
  { name: 'peta', symbol: 'P', exponent: 15 },
  { name: 'tera', symbol: 'T', exponent: 12 },
  { name: 'giga', symbol: 'G', exponent: 9 },
  { name: 'mega', symbol: 'M', exponent: 6 },
  { name: 'kilo', symbol: 'k', exponent: 3 },
  { name: 'hecto', symbol: 'h', exponent: 2 },
  { name: 'deka', symbol: 'da', exponent: 1 },
  { name: '(none)', symbol: '', exponent: 0 },
  { name: 'deci', symbol: 'd', exponent: -1 },
  { name: 'centi', symbol: 'c', exponent: -2 },
  { name: 'milli', symbol: 'm', exponent: -3 },
  { name: 'micro', symbol: 'µ', exponent: -6 },
  { name: 'nano', symbol: 'n', exponent: -9 },
  { name: 'pico', symbol: 'p', exponent: -12 },
  { name: 'femto', symbol: 'f', exponent: -15 },
  { name: 'atto', symbol: 'a', exponent: -18 },
  { name: 'zepto', symbol: 'z', exponent: -21 },
  { name: 'yocto', symbol: 'y', exponent: -24 },
  { name: 'ronto', symbol: 'r', exponent: -27 },
  { name: 'quecto', symbol: 'q', exponent: -30 },
];

export function prefixFactor(from: SiPrefix, to: SiPrefix): number {
  return Math.pow(10, from.exponent - to.exponent);
}
