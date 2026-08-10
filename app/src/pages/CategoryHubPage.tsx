import { Link, useParams } from 'react-router';
import { ArrowRight, BookOpen, Calculator, ChevronRight } from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { CONVERTERS } from '@/data/converters';
import { getCategoryHub } from '@/data/category-hubs';
import { canonicalConverterUrl, converterPath } from '@/lib/routes';
import NotFoundPage from '@/pages/NotFoundPage';

const RADIATION_LINKS = [
  {
    title: 'Nanosieverts to Microsieverts',
    description: 'Exact nSv → µSv prefix conversion with radiation-protection terminology and context.',
    path: '/radiation/nsv-to-usv/',
  },
  {
    title: 'Gray vs Sievert',
    description: 'Understand absorbed dose (Gy) versus radiation-protection dose quantities expressed in Sv.',
    path: '/radiation/gray-vs-sievert',
  },
  {
    title: 'Microsievert vs Microsievert per Hour',
    description: 'Distinguish accumulated dose quantity from dose rate and avoid mixing µSv with µSv/h.',
    path: '/radiation/usv-vs-usv-per-hour',
  },
  {
    title: 'Microsieverts to Millisieverts',
    description: 'Convert µSv to mSv using the exact divide-by-1,000 SI prefix relationship.',
    path: '/radiation/usv-to-msv',
  },
  {
    title: 'Becquerel, Gray and Sievert Explained',
    description: 'A practical guide to activity, absorbed dose and radiation-protection dose quantities.',
    path: '/guides/sievert-gray-becquerel-difference',
  },
];

export default function CategoryHubPage() {
  const { hubSlug } = useParams<{ hubSlug: string }>();
  const hub = hubSlug ? getCategoryHub(hubSlug) : undefined;
  const converters = hub
    ? CONVERTERS.filter((converter) => hub.categoryNames.includes(converter.category))
    : [];

  const canonical = hub ? `https://www.nanotomicro.com/units/${hub.slug}` : undefined;
  const itemUrls = hub?.slug === 'radiation'
    ? RADIATION_LINKS.map((item) => `https://www.nanotomicro.com${item.path}`)
    : converters.map((converter) => canonicalConverterUrl(converter.slug));

  useSEO({
    title: hub?.title ?? 'Unit Hub Not Found | NanoToMicro',
    description: hub?.description ?? 'The requested NanoToMicro unit hub could not be found.',
    canonical,
    robots: hub ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    jsonLd: hub
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: hub.name,
            headline: hub.title,
            description: hub.description,
            url: canonical,
            isPartOf: { '@type': 'WebSite', name: 'NanoToMicro', url: 'https://www.nanotomicro.com/' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
              { '@type': 'ListItem', position: 2, name: 'Nano to Micro Hub', item: 'https://www.nanotomicro.com/nano-to-micro-conversion/' },
              { '@type': 'ListItem', position: 3, name: hub.name, item: canonical },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: `${hub.name} conversion resources`,
            numberOfItems: itemUrls.length,
            itemListElement: itemUrls.map((url, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url,
            })),
          },
        ]
      : undefined,
  });

  if (!hub) return <NotFoundPage />;

  return (
    <>
      <section className="border-b border-border/60 bg-grid">
        <div className="mx-auto w-full max-w-5xl px-4 pb-12 pt-10 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/nano-to-micro-conversion/" className="hover:text-primary">Conversion Hub</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground/80">{hub.name}</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <BookOpen className="h-4 w-4" /> {hub.name} topic hub
          </div>
          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl">{hub.title.replace(' | NanoToMicro', '')}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{hub.intro}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold">What this hub covers</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {hub.examples.map((example) => (
              <span key={example} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                {example}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{hub.description}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {hub.slug === 'radiation'
            ? RADIATION_LINKS.map((item) => (
                <Link key={item.path} to={item.path} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/45">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-bold group-hover:text-primary">{item.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  </div>
                </Link>
              ))
            : converters.map((converter) => (
                <Link key={converter.slug} to={converterPath(converter.slug)} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/45">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                        <Calculator className="h-3.5 w-3.5" /> {converter.fromSymbol} → {converter.toSymbol}
                      </div>
                      <h2 className="font-bold group-hover:text-primary">{converter.h1}</h2>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{converter.description}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  </div>
                </Link>
              ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
          <h2 className="text-lg font-bold">Need a different prefix pair?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Use the universal SI Prefix Converter for any of the 24 official SI prefixes.</p>
          <Link to="/si-prefix-converter" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground">
            Open SI Prefix Converter <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
