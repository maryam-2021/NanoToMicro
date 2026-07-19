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
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
