import { Link } from 'react-router';
import { Ruler, ArrowRight, ShieldCheck, FileText, ExternalLink, Atom, ChevronRight } from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { SpokeCalculator } from '@/components/SpokeCalculator';
import { FaqSection } from '@/components/Faq';

const SPOKE_FAQS = [
  {
    q: 'What is the exact formula to convert nanometers to micrometers?',
    a: 'To convert nanometers (nm) into micrometers (µm), divide the nanometer value by 1,000. Formula: µm = nm ÷ 1,000.',
  },
  {
    q: 'How many nanometers make up 1 micrometer?',
    a: 'There are exactly 1,000 nanometers in 1 micrometer (1 µm = 1,000 nm). A nanometer is 10⁻⁹ meters while a micrometer is 10⁻⁶ meters.',
  },
  {
    q: 'What is the difference between a micron and a micrometer?',
    a: 'A micron (symbol: µ) is an obsolete informal name for the micrometer (symbol: µm). Both represent 10⁻⁶ meters (1/1,000th of a millimeter or 1,000 nanometers). The official SI term is micrometer.',
  },
  {
    q: 'How do semiconductor transistor nodes convert from nm to µm?',
    a: 'Modern semiconductor process nodes are specified in nanometers (e.g. 3 nm, 5 nm, 14 nm). To convert to micrometers: 3 nm = 0.003 µm, 14 nm = 0.014 µm.',
  },
  {
    q: 'Can light wavelengths be expressed in micrometers instead of nanometers?',
    a: 'Yes. Visible light spans 400 nm to 700 nm, which equals 0.4 µm to 0.7 µm. Infrared light and optical fiber communications are frequently specified in micrometers (e.g. 1,550 nm = 1.55 µm).',
  },
  {
    q: 'Can I convert nanometers to microseconds?',
    a: 'No. Nanometers measure spatial length, whereas microseconds measure temporal duration. Metric prefixes can only be converted between compatible physical quantities.',
  },
];

export default function NmToUmSpokePage() {
  useSEO({
    title: 'Nanometers to Micrometers Converter (nm to µm) | NanoToMicro',
    description:
      'Convert nanometers (nm) to micrometers (µm) with our fast calculator. Formula: µm = nm ÷ 1,000. Includes semiconductor gate scales, DNA dimensions, conversion table, and FAQs.',
    canonical: 'https://www.nanotomicro.com/length/nm-to-um/',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Nanometers to Micrometers Converter (nm to µm)',
        description: 'Convert nanoscale length measurements from nanometers to micrometers using the ÷1,000 formula.',
        url: 'https://www.nanotomicro.com/length/nm-to-um/',
        isPartOf: {
          '@type': 'WebSite',
          name: 'NanoToMicro',
          url: 'https://www.nanotomicro.com/',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
            { '@type': 'ListItem', position: 2, name: 'Length Conversions', item: 'https://www.nanotomicro.com/length/' },
            { '@type': 'ListItem', position: 3, name: 'Nanometers to Micrometers', item: 'https://www.nanotomicro.com/length/nm-to-um/' },
          ],
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          { '@type': 'ListItem', position: 2, name: 'Length Conversions', item: 'https://www.nanotomicro.com/length/' },
          { '@type': 'ListItem', position: 3, name: 'Nanometers to Micrometers', item: 'https://www.nanotomicro.com/length/nm-to-um/' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: SPOKE_FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Nanometers to Micrometers Calculator',
        description: 'Instant length conversion calculator converting nanometers (nm) to micrometers (µm).',
        url: 'https://www.nanotomicro.com/length/nm-to-um/',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
    ],
  });

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden border-b border-border/60 bg-grid py-10 sm:py-14">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Link to="/" className="transition-colors hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            <Link to="/nano-to-micro-conversion/" className="transition-colors hover:text-primary">Nano to Micro Hub</Link>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            <span aria-current="page" className="font-semibold text-foreground">Nanometers to Micrometers</span>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Ruler className="h-4 w-4" /> Spatial Dimensions (Length)
            </div>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Nanometers to Micrometers Converter (nm to µm)
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Convert nanoscale length measurements from nanometers (nm) to micrometers (µm) using the universal divide-by-1,000 conversion formula.
            </p>
          </div>

          {/* Calculator Component */}
          <div className="mt-10">
            <SpokeCalculator
              title="Nanometers to Micrometers Calculator"
              subtitle="Convert nanometer length measurements to micrometers instantly."
              sourceUnitName="Nanometer"
              sourceUnitPlural="Nanometers"
              sourceUnitSymbol="nm"
              destUnitName="Micrometer"
              destUnitPlural="Micrometers"
              destUnitSymbol="µm"
              exampleInput={4500}
              categoryName="Length"
              reverseUrl="/micrometers-to-nanometers/"
              presets={[
                { label: '14 nm (Gate)', value: 14 },
                { label: '100 nm (Virus)', value: 100 },
                { label: '532 nm (Laser)', value: 532 },
                { label: '1,000 nm (1 µm)', value: 1000 },
                { label: '4,500 nm', value: 4500 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── FORMULA & MATHEMATICAL RELATIONSHIP ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Direct Formula Explanation</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Mathematical relation between the nanometer (10⁻⁹ m) and the micrometer (10⁻⁶ m).
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/30 bg-card p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Unit Definition & Ratio</span>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                A <strong>nanometer (nm)</strong> is defined as one billionth of a meter (10<sup>−9</sup> m). A <strong>micrometer (µm)</strong> is defined as one millionth of a meter (10<sup>−6</sup> m). Because 10<sup>−6</sup> / 10<sup>−9</sup> = 10³ = 1,000, exactly 1,000 nanometers fit into a single micrometer.
              </p>
              <div className="numeric mt-4 rounded-xl border border-primary/40 bg-primary/10 p-4 text-center">
                <span className="block text-xs font-bold uppercase text-primary">Formula</span>
                <span className="mt-1 block text-lg font-black text-primary sm:text-xl">
                  Micrometers (µm) = Nanometers (nm) ÷ 1,000
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">Manual Step-by-Step Conversion</span>
              <ol className="mt-3 space-y-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">1</span>
                  <span>Take the value expressed in nanometers (nm).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">2</span>
                  <span>Divide the number by 1,000 (or shift the decimal point 3 places to the left).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">3</span>
                  <span>Append the SI symbol <strong>µm</strong> to indicate micrometers.</span>
                </li>
              </ol>
              <div className="numeric mt-4 rounded-xl border border-border bg-secondary/50 p-3 text-xs font-mono font-bold text-foreground">
                Example: 4,500 nm ÷ 1,000 = <span className="text-primary">4.5 µm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REAL WORLD SCALE SPECTRUM ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Real-World Nanoscale to Microscale Spectrum</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Understanding physical dimensions across semiconductor lithography, biology, and optical physics.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-bold text-primary uppercase">Atomic Scale</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">Silicon Atom & DNA</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Silicon crystal lattice spacing is ~0.22 nm. A DNA double helix diameter measures approximately 2 nm (0.002 µm).
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-bold text-primary uppercase">Semiconductor Nodes</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">3 nm – 14 nm Transistor Gates</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Advanced CPU process nodes (e.g. 3 nm = 0.003 µm) dictate logic density, whereas interconnect metal pitch spans 0.02 µm to 0.1 µm.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-bold text-primary uppercase">Virology & Light</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">Viruses & UV Light</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Influenza viruses measure ~100 nm (0.1 µm). Extreme Ultraviolet (EUV) lithography operates at 13.5 nm (0.0135 µm).
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-bold text-primary uppercase">Cellular Biology</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">Bacteria & Blood Cells</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                E. coli bacteria measure 1,000–2,000 nm (1–2 µm), human red blood cells measure ~7,500 nm (7.5 µm), and hair is ~70,000 nm (70 µm).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK CONVERSION TABLE ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nanometers to Micrometers Conversion Table</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Reference lookup table for common nanometer values converted to micrometers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/80 text-foreground border-b border-border">
                  <th className="px-5 py-3.5 font-bold">Nanometers (nm)</th>
                  <th className="px-5 py-3.5 font-bold text-muted-foreground">Calculation</th>
                  <th className="px-5 py-3.5 font-bold text-primary">Micrometers (µm)</th>
                </tr>
              </thead>
              <tbody className="numeric divide-y divide-border/60">
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">1 nm</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">1 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">0.001 µm</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">14 nm</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">14 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">0.014 µm</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">100 nm</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">100 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">0.1 µm</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">500 nm</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">500 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">0.5 µm</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">1,000 nm</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">1,000 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">1 µm</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">4,500 nm</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">4,500 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">4.5 µm</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">10,000 nm</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">10,000 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">10 µm</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">1,000,000 nm</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">1,000,000 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">1,000 µm (1 mm)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WORKED EXAMPLES ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Worked Calculation Examples</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Step-by-step mathematical calculations for real-world engineering and optical applications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Example 1: Semiconductor Gate</span>
              <h3 className="mt-1 text-base font-bold text-foreground">Convert 14 nm to µm</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A semiconductor manufacturer specifies a transistor gate width of 14 nanometers. Express this length in micrometers:
              </p>
              <div className="numeric mt-3 space-y-2 rounded-xl border border-border/80 bg-secondary/40 p-4 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Calculation:</span>
                  <span className="font-mono font-bold">14 ÷ 1,000 = 0.014</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-extrabold text-primary">
                  <span>Result:</span>
                  <span>14 nm = 0.014 µm</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Example 2: Laser Wavelength</span>
              <h3 className="mt-1 text-base font-bold text-foreground">Convert 632.8 nm Helium-Neon Laser Wavelength to µm</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A red Helium-Neon laser emits light at a wavelength of 632.8 nanometers. Express this in micrometers:
              </p>
              <div className="numeric mt-3 space-y-2 rounded-xl border border-border/80 bg-secondary/40 p-4 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Calculation:</span>
                  <span className="font-mono font-bold">632.8 ÷ 1,000 = 0.6328</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-extrabold text-primary">
                  <span>Result:</span>
                  <span>632.8 nm = 0.6328 µm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCURACY & METROLOGY INTERPRETATION ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Accuracy and Metrology Standards</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              How dimensional measurement techniques resolve features between nanometers and micrometers.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
              <div>
                <h3 className="font-bold text-foreground text-sm mb-2">Optical Microscopy Limits</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Far-field optical microscopes are constrained by Ernst Abbe’s diffraction limit ($\lambda / 2 \text{NA} \approx 200\text{ nm} = 0.2\text{ }\mu\text{m}$). Features smaller than 200 nm cannot be clearly resolved using visible light microscopy.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-2">Electron & Atomic Probe Metrology</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Scanning Electron Microscopy (SEM) and Atomic Force Microscopy (AFM) achieve sub-nanometer resolution (under 1 nm = 0.001 µm) by using electron beams or mechanical cantilever probes calibrated against laser interferometers.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-2">NIST Calibration Traceability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dimensional measurements in semiconductor manufacturing are traceable to National Metrology Institutes (such as NIST or PTB) using optical diffraction gratings calibrated against laser wavelength standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIALIST FAQS ── */}
      <FaqSection faqs={SPOKE_FAQS} heading="Nanometers to Micrometers FAQs" />

      {/* ── SOURCES AND REFERENCES ── */}
      <section className="py-12 border-t border-border/60 bg-card/20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2 mb-3">
              <FileText className="h-4 w-4 text-primary" /> Primary Sources & Metrology References
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Bureau International des Poids et Mesures (BIPM) — <em>The International System of Units (SI Brochure, 9th Edition)</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>National Institute of Standards and Technology (NIST) — <em>Special Publication 330: The International System of Units</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>ISO 80000-3:2019 — <em>Quantities and units — Part 3: Space and time</em>.</span>
              </li>
            </ul>

            {/* Author & Editorial Metadata */}
            <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-400" />
                <span>Published by <strong>NanoToMicro Editorial Team</strong> • Reviewed by SI Metrology Desk</span>
              </div>
              <div>Last updated: August 2026</div>
            </div>
          </div>

          {/* Hub Backlink Box */}
          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
            <h3 className="text-base font-bold text-foreground">Need to convert other nano-to-micro quantities?</h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Visit our central topical hub covering mass, time, volume, electric current, capacitance, and radiation.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/nano-to-micro-conversion/"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                <Atom className="h-4 w-4" /> Open Universal Nano to Micro Hub <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/time/ns-to-us/"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50"
              >
                Nanoseconds to Microseconds (ns → µs)
              </Link>
              <Link
                to="/radiation/nsv-to-usv/"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50"
              >
                Nanosieverts to Microsieverts (nSv → µSv)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
