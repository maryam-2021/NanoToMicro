import { Link } from 'react-router';
import { AlertTriangle, ArrowRight, ChevronRight, Clock3 } from 'lucide-react';
import { useSEO } from '@/components/SEO';

export default function UsvVsUsvPerHourPage() {
  useSEO({
    title: 'µSv vs µSv/h: Microsievert vs Dose Rate Explained | NanoToMicro',
    description: 'Understand the difference between microsieverts (µSv), which express a dose quantity, and microsieverts per hour (µSv/h), which express a dose rate. Includes the dose = rate × time relationship.',
    canonical: 'https://www.nanotomicro.com/radiation/usv-vs-usv-per-hour',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'µSv vs µSv/h: Microsievert vs Dose Rate Explained',
        description: 'A practical explanation of microsievert dose quantities and microsieverts-per-hour dose rates.',
        url: 'https://www.nanotomicro.com/radiation/usv-vs-usv-per-hour',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          { '@type': 'ListItem', position: 2, name: 'Radiation', item: 'https://www.nanotomicro.com/units/radiation' },
          { '@type': 'ListItem', position: 3, name: 'µSv vs µSv/h' },
        ],
      },
    ],
  });

  return (
    <>
      <section className="border-b border-border/60 bg-grid">
        <div className="mx-auto w-full max-w-4xl px-4 pb-12 pt-10 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link><ChevronRight className="h-3.5 w-3.5" />
            <Link to="/units/radiation" className="hover:text-primary">Radiation</Link><ChevronRight className="h-3.5 w-3.5" />
            <span>µSv vs µSv/h</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"><Clock3 className="h-4 w-4" /> Dose and dose-rate guide</div>
          <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Microsievert (µSv) vs Microsievert per Hour (µSv/h)</h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground"><strong className="text-foreground">µSv and µSv/h describe different things.</strong> A value in µSv expresses an accumulated radiation-protection dose quantity. A value in µSv/h expresses how quickly that quantity is accumulating per hour.</p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl space-y-10 px-4 py-12 sm:px-6">
        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">µSv</div>
            <h2 className="mt-2 text-xl font-bold">Dose quantity</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Use microsieverts when you are describing a total or accumulated protection dose quantity over an exposure or time period.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">µSv/h</div>
            <h2 className="mt-2 text-xl font-bold">Dose rate</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Use microsieverts per hour when a monitor reports the rate at which a dose quantity is being accumulated at that time or location.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold">Dose = rate × time</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">If a dose rate is approximately constant during the period being considered, accumulated dose can be estimated by multiplying the rate by elapsed time.</p>
          <div className="numeric mt-5 rounded-xl border border-primary/30 bg-card px-5 py-4 text-center text-lg font-black text-primary">2 µSv/h × 3 h = 6 µSv</div>
          <p className="mt-3 text-xs text-muted-foreground">If the rate changes over time, a single rate × time calculation is only an approximation; time-varying measurements need to be integrated or summed over intervals.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Common mistake: comparing the numbers directly</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A reading of 0.2 µSv/h is not the same kind of quantity as 0.2 µSv. The “per hour” changes the meaning. Always check the unit printed on the instrument, report or dataset before comparing values.</p>
        </section>

        <section className="rounded-2xl border border-amber-500/35 bg-amber-500/10 p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-amber-100"><AlertTriangle className="h-5 w-5" /> Mathematical unit guide only</h2>
          <p className="mt-3 text-sm leading-relaxed text-amber-100/85">This page explains units and arithmetic. It does not determine whether a personal exposure is safe, interpret a dosimeter for a medical decision, or replace radiation-protection advice.</p>
        </section>

        <section className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h2 className="text-lg font-bold">Related radiation tools</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/radiation/usv-to-msv" className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">µSv to mSv <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/radiation/gray-vs-sievert" className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-bold">Gray vs sievert <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </article>
    </>
  );
}
