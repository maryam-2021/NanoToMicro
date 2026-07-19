import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { CONVERTERS } from '@/data/converters';
import { formatResult, groupThousands } from '@/lib/num';

const CHART_VALUES = [1, 2, 5, 10, 20, 50, 100, 500, 1000];

export default function ChartsPage() {
  useSEO({
    title: 'Nano to Micro Conversion Charts — Quick Reference Tables | NanoToMicro',
    description:
      'Quick-reference nano to micro conversion charts: nm to µm, ng to µg, nM to µM, nF to µF, ns to µs, nL to µL, nA to µA and nC to µC. Exact values, printable tables.',
    canonical: 'https://www.nanotomicro.com/conversion-charts',
  });

  const forwardConverters = CONVERTERS.filter((c) => c.factor < 1);

  return (
    <>
      <section className="border-b border-border/60 bg-grid">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-10 sm:px-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Nano to Micro <span className="text-gradient-gold">Conversion Charts</span>
          </h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Quick-reference tables for every nano → micro unit pair. Each chart divides the nano value by 1,000 —
            the exact SI relationship. Open the full calculator for any value, reverse direction and worked examples.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2">
        {forwardConverters.map((conv) => (
          <div key={conv.slug} className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-baseline justify-between gap-3">
              <h2 className="font-bold">
                {conv.fromNamePlural} to {conv.toNamePlural}
                <span className="ml-2 text-sm font-semibold text-primary">
                  {conv.fromSymbol} → {conv.toSymbol}
                </span>
              </h2>
              <Link
                to={`/${conv.slug}`}
                className="flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Calculator <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="numeric w-full text-sm">
                <thead>
                  <tr className="bg-secondary/70 text-left">
                    <th className="px-4 py-2.5 font-semibold">{conv.fromSymbol}</th>
                    <th className="px-4 py-2.5 font-semibold">{conv.toSymbol}</th>
                  </tr>
                </thead>
                <tbody>
                  {CHART_VALUES.map((v) => (
                    <tr key={v} className="border-t border-border/60">
                      <td className="px-4 py-2">{groupThousands(String(v))}</td>
                      <td className="px-4 py-2 font-medium text-primary">{formatResult(v * conv.factor)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Reverse:{' '}
              <Link to={`/${conv.reverseSlug}`} className="text-primary hover:underline">
                {conv.toSymbol} → {conv.fromSymbol} chart & calculator
              </Link>
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
