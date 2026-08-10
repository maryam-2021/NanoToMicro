export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: 'nano-vs-micro-difference',
    title: 'Nano vs Micro: What Is the Difference? (Formula + Chart)',
    description:
      'Nano vs micro explained: nano is 10⁻⁹, micro is 10⁻⁶, so 1 micro = 1,000 nano. Side-by-side chart, conversion formula, real-world examples and common mistakes.',
    category: 'Fundamentals',
    date: '2026-07-19',
    readTime: '7 min read',
  },
  {
    slug: 'si-prefixes-explained',
    title: 'SI Prefixes Explained: All 24 Prefixes from Quetta to Quecto',
    description:
      'The complete guide to SI metric prefixes — from quetta (10³⁰) to quecto (10⁻³⁰), including the four added in 2022. Full chart, symbols, mnemonics and mistakes to avoid.',
    category: 'Fundamentals',
    date: '2026-07-19',
    readTime: '9 min read',
  },
  {
    slug: 'nanomolar-to-micromolar-guide',
    title: 'nM to µM Conversion: The Complete Lab Guide (IC50, Ki, EC50)',
    description:
      'How to convert nanomolar to micromolar and back, why drug potency metrics live between nM and µM, dilution math with C1V1 = C2V2, and converting to ng/mL.',
    category: 'Lab Guide',
    date: '2026-07-19',
    readTime: '8 min read',
  },
  {
    slug: 'capacitor-codes-explained',
    title: 'Capacitor Codes Explained: pF, nF, µF and 3-Digit Markings',
    description:
      'How to read 3-digit ceramic capacitor codes (101, 102, 104, 472...), convert pF to nF to µF, decode tolerance letters, and avoid the mF trap. Full code table included.',
    category: 'Electronics',
    date: '2026-07-19',
    readTime: '8 min read',
  },
  {
    slug: 'mcg-vs-ug-vs-mg',
    title: 'mcg vs µg vs mg: What Is the Difference? (Microgram vs Milligram)',
    description:
      'mcg and µg both mean microgram — 1,000 mcg = 1 mg. Why pharmacists write mcg, the 1,000× dosing-error danger, conversion chart, vitamin examples and IU explained.',
    category: 'Health & Lab',
    date: '2026-07-19',
    readTime: '7 min read',
  },
  {
    slug: 'ns-vs-us-ms-latency-chart',
    title: 'ns vs µs vs ms: The Complete Computer Latency Chart',
    description:
      'Nanosecond vs microsecond vs millisecond explained with the famous latency chart — CPU, cache, RAM, SSD, network — plus the "if 1 ns were 1 second" human-scale analogy.',
    category: 'Computing',
    date: '2026-07-19',
    readTime: '8 min read',
  },
  {
    slug: 'sievert-gray-becquerel-difference',
    title: 'Becquerel vs Gray vs Sievert: Radiation Units Explained',
    description:
      'Becquerel, gray and sievert explained without mixing quantities: activity (Bq), absorbed dose (Gy), radiation-protection dose quantities (Sv), plus when prefix conversion is valid.',
    category: 'Radiation',
    date: '2026-08-10',
    readTime: '7 min read',
  },
  {
    slug: 'visible-light-wavelength-nm-to-um',
    title: 'Visible Light Wavelengths: Nanometers to Micrometers (nm to µm)',
    description:
      'Convert the visible-light range from nanometers to micrometers. See 380–700 nm as 0.38–0.70 µm, wavelength examples, formulas and why optics switches units.',
    category: 'Optics',
    date: '2026-08-10',
    readTime: '6 min read',
  },
  {
    slug: 'semiconductor-process-nodes-explained',
    title: 'Semiconductor Process Nodes Explained: What “3 nm” Really Means',
    description:
      'Understand modern semiconductor node names, why a “3 nm” process is a technology generation rather than one universal physical dimension, and when nm-to-µm conversion is valid.',
    category: 'Semiconductors',
    date: '2026-08-10',
    readTime: '7 min read',
  },
  {
    slug: 'cell-size-in-micrometers',
    title: 'Cell and Particle Size in Micrometers: A Nano-to-Micro Scale Guide',
    description:
      'A practical nm-to-µm size guide using DNA and particle references, with conversion examples and an explanation of why biological structures should be described with ranges.',
    category: 'Biology & Scale',
    date: '2026-08-10',
    readTime: '6 min read',
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
