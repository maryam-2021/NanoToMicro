import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { SpokeCalculator } from '@/components/SpokeCalculator';
import { useSEO } from '@/components/SEO';

interface Props {
  title: string;
  description: string;
  canonical: string;
  category: string;
  sourceName: string;
  sourcePlural: string;
  sourceSymbol: string;
  destName: string;
  destPlural: string;
  destSymbol: string;
  intro: string;
  examples: Array<{ label: string; value: number }>;
}

export default function SimpleNanoMicroSpokePage({
  title,
  description,
  canonical,
  category,
  sourceName,
  sourcePlural,
  sourceSymbol,
  destName,
  destPlural,
  destSymbol,
  intro,
  examples,
}: Props) {
  useSEO({
    title,
    description,
    canonical,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: `${sourcePlural} to ${destPlural} Converter`,
        description,
        url: canonical,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          { '@type': 'ListItem', position: 2, name: category },
          { '@type': 'ListItem', position: 3, name: `${sourceSymbol} to ${destSymbol}`, item: canonical },
        ],
      },
    ],
  });

  return (
    <>
      <section className="border-b border-border/60 bg-grid">
        <div className="mx-auto w-full max-w-4xl px-4 pb-10 pt-10 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link><ChevronRight className="h-3.5 w-3.5" /><span>{category}</span><ChevronRight className="h-3.5 w-3.5" /><span>{sourceSymbol} to {destSymbol}</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{sourcePlural} to {destPlural} Converter ({sourceSymbol} to {destSymbol})</h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{intro}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
        <SpokeCalculator
          title={`${sourcePlural} to ${destPlural}`}
          subtitle={`Exact SI prefix conversion: 1 ${destSymbol} = 1,000 ${sourceSymbol}.`}
          sourceUnitName={sourceName}
          sourceUnitPlural={sourcePlural}
          sourceUnitSymbol={sourceSymbol}
          destUnitName={destName}
          destUnitPlural={destPlural}
          destUnitSymbol={destSymbol}
          exampleInput={5000}
          presets={examples}
          categoryName={category}
        />
      </section>

      <section className="mx-auto grid w-full max-w-4xl gap-5 px-4 pb-14 sm:px-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold">Conversion formula</h2>
          <div className="numeric mt-4 rounded-xl bg-primary/10 p-4 text-center text-lg font-black text-primary">{destSymbol} = {sourceSymbol} ÷ 1,000</div>
          <p className="mt-3 text-sm text-muted-foreground">Nano is 10⁻⁹ and micro is 10⁻⁶, so the units differ by exactly three powers of ten.</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold">Reverse relationship</h2>
          <div className="numeric mt-4 rounded-xl bg-secondary/60 p-4 text-center text-lg font-black">{sourceSymbol} = {destSymbol} × 1,000</div>
          <p className="mt-3 text-sm text-muted-foreground">The conversion changes only the prefix representation; the underlying physical quantity stays the same.</p>
        </div>
      </section>
    </>
  );
}
