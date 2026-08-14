import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeftRight, Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FaqSection } from '@/components/Faq';
import { useSEO } from '@/components/SEO';
import { SI_PREFIXES, prefixFactor } from '@/data/converters';
import { formatResult, parseInput } from '@/lib/num';

const FAQS = [
  {
    q: 'How does the SI prefix converter work?',
    a: 'Every SI prefix is a power of ten. To convert, the tool multiplies your value by 10^(from exponent − to exponent). Going from nano (10⁻⁹) to micro (10⁻⁶) multiplies by 10⁻³ — exactly 0.001, or a division by 1,000.',
  },
  {
    q: 'What are the official SI prefixes?',
    a: 'There are 24, from quecto (10⁻³⁰) to quetta (10³⁰). The newest four — ronna, ronto, quetta and quecto — were adopted in 2022. The most-used small prefixes are milli (10⁻³), micro (10⁻⁶), nano (10⁻⁹) and pico (10⁻¹²).',
  },
  {
    q: 'Is the conversion between prefixes ever approximate?',
    a: 'Never. SI prefixes are defined as exact powers of ten, so prefix conversions are exact decimal shifts — no measurement uncertainty is introduced. Only the original measurement itself limits accuracy.',
  },
  {
    q: 'How do I convert nano to micro by hand?',
    a: 'Divide by 1,000 (move the decimal point three places left): 4,200 n = 4.2 µ. To go micro → nano, multiply by 1,000 (three places right): 0.075 µ = 75 n. This same rule applies to any prefix pair three steps apart, like milli→unit or kilo→mega.',
  },
  {
    q: 'What do the symbols µ, u and mc mean?',
    a: 'µ is the official SI symbol for micro. Where the µ character is hard to type, "u" is the accepted stand-in (uF, ug, uM), and in medicine "mc" is used (mcg for microgram) to prevent dangerous misreading of handwriting.',
  },
];

export default function PrefixConverterPage() {
  const [raw, setRaw] = useState('1');
  const [fromName, setFromName] = useState('nano');
  const [toName, setToName] = useState('micro');
  const [copied, setCopied] = useState(false);

  const from = SI_PREFIXES.find((p) => p.name === fromName)!;
  const to = SI_PREFIXES.find((p) => p.name === toName)!;

  const result = useMemo(() => {
    const v = parseInput(raw);
    if (Number.isNaN(v)) return '';
    return formatResult(v * prefixFactor(from, to));
  }, [raw, from, to]);

  useSEO({
    title: 'SI Prefix Converter — Nano, Micro, Milli, Pico & All 24 Prefixes | NanoToMicro',
    description:
      'Convert between all 24 SI prefixes instantly: nano to micro, pico to nano, micro to milli and more. Exact powers-of-ten calculator with the full prefix table.',
    canonical: 'https://www.nanotomicro.com/si-prefix-converter',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  });

  const swap = () => {
    setFromName(toName);
    setToName(fromName);
  };

  const copy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <section className="border-b border-border/60 bg-grid">
        <div className="mx-auto w-full max-w-4xl px-4 pb-10 pt-10 sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            SI Prefix Converter <span className="text-gradient-gold">(All 24 Prefixes)</span>
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Convert between any SI prefixes — nano to micro, pico to milli, micro to kilo — with exact
            powers-of-ten math. Select the prefixes, type a value, and the result updates instantly.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
        <div className="card-glow rounded-2xl border border-border bg-card p-5 sm:p-7">
          <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
            <div className="space-y-3">
              <Select value={fromName} onValueChange={setFromName}>
                <SelectTrigger className="border-input bg-background/60">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  {SI_PREFIXES.map((p) => (
                    <SelectItem key={p.name} value={p.name}>
                      {p.name === '(none)' ? 'unit (no prefix)' : `${p.name} (${p.symbol})`} · 10^{p.exponent}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="relative">
                <Input
                  inputMode="decimal"
                  value={raw}
                  onChange={(e) => setRaw(e.target.value)}
                  placeholder="Enter value"
                  className="numeric h-14 border-input bg-background/60 pr-14 text-xl font-semibold"
                />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rounded-md bg-primary/15 px-2 py-1 text-sm font-bold text-primary">
                  {from.symbol || 'unit'}
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={swap}
              aria-label="Swap prefixes"
              className="mx-auto h-11 w-11 rounded-full border-primary/40 text-primary hover:bg-primary/10"
            >
              <ArrowLeftRight className="h-5 w-5" />
            </Button>

            <div className="space-y-3">
              <Select value={toName} onValueChange={setToName}>
                <SelectTrigger className="border-input bg-background/60">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  {SI_PREFIXES.map((p) => (
                    <SelectItem key={p.name} value={p.name}>
                      {p.name === '(none)' ? 'unit (no prefix)' : `${p.name} (${p.symbol})`} · 10^{p.exponent}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="relative">
                <output className="numeric flex h-14 w-full items-center overflow-x-auto rounded-md border border-primary/30 bg-primary/5 px-4 pr-20 text-xl font-bold text-primary">
                  {result || '—'}
                </output>
                <span className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 rounded-md bg-primary/15 px-2 py-1 text-sm font-bold text-primary">
                  {to.symbol || 'unit'}
                </span>
                <button
                  onClick={copy}
                  aria-label="Copy result"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground hover:text-primary"
                >
                  {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          <p className="mt-4 rounded-lg bg-secondary/50 px-4 py-2.5 text-center text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Factor:</span> 1 {from.symbol || 'unit'} ={' '}
            {formatResult(prefixFactor(from, to))} {to.symbol || 'unit'}
          </p>
        </div>
      </section>

      {/* Full prefix table */}
      <section className="mx-auto w-full max-w-4xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg font-bold">Complete SI Prefix Table</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            All 24 prefixes defined by the International System of Units, including ronna, ronto, quetta and quecto
            (adopted 2022). Nano and micro — the heart of this site — are highlighted.
          </p>
          <div className="mt-5 overflow-x-auto rounded-xl border border-border">
            <table className="numeric w-full min-w-[480px] text-sm">
              <thead>
                <tr className="bg-secondary/70 text-left">
                  <th className="px-4 py-3 font-semibold">Prefix</th>
                  <th className="px-4 py-3 font-semibold">Symbol</th>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Decimal</th>
                </tr>
              </thead>
              <tbody>
                {SI_PREFIXES.map((p) => {
                  const hl = p.name === 'nano' || p.name === 'micro';
                  return (
                    <tr key={p.name} className={`border-t border-border/60 ${hl ? 'bg-primary/10' : ''}`}>
                      <td className={`px-4 py-2.5 font-medium ${hl ? 'text-primary' : ''}`}>
                        {p.name === '(none)' ? 'unit' : p.name}
                      </td>
                      <td className="px-4 py-2.5">{p.symbol || '—'}</td>
                      <td className="px-4 py-2.5">10^{p.exponent}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">
                        {p.exponent === 0 ? '1' : p.exponent > 0 ? `1${'0'.repeat(Math.min(p.exponent, 30))}` : `0.${'0'.repeat(Math.min(-p.exponent - 1, 29))}1`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Looking for a specific unit pair? Try the{' '}
            <Link to="/nanometers-to-micrometers" className="text-primary hover:underline">nm to µm</Link>,{' '}
            <Link to="/nanograms-to-micrograms" className="text-primary hover:underline">ng to µg</Link> or{' '}
            <Link to="/nanomolar-to-micromolar" className="text-primary hover:underline">nM to µM</Link> converters.
          </p>
        </div>
      </section>

      <FaqSection faqs={FAQS} />
    </>
  );
}
