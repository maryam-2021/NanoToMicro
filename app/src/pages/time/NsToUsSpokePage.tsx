import { Link } from 'react-router';
import { Timer, ArrowRight, ShieldCheck, FileText, ExternalLink, Atom, ChevronRight } from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { SpokeCalculator } from '@/components/SpokeCalculator';
import { FaqSection } from '@/components/Faq';

const SPOKE_FAQS = [
  {
    q: 'What is the formula to convert nanoseconds to microseconds?',
    a: 'To convert nanoseconds (ns) to microseconds (µs), divide the nanosecond value by 1,000. Formula: µs = ns ÷ 1,000.',
  },
  {
    q: 'How many nanoseconds are in 1 microsecond?',
    a: 'There are exactly 1,000 nanoseconds in 1 microsecond (1 µs = 1,000 ns). A nanosecond is 10⁻⁹ seconds, whereas a microsecond is 10⁻⁶ seconds.',
  },
  {
    q: 'Why is converting ns to µs important in computer architecture?',
    a: 'Computer CPUs operate at gigahertz frequencies where single clock cycles span sub-nanoseconds (~0.25 ns). Main memory (DRAM) accesses take ~60 ns (0.06 µs), while operating system context switches and SSD reads span microseconds. Converting units allows software engineers to compare hardware latency across layers.',
  },
  {
    q: 'How do high-frequency trading (HFT) platforms use microsecond timing?',
    a: 'In financial HFT and network engineering, trade execution latency is measured in nanoseconds (e.g. FPGA packet parsing at 150 ns = 0.15 µs), whereas fiber optic network transit delays span microseconds.',
  },
  {
    q: 'How many microseconds is 250 nanoseconds?',
    a: '250 nanoseconds equals 0.25 microseconds (250 ÷ 1,000 = 0.25 µs).',
  },
  {
    q: 'Can nanoseconds be converted into nanometers?',
    a: 'No. Nanoseconds measure temporal duration, while nanometers measure physical distance. Metric prefix conversions only apply between units sharing the same physical dimension.',
  },
];

export default function NsToUsSpokePage() {
  useSEO({
    title: 'Nanoseconds to Microseconds Converter (ns to µs) | NanoToMicro',
    description:
      'Convert nanoseconds (ns) to microseconds (µs) with our instant calculator. Formula: µs = ns ÷ 1,000. Includes CPU cache latency, DRAM access times, network delays & FAQs.',
    canonical: 'https://www.nanotomicro.com/time/ns-to-us/',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Nanoseconds to Microseconds Converter (ns to µs)',
        description: 'Convert temporal measurements from nanoseconds to microseconds using the ÷1,000 formula.',
        url: 'https://www.nanotomicro.com/time/ns-to-us/',
        isPartOf: {
          '@type': 'WebSite',
          name: 'NanoToMicro',
          url: 'https://www.nanotomicro.com/',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
            { '@type': 'ListItem', position: 2, name: 'Time Conversions', item: 'https://www.nanotomicro.com/time/' },
            { '@type': 'ListItem', position: 3, name: 'Nanoseconds to Microseconds', item: 'https://www.nanotomicro.com/time/ns-to-us/' },
          ],
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          { '@type': 'ListItem', position: 2, name: 'Time Conversions', item: 'https://www.nanotomicro.com/time/' },
          { '@type': 'ListItem', position: 3, name: 'Nanoseconds to Microseconds', item: 'https://www.nanotomicro.com/time/ns-to-us/' },
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
        name: 'Nanoseconds to Microseconds Calculator',
        description: 'Instant temporal conversion calculator converting nanoseconds (ns) to microseconds (µs).',
        url: 'https://www.nanotomicro.com/time/ns-to-us/',
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
            <span aria-current="page" className="font-semibold text-foreground">Nanoseconds to Microseconds</span>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Timer className="h-4 w-4" /> Temporal Dimensions (Time)
            </div>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Nanoseconds to Microseconds Converter (ns to µs)
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Convert ultra-fast timing measurements from nanoseconds (ns) to microseconds (µs) using the universal divide-by-1,000 formula.
            </p>
          </div>

          {/* Calculator Component */}
          <div className="mt-10">
            <SpokeCalculator
              title="Nanoseconds to Microseconds Calculator"
              subtitle="Convert hardware latency, execution speed, and signal transit times instantly."
              sourceUnitName="Nanosecond"
              sourceUnitPlural="Nanoseconds"
              sourceUnitSymbol="ns"
              destUnitName="Microsecond"
              destUnitPlural="Microseconds"
              destUnitSymbol="µs"
              exampleInput={250}
              categoryName="Time"
              reverseUrl="/microseconds-to-nanoseconds/"
              presets={[
                { label: '1 ns (L1 Cache)', value: 1 },
                { label: '60 ns (RAM Fetch)', value: 60 },
                { label: '250 ns', value: 250 },
                { label: '1,000 ns (1 µs)', value: 1000 },
                { label: '5,000 ns', value: 5000 },
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
              Mathematical relationship between the nanosecond (10⁻⁹ s) and the microsecond (10⁻⁶ s).
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/30 bg-card p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Unit Definition & Ratio</span>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                A <strong>nanosecond (ns)</strong> is defined as one billionth of a second (10<sup>−9</sup> s). A <strong>microsecond (µs)</strong> is defined as one millionth of a second (10<sup>−6</sup> s). Because 10<sup>−6</sup> / 10<sup>−9</sup> = 1,000, exactly 1,000 nanoseconds equal one microsecond.
              </p>
              <div className="numeric mt-4 rounded-xl border border-primary/40 bg-primary/10 p-4 text-center">
                <span className="block text-xs font-bold uppercase text-primary">Formula</span>
                <span className="mt-1 block text-lg font-black text-primary sm:text-xl">
                  Microseconds (µs) = Nanoseconds (ns) ÷ 1,000
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">Manual Step-by-Step Conversion</span>
              <ol className="mt-3 space-y-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">1</span>
                  <span>Take the timing duration measured in nanoseconds (ns).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">2</span>
                  <span>Divide by 1,000 (move decimal point 3 positions to the left).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">3</span>
                  <span>Append the SI unit symbol <strong>µs</strong> to represent microseconds.</span>
                </li>
              </ol>
              <div className="numeric mt-4 rounded-xl border border-border bg-secondary/50 p-3 text-xs font-mono font-bold text-foreground">
                Example: 250 ns ÷ 1,000 = <span className="text-primary">0.25 µs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPUTER LATENCY SPECTRUM ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Computer Hardware Latency Hierarchy</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Comparing execution speeds across processor cycles, cache memories, and network round trips.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-bold text-primary uppercase">CPU Clock Cycle</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">0.25 ns – 0.5 ns</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                A modern 4.0 GHz processor completes one CPU clock cycle every 0.25 nanoseconds (0.00025 µs).
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-bold text-primary uppercase">CPU Cache Latency</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">1 ns – 15 ns</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                L1 CPU cache access takes ~1 ns (0.001 µs). L3 cache access spans ~10–15 ns (0.01–0.015 µs).
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-bold text-primary uppercase">DRAM RAM Latency</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">50 ns – 70 ns</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Main DDR4/DDR5 system memory access takes ~60 nanoseconds (0.06 microseconds).
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-bold text-primary uppercase">NVMe SSD & OS Context</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">1,000 ns – 20,000 ns</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                OS thread context switches take 1–3 µs (1,000–3,000 ns). Fast NVMe SSD reads take ~10–20 µs (10,000–20,000 ns).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONVERSION TABLE ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nanoseconds to Microseconds Conversion Table</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Reference lookup table for common nanosecond timing values converted to microseconds.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/80 text-foreground border-b border-border">
                  <th className="px-5 py-3.5 font-bold">Nanoseconds (ns)</th>
                  <th className="px-5 py-3.5 font-bold text-muted-foreground">Calculation</th>
                  <th className="px-5 py-3.5 font-bold text-primary">Microseconds (µs)</th>
                </tr>
              </thead>
              <tbody className="numeric divide-y divide-border/60">
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">1 ns</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">1 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">0.001 µs</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">10 ns</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">10 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">0.01 µs</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">60 ns (RAM)</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">60 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">0.06 µs</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">250 ns</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">250 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">0.25 µs</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">500 ns</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">500 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">0.5 µs</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">1,000 ns</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">1,000 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">1 µs</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">5,000 ns</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">5,000 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">5 µs</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">1,000,000 ns</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">1,000,000 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">1,000 µs (1 ms)</td>
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
              Step-by-step calculations for memory latency profiling and network packet transmission.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Example 1: DRAM Latency</span>
              <h3 className="mt-1 text-base font-bold text-foreground">Convert 60 ns RAM fetch time to µs</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A system profiler records a 60 nanosecond memory access latency. Express this duration in microseconds:
              </p>
              <div className="numeric mt-3 space-y-2 rounded-xl border border-border/80 bg-secondary/40 p-4 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Calculation:</span>
                  <span className="font-mono font-bold">60 ÷ 1,000 = 0.06</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-extrabold text-primary">
                  <span>Result:</span>
                  <span>60 ns = 0.06 µs</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Example 2: Network Propagation</span>
              <h3 className="mt-1 text-base font-bold text-foreground">Convert 250 ns Fiber Optic Transit to µs</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Light travels ~50 meters down a silica optical fiber cable in 250 nanoseconds. Convert to microseconds:
              </p>
              <div className="numeric mt-3 space-y-2 rounded-xl border border-border/80 bg-secondary/40 p-4 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Calculation:</span>
                  <span className="font-mono font-bold">250 ÷ 1,000 = 0.25</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-extrabold text-primary">
                  <span>Result:</span>
                  <span>250 ns = 0.25 µs</span>
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
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">System Timing & Metrology Standards</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              How hardware clocks and software profilers maintain nanosecond and microsecond accuracy.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
              <div>
                <h3 className="font-bold text-foreground text-sm mb-2">Hardware Timestamp Counters</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Modern CPUs include Time Stamp Counters (e.g. x86 <code>RDTSC</code> instruction) that count clock cycles directly, providing sub-nanosecond hardware timing resolution.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-2">Precision Time Protocol (PTP)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  IEEE 1588 Precision Time Protocol synchronizes Ethernet network clocks across distributed nodes to microsecond and sub-microsecond precision.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-2">Clock Jitter & Thermal Drift</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Quartz crystal oscillators experience frequency drift due to temperature variation. High-accuracy timing uses Temperature Compensated (TCXO) or Oven-Controlled (OCXO) oscillators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIALIST FAQS ── */}
      <FaqSection faqs={SPOKE_FAQS} heading="Nanoseconds to Microseconds FAQs" />

      {/* ── SOURCES AND REFERENCES ── */}
      <section className="py-12 border-t border-border/60 bg-card/20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2 mb-3">
              <FileText className="h-4 w-4 text-primary" /> Primary Sources & Technical References
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>IEEE 1588-2019 — <em>Precision Clock Synchronization Protocol for Networked Measurement and Control Systems</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Intel Corporation — <em>Intel 64 and IA-32 Architectures Software Developer's Manual (Volume 3B: System Programming Guide)</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Bureau International des Poids et Mesures (BIPM) — <em>SI Unit of Time: The Second</em>.</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-400" />
                <span>Published by <strong>NanoToMicro Systems & Electronics Desk</strong> • Reviewed by Computer Architecture Desk</span>
              </div>
              <div>Last updated: August 2026</div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
            <h3 className="text-base font-bold text-foreground">Need to convert other nano-to-micro quantities?</h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Explore length, mass, radiation dose, fluid volume, and electric current in our central hub.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/nano-to-micro-conversion/"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                <Atom className="h-4 w-4" /> Open Universal Nano to Micro Hub <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/length/nm-to-um/"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50"
              >
                Nanometers to Micrometers (nm → µm)
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
