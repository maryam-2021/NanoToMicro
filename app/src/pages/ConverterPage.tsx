import { Link, Navigate, useParams } from 'react-router';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { getConverter, CONVERTERS } from '@/data/converters';
import { ConverterTool } from '@/components/ConverterTool';
import { FaqSection } from '@/components/Faq';
import { useSEO } from '@/components/SEO';
import { formatResult, groupThousands } from '@/lib/num';
import { canonicalConverterUrl, converterPath } from '@/lib/routes';

export default function ConverterPage() {
  const { slug } = useParams<{ slug: string }>();
  const conv = slug ? getConverter(slug) : undefined;

  const exampleResult = conv ? conv.exampleInput * conv.factor : 0;
  const ratio = conv ? (conv.factor > 1 ? conv.factor : 1 / conv.factor) : 1;
  const ratioStr = groupThousands(formatResult(ratio));
  const places = Math.round(Math.log10(ratio));
  const related = conv
    ? CONVERTERS.filter((c) => c.category === conv.category && c.slug !== conv.slug)
    : [];
  const others = conv ? CONVERTERS.filter((c) => c.category !== conv.category).slice(0, 6) : [];

  useSEO({
    title: conv ? conv.title : 'Converter Not Found | NanoToMicro',
    description: conv ? conv.description : 'The requested converter could not be found.',
    canonical: conv ? canonicalConverterUrl(conv.slug) : undefined,
    jsonLd: conv
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
              { '@type': 'ListItem', position: 2, name: conv.category, item: canonicalConverterUrl(conv.slug) },
              { '@type': 'ListItem', position: 3, name: conv.h1 },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: conv.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: `How to convert ${conv.fromNamePlural.toLowerCase()} to ${conv.toNamePlural.toLowerCase()}`,
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                text: `Take your value in ${conv.fromNamePlural.toLowerCase()} (${conv.fromSymbol}).`,
              },
              {
                '@type': 'HowToStep',
                position: 2,
                text:
                  conv.factor < 1
                    ? `Divide by ${groupThousands(formatResult(1 / conv.factor))} (multiply by ${formatResult(conv.factor)}).`
                    : `Multiply by ${groupThousands(formatResult(conv.factor))}.`,
              },
              {
                '@type': 'HowToStep',
                position: 3,
                text: `The result is your value in ${conv.toNamePlural.toLowerCase()} (${conv.toSymbol}).`,
              },
            ],
          },
        ]
      : undefined,
  });

  if (!conv) return <Navigate to="/" replace />;

  const reverse = getConverter(conv.reverseSlug)!;

  return (
    <>
      {/* Breadcrumb + heading */}
      <section className="border-b border-border/60 bg-grid">
        <div className="mx-auto w-full max-w-4xl px-4 pb-10 pt-10 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>{conv.category}</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground/80">
              {conv.fromSymbol} to {conv.toSymbol}
            </span>
          </nav>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {conv.h1}
            <span className="ml-3 align-middle text-lg font-bold text-primary sm:text-xl">
              {conv.fromSymbol} → {conv.toSymbol}
            </span>
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">{conv.intro}</p>
        </div>
      </section>

      {/* Tool */}
      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
        <ConverterTool
          fromName={conv.fromName}
          fromSymbol={conv.fromSymbol}
          toName={conv.toName}
          toSymbol={conv.toSymbol}
          factor={conv.factor}
          reversePath={converterPath(conv.reverseSlug)}
          reverseLabel={`${reverse.fromSymbol} to ${reverse.toSymbol} converter`}
          defaultValue={String(conv.exampleInput)}
        />
      </section>

      {/* Formula + example */}
      <section className="mx-auto w-full max-w-4xl px-4 pb-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">
              How to Convert {conv.fromNamePlural} to {conv.toNamePlural}
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p className="rounded-lg bg-primary/10 px-4 py-3 text-base font-semibold text-primary">
                1 {conv.fromSymbol} = {groupThousands(formatResult(conv.factor))} {conv.toSymbol}
                <span className="mx-2 text-muted-foreground">·</span>1 {conv.toSymbol} ={' '}
                {groupThousands(formatResult(1 / conv.factor))} {conv.fromSymbol}
              </p>
              <p>
                {conv.factor < 1 ? (
                  <>
                    A {conv.fromName.toLowerCase()} is {ratioStr} times smaller than a{' '}
                    {conv.toName.toLowerCase()}, so <strong className="text-foreground">divide the {conv.fromSymbol} value
                    by {ratioStr}</strong> — or move the decimal point {places} places to the left.
                  </>
                ) : (
                  <>
                    A {conv.fromName.toLowerCase()} is {ratioStr} times larger than a{' '}
                    {conv.toName.toLowerCase()}, so <strong className="text-foreground">multiply the {conv.fromSymbol} value
                    by {ratioStr}</strong> — or move the decimal point {places} places to the right.
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">Worked Example</h2>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                Convert <strong className="text-foreground">{groupThousands(String(conv.exampleInput))} {conv.fromSymbol}</strong>{' '}
                to {conv.toSymbol}:
              </p>
              <div className="numeric rounded-lg bg-secondary/60 px-4 py-3 font-mono text-sm text-foreground">
                {groupThousands(String(conv.exampleInput))} {conv.fromSymbol} × {formatResult(conv.factor)} ={' '}
                <span className="font-bold text-primary">
                  {formatResult(exampleResult)} {conv.toSymbol}
                </span>
              </div>
              <p>
                So {groupThousands(String(conv.exampleInput))} {conv.fromNamePlural.toLowerCase()} is exactly{' '}
                {formatResult(exampleResult)} {conv.toNamePlural.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unit definitions */}
      <section className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">
              What Is a {conv.fromName}? ({conv.fromSymbol})
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{conv.aboutFrom}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold">
              What Is a {conv.toName}? ({conv.toSymbol})
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{conv.aboutTo}</p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto w-full max-w-4xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg font-bold">Where This Conversion Is Used</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {conv.useCases.map((u, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {u}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conversion table */}
      <section className="mx-auto w-full max-w-4xl px-4 pb-8 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg font-bold">
            {conv.fromNamePlural} to {conv.toNamePlural} Conversion Table
          </h2>
          <div className="mt-5 overflow-hidden rounded-xl border border-border">
            <table className="numeric w-full text-sm">
              <thead>
                <tr className="bg-secondary/70 text-left">
                  <th className="px-4 py-3 font-semibold">{conv.fromNamePlural} ({conv.fromSymbol})</th>
                  <th className="px-4 py-3 font-semibold">{conv.toNamePlural} ({conv.toSymbol})</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">{conv.fromNamePlural} ({conv.fromSymbol})</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">{conv.toNamePlural} ({conv.toSymbol})</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: Math.ceil(conv.tableValues.length / 2) }).map((_, rowIdx) => {
                  const left = conv.tableValues[rowIdx];
                  const right = conv.tableValues[rowIdx + Math.ceil(conv.tableValues.length / 2)];
                  return (
                    <tr key={rowIdx} className="border-t border-border/60">
                      <td className="px-4 py-2.5 text-foreground/90">{groupThousands(String(left))}</td>
                      <td className="px-4 py-2.5 font-medium text-primary">{formatResult(left * conv.factor)}</td>
                      <td className="hidden px-4 py-2.5 text-foreground/90 sm:table-cell">
                        {right !== undefined ? groupThousands(String(right)) : ''}
                      </td>
                      <td className="hidden px-4 py-2.5 font-medium text-primary sm:table-cell">
                        {right !== undefined ? formatResult(right * conv.factor) : ''}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            All values are exact — both units are decimal SI multiples, so no rounding is involved.
          </p>
        </div>
      </section>

      <FaqSection faqs={conv.faqs} />

      {/* Related converters */}
      <section className="mx-auto w-full max-w-4xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-lg font-bold">Related Converters</h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {related.map((c) => (
              <Link
                key={c.slug}
                to={converterPath(c.slug)}
                className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary hover:bg-primary/20"
              >
                {c.fromSymbol} → {c.toSymbol}
              </Link>
            ))}
            {others.map((c) => (
              <Link
                key={c.slug}
                to={converterPath(c.slug)}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary"
              >
                {c.fromSymbol} → {c.toSymbol}
              </Link>
            ))}
            <Link
              to="/si-prefix-converter"
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary"
            >
              All SI prefixes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
