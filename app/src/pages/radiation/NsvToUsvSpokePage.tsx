import { Link } from 'react-router';
import { Activity, ArrowRight, ShieldCheck, FileText, ExternalLink, Atom, ArrowLeftRight, AlertTriangle } from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { SpokeCalculator } from '@/components/SpokeCalculator';
import { RelatedConversions } from '@/components/RelatedConversions';
import { FaqSection } from '@/components/Faq';

const SPOKE_FAQS = [
  {
    q: 'How many nanosieverts are in one microsievert?',
    a: 'There are exactly 1,000 nanosieverts in one microsievert (1 µSv = 1,000 nSv). The sievert (Sv) is the SI derived unit used for radiation protection dose quantities.',
  },
  {
    q: 'How do I convert nSv to µSv?',
    a: 'To convert nanosieverts (nSv) to microsieverts (µSv), divide the nanosievert value by 1,000 or shift the decimal point three places to the left. Formula: µSv = nSv ÷ 1,000.',
  },
  {
    q: 'Is a nanosievert smaller than a microsievert?',
    a: 'Yes. A nanosievert (10⁻⁹ Sv) is 1,000 times smaller than a microsievert (10⁻⁶ Sv). One nanosievert equals 0.001 microsieverts.',
  },
  {
    q: 'What is 500 nSv in microsieverts?',
    a: '500 nanosieverts equals 0.5 microsieverts (500 ÷ 1,000 = 0.5 µSv).',
  },
  {
    q: 'Is 1,000 nSv equal to 1 µSv?',
    a: 'Yes. 1,000 nanosieverts equals exactly 1 microsievert (1,000 nSv = 1 µSv).',
  },
  {
    q: 'What does the sievert measure?',
    a: 'The sievert (Sv) is the SI derived unit used in radiation protection to measure equivalent dose and effective dose. These quantities combine absorbed radiation energy (joules per kilogram) with biological weighting factors for different radiation types and tissue sensitivities.',
  },
  {
    q: 'What is the difference between a gray and a sievert?',
    a: 'The gray (Gy) measures physical absorbed dose (1 joule of radiation energy absorbed per kilogram of matter). The sievert (Sv) measures biological radiation protection dose quantities by multiplying absorbed dose in gray by radiation and tissue weighting factors.',
  },
  {
    q: 'What is the difference between µSv and µSv/h?',
    a: 'µSv (microsievert) measures an accumulated radiation dose quantity. µSv/h (microsieverts per hour) measures a dose rate per unit of time. For example, a rate of 2 µSv/h sustained for 2 hours equals an accumulated dose of 4 µSv.',
  },
  {
    q: 'Can this converter tell me whether an exposure is safe?',
    a: 'No. The converter changes mathematical units only and cannot assess personal health risk, interpret dosimeter logs, or determine whether a particular exposure is safe.',
  },
  {
    q: 'Why do medical radiation doses vary?',
    a: 'Diagnostic medical radiation doses vary based on examination type, body region, number of exposures, imaging technology, clinical protocols, patient size, and diagnostic requirements.',
  },
  {
    q: 'How do I convert µSv to mSv?',
    a: 'To convert microsieverts (µSv) to millisieverts (mSv), divide the microsievert value by 1,000 (e.g. 1,000 µSv = 1 mSv). To convert mSv back to µSv, multiply by 1,000.',
  },
  {
    q: 'Is a banana equivalent dose an official unit?',
    a: 'No. The "banana equivalent dose" (~100 nSv = 0.1 µSv) is an informal educational analogy used to visualize tiny radiation amounts. It is not an official dosimetric unit in scientific or clinical radiation protection.',
  },
];

export default function NsvToUsvSpokePage() {
  useSEO({
    title: 'Nanosieverts to Microsieverts Converter (nSv to µSv) & Dose Guide',
    description:
      'Convert nanosieverts to microsieverts using the nSv-to-µSv calculator, formula and table, with carefully sourced radiation-dose terminology and context.',
    canonical: 'https://www.nanotomicro.com/radiation/nsv-to-usv/',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Nanosieverts to Microsieverts Converter (nSv to µSv) & Dose Guide',
        description: 'Convert radiation dose equivalent values from nanosieverts (nSv) to microsieverts (µSv) using the ÷1,000 formula.',
        url: 'https://www.nanotomicro.com/radiation/nsv-to-usv/',
        isPartOf: {
          '@type': 'WebSite',
          name: 'NanoToMicro',
          url: 'https://www.nanotomicro.com/',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
            { '@type': 'ListItem', position: 2, name: 'Nano to Micro Hub', item: 'https://www.nanotomicro.com/nano-to-micro-conversion/' },
            { '@type': 'ListItem', position: 3, name: 'Nanosieverts to Microsieverts', item: 'https://www.nanotomicro.com/radiation/nsv-to-usv/' },
          ],
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          { '@type': 'ListItem', position: 2, name: 'Nano to Micro Hub', item: 'https://www.nanotomicro.com/nano-to-micro-conversion/' },
          { '@type': 'ListItem', position: 3, name: 'Nanosieverts to Microsieverts', item: 'https://www.nanotomicro.com/radiation/nsv-to-usv/' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: SPOKE_FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Nanosieverts to Microsieverts Calculator',
        description: 'Instant dosimetric unit conversion calculator converting nanosieverts (nSv) to microsieverts (µSv).',
        url: 'https://www.nanotomicro.com/radiation/nsv-to-usv/',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
    ],
  });

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden border-b border-border/60 bg-grid py-10 sm:py-14">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="text-muted-foreground/60">&gt;</li>
              <li><Link to="/nano-to-micro-conversion/" className="transition-colors hover:text-primary">Nano to Micro Hub</Link></li>
              <li aria-hidden="true" className="text-muted-foreground/60">&gt;</li>
              <li><span aria-current="page" className="font-semibold text-foreground">Nanosieverts to Microsieverts</span></li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Activity className="h-4 w-4" /> Medical & Radiation Dosimetry
            </div>
            
            {/* H1 Heading */}
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Convert Nanosieverts to Microsieverts (nSv to µSv)
            </h1>

            {/* Measured Hero Intro */}
            <div className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                The sievert is the SI unit used for equivalent dose and effective dose in radiation protection. These quantities incorporate radiation- and tissue-related weighting concepts. Nano represents 10<sup>−9</sup> and micro represents 10<sup>−6</sup>. Because the prefixes differ by three powers of ten, one microsievert equals exactly 1,000 nanosieverts. To convert any dose-equivalent value from nanosieverts (nSv) to microsieverts (µSv), divide by 1,000. For deeper background, read our <Link to="/guides/" className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80">guide to SI radiation units</Link>.
              </p>
            </div>

            {/* Formula Badge & Reverse Conversion Link */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <span className="numeric rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-extrabold text-primary">
                nSv → µSv: divide by 1,000
              </span>
              <Link
                to="/microsieverts-to-nanosieverts/"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <ArrowLeftRight className="h-3.5 w-3.5 text-primary" /> Convert microsieverts to nanosieverts
              </Link>
            </div>
          </div>

          {/* Prominent Educational Disclaimer Box */}
          <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6 text-center text-amber-200">
            <div className="flex items-center justify-center gap-2 mb-2 font-bold text-amber-100 text-sm">
              <AlertTriangle className="h-5 w-5 shrink-0" /> Prominent Educational Disclaimer
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              “This calculator performs mathematical unit conversion only. It does not assess whether a radiation exposure is safe, interpret personal dosimetry, replace professional radiation-protection advice or provide medical guidance. For personal, occupational or emergency concerns, consult an appropriately qualified professional or relevant authority.”
            </p>
          </div>

          {/* Calculator Component */}
          <div className="mt-10">
            <SpokeCalculator
              title="Nanosieverts to Microsieverts Calculator"
              subtitle="Convert radiation dose equivalent values accurately."
              sourceUnitName="Nanosievert"
              sourceUnitPlural="Nanosieverts"
              sourceUnitSymbol="nSv"
              destUnitName="Microsievert"
              destUnitPlural="Microsieverts"
              destUnitSymbol="µSv"
              exampleInput={5000}
              categoryName="Dosimetry"
              presets={[
                { label: '50 nSv', value: 50 },
                { label: '100 nSv', value: 100 },
                { label: '1,000 nSv', value: 1000 },
                { label: '10,000 nSv', value: 10000 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── H2: NANOSIEVERTS TO MICROSIEVERTS FORMULA ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nanosieverts to Microsieverts Formula</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Mathematical prefix relationship between 10⁻⁹ Sv and 10⁻⁶ Sv.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/30 bg-card p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Mathematical Relationship</span>
              <div className="numeric mt-3 space-y-2 text-xs sm:text-sm font-semibold text-foreground">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span>1 µSv</span>
                  <span className="font-bold text-primary font-mono">= 1,000 nSv</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span>1 nSv</span>
                  <span className="font-bold text-primary font-mono">= 0.001 µSv</span>
                </div>
              </div>

              <div className="numeric mt-4 rounded-xl border border-primary/40 bg-primary/10 p-4 text-center">
                <span className="block text-xs font-bold uppercase text-primary">Main Formula</span>
                <span className="mt-1 block text-base font-black text-primary sm:text-lg">
                  Dose in µSv = Dose in nSv ÷ 1,000
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">Interpretation Context Notice</span>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                While mathematical prefix conversion is exact, evaluating real radiation exposure requires complete physical and clinical context:
              </p>
              <ul className="mt-2 grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                <li>• Dose quantity</li>
                <li>• Radiation type</li>
                <li>• Exposure pathway</li>
                <li>• Exposure duration</li>
                <li>• Measurement method</li>
                <li>• Body area or tissue</li>
                <li>• Occupational context</li>
                <li>• Medical context</li>
              </ul>
              
              <div className="numeric mt-4 rounded-xl border border-border bg-secondary/50 p-3 text-xs sm:text-sm">
                <span className="block text-xs font-bold uppercase text-primary mb-1">Worked Example</span>
                <p className="font-mono text-muted-foreground">25,000 nSv ÷ 1,000 = 25 µSv</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: HOW TO CONVERT NSV TO USV MANUALLY ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How to Convert nSv to µSv</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Follow these three visible steps or use the decimal shift shortcut.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-extrabold text-primary">
                1
              </div>
              <h3 className="mt-3 text-sm font-bold text-foreground">Step 1</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Record the value in nanosieverts (nSv).
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-extrabold text-primary">
                2
              </div>
              <h3 className="mt-3 text-sm font-bold text-foreground">Step 2</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Divide the value by 1,000.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-extrabold text-primary">
                3
              </div>
              <h3 className="mt-3 text-sm font-bold text-foreground">Step 3</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Express the result in microsieverts (µSv).
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6">
            <h3 className="text-sm font-bold text-foreground">Decimal Shortcut</h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              “Move the decimal point three places to the left.”
            </p>
            <div className="numeric mt-3 flex flex-wrap gap-4 text-xs font-mono font-bold text-foreground">
              <span className="rounded-lg bg-card px-3 py-1.5 border border-border">750 nSv ÷ 1,000 = 0.75 µSv</span>
              <span className="rounded-lg bg-card px-3 py-1.5 border border-border">1,000 nSv → 1 µSv</span>
              <span className="rounded-lg bg-card px-3 py-1.5 border border-border">50 nSv → 0.05 µSv</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: UNDERSTANDING THE SIEVERT SCALE ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Understanding the Sievert Scale</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Comparing metric prefix multiples of the sievert and distinguishing radiological quantities.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/80 text-foreground border-b border-border">
                  <th scope="col" className="px-5 py-3.5 font-bold">Unit</th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-primary">Symbol</th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-foreground">Relationship</th>
                </tr>
              </thead>
              <tbody className="numeric divide-y divide-border/60">
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">Sievert</td>
                  <td className="px-5 py-3 font-bold text-primary">Sv</td>
                  <td className="px-5 py-3 text-muted-foreground">Base named SI derived unit</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">Millisievert</td>
                  <td className="px-5 py-3 font-bold text-primary">mSv</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">0.001 Sv</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">Microsievert</td>
                  <td className="px-5 py-3 font-bold text-primary">µSv</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">0.000001 Sv</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">Nanosievert</td>
                  <td className="px-5 py-3 font-bold text-primary">nSv</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">0.000000001 Sv</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="numeric mt-4 flex flex-wrap justify-center gap-4 text-xs font-mono font-bold text-foreground">
            <span className="rounded-lg bg-card px-3 py-1.5 border border-border">1 Sv = 1,000 mSv</span>
            <span className="rounded-lg bg-card px-3 py-1.5 border border-border">1 mSv = 1,000 µSv</span>
            <span className="rounded-lg bg-card px-3 py-1.5 border border-border">1 µSv = 1,000 nSv</span>
          </div>

          {/* Distinguish Bq vs Gy vs Sv */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-6 text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-2">
            <h3 className="font-bold text-foreground text-sm">Distinguishing Radiological Units</h3>
            <p>• <strong>Becquerel (Bq):</strong> Measures radioactive activity (number of atomic disintegrations per second).</p>
            <p>• <strong>Gray (Gy):</strong> Measures physical absorbed dose (energy deposited per unit mass in joules per kilogram).</p>
            <p>• <strong>Sievert (Sv):</strong> Measures radiation-protection dose quantities (equivalent and effective dose).</p>
            <p className="text-amber-300 font-semibold pt-1">
              Bq, Gy, and Sv are not directly interchangeable without specific physical decay models and biological weighting data.
            </p>
          </div>
        </div>
      </section>

      {/* ── H2: EQUIVALENT DOSE AND EFFECTIVE DOSE ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Equivalent Dose and Effective Dose</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Concise educational definitions based on ICRP and IAEA radiation protection standards.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-primary">Equivalent Dose</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Equivalent dose applies radiation weighting factors (<i>W</i><sub>R</sub>) to absorbed dose for a specific organ or tissue to account for different radiation types (e.g. gamma rays vs alpha particles) [ICRP Publication 103].
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider text-primary">Effective Dose</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Effective dose additionally applies tissue weighting factors (<i>W</i><sub>T</sub>) to provide a radiation-protection quantity representing overall health detriment at a population level [IAEA GSR Part 3].
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 p-5 text-center text-xs sm:text-sm text-muted-foreground font-medium">
            “Effective dose is useful for radiation-protection comparison and planning, but it is not a personalised prediction of an individual’s medical outcome.”
          </div>
        </div>
      </section>

      {/* ── H2: REAL-WORLD RADIATION CONTEXT ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Real-World Radiation Context</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Carefully sourced official benchmarks from UKHSA, UNSCEAR, and IAEA.
            </p>
          </div>

          <div className="space-y-8">
            {/* H3: Natural Background Radiation */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border/60 pb-3">
                <Activity className="h-5 w-5 text-primary" /> Natural Background Radiation
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Global and national background averages differ, and individual exposure varies significantly depending on local radon levels and altitude [UNSCEAR / UKHSA 2024]. The global average natural background is approximately 2.4 mSv per year:
              </p>
              <div className="numeric mt-3 flex flex-wrap gap-4 text-xs font-mono font-bold text-foreground">
                <span className="rounded-lg bg-secondary/50 px-3 py-1.5 border border-border">2.4 mSv = 2,400 µSv</span>
                <span className="rounded-lg bg-secondary/50 px-3 py-1.5 border border-border">Calculated daily average: 2,400 µSv ÷ 365 ≈ 6.6 µSv/day</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground italic">
                Note: 6.6 µSv/day is a mathematically derived average, not a constant daily personal exposure. UK national average natural background is approximately 2.7 mSv/year [UKHSA].
              </p>
            </div>

            {/* H3: Diagnostic X-Ray Context */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border/60 pb-3">
                <FileText className="h-5 w-5 text-primary" /> Diagnostic Medical Imaging Context
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Medical doses vary according to examination type, image count, equipment, technique, patient size, and clinical requirements [UKHSA Diagnostic Reference Levels]. Official sources report representative or typical values such as:
              </p>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                <li>• Typical intraoral dental radiograph: ~5 µSv (5,000 nSv) [UKHSA DRL].</li>
                <li>• Typical single chest X-ray: ~14–20 µSv (14,000–20,000 nSv) depending on projection and equipment [UKHSA DRL].</li>
              </ul>
            </div>

            {/* H3: Environmental and Occupational Readings */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 border-b border-border/60 pb-3">
                <ShieldCheck className="h-5 w-5 text-primary" /> Environmental & Occupational Readings
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Instrument displays may represent dose, dose rate, ambient dose equivalent <i>H</i>*(10), or personal dose equivalent <i>H</i><sub>p</sub>(10). Do not confuse accumulated dose (µSv) with dose rate (µSv/h).
              </p>
              <div className="mt-3">
                <Link to="/guides/" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                  Difference between µSv and µSv/h <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: QUICK NSV-TO-USV CONVERSION TABLE ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Quick nSv-to-µSv Conversion Table</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Responsive reference lookup table for standard nanosievert values converted to microsieverts.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/80 text-foreground border-b border-border">
                  <th scope="col" className="px-5 py-3.5 font-bold">Nanosieverts</th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-primary">Microsieverts</th>
                </tr>
              </thead>
              <tbody className="numeric divide-y divide-border/60">
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">1 nSv</td><td className="px-5 py-3 font-bold text-primary">0.001 µSv</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">10 nSv</td><td className="px-5 py-3 font-bold text-primary">0.01 µSv</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">50 nSv</td><td className="px-5 py-3 font-bold text-primary">0.05 µSv</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">100 nSv</td><td className="px-5 py-3 font-bold text-primary">0.1 µSv</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">500 nSv</td><td className="px-5 py-3 font-bold text-primary">0.5 µSv</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">1,000 nSv</td><td className="px-5 py-3 font-bold text-primary">1 µSv</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">5,000 nSv</td><td className="px-5 py-3 font-bold text-primary">5 µSv</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">10,000 nSv</td><td className="px-5 py-3 font-bold text-primary">10 µSv</td></tr>
                <tr className="bg-card"><td className="px-5 py-3 font-semibold text-foreground">100,000 nSv</td><td className="px-5 py-3 font-bold text-primary">100 µSv</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3 font-semibold text-foreground">1,000,000 nSv</td><td className="px-5 py-3 font-bold text-primary">1,000 µSv (1 mSv)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── H2: WORKED RADIATION EXAMPLES ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Worked Radiation Examples</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Step-by-step mathematical unit conversion calculations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground">Convert 50 nSv to µSv</h3>
              <p className="numeric mt-2 font-mono text-xs text-muted-foreground">50 ÷ 1,000 = 0.05</p>
              <p className="numeric mt-1 text-sm font-bold text-primary">50 nSv = 0.05 µSv</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground">Convert 2,500 nSv to µSv</h3>
              <p className="numeric mt-2 font-mono text-xs text-muted-foreground">2,500 ÷ 1,000 = 2.5</p>
              <p className="numeric mt-1 text-sm font-bold text-primary">2,500 nSv = 2.5 µSv</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground">Convert 0.4 nSv to µSv</h3>
              <p className="numeric mt-2 font-mono text-xs text-muted-foreground">0.4 ÷ 1,000 = 0.0004</p>
              <p className="numeric mt-1 text-sm font-bold text-primary">0.4 nSv = 0.0004 µSv</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold text-foreground">Convert 2 × 10⁶ nSv to µSv</h3>
              <p className="numeric mt-2 font-mono text-xs text-muted-foreground">2,000,000 ÷ 1,000 = 2,000</p>
              <p className="numeric mt-1 text-sm font-bold text-primary">2 × 10⁶ nSv = 2,000 µSv (2 mSv)</p>
            </div>
          </div>

          <p className="mt-4 text-xs text-muted-foreground text-center italic">
            Note: These calculations demonstrate mathematical unit conversion only and do not interpret exposure safety.
          </p>
        </div>
      </section>

      {/* ── H2: DOSE VS DOSE RATE ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Dose vs Dose Rate</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Distinguishing accumulated radiation dose from temporal dose rate.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/80 text-foreground border-b border-border">
                  <th scope="col" className="px-5 py-3.5 font-bold">Quantity</th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-primary">Example Unit</th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-foreground">Meaning</th>
                </tr>
              </thead>
              <tbody className="numeric divide-y divide-border/60">
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">Dose</td>
                  <td className="px-5 py-3 font-bold text-primary">µSv</td>
                  <td className="px-5 py-3 text-muted-foreground">An amount of radiation-protection dose</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">Dose rate</td>
                  <td className="px-5 py-3 font-bold text-primary">µSv/h</td>
                  <td className="px-5 py-3 text-muted-foreground">Dose per unit of time</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-xl border border-border bg-card p-4 text-xs sm:text-sm text-muted-foreground space-y-2">
            <p className="numeric font-bold text-foreground">
              Calculation Example: A dose rate of 2 µSv/h sustained for two hours corresponds mathematically to:
            </p>
            <p className="numeric font-mono font-bold text-primary">2 µSv/h × 2 h = 4 µSv</p>
            <p className="text-xs italic">
              Note: This simple multiplication assumes the dose rate remains constant. Real measurements may change over time.
            </p>
          </div>
        </div>
      </section>

      {/* ── H2: RADIATION MEASUREMENT LIMITATIONS ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Radiation Measurement Limitations</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Key physical constraints impacting physical dosimeter and radiation monitor readings.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-xs sm:text-sm leading-relaxed text-muted-foreground space-y-3">
            <p>• <strong>Instrument Calibration:</strong> Detectors must be periodically calibrated against standard radiation sources.</p>
            <p>• <strong>Background Subtraction:</strong> Low-level measurements require subtracting ambient background counts.</p>
            <p>• <strong>Energy Response:</strong> Detector efficiency varies across different radiation energy spectra.</p>
            <p>• <strong>Geometry & Distance:</strong> Source-to-detector orientation and inverse-square laws affect readings.</p>
            <p>• <strong>Measurement Uncertainty:</strong> Statistical Poisson counting errors apply to low count rates.</p>
            <p>• <strong>Operational Quantities:</strong> Displayed numbers may represent operational quantities (<i>H</i>*(10)) rather than effective dose.</p>
            <p className="pt-2 text-foreground font-semibold">
              Always consult the official device manual and qualified radiation protection personnel for operational guidance.
            </p>
          </div>
        </div>
      </section>

      {/* ── SPECIALIST FAQS ── */}
      <FaqSection faqs={SPOKE_FAQS} heading="Nanosieverts to Microsieverts FAQs" />

      {/* ── SOURCES AND REFERENCES ── */}
      <section className="py-12 border-t border-border/60 bg-card/20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2 mb-3">
              <FileText className="h-4 w-4 text-primary" /> Primary Sources & Radiological References
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>BIPM — <em>The International System of Units (SI Brochure, 9th Edition) — The Sievert</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>NIST — <em>Special Publication 330: SI Units and Derived Radiation Quantities</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>ICRP — <em>Publication 103: The 2007 Recommendations of the International Commission on Radiological Protection</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>IAEA — <em>Safety Standards GSR Part 3: Radiation Protection and Safety of Radiation Sources</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>UNSCEAR — <em>Report to the UN General Assembly: Sources and Effects of Ionizing Radiation</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>UKHSA — <em>Ionising Radiation: National Average Exposures and Diagnostic Reference Levels</em>.</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-400" />
                <span>Published by <strong>NanoToMicro Health & Dosimetry Desk</strong> • Reviewed by Health Physics Desk</span>
              </div>
              <div>Last updated: August 2026</div>
            </div>
          </div>

          {/* Hub Backlink Box */}
          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
            <h3 className="text-base font-bold text-foreground">Need to convert other nano-to-micro quantities?</h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Visit our main directory to <Link to="/nano-to-micro-conversion/" className="font-bold text-primary underline">explore all nano-to-micro converters</Link> across length, mass, time, volume, electric current, and capacitance.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/nano-to-micro-conversion/"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                <Atom className="h-4 w-4" /> Open Universal Nano to Micro Hub <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Related Conversions Component */}
          <RelatedConversions currentSpoke="radiation" />
        </div>
      </section>
    </>
  );
}
