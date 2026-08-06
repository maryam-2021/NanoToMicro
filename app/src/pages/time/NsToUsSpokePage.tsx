import { Link } from 'react-router';
import { Timer, ArrowRight, ShieldCheck, FileText, ExternalLink, Atom, ArrowLeftRight, Cpu } from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { SpokeCalculator } from '@/components/SpokeCalculator';
import { FaqSection } from '@/components/Faq';

const SPOKE_FAQS = [
  {
    q: 'How many nanoseconds are in one microsecond?',
    a: 'There are exactly 1,000 nanoseconds in one microsecond (1 µs = 1,000 ns). A nanosecond is 10⁻⁹ seconds, whereas a microsecond is 10⁻⁶ seconds.',
  },
  {
    q: 'Is a nanosecond faster or shorter than a microsecond?',
    a: 'A nanosecond is 1,000 times shorter (and represents 1,000 times faster time duration) than a microsecond.',
  },
  {
    q: 'How do I convert ns to µs?',
    a: 'To convert nanoseconds (ns) to microseconds (µs), divide the nanosecond value by 1,000 or shift the decimal point three places to the left. Formula: µs = ns ÷ 1,000.',
  },
  {
    q: 'What is 500 ns in microseconds?',
    a: '500 nanoseconds equals 0.5 microseconds (500 ÷ 1,000 = 0.5 µs).',
  },
  {
    q: 'Is 1,000 ns equal to 1 µs?',
    a: 'Yes. 1,000 nanoseconds equals exactly 1 microsecond (1,000 ns = 1 µs).',
  },
  {
    q: 'How long is one nanosecond?',
    a: 'One nanosecond (1 ns) is one billionth of a second (10⁻⁹ s). Light travels about 30 centimeters in a vacuum during 1 nanosecond.',
  },
  {
    q: 'How far does light travel in one nanosecond?',
    a: 'Light travels approximately 0.2998 meters (about 30 centimeters) in one nanosecond in a vacuum. In optical fiber cables, light travels slower, at about 20 centimeters per nanosecond.',
  },
  {
    q: 'How long is one cycle of a 3 GHz processor?',
    a: 'A nominal 3 GHz processor clock period is approximately 0.333 nanoseconds (1 ÷ 3,000,000,000 s ≈ 0.333 ns = 0.000333 µs).',
  },
  {
    q: 'Is CPU clock speed the same as instruction speed?',
    a: 'No. Processor frequency (GHz) defines the clock cycle period, but modern CPUs execute, pipeline, or overlap multiple instructions per cycle.',
  },
  {
    q: 'Are network delays measured in ns, µs or ms?',
    a: 'Internal network switch queueing events occur in nanoseconds or microseconds, whereas full end-to-end internet ping round trips are measured in milliseconds.',
  },
  {
    q: 'Can I type us instead of µs?',
    a: 'Yes. "us" is commonly typed on standard keyboards as an informal substitute for the scientific symbol µs.',
  },
  {
    q: 'How do I convert microseconds back to nanoseconds?',
    a: 'To convert microseconds back to nanoseconds, multiply the microsecond value by 1,000. Formula: ns = µs × 1,000.',
  },
  {
    q: 'How many 1 ns clock periods fit into one microsecond?',
    a: 'Exactly 1,000 clock periods of 1 ns fit into one microsecond.',
  },
];

export default function NsToUsSpokePage() {
  useSEO({
    title: 'Nanoseconds to Microseconds Converter (ns to µs) & Latency Guide',
    description:
      'Convert nanoseconds to microseconds using the ns-to-µs calculator, formula and table, with practical examples from CPUs, memory, networks and electronics.',
    canonical: 'https://www.nanotomicro.com/time/ns-to-us/',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Nanoseconds to Microseconds Converter (ns to µs) & Latency Guide',
        description: 'Convert temporal measurements from nanoseconds (ns) to microseconds (µs) using the ÷1,000 formula.',
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
            { '@type': 'ListItem', position: 2, name: 'Nano to Micro Hub', item: 'https://www.nanotomicro.com/nano-to-micro-conversion/' },
            { '@type': 'ListItem', position: 3, name: 'Nanoseconds to Microseconds', item: 'https://www.nanotomicro.com/time/ns-to-us/' },
          ],
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          { '@type': 'ListItem', position: 2, name: 'Nano to Micro Hub', item: 'https://www.nanotomicro.com/nano-to-micro-conversion/' },
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
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="text-muted-foreground/60">&gt;</li>
              <li><Link to="/nano-to-micro-conversion/" className="transition-colors hover:text-primary">Nano to Micro Hub</Link></li>
              <li aria-hidden="true" className="text-muted-foreground/60">&gt;</li>
              <li><span aria-current="page" className="font-semibold text-foreground">Nanoseconds to Microseconds</span></li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Timer className="h-4 w-4" /> Temporal Dimensions (Time)
            </div>
            
            {/* H1 Heading */}
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Convert Nanoseconds to Microseconds (ns to µs)
            </h1>

            {/* Concise Hero Intro (70-110 words) */}
            <div className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                A nanosecond (ns) represents 10<sup>−9</sup> seconds, while a microsecond (µs) represents 10<sup>−6</sup> seconds. Because the two metric prefixes differ by three powers of ten, one microsecond equals exactly 1,000 nanoseconds. To convert any temporal measurement or latency value from nanoseconds to microseconds, simply divide the nanosecond value by 1,000. Use our calculator below to profile CPU clock cycles, DRAM fetch times, and network signal delays.
              </p>
            </div>

            {/* Formula Badge & Reverse Conversion Link */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <span className="numeric rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-extrabold text-primary">
                ns → µs: divide by 1,000
              </span>
              <Link
                to="/microseconds-to-nanoseconds/"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <ArrowLeftRight className="h-3.5 w-3.5 text-primary" /> Convert microseconds to nanoseconds
              </Link>
            </div>
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
              exampleInput={1500}
              categoryName="Time"
              reverseUrl="/microseconds-to-nanoseconds/"
              presets={[
                { label: '1 ns', value: 1 },
                { label: '100 ns', value: 100 },
                { label: '1,000 ns', value: 1000 },
                { label: '10,000 ns', value: 10000 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── H2: NANOSECONDS TO MICROSECONDS FORMULA ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nanoseconds to Microseconds Formula</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Understanding the exponential scale relationship between 10⁻⁹ s and 10⁻⁶ s.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/30 bg-card p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Mathematical Relationship</span>
              <div className="numeric mt-3 space-y-2 text-xs sm:text-sm font-semibold text-foreground">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span>1 µs</span>
                  <span className="font-bold text-primary font-mono">= 1,000 ns</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span>1 ns</span>
                  <span className="font-bold text-primary font-mono">= 0.001 µs</span>
                </div>
              </div>

              <div className="numeric mt-4 rounded-xl border border-primary/40 bg-primary/10 p-4 text-center">
                <span className="block text-xs font-bold uppercase text-primary">Main Formula</span>
                <span className="mt-1 block text-base font-black text-primary sm:text-lg">
                  Time in µs = Time in ns ÷ 1,000
                </span>
                <span className="mt-1 block font-mono text-xs font-semibold text-muted-foreground">
                  (or t<sub>µs</sub> = t<sub>ns</sub> ÷ 10³)
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
                <p className="font-mono text-muted-foreground">25,000 ns ÷ 1,000 = 25 µs</p>
                <p className="mt-1 font-bold text-foreground">Therefore: 25,000 ns = 25 µs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: HOW TO CONVERT NS TO UM MANUALLY ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How to Convert ns to µs Manually</h2>
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
                Record the time in nanoseconds (ns).
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
                Express the answer in microseconds (µs).
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6">
            <h3 className="text-sm font-bold text-foreground">Decimal Shortcut</h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              “Move the decimal point three places to the left.”
            </p>
            <div className="numeric mt-3 flex flex-wrap gap-4 text-xs font-mono font-bold text-foreground">
              <span className="rounded-lg bg-card px-3 py-1.5 border border-border">850 ns ÷ 1,000 = 0.85 µs</span>
              <span className="rounded-lg bg-card px-3 py-1.5 border border-border">1,000 ns → 1 µs</span>
              <span className="rounded-lg bg-card px-3 py-1.5 border border-border">250 ns → 0.25 µs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: NANOSECONDS VS MICROSECONDS ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nanoseconds vs Microseconds</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Comparing symbols, scientific notation, decimal forms, and typical hardware contexts.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/80 text-foreground border-b border-border">
                  <th className="px-5 py-3.5 font-bold">Feature</th>
                  <th className="px-5 py-3.5 font-bold text-primary">Nanosecond</th>
                  <th className="px-5 py-3.5 font-bold text-foreground">Microsecond</th>
                </tr>
              </thead>
              <tbody className="numeric divide-y divide-border/60">
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">Symbol</td>
                  <td className="px-5 py-3 font-bold text-primary">ns</td>
                  <td className="px-5 py-3 font-bold text-foreground">µs</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">Seconds</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">10⁻⁹ s</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">10⁻⁶ s</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">Decimal form</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">0.000000001 s</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">0.000001 s</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">Relationship</td>
                  <td className="px-5 py-3 font-muted-foreground">1/1,000 of a µs</td>
                  <td className="px-5 py-3 font-muted-foreground">1,000 ns</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">Typical contexts</td>
                  <td className="px-5 py-3 text-muted-foreground">Clock periods, hardware signals, memory timing</td>
                  <td className="px-5 py-3 text-muted-foreground">Software operations, networking, data acquisition</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground text-center">
            Both are extremely short compared with a millisecond: <span className="numeric font-bold font-mono text-foreground">1 ms = 1,000 µs = 1,000,000 ns</span>.
          </div>
        </div>
      </section>

      {/* ── H2: REAL-WORLD LATENCY — WHERE NANOSECONDS MATTER ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Real-World Latency — Where Nanoseconds Matter</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Understanding physical propagation speed, processor clock periods, and RAM access times.
            </p>
          </div>

          <div className="space-y-8">
            {/* H3: Light Travel in One Nanosecond */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border/60 pb-3">
                <Timer className="h-5 w-5 text-primary" /> Light Travel in One Nanosecond
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Using the defined speed of light ($c = 299,792,458\text{ m/s}$), light travels approximately <strong>0.2998 meters</strong> (about <strong>30 centimeters</strong>) per nanosecond in a vacuum. In silica glass optical fibers, light travels slower—at approximately 20 centimeters per nanosecond ($v \approx 0.2\text{ m/ns}$).
              </p>
            </div>

            {/* H3: Processor Clock Periods */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border/60 pb-3">
                <Cpu className="h-5 w-5 text-primary" /> Processor Clock Periods
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Clock period is calculated as: <span className="numeric font-mono font-bold text-foreground">Clock period = 1 ÷ clock frequency</span>. For a nominal 3 GHz clock, $1 \div 3,000,000,000\text{ s} \approx 0.333\text{ ns}$. Note that a clock period is not automatically equal to one completed instruction; modern superscalar CPUs execute, pipeline, or overlap multiple operations per cycle.
              </p>
            </div>

            {/* H3: Memory Latency */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border/60 pb-3">
                <FileText className="h-5 w-5 text-primary" /> Memory Latency & CAS Timing
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                DRAM access times are specified in nanoseconds, whereas CAS latency is specified as a cycle count. When operating frequency is known, CAS cycle counts convert directly into time (e.g. CAS 16 on DDR4-3200 equals $16 \times 0.625\text{ ns} = 10\text{ ns}$).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: REAL-WORLD LATENCY — WHERE MICROSECONDS MATTER ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Real-World Latency — Where Microseconds Matter</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Software operations, network packet switching, audio buffers, and trading infrastructure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground text-sm mb-2">Network Equipment & Switching</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Internal switch packet parsing and queueing occur on microsecond scales (1–10 µs), whereas complete internet round-trip ping times span milliseconds.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground text-sm mb-2">Storage & Data Processing</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                NVMe flash memory controller read operations, hardware accelerators, and data acquisition sampling occur in microsecond intervals (10–50 µs).
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground text-sm mb-2">Audio Processing</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                At a 48 kHz sampling rate, each individual sample interval is $1 \div 48,000\text{ s} \approx 20.83\text{ }\mu\text{s}$. This represents the single sample period, not total audio buffer latency.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground text-sm mb-2">Low-Latency Trading Systems</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Specialized trading infrastructure optimizes FPGA network card operations measured in microseconds. This tool performs mathematical conversions only and does not predict trading performance or financial outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: CPU FREQUENCY AND CLOCK-PERIOD EXAMPLES ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">CPU Frequency and Clock-Period Examples</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Ideal clock periods calculated from frequency across megahertz and gigahertz bands.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/80 text-foreground border-b border-border">
                  <th className="px-5 py-3.5 font-bold">Frequency</th>
                  <th className="px-5 py-3.5 font-bold text-primary">Approximate Clock Period</th>
                </tr>
              </thead>
              <tbody className="numeric divide-y divide-border/60">
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">1 MHz</td><td className="px-5 py-3 font-bold text-primary">1 µs</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">10 MHz</td><td className="px-5 py-3 font-bold text-primary">0.1 µs / 100 ns</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">100 MHz</td><td className="px-5 py-3 font-bold text-primary">0.01 µs / 10 ns</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">1 GHz</td><td className="px-5 py-3 font-bold text-primary">0.001 µs / 1 ns</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">3 GHz</td><td className="px-5 py-3 font-bold text-primary">0.000333 µs / 0.333 ns</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">5 GHz</td><td className="px-5 py-3 font-bold text-primary">0.0002 µs / 0.2 ns</td></tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-muted-foreground text-center">
            Note: These are ideal clock periods calculated from frequency. They do not represent complete instruction, memory or application latency.
          </p>
        </div>
      </section>

      {/* ── H2: QUICK NS-TO-UM CONVERSION TABLE ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Quick ns-to-µs Conversion Table</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Responsive reference lookup table for standard nanosecond values converted to microseconds.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/80 text-foreground border-b border-border">
                  <th className="px-5 py-3.5 font-bold">Nanoseconds</th>
                  <th className="px-5 py-3.5 font-bold text-primary">Microseconds</th>
                </tr>
              </thead>
              <tbody className="numeric divide-y divide-border/60">
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">1 ns</td><td className="px-5 py-3 font-bold text-primary">0.001 µs</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">10 ns</td><td className="px-5 py-3 font-bold text-primary">0.01 µs</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">100 ns</td><td className="px-5 py-3 font-bold text-primary">0.1 µs</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">250 ns</td><td className="px-5 py-3 font-bold text-primary">0.25 µs</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">500 ns</td><td className="px-5 py-3 font-bold text-primary">0.5 µs</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">1,000 ns</td><td className="px-5 py-3 font-bold text-primary">1 µs</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">5,000 ns</td><td className="px-5 py-3 font-bold text-primary">5 µs</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">10,000 ns</td><td className="px-5 py-3 font-bold text-primary">10 µs</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">100,000 ns</td><td className="px-5 py-3 font-bold text-primary">100 µs</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">1,000,000 ns</td><td className="px-5 py-3 font-bold text-primary">1,000 µs</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── H2: WORKED TIME EXAMPLES ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Worked Time Examples</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Step-by-step mathematical calculations for timing and latency values.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground">Convert 300 ns to µs</h3>
              <p className="numeric mt-2 font-mono text-xs text-muted-foreground">300 ÷ 1,000 = 0.3</p>
              <p className="numeric mt-1 text-sm font-bold text-primary">300 ns = 0.3 µs</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground">Convert 3,500 ns to µs</h3>
              <p className="numeric mt-2 font-mono text-xs text-muted-foreground">3,500 ÷ 1,000 = 3.5</p>
              <p className="numeric mt-1 text-sm font-bold text-primary">3,500 ns = 3.5 µs</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground">Convert 0.25 ns to µs</h3>
              <p className="numeric mt-2 font-mono text-xs text-muted-foreground">0.25 ÷ 1,000 = 0.00025</p>
              <p className="numeric mt-1 text-sm font-bold text-primary">0.25 ns = 0.00025 µs</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground">Convert 2.4 × 10⁶ ns to µs</h3>
              <p className="numeric mt-2 font-mono text-xs text-muted-foreground">2,400,000 ÷ 1,000 = 2,400</p>
              <p className="numeric mt-1 text-sm font-bold text-primary">2.4 × 10⁶ ns = 2,400 µs (2.4 ms)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: TIME MEASUREMENT AND PRECISION ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Time Measurement and Precision</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Distinguishing resolution, precision, accuracy, latency, clock period, and elapsed time.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-xs sm:text-sm leading-relaxed text-muted-foreground space-y-4">
            <p>
              Resolution describes the smallest detectable time change. Precision describes measurement repeatability. Accuracy describes closeness to the true SI second. Latency measures delay between cause and effect.
            </p>
            <p>
              Converting a number between units does not improve the accuracy of the original timing measurement.
            </p>
            <div className="numeric rounded-xl border border-primary/30 bg-primary/10 p-4 text-foreground font-semibold">
              Example: If a measurement is estimated as 500 ns, converting it to 0.5 µs does not make the original measurement more precise.
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
                <span>BIPM / NIST — <em>SI Unit of Time: The Second and Prefix Scale Ratios</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Intel / AMD — <em>Processor Developer Manuals: Time Stamp Counters & Clock Architecture</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>JEDEC — <em>Standard JESD79-4: DDR4 / DDR5 SDRAM Specification and Timing Standards</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>IEEE 1588-2019 — <em>Precision Clock Synchronization Protocol for Networked Systems</em>.</span>
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

          {/* Hub Backlink Box */}
          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
            <h3 className="text-base font-bold text-foreground">Need to convert other nano-to-micro quantities?</h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Visit our central topical hub covering mass, length, volume, electric current, capacitance, and radiation.
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
        </div>
      </section>
    </>
  );
}
