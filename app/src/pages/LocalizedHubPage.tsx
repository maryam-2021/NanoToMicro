import { useEffect, useState } from 'react';
import { ArrowRight, Calculator, Languages } from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { getLocalizedHub, LOCALIZED_HUBS } from '@/data/localized-hubs';

interface Props { code: string }

function formatNumber(value: number) {
  if (!Number.isFinite(value)) return '';
  if (Math.abs(value) >= 1e9 || (Math.abs(value) > 0 && Math.abs(value) < 1e-6)) return value.toExponential(4);
  return value.toLocaleString(undefined, { maximumFractionDigits: 9 });
}

export default function LocalizedHubPage({ code }: Props) {
  const locale = getLocalizedHub(code)!;
  const [raw, setRaw] = useState('5000');
  const parsed = Number(raw.trim());
  const result = raw.trim() !== '' && Number.isFinite(parsed) ? parsed / 1000 : null;

  useSEO({
    title: locale.seoTitle,
    description: locale.seoDescription,
    canonical: `https://www.nanotomicro.com/${locale.code}/`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: locale.h1,
        url: `https://www.nanotomicro.com/${locale.code}/`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
    ],
  });

  useEffect(() => {
    const previousLang = document.documentElement.lang;
    const previousDir = document.documentElement.dir;
    document.documentElement.lang = locale.code === 'zh' ? 'zh-Hans' : locale.code;
    document.documentElement.dir = locale.dir ?? 'ltr';
    return () => {
      document.documentElement.lang = previousLang || 'en';
      document.documentElement.dir = previousDir;
    };
  }, [locale]);

  return (
    <main dir={locale.dir ?? 'ltr'}>
      <section className="border-b border-border/60 bg-grid">
        <div className="mx-auto w-full max-w-4xl px-4 pb-12 pt-12 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"><Languages className="h-4 w-4" /> {locale.language}</div>
          <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">{locale.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">{locale.intro}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-primary/40 bg-card p-6 shadow-xl sm:p-8">
          <div className="mb-6 flex items-center gap-2 border-b border-border/60 pb-4"><Calculator className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold">Nano → Micro</h2></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={`nano-${code}`} className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">{locale.inputLabel}</label>
              <input id={`nano-${code}`} type="text" inputMode="decimal" value={raw} onChange={(event) => setRaw(event.target.value)} className="numeric w-full rounded-xl border border-border bg-background px-4 py-3 text-lg font-bold focus:border-primary focus:outline-none" />
            </div>
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{locale.resultLabel}</div>
              <div aria-live="polite" className="numeric min-h-[54px] rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-lg font-black text-primary">{result === null ? '—' : formatNumber(result)}</div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">{locale.formulaHeading}</h2>
            <div className="numeric mt-4 rounded-xl bg-primary/10 p-4 text-center text-lg font-black text-primary">{locale.formulaText}</div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">{locale.howHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{locale.howText}</p>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold">{locale.examplesHeading}</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <table className="numeric w-full text-sm"><thead><tr className="bg-secondary/70"><th className="px-4 py-3 text-start">Nano</th><th className="px-4 py-3 text-start">Micro</th></tr></thead><tbody className="divide-y divide-border/60">{[1, 100, 1000, 5000, 10000].map((value) => <tr key={value}><td className="px-4 py-3">{formatNumber(value)}</td><td className="px-4 py-3 font-bold text-primary">{formatNumber(value / 1000)}</td></tr>)}</tbody></table>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h2 className="text-xl font-bold">{locale.toolsHeading}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{locale.englishNote}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              ['/length/nm-to-um/', 'nm → µm'],
              ['/time/ns-to-us/', 'ns → µs'],
              ['/nanograms-to-micrograms', 'ng → µg'],
              ['/radiation/nsv-to-usv/', 'nSv → µSv'],
            ].map(([href, label]) => <a key={href} href={href} className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 font-bold hover:border-primary/40 hover:text-primary"><span>{label}</span><ArrowRight className="h-4 w-4" /></a>)}
          </div>
        </section>

        <section className="mt-10 border-t border-border/60 pt-8">
          <div className="mb-4 flex items-center gap-2 font-bold"><Languages className="h-4 w-4 text-primary" /> Languages</div>
          <div className="flex flex-wrap gap-2">
            <a href="/nano-to-micro-conversion/" className="rounded-full border border-border px-3 py-1.5 text-sm hover:border-primary/40">English</a>
            {LOCALIZED_HUBS.map((item) => <a key={item.code} href={`/${item.code}/`} lang={item.code} className={`rounded-full border px-3 py-1.5 text-sm ${item.code === code ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/40'}`}>{item.language}</a>)}
          </div>
        </section>
      </section>
    </main>
  );
}
