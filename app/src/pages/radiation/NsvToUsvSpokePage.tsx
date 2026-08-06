import { Link } from 'react-router';
import { Activity, ArrowRight, ShieldCheck, FileText, ExternalLink, Atom, ChevronRight, AlertTriangle } from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { SpokeCalculator } from '@/components/SpokeCalculator';
import { FaqSection } from '@/components/Faq';

const SPOKE_FAQS = [
  {
    q: 'What is the formula to convert nanosieverts to microsieverts?',
    a: 'To convert nanosieverts (nSv) to microsieverts (µSv), divide the nanosievert value by 1,000. Formula: µSv = nSv ÷ 1,000.',
  },
  {
    q: 'How many nanosieverts are in 1 microsievert?',
    a: 'There are exactly 1,000 nanosieverts in 1 microsievert (1 µSv = 1,000 nSv). The sievert (Sv) is the SI derived unit of ionizing radiation dose equivalent.',
  },
  {
    q: 'What is normal hourly background radiation in nSv/h and µSv/h?',
    a: 'Average environmental background radiation typically ranges between 100 nSv/h and 200 nSv/h, which equals 0.10 µSv/h to 0.20 µSv/h.',
  },
  {
    q: 'How does a nanosievert compare to a millisievert?',
    a: '1 millisievert (mSv) = 1,000 microsieverts (µSv) = 1,000,000 nanosieverts (nSv). For example, a annual public dose limit of 1 mSv equals 1,000 µSv or 1,000,000 nSv.',
  },
  {
    q: 'Does this calculator evaluate radiation safety or medical risk?',
    a: 'No. This calculator performs pure mathematical unit conversions between nSv and µSv. Radiation risk assessments must be performed by certified health physicists or medical professionals.',
  },
  {
    q: 'Why do radiation detectors switch between nSv/h and µSv/h?',
    a: 'Low-background radiation monitors (such as environmental scintillation counters) use nSv/h for high precision around ambient levels (e.g. 80 nSv/h = 0.08 µSv/h), whereas personal dosimeters use µSv or mSv.',
  },
];

export default function NsvToUsvSpokePage() {
  useSEO({
    title: 'Nanosieverts to Microsieverts Converter (nSv to µSv) | NanoToMicro',
    description:
      'Convert nanosieverts (nSv) to microsieverts (µSv) with our accurate dosimetric calculator. Formula: µSv = nSv ÷ 1,000. Includes background radiation scales, ICRP/IAEA benchmarks, FAQs & safety disclaimer.',
    canonical: 'https://www.nanotomicro.com/radiation/nsv-to-usv/',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Nanosieverts to Microsieverts Converter (nSv to µSv)',
        description: 'Convert radiation dose equivalent values from nanosieverts to microsieverts using the ÷1,000 formula.',
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
            { '@type': 'ListItem', position: 2, name: 'Radiation Conversions', item: 'https://www.nanotomicro.com/radiation/' },
            { '@type': 'ListItem', position: 3, name: 'Nanosieverts to Microsieverts', item: 'https://www.nanotomicro.com/radiation/nsv-to-usv/' },
          ],
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          { '@type': 'ListItem', position: 2, name: 'Radiation Conversions', item: 'https://www.nanotomicro.com/radiation/' },
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
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Link to="/" className="transition-colors hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            <Link to="/nano-to-micro-conversion/" className="transition-colors hover:text-primary">Nano to Micro Hub</Link>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            <span aria-current="page" className="font-semibold text-foreground">Nanosieverts to Microsieverts</span>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Activity className="h-4 w-4" /> Medical & Radiation Dosimetry
            </div>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Nanosieverts to Microsieverts Converter (nSv to µSv)
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Convert ionizing radiation dose-equivalent measurements from nanosieverts (nSv) to microsieverts (µSv) using the universal divide-by-1,000 formula.
            </p>
          </div>

          {/* Calculator Component */}
          <div className="mt-10">
            <SpokeCalculator
              title="Nanosieverts to Microsieverts Calculator"
              subtitle="Convert radiation dose rates and dose equivalent values accurately."
              sourceUnitName="Nanosievert"
              sourceUnitPlural="Nanosieverts"
              sourceUnitSymbol="nSv"
              destUnitName="Microsievert"
              destUnitPlural="Microsieverts"
              destUnitSymbol="µSv"
              exampleInput={8500}
              categoryName="Dosimetry"
              presets={[
                { label: '100 nSv (Banana)', value: 100 },
                { label: '180 nSv/h (Ambient)', value: 180 },
                { label: '1,000 nSv (1 µSv)', value: 1000 },
                { label: '5,000 nSv (X-ray)', value: 5000 },
                { label: '8,500 nSv', value: 8500 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── FORMULA & MATHEMATICAL RELATIONSHIP ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Direct Formula Explanation</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Dosimetric relation between the nanosievert (10⁻⁹ Sv) and the microsievert (10⁻⁶ Sv).
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/30 bg-card p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Unit Definition & Ratio</span>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                A <strong>nanosievert (nSv)</strong> is one billionth of a sievert (10<sup>−9</sup> Sv). A <strong>microsievert (µSv)</strong> is one millionth of a sievert (10<sup>−6</sup> Sv). Because 10<sup>−6</sup> / 10<sup>−9</sup> = 1,000, exactly 1,000 nanosieverts equal one microsievert.
              </p>
              <div className="numeric mt-4 rounded-xl border border-primary/40 bg-primary/10 p-4 text-center">
                <span className="block text-xs font-bold uppercase text-primary">Formula</span>
                <span className="mt-1 block text-lg font-black text-primary sm:text-xl">
                  Microsieverts (µSv) = Nanosieverts (nSv) ÷ 1,000
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">Manual Step-by-Step Conversion</span>
              <ol className="mt-3 space-y-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">1</span>
                  <span>Take the dose equivalent value expressed in nanosieverts (nSv).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">2</span>
                  <span>Divide by 1,000 (shift decimal point 3 positions to the left).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">3</span>
                  <span>Append the SI unit symbol <strong>µSv</strong> to denote microsieverts.</span>
                </li>
              </ol>
              <div className="numeric mt-4 rounded-xl border border-border bg-secondary/50 p-3 text-xs font-mono font-bold text-foreground">
                Example: 8,500 nSv ÷ 1,000 = <span className="text-primary">8.5 µSv</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RADIATION DOSE SPECTRUM ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Environmental & Medical Radiation Dose Spectrum</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Understanding dose equivalent magnitudes across everyday ambient background and diagnostic procedures.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-bold text-primary uppercase">Dietary Benchmark</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">100 nSv (0.1 µSv)</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Eating one banana provides ~100 nSv (0.1 µSv) due to naturally occurring Potassium-40 ($^{40}\text{K}$).
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-bold text-primary uppercase">Ambient Background</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">100–200 nSv/h</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Normal terrestrial & cosmic environmental background dose rate spans 0.10 µSv/h to 0.20 µSv/h (100–200 nSv/h).
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-bold text-primary uppercase">Commercial Aviation</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">3,000 nSv/h (3 µSv/h)</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                High-altitude commercial flight exposure averages ~3,000 nSv per hour (3 µSv/h) from cosmic radiation.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-bold text-primary uppercase">Dental Radiography</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">5,000 nSv (5 µSv)</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                A standard digital dental bitewing X-ray delivers ~5,000 nSv (5 µSv) effective dose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONVERSION TABLE ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nanosieverts to Microsieverts Conversion Table</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Reference lookup table for radiation dose equivalent values converted from nSv to µSv.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/80 text-foreground border-b border-border">
                  <th className="px-5 py-3.5 font-bold">Nanosieverts (nSv)</th>
                  <th className="px-5 py-3.5 font-bold text-muted-foreground">Calculation</th>
                  <th className="px-5 py-3.5 font-bold text-primary">Microsieverts (µSv)</th>
                </tr>
              </thead>
              <tbody className="numeric divide-y divide-border/60">
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">1 nSv</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">1 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">0.001 µSv</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">100 nSv (Banana)</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">100 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">0.1 µSv</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">180 nSv (Hourly)</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">180 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">0.18 µSv</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">1,000 nSv</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">1,000 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">1 µSv</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">5,000 nSv (Dental X-ray)</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">5,000 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">5 µSv</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">8,500 nSv</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">8,500 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">8.5 µSv</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3 font-semibold text-foreground">100,000 nSv (Chest X-ray)</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">100,000 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">100 µSv (0.1 mSv)</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3 font-semibold text-foreground">1,000,000 nSv (Annual Limit)</td>
                  <td className="px-5 py-3 font-mono text-muted-foreground">1,000,000 ÷ 1,000</td>
                  <td className="px-5 py-3 font-bold text-primary">1,000 µSv (1 mSv)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WORKED EXAMPLES ── */}
      <section className="py-14 border-b border-border/60">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Worked Calculation Examples</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Step-by-step calculations for environmental dose rate reporting and medical imaging.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Example 1: Ambient Dose Rate</span>
              <h3 className="mt-1 text-base font-bold text-foreground">Convert 180 nSv/h Background Rate to µSv/h</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                An environmental radiation monitor logs an ambient background rate of 180 nanosieverts per hour. Convert to microsieverts per hour:
              </p>
              <div className="numeric mt-3 space-y-2 rounded-xl border border-border/80 bg-secondary/40 p-4 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Calculation:</span>
                  <span className="font-mono font-bold">180 ÷ 1,000 = 0.18</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-extrabold text-primary">
                  <span>Result:</span>
                  <span>180 nSv/h = 0.18 µSv/h</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Example 2: Dental Radiograph</span>
              <h3 className="mt-1 text-base font-bold text-foreground">Convert 5,000 nSv Dental X-Ray Dose to µSv</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A digital intraoral radiograph exposes a patient to an effective dose equivalent of 5,000 nanosieverts. Convert to microsieverts:
              </p>
              <div className="numeric mt-3 space-y-2 rounded-xl border border-border/80 bg-secondary/40 p-4 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Calculation:</span>
                  <span className="font-mono font-bold">5,000 ÷ 1,000 = 5</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-extrabold text-primary">
                  <span>Result:</span>
                  <span>5,000 nSv = 5 µSv</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCURACY & DOSIMETRY INTERPRETATION ── */}
      <section className="py-14 border-b border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Dosimetric Concepts & Radiation Protection Standards</h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
              Understanding equivalent dose ($H$), effective dose ($E$), and measurement instrument calibration.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
              <div>
                <h3 className="font-bold text-foreground text-sm mb-2">Equivalent & Effective Dose</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The sievert accounts for biological damage by multiplying absorbed dose (Gray) by radiation weighting factors ($W_R$, e.g. 1 for X-rays/gamma, 20 for alpha particles) and tissue weighting factors ($W_T$).
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-2">Operational Quantities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Personal dosimeters measure ambient dose equivalent $H^*(10)$ or personal dose equivalent $H_p(10)$ at 10 mm tissue depth, reported in µSv or nSv.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-2">Detector Types & Sensitivity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Scintillation detectors ($\text{NaI(Tl)}$) resolve low nSv/h fluctuations, whereas energy-compensated Geiger-Müller tubes measure higher µSv/h and mSv/h operational rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIALIST FAQS ── */}
      <FaqSection faqs={SPOKE_FAQS} heading="Nanosieverts to Microsieverts FAQs" />

      {/* ── MANDATORY SAFETY DISCLAIMER BOX ── */}
      <section className="py-8">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6 text-center text-amber-200">
            <div className="flex items-center justify-center gap-2 mb-2 font-bold text-amber-100 text-sm">
              <AlertTriangle className="h-5 w-5" /> Educational Use Disclaimer
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              “Medical doses and radiation measurements should always be interpreted by a qualified health physics or medical professional. This calculator performs mathematical unit conversions only.”
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES AND REFERENCES ── */}
      <section className="py-12 border-t border-border/60 bg-card/20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2 mb-3">
              <FileText className="h-4 w-4 text-primary" /> Primary Sources & Radiological Protection References
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>International Commission on Radiological Protection (ICRP) — <em>Publication 103: The 2007 Recommendations of the ICRP</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>International Atomic Energy Agency (IAEA) — <em>Radiation Protection and Safety of Radiation Sources: International Basic Safety Standards (GSR Part 3)</em>.</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>United Nations Scientific Committee on the Effects of Atomic Radiation (UNSCEAR) — <em>Report to the General Assembly</em>.</span>
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

          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
            <h3 className="text-base font-bold text-foreground">Need to convert other nano-to-micro quantities?</h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Explore length, mass, time, volume, electric current, and capacitance in our central hub.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/nano-to-micro-conversion/"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                <Atom className="h-4 w-4" /> Open Universal Nano to Micro Hub <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/length/nm-to-um/"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50"
              >
                Nanometers to Micrometers (nm → µm)
              </Link>
              <Link
                to="/time/ns-to-us/"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50"
              >
                Nanoseconds to Microseconds (ns → µs)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
