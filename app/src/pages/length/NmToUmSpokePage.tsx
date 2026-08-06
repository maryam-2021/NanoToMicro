import { Link } from 'react-router';
import { Ruler, ArrowRight, ShieldCheck, FileText, ExternalLink, Atom, ChevronRight, ArrowLeftRight } from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { SpokeCalculator } from '@/components/SpokeCalculator';
import { RelatedConversions } from '@/components/RelatedConversions';
import { FaqSection } from '@/components/Faq';

const SPOKE_FAQS = [
  {
    q: 'How many nanometers are in one micrometer?',
    a: 'There are exactly 1,000 nanometers in one micrometer (1 µm = 1,000 nm). A nanometer is 10⁻⁹ meters, whereas a micrometer is 10⁻⁶ meters.',
  },
  {
    q: 'How do I convert nm to µm?',
    a: 'To convert nanometers (nm) to micrometers (µm), divide the nanometer value by 1,000 or shift the decimal point three places to the left. Formula: µm = nm ÷ 1,000.',
  },
  {
    q: 'Is a nanometer smaller than a micrometer?',
    a: 'Yes. A nanometer is 1,000 times smaller than a micrometer. One nanometer equals 0.001 micrometers.',
  },
  {
    q: 'Is µm the same as a micron?',
    a: 'Yes. Micron (symbol: µ) is an older informal term for the micrometer (symbol: µm). Both represent 10⁻⁶ meters. Micrometer is the principal SI scientific term.',
  },
  {
    q: 'What is 500 nm in micrometers?',
    a: '500 nanometers equals 0.5 micrometers (500 ÷ 1,000 = 0.5 µm). This corresponds to green-yellow visible light.',
  },
  {
    q: 'Is 1,000 nm equal to 1 µm?',
    a: 'Yes. 1,000 nanometers equals exactly 1 micrometer (1,000 nm = 1 µm).',
  },
  {
    q: 'Why are light wavelengths measured in nanometers?',
    a: 'Visible light ranges from approximately 380 nm to 700 nm. Using nanometers allows optical scientists to express wavelengths in convenient whole numbers (e.g. 532 nm instead of 0.000000532 m).',
  },
  {
    q: 'Are semiconductor node names exact physical dimensions?',
    a: 'No. Modern semiconductor process node names (such as TSMC N3 or 3 nm generation) designate a technology generation rather than a literal 3 nm gate length.',
  },
  {
    q: 'Can I type um instead of µm?',
    a: 'Yes. On standard keyboards without the Greek letter µ, users commonly type "um" as an informal substitute for µm.',
  },
  {
    q: 'What is the difference between nm and µm?',
    a: 'Nanometers (10⁻⁹ m) describe molecular, atomic, and optical wavelength scales. Micrometers (10⁻⁶ m) describe cellular, biological, and airborne particle dimensions. Micrometers are 1,000 times larger than nanometers.',
  },
];

export default function NmToUmSpokePage() {
  useSEO({
    title: 'Nanometers to Micrometers Converter (nm to µm) & Scale Guide',
    description:
      'Convert nanometers to micrometers with the nm-to-µm calculator, formula, conversion table and real-world examples from optics, biology and technology.',
    canonical: 'https://www.nanotomicro.com/length/nm-to-um/',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Nanometers to Micrometers Converter (nm to µm) & Scale Guide',
        description: 'Convert nanoscale length measurements from nanometers (nm) to micrometers (µm) using the ÷1,000 formula.',
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
            { '@type': 'ListItem', position: 2, name: 'Nano to Micro Hub', item: 'https://www.nanotomicro.com/nano-to-micro-conversion/' },
            { '@type': 'ListItem', position: 3, name: 'Nanometers to Micrometers', item: 'https://www.nanotomicro.com/length/nm-to-um/' },
          ],
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          { '@type': 'ListItem', position: 2, name: 'Nano to Micro Hub', item: 'https://www.nanotomicro.com/nano-to-micro-conversion/' },
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
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="text-muted-foreground/60">&gt;</li>
              <li><Link to="/nano-to-micro-conversion/" className="transition-colors hover:text-primary">Nano to Micro Hub</Link></li>
              <li aria-hidden="true" className="text-muted-foreground/60">&gt;</li>
              <li><span aria-current="page" className="font-semibold text-foreground">Nanometers to Micrometers</span></li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Ruler className="h-4 w-4" /> Spatial Dimensions (Length)
            </div>
            
            {/* H1 Heading */}
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Convert Nanometers to Micrometers (nm to µm)
            </h1>

            {/* Concise Hero Intro (70-110 words) */}
            <div className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                A nanometer (nm) represents 10<sup>−9</sup> meters, while a micrometer (µm) represents 10<sup>−6</sup> meters. Because the two metric prefixes differ by three powers of ten, one micrometer contains exactly 1,000 nanometers. To convert any length measurement from nanometers to micrometers, simply divide the nanometer value by 1,000. Use our instant calculator below to convert nanoscale dimensions from Semiconductor lithography, optical physics, and molecular biology.
              </p>
            </div>

            {/* Formula Badge & Reverse Conversion Link */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <span className="numeric rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-extrabold text-primary">
                nm → µm: divide by 1,000
              </span>
              <Link
                to="/micrometers-to-nanometers/"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <ArrowLeftRight className="h-3.5 w-3.5 text-primary" /> Convert micrometers to nanometers
              </Link>
            </div>
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
              exampleInput={2500}
              categoryName="Length"
              reverseUrl="/micrometers-to-nanometers/"
              presets={[
                { label: '10 nm', value: 10 },
                { label: '100 nm', value: 100 },
                { label: '1,000 nm', value: 1000 },
                { label: '5,000 nm', value: 5000 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── H2: NANOMETERS TO MICROMETERS FORMULA ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nanometers to Micrometers Formula</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Understanding the exponential scale relationship between 10⁻⁹ m and 10⁻⁶ m.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/30 bg-card p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Mathematical Relationship</span>
              <div className="numeric mt-3 space-y-2 text-xs sm:text-sm font-semibold text-foreground">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span>1 µm</span>
                  <span className="font-bold text-primary font-mono">= 1,000 nm</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span>1 nm</span>
                  <span className="font-bold text-primary font-mono">= 0.001 µm</span>
                </div>
              </div>

              <div className="numeric mt-4 rounded-xl border border-primary/40 bg-primary/10 p-4 text-center">
                <span className="block text-xs font-bold uppercase text-primary">Main Formula</span>
                <span className="mt-1 block text-base font-black text-primary sm:text-lg">
                  Length in µm = Length in nm ÷ 1,000
                </span>
                <span className="mt-1 block font-mono text-xs font-semibold text-muted-foreground">
                  (or L<sub>µm</sub> = L<sub>nm</sub> ÷ 10³)
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">Exponent & Scale Explanation</span>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Nano represents 10<sup>−9</sup> and micro represents 10<sup>−6</sup>. The prefixes differ by three powers of ten (10<sup>−6</sup> / 10<sup>−9</sup> = 10³). Three powers of ten equal a factor of 1,000.
              </p>
              
              <div className="numeric mt-4 rounded-xl border border-border bg-secondary/50 p-4 text-xs sm:text-sm">
                <span className="block text-xs font-bold uppercase text-primary mb-1">Worked Example</span>
                <p className="font-mono text-muted-foreground">7,500 nm ÷ 1,000 = 7.5 µm</p>
                <p className="mt-1 font-bold text-foreground">Therefore: 7,500 nm = 7.5 µm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: HOW TO CONVERT NM TO UM MANUALLY ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How to Convert nm to µm Manually</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Follow these three simple steps or use the decimal shift shortcut.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-extrabold text-primary">
                1
              </div>
              <h3 className="mt-3 text-sm font-bold text-foreground">Step 1</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Write down the value in nanometers (nm).
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-extrabold text-primary">
                2
              </div>
              <h3 className="mt-3 text-sm font-bold text-foreground">Step 2</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Divide the value by 1,000.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-extrabold text-primary">
                3
              </div>
              <h3 className="mt-3 text-sm font-bold text-foreground">Step 3</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Replace nm with µm.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6">
            <h3 className="text-sm font-bold text-foreground">Decimal Shortcut</h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              “Move the decimal point three places to the left.”
            </p>
            <div className="numeric mt-3 flex flex-wrap gap-4 text-xs font-mono font-bold text-foreground">
              <span className="rounded-lg bg-card px-3 py-1.5 border border-border">1,000 nm → 1 µm</span>
              <span className="rounded-lg bg-card px-3 py-1.5 border border-border">500 nm → 0.5 µm</span>
              <span className="rounded-lg bg-card px-3 py-1.5 border border-border">25 nm → 0.025 µm</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: NANOMETERS VS MICROMETERS (COMPARISON TABLE) ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nanometers vs Micrometers</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Comparing symbols, scientific notation, decimal forms, and typical physical scales.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/80 text-foreground border-b border-border">
                  <th scope="col" className="px-5 py-3.5 font-bold">Feature</th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-primary">Nanometer</th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-foreground">Micrometer</th>
                </tr>
              </thead>
              <tbody className="numeric divide-y divide-border/60">
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">Symbol</td>
                  <td className="px-5 py-3 font-bold text-primary">nm</td>
                  <td className="px-5 py-3 font-bold text-foreground">µm</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">Meters</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">10⁻⁹ m</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">10⁻⁶ m</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">Decimal form</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">0.000000001 m</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">0.000001 m</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">Relative relationship</td>
                  <td className="px-5 py-3 font-muted-foreground">1/1,000 of a µm</td>
                  <td className="px-5 py-3 font-muted-foreground">1,000 nm</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">Typical scale</td>
                  <td className="px-5 py-3 text-muted-foreground">Molecules, wavelengths and nanoscale structures</td>
                  <td className="px-5 py-3 text-muted-foreground">Cells, particles and microscopic structures</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-muted-foreground text-center">
            Note: “Micron” is an older but still commonly encountered name for the micrometer. “Micrometer” is the principal scientific term.
          </p>
        </div>
      </section>

      {/* ── H2: REAL-WORLD SCALE — NANOMETERS VS MICROMETERS ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Real-World Scale — Nanometers vs Micrometers</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Exploring physical dimensions across biology, optics, environmental science, and semiconductor technology.
            </p>
          </div>

          <div className="space-y-8">
            {/* H3: The Nanometer Scale */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border/60 pb-3">
                <Atom className="h-5 w-5 text-primary" /> The Nanometer Scale
              </h3>
              
              <div className="mt-5 space-y-6 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1">DNA Diameter</h4>
                  <p>
                    A DNA double helix is approximately 2 nm in diameter [NIH/NHGRI]. In micrometers: <strong>2 nm = 0.002 µm</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1">Visible-Light Wavelengths</h4>
                  <p>
                    Visible light is commonly described as approximately 380–700 nm [NASA Science]. In micrometers: <strong>380 nm = 0.38 µm</strong> and <strong>700 nm = 0.7 µm</strong>. Optics literature uses either nanometers or micrometers depending on the spectrum range.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1">Semiconductor Process Generations</h4>
                  <p>
                    Modern semiconductor node names, such as TSMC N3 or the 3 nm generation, identify a process-technology generation and should not be interpreted as one universal transistor dimension [TSMC / IEEE IRDS].
                  </p>
                </div>
              </div>
            </div>

            {/* H3: The Micrometer Scale */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border/60 pb-3">
                <Ruler className="h-5 w-5 text-primary" /> The Micrometer Scale
              </h3>

              <div className="mt-5 space-y-6 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1">Red Blood Cells</h4>
                  <p>
                    A typical human red blood cell diameter measures approximately 7–8 µm [NCBI], noting biological variation. In nanometers: <strong>7.5 µm = 7,500 nm</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1">PM2.5 Airborne Particles</h4>
                  <p>
                    PM2.5 describes fine inhalable particles with aerodynamic diameters generally 2.5 µm or smaller [US EPA]. In nanometers: <strong>2.5 µm = 2,500 nm</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1">Bacteria</h4>
                  <p>
                    Many medically relevant bacteria have dimensions within the micrometer scale, but their width and length vary substantially between species.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: QUICK NM-TO-UM CONVERSION TABLE ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Quick nm-to-µm Conversion Table</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Responsive reference lookup table for standard nanometer values converted to micrometers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/80 text-foreground border-b border-border">
                  <th scope="col" className="px-5 py-3.5 font-bold">Nanometers</th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-primary">Micrometers</th>
                </tr>
              </thead>
              <tbody className="numeric divide-y divide-border/60">
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">1 nm</td><td className="px-5 py-3 font-bold text-primary">0.001 µm</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">10 nm</td><td className="px-5 py-3 font-bold text-primary">0.01 µm</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">100 nm</td><td className="px-5 py-3 font-bold text-primary">0.1 µm</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">500 nm</td><td className="px-5 py-3 font-bold text-primary">0.5 µm</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">1,000 nm</td><td className="px-5 py-3 font-bold text-primary">1 µm</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">5,000 nm</td><td className="px-5 py-3 font-bold text-primary">5 µm</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">10,000 nm</td><td className="px-5 py-3 font-bold text-primary">10 µm</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">100,000 nm</td><td className="px-5 py-3 font-bold text-primary">100 µm</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">1,000,000 nm</td><td className="px-5 py-3 font-bold text-primary">1,000 µm</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── H2: WORKED LENGTH EXAMPLES ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Worked Length Examples</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Step-by-step mathematical calculations for length conversions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground">Convert 250 nm to µm</h3>
              <p className="numeric mt-2 font-mono text-xs text-muted-foreground">250 ÷ 1,000 = 0.25</p>
              <p className="numeric mt-1 text-sm font-bold text-primary">250 nm = 0.25 µm</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground">Convert 4,500 nm to µm</h3>
              <p className="numeric mt-2 font-mono text-xs text-muted-foreground">4,500 ÷ 1,000 = 4.5</p>
              <p className="numeric mt-1 text-sm font-bold text-primary">4,500 nm = 4.5 µm</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground">Convert 0.8 nm to µm</h3>
              <p className="numeric mt-2 font-mono text-xs text-muted-foreground">0.8 ÷ 1,000 = 0.0008</p>
              <p className="numeric mt-1 text-sm font-bold text-primary">0.8 nm = 0.0008 µm</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground">Convert 1.2 × 10⁶ nm to µm</h3>
              <p className="numeric mt-2 font-mono text-xs text-muted-foreground">1,200,000 ÷ 1,000 = 1,200</p>
              <p className="numeric mt-1 text-sm font-bold text-primary">1.2 × 10⁶ nm = 1,200 µm</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: LENGTH CONVERSION ACCURACY ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Length Conversion Accuracy</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Understanding significant figures and precision when converting scientific length measurements.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-xs sm:text-sm leading-relaxed text-muted-foreground space-y-4">
            <p>
              The conversion factor between nanometers and micrometers (1,000) is mathematically exact. However, the precision of the final result depends entirely on the precision of the input measurement.
            </p>
            <p>
              Do not add false decimal precision to calculated outputs. Preserve meaningful significant figures where scientific measurements are involved.
            </p>
            <div className="numeric rounded-xl border border-primary/30 bg-primary/10 p-4 text-foreground font-semibold">
              Example: An input recorded as 2.5 nm should normally produce 0.0025 µm, not a long string of artificial trailing digits.
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
                <span>BIPM / NIST — <em>The International System of Units (SI Brochure & SP 330)</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>NASA Science — <em>Electromagnetic Spectrum: Visible Light Wavelengths</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>NIH / NHGRI — <em>DNA Double Helix Physical Dimensions & Scale</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>US EPA — <em>Particulate Matter (PM2.5) Basics and Aerodynamic Diameter</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>NCBI — <em>Human Erythrocyte (Red Blood Cell) Dimensions and Morphology</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>TSMC / IEEE IRDS — <em>International Roadmap for Devices and Systems: Logic Node Terminology</em>.</span>
              </li>
            </ul>

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
              Visit our central <Link to="/nano-to-micro-conversion/" className="font-bold text-primary underline">nano-to-micro metric-prefix guide</Link> covering mass, time, volume, electric current, capacitance, and radiation.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/nano-to-micro-conversion/"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                <Atom className="h-4 w-4" /> Open Universal Nano to Micro Hub <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Related Conversions Component */}
          <RelatedConversions currentSpoke="length" />
        </div>
      </section>
    </>
  );
}
