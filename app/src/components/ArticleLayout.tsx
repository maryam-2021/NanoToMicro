import { Link } from 'react-router';
import { ArrowRight, CalendarDays, ChevronRight, Clock } from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { ARTICLES, type ArticleMeta } from '@/data/articles';

interface Cta {
  to: string;
  label: string;
}

interface Props {
  meta: ArticleMeta;
  ctas: Cta[];
  children: React.ReactNode;
}

export function ArticleLayout({ meta, ctas, children }: Props) {
  const related = ARTICLES.filter((a) => a.slug !== meta.slug).slice(0, 3);

  useSEO({
    title: `${meta.title} | NanoToMicro`,
    description: meta.description,
    canonical: `https://www.nanotomicro.com/guides/${meta.slug}`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: meta.title,
        description: meta.description,
        datePublished: meta.date,
        dateModified: meta.date,
        author: { '@type': 'Organization', name: 'NanoToMicro' },
        publisher: { '@type': 'Organization', name: 'NanoToMicro' },
        mainEntityOfPage: `https://www.nanotomicro.com/guides/${meta.slug}`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.nanotomicro.com/guides' },
          { '@type': 'ListItem', position: 3, name: meta.title },
        ],
      },
    ],
  });

  return (
    <>
      <section className="border-b border-border/60 bg-grid">
        <div className="mx-auto w-full max-w-3xl px-4 pb-8 pt-10 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/guides" className="hover:text-primary">Guides</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground/80">{meta.category}</span>
          </nav>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{meta.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {meta.category}
            </span>
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {meta.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {meta.readTime}</span>
          </div>
        </div>
      </section>

      <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
        <div className="article-body">{children}</div>

        {/* Converter CTAs */}
        <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h2 className="text-lg font-bold">Try the Converters</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Free, instant and exact — no sign-up required.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {ctas.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                {c.label} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-10">
          <h2 className="text-lg font-bold">Keep Reading</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                to={`/guides/${a.slug}`}
                className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="text-xs font-semibold text-primary">{a.category}</span>
                <p className="mt-1.5 text-sm font-semibold leading-snug">{a.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
