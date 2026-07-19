import { Link } from 'react-router';
import { ArrowRight, BookOpen, CalendarDays, Clock } from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { ARTICLES } from '@/data/articles';

export default function GuidesIndexPage() {
  useSEO({
    title: 'Guides & Articles — Nano, Micro and SI Prefixes Explained | NanoToMicro',
    description:
      'In-depth guides on nano vs micro, SI prefixes, nM to µM conversion, capacitor codes and more — written to make unit conversion finally click.',
    canonical: 'https://www.nanotomicro.com/guides',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'NanoToMicro Guides',
        url: 'https://www.nanotomicro.com/guides',
        description: 'In-depth guides on SI prefixes and unit conversion.',
      },
    ],
  });

  return (
    <>
      <section className="border-b border-border/60 bg-grid">
        <div className="mx-auto w-full max-w-4xl px-4 pb-10 pt-10 sm:px-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <BookOpen className="h-4 w-4" /> Knowledge base
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Guides & <span className="text-gradient-gold">Articles</span>
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Long-form, no-nonsense explainers on the units this site converts — the theory behind the
            calculators, written for engineers, scientists and students.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <div className="grid gap-5">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              to={`/guides/${a.slug}`}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(43_96%_56%/0.3)]"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
                  {a.category}
                </span>
                <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {a.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {a.readTime}</span>
              </div>
              <h2 className="mt-3 text-xl font-bold leading-snug group-hover:text-primary">{a.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
