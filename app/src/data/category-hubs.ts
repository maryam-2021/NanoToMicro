export interface CategoryHubDef {
  slug: string;
  name: string;
  categoryNames: string[];
  title: string;
  description: string;
  intro: string;
  examples: string[];
}

export const CATEGORY_HUBS: CategoryHubDef[] = [
  {
    slug: 'length',
    name: 'Length',
    categoryNames: ['Length'],
    title: 'Nano & Micro Length Converters — nm, µm, mm and pm | NanoToMicro',
    description: 'Length conversion hub for nanometers, micrometers, millimeters and picometers. Compare nanoscale and microscale measurements with exact SI calculators and guides.',
    intro: 'Length is where nano and micro scales are most familiar: wavelengths and thin films are often measured in nanometers, while cells, machining tolerances and microscope dimensions are commonly expressed in micrometers.',
    examples: ['Nanometers ↔ micrometers', 'Picometers ↔ nanometers', 'Micrometers ↔ millimeters'],
  },
  {
    slug: 'mass',
    name: 'Mass',
    categoryNames: ['Mass'],
    title: 'Nano & Micro Mass Converters — ng, µg and mg | NanoToMicro',
    description: 'Mass conversion hub for nanograms, micrograms and milligrams, with exact SI calculators, worked examples and reference tables for lab and measurement use.',
    intro: 'Trace mass measurements often move between nanograms, micrograms and milligrams. This hub groups the relevant calculators so laboratory, nutrition and analytical measurements can be normalized without mixing prefixes.',
    examples: ['Nanograms ↔ micrograms', 'Micrograms ↔ milligrams', 'Nanograms ↔ milligrams'],
  },
  {
    slug: 'time',
    name: 'Time',
    categoryNames: ['Time'],
    title: 'Nano & Micro Time Converters — ps, ns, µs and ms | NanoToMicro',
    description: 'Time conversion hub for picoseconds, nanoseconds, microseconds and milliseconds, with calculators and practical latency examples for computing and electronics.',
    intro: 'Modern computing crosses several time scales in a single system. Clock periods and signal edges can be picoseconds or nanoseconds, while storage and network events often move into microseconds and milliseconds.',
    examples: ['Picoseconds ↔ nanoseconds', 'Nanoseconds ↔ microseconds', 'Microseconds ↔ milliseconds'],
  },
  {
    slug: 'volume',
    name: 'Volume',
    categoryNames: ['Volume'],
    title: 'Nano & Micro Volume Converters — nL, µL and mL | NanoToMicro',
    description: 'Volume conversion hub for nanoliters, microliters and milliliters. Use exact SI calculators for microfluidics, laboratory pipetting and small-volume measurements.',
    intro: 'Microfluidics and laboratory work regularly cross the nanoliter, microliter and milliliter boundaries. Exact prefix conversion helps keep protocols, pipette settings and instrument outputs consistent.',
    examples: ['Nanoliters ↔ microliters', 'Microliters ↔ milliliters'],
  },
  {
    slug: 'concentration',
    name: 'Concentration',
    categoryNames: ['Concentration'],
    title: 'Nano & Micro Concentration Converters — pM, nM, µM and mM | NanoToMicro',
    description: 'Concentration conversion hub for picomolar, nanomolar, micromolar and millimolar values used in assays, pharmacology and laboratory calculations.',
    intro: 'Biochemistry and pharmacology routinely compare picomolar, nanomolar, micromolar and millimolar concentrations. These calculators convert the prefix scale only; they do not replace dilution or molecular-weight calculations.',
    examples: ['Picomolar ↔ nanomolar', 'Nanomolar ↔ micromolar', 'Nanomolar ↔ millimolar'],
  },
  {
    slug: 'capacitance',
    name: 'Capacitance',
    categoryNames: ['Capacitance'],
    title: 'Capacitance Converters — pF, nF and µF | NanoToMicro',
    description: 'Capacitance conversion hub for picofarads, nanofarads and microfarads, including capacitor-code context and exact pF, nF and µF calculators.',
    intro: 'Electronics documentation mixes pF, nF and µF constantly. This hub connects capacitor markings, schematics and supplier listings using exact powers-of-ten conversions.',
    examples: ['Picofarads ↔ nanofarads', 'Nanofarads ↔ microfarads'],
  },
  {
    slug: 'electric-current',
    name: 'Electric Current',
    categoryNames: ['Electric Current'],
    title: 'Electric Current Converters — pA, nA, µA and mA | NanoToMicro',
    description: 'Electric-current conversion hub for picoamps, nanoamps, microamps and milliamps, with exact SI calculators for sensors, electronics and measurement systems.',
    intro: 'Low-power electronics and instrumentation often move between picoamps, nanoamps, microamps and milliamps. Keeping the prefix scale explicit is especially important when comparing sensor leakage, bias current and device consumption.',
    examples: ['Picoamps ↔ nanoamps', 'Nanoamps ↔ microamps', 'Microamps ↔ milliamps'],
  },
  {
    slug: 'electric-charge',
    name: 'Electric Charge',
    categoryNames: ['Electric Charge'],
    title: 'Electric Charge Converters — nC and µC | NanoToMicro',
    description: 'Electric-charge conversion hub for nanocoulombs and microcoulombs, with exact SI calculators and practical electronics measurement context.',
    intro: 'Charge measurements in sensors, pulse circuits and electrostatics are often expressed in nanocoulombs or microcoulombs. These converters keep charge values on one consistent scale.',
    examples: ['Nanocoulombs ↔ microcoulombs'],
  },
  {
    slug: 'radiation',
    name: 'Radiation',
    categoryNames: [],
    title: 'Radiation Unit Guides — nSv, µSv, mSv, Gy and Bq | NanoToMicro',
    description: 'Radiation measurement hub covering nanosieverts, microsieverts, millisieverts, gray, sievert, becquerel and dose-rate terminology with careful unit distinctions.',
    intro: 'Radiation measurements use several quantities that must not be treated as interchangeable. This hub separates activity (becquerel), absorbed dose (gray), protection dose quantities (sievert) and dose rate while providing exact prefix conversions where they are valid.',
    examples: ['Nanosieverts ↔ microsieverts', 'Microsieverts ↔ millisieverts', 'Gray vs sievert', 'µSv vs µSv/h'],
  },
];

export function getCategoryHub(slug: string): CategoryHubDef | undefined {
  return CATEGORY_HUBS.find((hub) => hub.slug === slug);
}

export function categoryHubPath(categoryName: string): string | undefined {
  const hub = CATEGORY_HUBS.find((item) => item.categoryNames.includes(categoryName));
  return hub ? `/units/${hub.slug}/` : undefined;
}
