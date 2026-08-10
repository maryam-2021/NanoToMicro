import { Link } from 'react-router';
import {
  Activity, ArrowRight, Atom, BatteryCharging, Droplets, FlaskConical, Ruler, Scale, Timer, Zap,
} from 'lucide-react';
import { ConverterTool } from '@/components/ConverterTool';
import { FaqSection } from '@/components/Faq';
import { useSEO } from '@/components/SEO';
import { CATEGORIES, CONVERTERS, getConverter, SI_PREFIXES } from '@/data/converters';
import { converterPath } from '@/lib/routes';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ruler: Ruler,
  scale: Scale,
  'flask-conical': FlaskConical,
  zap: Zap,
  timer: Timer,
  droplets: Droplets,
  activity: Activity,
  'battery-charging': BatteryCharging,
};

const HOME_FAQS = [
  {
    q: 'How do you convert nano to micro?',
    a: 'Divide the nano value by 1,000: micro = nano ÷ 1,000. The SI prefix nano means 10⁻⁹ (one billionth) and micro means 10⁻⁶ (one millionth), so a nano unit is exactly 1,000 times smaller than the same micro unit. This works for every quantity: nm→µm, ng→µg, nM→µM, nF→µF, ns→µs and more.',
  },
  {
    q: 'How many nano are in 1 micro?',
    a: 'There are exactly 1,000 nano in 1 micro. Whether you are converting length (1 µm = 1,000 nm), mass (1 µg = 1,000 ng), concentration (1 µM = 1,000 nM) or any other SI quantity, the relationship between the prefixes never changes.',
  },
  {
    q: 'What is the difference between nano and micro?',
    a: 'Both are SI prefixes that scale a base unit. Micro (symbol µ) multiplies the unit by 10⁻⁶ — one millionth. Nano (symbol n) multiplies it by 10⁻⁹ — one billionth. That makes nano three orders of magnitude (1,000×) smaller than micro.',
  },
  {
    q: 'Why is 1 nano equal to 0.001 micro?',
    a: 'Because of where the prefixes sit on the SI ladder: micro is 10⁻⁶ and nano is 10⁻⁹. The ratio is 10⁻⁹ ÷ 10⁻⁶ = 10⁻³ = 0.001. So converting nano to micro always means multiplying by 0.001 (dividing by 1,000).',
  },
  {
    q: 'Which is bigger, nano or micro?',
    a: 'Micro is bigger — 1,000 times bigger. Order from larger to smaller around this range: milli (10⁻³) → micro (10⁻⁶) → nano (10⁻⁹) → pico (10⁻¹²). Each step down divides by 1,000.',
  },
  {
    q: 'Where are nano and micro units used in real life?',
    a: 'Everywhere precision matters: chip features in nanometers, cells in micrometers, drug potency in nM and µM, capacitor values in nF and µF, computer latency in ns and µs, and lab liquid handling in nL and µL. This site has a dedicated converter for each pair.',
  },
];

export default function Home() {
  useSEO({
    title: 'Nano to Micro Converter — Instant n to µ Conversions | NanoToMicro',
    description:
      'Convert nano to micro instantly: 1 nano = 0.001 micro. Free calculators for nm↔µm, ng↔µg, nM↔µM, nF↔µF, ns↔µs, nL↔µL and every SI prefix, with formulas, tables and FAQs.',
    canonical: 'https://www.nanotomicro.com/',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: HOME_FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'NanoToMicro Converter',
        url: 'https://www.nanotomicro.com/',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        description: 'Free nano to micro unit converters with exact SI formulas, conversion tables and worked examples.',
      },
    ],
  });

  const nanoMicroTable = [1, 2, 5, 10, 25, 50, 100, 250, 500, 1000];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border/60 bg-grid">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-4xl px-4 pb-14 pt-16 text-center sm:px-6 sm:pt-20">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Atom className="h-4 w-4" /> 1 nano = 0.001 micro — always exact
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Nano to Micro <span className="text-gradient-gold">Converter</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The dedicated home of nano ↔ micro conversions. Instant, exact calculators for every unit pair —
            length, mass, concentration, capacitance, time, volume, current and charge.
          </p>

          <div className="mt-10 text-left">
            <ConverterTool
              fromName="Nano"
              fromSymbol="n"
              toName="Micro"
              toSymbol="µ"
              factor={0.001}
              reversePath="/si-prefix-converter"
              reverseLabel="Full SI prefix converter"
              defaultValue="1000"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Exact SI definitions</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Instant results as you type</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> {CONVERTERS.length + 1} free tools, no sign-up</span>
          </div>
        </div>
      </section>

      {/* ── Category grid ── */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Every Nano ↔ Micro Conversion</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Pick your quantity. Each tool converts in both directions with formulas, worked examples, full
            reference tables and answers to the questions people actually ask.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const Icon = ICONS[cat.icon] ?? Atom;
            const pairs = cat.slugs.map((s) => getConverter(s)!);
            return (
              <div
                key={cat.name}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(43_96%_56%/0.35)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold">{cat.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {pairs.length} converters
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {pairs.map((c) => (
                    <Link
                      key={c.slug}
                      to={converterPath(c.slug)}
                      className="flex items-center justify-center rounded-lg border border-border px-2 py-2 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary sm:text-sm"
                    >
                      {c.fromSymbol} → {c.toSymbol}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Formula section ── */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">The Only Formula You Need</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every conversion on this site reduces to one relationship. Nano is the SI prefix for 10⁻⁹ and micro
              is the prefix for 10⁻⁶ — so a nano-anything is always one thousandth of a micro-anything.
            </p>
            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-primary/30 bg-primary/10 px-5 py-4 text-center">
                <span className="numeric text-xl font-bold text-primary">micro = nano ÷ 1,000</span>
              </div>
              <div className="rounded-xl border border-border bg-secondary/50 px-5 py-4 text-center">
                <span className="numeric text-xl font-bold">nano = micro × 1,000</span>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              In a hurry? Move the decimal point three places: nano → micro shifts it left (2,500 n = 2.5 µ),
              micro → nano shifts it right (0.75 µ = 750 n). No calculator required.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-lg font-bold">Nano to Micro Quick Table</h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-border">
              <table className="numeric w-full text-sm">
                <thead>
                  <tr className="bg-secondary/70 text-left">
                    <th className="px-4 py-3 font-semibold">Nano (n)</th>
                    <th className="px-4 py-3 font-semibold">Micro (µ)</th>
                  </tr>
                </thead>
                <tbody>
                  {nanoMicroTable.map((v) => (
                    <tr key={v} className="border-t border-border/60">
                      <td className="px-4 py-2.5">{v.toLocaleString()}</td>
                      <td className="px-4 py-2.5 font-medium text-primary">{v / 1000}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              This table works for any nano→micro pair — nm→µm, ng→µg, nM→µM, nF→µF, ns→µs, nL→µL, nA→µA, nC→µC.
            </p>
          </div>
        </div>
      </section>

      {/* ── SI prefix ladder ── */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Where Nano and Micro Sit on the SI Ladder</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Nano and micro are three steps apart. Need to jump further — pico to mega, femto to giga? The full
            prefix converter covers all 24 SI prefixes from quecto to quetta.
          </p>
        </div>
        <div className="flex flex-wrap items-stretch justify-center gap-2">
          {SI_PREFIXES.filter((p) => p.exponent <= 3 && p.exponent >= -12).reverse().map((p) => {
            const highlight = p.name === 'nano' || p.name === 'micro';
            return (
              <div
                key={p.name}
                className={`flex min-w-[5.2rem] flex-col items-center rounded-xl border px-3 py-3 ${
                  highlight
                    ? 'border-primary/60 bg-primary/15 text-primary'
                    : 'border-border bg-card text-muted-foreground'
                }`}
              >
                <span className={`text-sm font-bold ${highlight ? 'text-primary' : 'text-foreground'}`}>
                  {p.name === '(none)' ? 'unit' : p.name}
                </span>
                <span className="numeric mt-1 text-xs">10^{p.exponent}</span>
                <span className="mt-0.5 text-xs font-semibold">{p.symbol || '—'}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/si-prefix-converter"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Open the full SI Prefix Converter <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <FaqSection faqs={HOME_FAQS} heading="Nano to Micro — Common Questions" />
    </>
  );
}
