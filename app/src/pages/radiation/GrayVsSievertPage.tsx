import { Link } from 'react-router';
import { AlertTriangle, ArrowRight, ChevronRight, ExternalLink, Radiation } from 'lucide-react';
import { useSEO } from '@/components/SEO';

export default function GrayVsSievertPage() {
  useSEO({
    title: 'Gray vs Sievert (Gy vs Sv): Radiation Units Explained | NanoToMicro',
    description: 'Understand the difference between gray (Gy) absorbed dose and sievert (Sv) radiation-protection dose quantities, why they are not generally interchangeable, and where becquerel fits.',
    canonical: 'https://www.nanotomicro.com/radiation/gray-vs-sievert',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Gray vs Sievert (Gy vs Sv): Radiation Units Explained',
        description: 'A careful comparison of gray and sievert radiation quantities and units.',
        url: 'https://www.nanotomicro.com/radiation/gray-vs-sievert',
        isPartOf: { '@type': 'WebSite', name: 'NanoToMicro', url: 'https://www.nanotomicro.com/' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          { '@type': 'ListItem', position: 2, name: 'Radiation', item: 'https://www.nanotomicro.com/units/radiation' },
          { '@type': 'ListItem', position: 3, name: 'Gray vs Sievert' },
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
            <span>Gray vs Sievert</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Radiation className="h-4 w-4" /> Radiation unit guide
          </div>
          <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Gray vs Sievert: What Is the Difference?</h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Gray (Gy) and sievert (Sv) are not generally interchangeable.</strong> Gray is the special SI unit for absorbed dose. Sievert is used for radiation-protection dose quantities that apply weighting to absorbed dose so the quantity reflects radiation type and, for effective dose, tissue sensitivity.
          </p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl space-y-10 px-4 py-12 sm:px-6">
        <section>
          <h2 className="text-2xl font-bold">The short comparison</h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead><tr className="bg-secondary/70"><th className="px-4 py-3">Unit</th><th className="px-4 py-3">Quantity</th><th className="px-4 py-3">Meaning</th></tr></thead>
              <tbody className="divide-y divide-border/60">
                <tr><td className="px-4 py-4 font-bold text-primary">Gy</td><td className="px-4 py-4">Absorbed dose</td><td className="px-4 py-4 text-muted-foreground">Energy deposited by ionising radiation per unit mass; 1 Gy = 1 J/kg.</td></tr>
                <tr><td className="px-4 py-4 font-bold text-primary">Sv</td><td className="px-4 py-4">Radiological-protection dose quantities</td><td className="px-4 py-4 text-muted-foreground">Used for quantities such as effective dose; weighting factors are involved.</td></tr>
                <tr><td className="px-4 py-4 font-bold text-primary">Bq</td><td className="px-4 py-4">Activity</td><td className="px-4 py-4 text-muted-foreground">Rate of nuclear transformations: 1 Bq = 1 transformation per second.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Gray measures absorbed energy</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">The gray describes physical absorbed dose. It tells you how much ionising-radiation energy has been deposited per kilogram of material or tissue. It does not by itself encode the different biological effectiveness of radiation types or the varying sensitivity of organs.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Sievert is used in protection quantities</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Radiological protection uses weighted quantities. Effective dose, expressed in sieverts, combines organ or tissue doses with weighting factors to support protection decisions and comparison with protection criteria.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-500/35 bg-amber-500/10 p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-amber-100"><AlertTriangle className="h-5 w-5" /> Do not use a universal Gy ↔ Sv calculator</h2>
          <p className="mt-3 text-sm leading-relaxed text-amber-100/85">Because gray and sievert refer to different quantities, there is no single general-purpose conversion factor that is valid for every radiation field, organ, geometry or exposure situation. A numerical equality can occur in specific simplified circumstances, but it should not be assumed as a universal rule.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Authoritative references</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a href="https://www.bipm.org/en/publications/si-brochure/annex-1/derived-units" target="_blank" rel="noreferrer" className="rounded-xl border border-border bg-card p-4 text-sm font-semibold hover:border-primary/40 hover:text-primary">BIPM — SI derived units <ExternalLink className="ml-1 inline h-3.5 w-3.5" /></a>
            <a href="https://www.icrp.org/publication.asp?id=ICRP+Publication+147" target="_blank" rel="noreferrer" className="rounded-xl border border-border bg-card p-4 text-sm font-semibold hover:border-primary/40 hover:text-primary">ICRP Publication 147 — Dose quantities <ExternalLink className="ml-1 inline h-3.5 w-3.5" /></a>
          </div>
        </section>

        <section className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h2 className="text-lg font-bold">Continue with radiation units</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/radiation/nsv-to-usv/" className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">nSv to µSv <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/radiation/usv-vs-usv-per-hour" className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-bold">µSv vs µSv/h <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </article>
    </>
  );
}
