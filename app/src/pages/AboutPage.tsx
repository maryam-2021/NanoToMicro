import { Link } from 'react-router';
import { ArrowRight, Atom, CheckCircle2 } from 'lucide-react';
import { useSEO } from '@/components/SEO';

export default function AboutPage() {
  useSEO({
    title: 'About NanoToMicro — Exact SI Unit Conversion Tools',
    description: 'Learn how NanoToMicro builds focused SI prefix converters, reference tables and educational guides for nano, micro, pico and milli measurements.',
    canonical: 'https://www.nanotomicro.com/about',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'NanoToMicro',
        url: 'https://www.nanotomicro.com/',
        description: 'Focused SI prefix conversion tools and educational measurement guides.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About NanoToMicro',
        url: 'https://www.nanotomicro.com/about',
      },
    ],
  });

  return (
    <>
      <section className="border-b border-border/60 bg-grid">
        <div className="mx-auto w-full max-w-4xl px-4 pb-12 pt-12 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"><Atom className="h-4 w-4" /> About NanoToMicro</div>
          <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">A focused reference for very small measurements</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">NanoToMicro is built around one simple idea: scientific unit conversion should be quick enough for a calculator and clear enough to teach you why the answer is correct.</p>
        </div>
      </section>

      <main className="mx-auto w-full max-w-4xl space-y-10 px-4 py-12 sm:px-6">
        <section className="grid gap-5 md:grid-cols-3">
          {[
            ['Exact math', 'SI prefixes are exact powers of ten, so the calculators use direct decimal relationships rather than approximate conversion constants.'],
            ['Useful context', 'Each major tool includes formulas, worked examples, tables and explanations of where the units appear in real work.'],
            ['Focused scope', 'The site concentrates on nano, micro and their neighboring prefix scales instead of trying to be a generic everything-converter.'],
          ].map(([title, text]) => <div key={title} className="rounded-2xl border border-border bg-card p-6"><CheckCircle2 className="h-5 w-5 text-primary" /><h2 className="mt-3 font-bold">{title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold">Editorial approach</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">Pages are organized by physical quantity and use compatible-unit conversions only. Where a topic needs more care—especially radiation measurements—the site separates mathematical prefix conversion from interpretation and links to authoritative scientific or public-sector references.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Corrections are welcome. If you spot a formula, unit label, broken link or scientific statement that should be reviewed, use the contact page and include the page URL.</p>
        </section>

        <section className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold">Start exploring</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/nano-to-micro-conversion/" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground">Conversion hub <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/guides" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-bold">Guides & articles <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}
