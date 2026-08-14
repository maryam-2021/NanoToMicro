import { Link } from 'react-router';
import { AlertTriangle, ChevronRight } from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { SpokeCalculator } from '@/components/SpokeCalculator';

const FAQS = [
  { q: 'How do I convert microsieverts to millisieverts?', a: 'Divide the microsievert value by 1,000. Formula: mSv = µSv ÷ 1,000.' },
  { q: 'How many microsieverts are in one millisievert?', a: 'There are exactly 1,000 microsieverts in one millisievert: 1 mSv = 1,000 µSv.' },
  { q: 'Is µSv the same as µSv/h?', a: 'No. µSv expresses a dose quantity, while µSv/h expresses a dose rate per hour.' },
];

export default function UsvToMsvPage() {
  useSEO({
    title: 'Microsieverts to Millisieverts Converter (µSv to mSv) | NanoToMicro',
    description: 'Convert microsieverts to millisieverts instantly. 1,000 µSv = 1 mSv. Exact µSv-to-mSv calculator, formula, examples and radiation-unit cautions.',
    canonical: 'https://www.nanotomicro.com/radiation/usv-to-msv',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Microsieverts to Millisieverts Converter',
        url: 'https://www.nanotomicro.com/radiation/usv-to-msv',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          { '@type': 'ListItem', position: 2, name: 'Radiation', item: 'https://www.nanotomicro.com/units/radiation' },
          { '@type': 'ListItem', position: 3, name: 'µSv to mSv' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
      },
    ],
  });

  return (
    <>
      <section className="border-b border-border/60 bg-grid">
        <div className="mx-auto w-full max-w-4xl px-4 pb-10 pt-10 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link><ChevronRight className="h-3.5 w-3.5" />
            <Link to="/units/radiation" className="hover:text-primary">Radiation</Link><ChevronRight className="h-3.5 w-3.5" />
            <span>µSv to mSv</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Microsieverts to Millisieverts Converter (µSv to mSv)</h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Micro (10⁻⁶) and milli (10⁻³) are three powers of ten apart. Divide a value in microsieverts by 1,000 to express the same dose quantity in millisieverts.</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
        <SpokeCalculator
          title="Microsieverts to Millisieverts"
          subtitle="Exact SI prefix conversion: divide µSv by 1,000."
          sourceUnitName="Microsievert"
          sourceUnitPlural="Microsieverts"
          sourceUnitSymbol="µSv"
          destUnitName="Millisievert"
          destUnitPlural="Millisieverts"
          destUnitSymbol="mSv"
          exampleInput={1000}
          presets={[
            { label: '1 µSv', value: 1 },
            { label: '100 µSv', value: 100 },
            { label: '500 µSv', value: 500 },
            { label: '1,000 µSv', value: 1000 },
            { label: '5,000 µSv', value: 5000 },
          ]}
          categoryName="Radiation"
        />
      </section>

      <section className="mx-auto w-full max-w-4xl space-y-7 px-4 pb-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">Formula</h2>
            <div className="numeric mt-4 rounded-xl bg-primary/10 p-4 text-center text-lg font-black text-primary">mSv = µSv ÷ 1,000</div>
            <p className="mt-3 text-sm text-muted-foreground">Example: 2,500 µSv ÷ 1,000 = 2.5 mSv.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">Reverse relationship</h2>
            <div className="numeric mt-4 rounded-xl bg-secondary/60 p-4 text-center text-lg font-black">µSv = mSv × 1,000</div>
            <p className="mt-3 text-sm text-muted-foreground">Example: 0.4 mSv × 1,000 = 400 µSv.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-500/35 bg-amber-500/10 p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-amber-100"><AlertTriangle className="h-5 w-5" /> Unit conversion is not risk interpretation</h2>
          <p className="mt-3 text-sm leading-relaxed text-amber-100/85">Changing µSv to mSv does not change the underlying dose quantity. This calculator does not assess whether an exposure is safe or provide medical advice.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((faq) => <details key={faq.q} className="rounded-xl border border-border bg-card p-4"><summary className="cursor-pointer font-semibold">{faq.q}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p></details>)}
          </div>
        </div>
      </section>
    </>
  );
}
