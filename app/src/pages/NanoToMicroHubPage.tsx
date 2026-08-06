import React, { useState, useId } from 'react';
import { Link } from 'react-router';
import {
  Atom,
  ArrowRight,
  Calculator,
  ChevronDown,
  Copy,
  Check,
  Zap,
  Ruler,
  Scale,
  FlaskConical,
  Timer,
  Activity,
  Layers,
  BookOpen,
  ArrowLeftRight,
  RotateCcw,
  AlertCircle,
} from 'lucide-react';
import { useSEO } from '@/components/SEO';
import { FaqSection } from '@/components/Faq';
import { CATEGORIES, getConverter } from '@/data/converters';

interface UnitCategoryOption {
  id: string;
  label: string;
  category: string;
  fromSymbol: string;
  toSymbol: string;
  slug?: string;
}

const UNIT_CATEGORIES: UnitCategoryOption[] = [
  { id: 'generic', label: 'Generic nano to micro', category: 'General', fromSymbol: 'nano-units', toSymbol: 'micro-units' },
  { id: 'nanometers', label: 'Nanometers to micrometers', category: 'Length', fromSymbol: 'nm', toSymbol: 'µm', slug: 'nanometers-to-micrometers' },
  { id: 'nanoseconds', label: 'Nanoseconds to microseconds', category: 'Time', fromSymbol: 'ns', toSymbol: 'µs', slug: 'nanoseconds-to-microseconds' },
  { id: 'nanograms', label: 'Nanograms to micrograms', category: 'Mass', fromSymbol: 'ng', toSymbol: 'µg', slug: 'nanograms-to-micrograms' },
  { id: 'nanosieverts', label: 'Nanosieverts to microsieverts', category: 'Radiation', fromSymbol: 'nSv', toSymbol: 'µSv', slug: 'nanosieverts-to-microsieverts' },
  { id: 'nanoliters', label: 'Nanoliters to microliters', category: 'Volume', fromSymbol: 'nL', toSymbol: 'µL', slug: 'nanoliter-to-microliter' },
  { id: 'nanowatts', label: 'Nanowatts to microwatts', category: 'Power', fromSymbol: 'nW', toSymbol: 'µW', slug: 'nanowatts-to-microwatts' },
  { id: 'nanoamps', label: 'Nanoamps to microamps', category: 'Electric Current', fromSymbol: 'nA', toSymbol: 'µA', slug: 'nanoamps-to-microamps' },
  { id: 'nanofarads', label: 'Nanofarads to microfarads', category: 'Capacitance', fromSymbol: 'nF', toSymbol: 'µF', slug: 'nanofarads-to-microfarads' },
  { id: 'nanomoles', label: 'Nanomoles to micromoles', category: 'Amount of Substance', fromSymbol: 'nmol', toSymbol: 'µmol', slug: 'nanomoles-to-micromoles' },
];

const HUB_FAQS = [
  {
    q: 'How do you convert nano to micro?',
    a: 'To convert any nano-unit to the corresponding micro-unit, divide the nano value by 1,000. Formula: Micro = Nano ÷ 1,000. For example, 5,000 nanometers ÷ 1,000 = 5 micrometers (5 µm).',
  },
  {
    q: 'How many nano are in 1 micro?',
    a: 'There are exactly 1,000 nano units in 1 micro unit. Because the metric prefix nano represents 10⁻⁹ (one-billionth) and micro represents 10⁻⁶ (one-millionth), micro is 1,000 times larger than nano.',
  },
  {
    q: 'Is nano smaller or larger than micro?',
    a: 'Nano is smaller than micro. Specifically, nano (10⁻⁹) is three orders of magnitude (1,000 times) smaller than micro (10⁻⁶).',
  },
  {
    q: 'Why are nano and micro 1,000 units apart?',
    a: 'In the International System of Units (SI), submultiple prefixes are arranged in steps of 1,000 (three powers of ten). Micro is 10⁻⁶ (0.000001) and nano is 10⁻⁹ (0.000000001). The ratio 10⁻⁶ / 10⁻⁹ equals 1,000.',
  },
  {
    q: 'Are nano and micro standalone units of measurement?',
    a: 'No. Nano and micro are metric prefixes that modify base SI units. They indicate scale factor rather than physical dimension. The physical quantity (such as length, time, mass, or radiation dose) remains identical regardless of the prefix applied.',
  },
  {
    q: 'What are the symbols for nano and micro?',
    a: 'The symbol for nano is lowercase "n". The symbol for micro is the Greek letter mu "µ" (or lowercase "u" in standard ASCII/ASCII-only environments).',
  },
  {
    q: 'How do I convert micro back to nano?',
    a: 'To convert micro to nano, multiply the micro value by 1,000. Formula: Nano = Micro × 1,000. For example, 2.5 µm × 1,000 = 2,500 nm.',
  },
  {
    q: 'Where are nano-to-micro conversions used in industry?',
    a: 'Nano and micro conversions are vital in semiconductor fabrication (chip nodes nm vs microchip features µm), pharmacology & drug formulation (ng vs µg dosing), photonics & laser optics (visible light nm vs infrared optics µm), and computer architecture (ns memory latency vs µs system tasks).',
  },
];

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ruler: Ruler,
  scale: Scale,
  'flask-conical': FlaskConical,
  zap: Zap,
  timer: Timer,
  activity: Activity,
};

/** Formats numbers clearly without excessive trailing zeros or broken scientific notation */
function formatNumber(val: number): string {
  if (isNaN(val) || !isFinite(val)) return '';
  if (Math.abs(val) >= 1e9 || (Math.abs(val) > 0 && Math.abs(val) < 1e-6)) {
    return val.toExponential(4).replace(/\.0+e/, 'e');
  }
  return val.toLocaleString('en-US', { maximumFractionDigits: 9 });
}

function UniversalCalculator() {
  const nanoInputId = useId();
  const unitSelectId = useId();

  const [nanoInput, setNanoInput] = useState<string>('5000');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('generic');
  const [copied, setCopied] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const selectedUnit = UNIT_CATEGORIES.find((u) => u.id === selectedCategoryId) || UNIT_CATEGORIES[0];

  // Evaluate input
  const trimmed = nanoInput.trim();
  let numericVal: number | null = null;
  let microVal: number | null = null;

  if (trimmed !== '') {
    const parsed = Number(trimmed);
    if (!isNaN(parsed) && isFinite(parsed)) {
      numericVal = parsed;
      microVal = parsed / 1000;
    }
  }

  const handleConvert = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (trimmed === '') {
      setValidationError('Please enter a nano value to convert.');
      return;
    }
    const parsed = Number(trimmed);
    if (isNaN(parsed) || !isFinite(parsed)) {
      setValidationError('Invalid input. Please enter a valid number (e.g. 5000, 750, -50, or 2.5e6).');
      return;
    }
    setValidationError(null);
  };

  const handleReset = () => {
    setNanoInput('');
    setSelectedCategoryId('generic');
    setValidationError(null);
    setCopied(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setNanoInput(val);
    if (validationError) {
      setValidationError(null);
    }
  };

  const handlePreset = (val: number | string) => {
    setNanoInput(val.toString());
    setValidationError(null);
  };

  const handleCopy = () => {
    if (microVal === null || numericVal === null) return;
    const formattedNano = formatNumber(numericVal);
    const formattedMicro = formatNumber(microVal);
    const textToCopy = `${formattedNano} ${selectedUnit.fromSymbol} = ${formattedMicro} ${selectedUnit.toSymbol}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="calculator-section" className="mx-auto max-w-3xl rounded-2xl border border-primary/40 bg-card p-6 shadow-xl sm:p-8">
      {/* Calculator Header */}
      <div className="mb-6 border-b border-border/60 pb-4">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Universal Nano-to-Micro Calculator
        </h2>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          Convert any compatible nano-to-micro value using the universal ÷1,000 formula.
        </p>
      </div>

      <form onSubmit={handleConvert} className="space-y-6">
        {/* Controls Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Unit Category Selector */}
          <div>
            <label htmlFor={unitSelectId} className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Unit Category
            </label>
            <div className="relative">
              <select
                id={unitSelectId}
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(e.target.value)}
                className="w-full appearance-none rounded-xl border border-border bg-secondary/80 py-3 pl-3.5 pr-9 text-xs font-semibold text-foreground transition-colors focus:border-primary focus:outline-none sm:text-sm"
              >
                {UNIT_CATEGORIES.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>

          {/* Nano Value Numeric Input */}
          <div>
            <label htmlFor={nanoInputId} className="mb-2 block text-xs font-bold uppercase tracking-wider text-primary">
              Nano Value ({selectedUnit.fromSymbol})
            </label>
            <div className="relative">
              <input
                id={nanoInputId}
                type="text"
                inputMode="decimal"
                value={nanoInput}
                onChange={handleInputChange}
                placeholder="e.g. 5000, 750, 2.5e6"
                className={`numeric w-full rounded-xl border bg-card px-3.5 py-2.5 text-base font-bold text-foreground transition-colors focus:outline-none ${
                  validationError ? 'border-destructive focus:border-destructive' : 'border-border focus:border-primary'
                }`}
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">
                {selectedUnit.fromSymbol}
              </span>
            </div>
          </div>
        </div>

        {/* Validation Error Message */}
        {validationError && (
          <div className="flex items-center gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-xs font-semibold text-destructive">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Convert & Reset Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calculator className="h-4 w-4" /> Convert
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/60 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-border hover:bg-secondary hover:text-foreground"
          >
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        </div>

        {/* Preset Value Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="mr-1 text-xs font-semibold text-muted-foreground">Quick Presets:</span>
          {[1, 10, 100, 750, 1000, 5000, 10000, '2.5e6'].map((val) => (
            <button
              key={val.toString()}
              type="button"
              onClick={() => handlePreset(val)}
              className="numeric rounded-lg border border-border/80 bg-secondary/40 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              {val} {selectedUnit.fromSymbol}
            </button>
          ))}
        </div>

        {/* Result Area with aria-live="polite" */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="min-h-[140px] rounded-xl border border-primary/30 bg-primary/10 p-5 transition-all"
        >
          {numericVal !== null && microVal !== null ? (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary/20 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Conversion Result</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-card px-3 py-1 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied!' : 'Copy Result'}
                </button>
              </div>

              {/* Main Result Display */}
              <div className="mt-3">
                <div className="numeric text-2xl font-black text-foreground sm:text-3xl">
                  {formatNumber(numericVal)} <span className="text-base font-semibold text-muted-foreground">{selectedUnit.fromSymbol}</span> ={' '}
                  <span className="text-primary">{formatNumber(microVal)}</span>{' '}
                  <span className="text-base font-bold text-primary">{selectedUnit.toSymbol}</span>
                </div>
              </div>

              {/* Formula Explanation */}
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-muted-foreground sm:text-sm">
                <span>Formula explanation:</span>
                <span className="numeric font-mono font-bold text-foreground">
                  {formatNumber(numericVal)} ÷ 1,000 = {formatNumber(microVal)}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex h-full min-h-[100px] flex-col items-center justify-center text-center text-muted-foreground">
              <Calculator className="mb-2 h-6 w-6 opacity-40" />
              <p className="text-xs sm:text-sm font-medium">Enter a nano value above to see the instant micro conversion.</p>
            </div>
          )}
        </div>

        {selectedUnit.slug && (
          <div className="text-right">
            <Link
              to={`/${selectedUnit.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
            >
              Open dedicated {selectedUnit.label} page <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default function NanoToMicroHubPage() {
  useSEO({
    title: 'Nano to Micro Conversion: Formula, Guide & Calculators',
    description:
      'Convert nano units to micro units using the universal ÷1,000 formula. Explore calculators for nanometers, nanoseconds, nanograms, nanosieverts and more.',
    canonical: 'https://www.nanotomicro.com/nano-to-micro-conversion/',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: HUB_FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'The Nano-to-Micro Conversion Hub: Bridging the 10⁻⁹ to 10⁻⁶ Scale',
        url: 'https://www.nanotomicro.com/nano-to-micro-conversion/',
        description:
          'Universal hub for converting metric prefixes nano (10⁻⁹) to micro (10⁻⁶) across length, mass, time, volume, concentration, capacitance and dose.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Nano to Micro Conversion Hub',
            item: 'https://www.nanotomicro.com/nano-to-micro-conversion/',
          },
        ],
      },
    ],
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden border-b border-border/60 bg-grid">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-5xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
          
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center justify-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Link to="/" className="transition-colors hover:text-primary">Home</Link>
            <span>/</span>
            <span className="font-medium text-foreground">Nano-to-Micro Conversion Hub</span>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            {/* H1 Heading */}
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              The Nano-to-Micro Conversion Hub: Bridging the 10<sup>−9</sup> to 10<sup>−6</sup> Scale
            </h1>

            {/* Supporting Introduction */}
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nano and micro are metric prefixes used to describe extremely small quantities. Nano represents one-billionth,
              while micro represents one-millionth. Because the two prefixes are three powers of ten apart, converting from
              nano to micro always requires dividing the value by 1,000.
            </p>

            {/* Formula Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold text-primary sm:text-sm">
                <Atom className="h-4 w-4" /> Nano → Micro: Divide by 1,000
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground sm:text-sm">
                <ArrowLeftRight className="h-4 w-4 text-primary" /> Micro → Nano: Multiply by 1,000
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('calculator-section')}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Calculator className="h-4 w-4" /> Use the Calculator
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('explore-converters')}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <BookOpen className="h-4 w-4" /> Explore Conversion Tools
              </button>
            </div>
          </div>

          {/* ── H2: Universal Nano-to-Micro Calculator ── */}
          <div className="mt-12">
            <UniversalCalculator />
          </div>
        </div>
      </section>

      {/* ── H2: NANO-TO-MICRO CONVERSION FORMULA ── */}
      <section className="border-b border-border/60 bg-card/30 py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nano-to-Micro Conversion Formula</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Understanding the simple mathematical foundation connecting nano (10⁻⁹) and micro (10⁻⁶).
            </p>
          </div>

          {/* Key Relationship Badges */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-center">
              <span className="block text-xs font-bold uppercase tracking-wider text-primary">Fundamental Equality</span>
              <span className="numeric mt-1 block text-lg font-black text-primary sm:text-xl">
                1 micro-unit = 1,000 nano-units
              </span>
            </div>
            <div className="rounded-xl border border-border bg-secondary/60 p-4 text-center">
              <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Unit Conversion Factor</span>
              <span className="numeric mt-1 block text-lg font-bold text-foreground sm:text-xl">
                1 nano-unit = 0.001 micro-units
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Core Formula Breakdown */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-foreground">The Universal Math Rule</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To convert any nano-unit into the corresponding micro-unit, <strong>divide the nano value by 1,000</strong>. To perform the reverse conversion from micro to nano, <strong>multiply the micro value by 1,000</strong>.
              </p>

              {/* Formulas Display */}
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-primary/40 bg-primary/10 p-4 text-center">
                  <span className="block text-xs font-bold uppercase tracking-wider text-primary">Forward Formula (Nano → Micro)</span>
                  <span className="numeric mt-1 block text-xl font-extrabold text-primary">
                    Micro value = Nano value ÷ 1,000
                  </span>
                </div>
                <div className="rounded-xl border border-border bg-secondary/60 p-4 text-center">
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Reverse Formula (Micro → Nano)</span>
                  <span className="numeric mt-1 block text-lg font-bold text-foreground">
                    Nano value = Micro value × 1,000
                  </span>
                </div>
              </div>

              {/* Brief Exponent Explanation */}
              <div className="mt-6 rounded-xl border border-border bg-secondary/30 p-4">
                <span className="block text-xs font-bold uppercase tracking-wider text-primary">Exponent Math Breakdown</span>
                <p className="numeric mt-2 font-mono text-sm font-bold text-foreground">
                  10⁻⁹ ÷ 10⁻⁶ = 10⁻³ = 0.001
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Dividing 10⁻⁹ by 10⁻⁶ yields 10⁻³, which equals exactly 0.001 (or 1 / 1,000).
                </p>
              </div>
            </div>

            {/* Why This Works & Worked Example */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div>
                <h3 className="text-lg font-bold text-foreground">Why This Formula Works</h3>
                <ol className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">1</span>
                    <span><strong>Nano means 10⁻⁹</strong> (one-billionth of a base unit).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">2</span>
                    <span><strong>Micro means 10⁻⁶</strong> (one-millionth of a base unit).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">3</span>
                    <span><strong>The difference between the exponents is three</strong> (|-9 - (-6)| = 3).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">4</span>
                    <span>A difference of three powers of ten equals a factor of <strong>10³, or 1,000</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">5</span>
                    <span>Therefore, <strong>one micro-unit contains 1,000 corresponding nano-units</strong>.</span>
                  </li>
                </ol>

                <div className="mt-5 rounded-xl border border-border/80 bg-secondary/50 p-4">
                  <span className="text-xs font-bold uppercase text-primary">Example Calculation</span>
                  <p className="mt-1 text-xs font-semibold text-foreground">
                    5,000 nano-units ÷ 1,000 = <strong>5 micro-units</strong>
                  </p>
                </div>
              </div>

              {/* Decimal Point Shortcut Tip */}
              <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs leading-relaxed text-amber-200">
                <span className="font-bold">💡 Quick Rule:</span> Move the decimal point <strong>3 places to the left</strong> to convert nano to micro (5,000 → 5). To convert micro to nano, move the decimal point <strong>3 places to the right</strong> (5 → 5,000).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: UNDERSTANDING THE METRIC PREFIX SCALE ── */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Understanding the Metric Prefix Scale</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Clarifying how SI prefixes modify scale while preserving the underlying physical quantity.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="leading-relaxed text-muted-foreground">
              It is important to clarify that <strong>nano and micro are metric prefixes, not standalone measurement units</strong>.
              A prefix is attached to a base unit of measurement to indicate a power of ten multiplication factor.
              The underlying physical quantity—whether it is <em>length</em> (meters), <em>mass</em> (grams), <em>time</em> (seconds),
              <em>electric charge</em> (coulombs), or <em>radiation dose</em> (sieverts)—remains completely identical regardless of the prefix used.
            </p>

            {/* Responsive Comparison Table */}
            <div className="mt-8 overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-secondary/70 text-foreground">
                    <th className="px-4 py-3 font-bold">Prefix</th>
                    <th className="px-4 py-3 font-bold">Symbol</th>
                    <th className="px-4 py-3 font-bold">Power of Ten</th>
                    <th className="px-4 py-3 font-bold">Decimal Value</th>
                    <th className="px-4 py-3 font-bold">Relationship</th>
                  </tr>
                </thead>
                <tbody className="numeric divide-y divide-border/60">
                  <tr className="bg-card">
                    <td className="px-4 py-3 font-semibold text-foreground">Pico</td>
                    <td className="px-4 py-3 font-bold text-foreground">p</td>
                    <td className="px-4 py-3 font-mono">10⁻¹²</td>
                    <td className="px-4 py-3 font-mono text-muted-foreground">0.000000000001</td>
                    <td className="px-4 py-3 text-muted-foreground">1,000 times smaller than nano</td>
                  </tr>
                  <tr className="bg-primary/20 text-primary">
                    <td className="px-4 py-3 font-bold">Nano</td>
                    <td className="px-4 py-3 font-extrabold">n</td>
                    <td className="px-4 py-3 font-mono font-bold">10⁻⁹</td>
                    <td className="px-4 py-3 font-mono font-bold">0.000000001</td>
                    <td className="px-4 py-3 font-bold">1,000 times smaller than micro</td>
                  </tr>
                  <tr className="bg-primary/15 text-primary">
                    <td className="px-4 py-3 font-bold">Micro</td>
                    <td className="px-4 py-3 font-extrabold">µ</td>
                    <td className="px-4 py-3 font-mono font-bold">10⁻⁶</td>
                    <td className="px-4 py-3 font-mono font-bold">0.000001</td>
                    <td className="px-4 py-3 font-bold">1,000 times larger than nano</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-4 py-3 font-semibold text-foreground">Milli</td>
                    <td className="px-4 py-3 font-bold text-foreground">m</td>
                    <td className="px-4 py-3 font-mono">10⁻³</td>
                    <td className="px-4 py-3 font-mono text-muted-foreground">0.001</td>
                    <td className="px-4 py-3 text-muted-foreground">1,000 times larger than micro</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Visual Prefix Sequence directly beneath the table */}
            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-4 text-center">
              <span className="block text-xs font-bold uppercase tracking-wider text-primary">Visual Prefix Sequence</span>
              <div className="numeric mt-2 flex flex-wrap items-center justify-center gap-2 text-sm font-extrabold text-foreground sm:text-base">
                <span className="rounded-lg bg-card px-3 py-1.5 border border-border">Pico 10⁻¹²</span>
                <span className="text-primary font-bold">→</span>
                <span className="rounded-lg bg-primary/30 px-3 py-1.5 border border-primary/50 text-primary font-black">Nano 10⁻⁹</span>
                <span className="text-primary font-bold">→</span>
                <span className="rounded-lg bg-primary/30 px-3 py-1.5 border border-primary/50 text-primary font-black">Micro 10⁻⁶</span>
                <span className="text-primary font-bold">→</span>
                <span className="rounded-lg bg-card px-3 py-1.5 border border-border">Milli 10⁻³</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm font-semibold text-muted-foreground">
                “Each step in this sequence represents a change of three powers of ten, or a factor of 1,000.”
              </p>
            </div>

            {/* Direction Movement Explanations & Worked Example */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-secondary/40 p-4 text-xs sm:text-sm">
                <span className="font-bold text-foreground uppercase tracking-wider text-xs block mb-2">Direction Movement Rules</span>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span><strong>Moving from nano to micro:</strong> divide by 1,000.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span><strong>Moving from micro to nano:</strong> multiply by 1,000.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span><strong>Moving the decimal from nano to micro:</strong> shift it three places to the left.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-secondary/40 p-4 text-xs sm:text-sm">
                <span className="font-bold text-primary uppercase tracking-wider text-xs block mb-2">Shift Example</span>
                <div className="numeric rounded-lg border border-border/80 bg-card p-3 font-mono text-sm font-bold text-foreground">
                  12,500 nano-units → 12.5 micro-units
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Shifting the decimal point 3 places left in 12,500.0 yields 12.5 (12,500 ÷ 1,000 = 12.5).
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Link
                to="/si-prefix-converter"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline sm:text-sm"
              >
                View all 24 SI prefixes in the full SI Prefix Converter <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: NANO VS MICRO: WHAT IS THE DIFFERENCE? ── */}
      <section className="border-y border-border/60 bg-card/30 py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nano vs Micro: What Is the Difference?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              A comprehensive side-by-side comparison of the nano (10⁻⁹) and micro (10⁻⁶) metric scale factors.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-secondary/80 text-foreground border-b border-border">
                  <th className="px-5 py-4 font-bold">Feature</th>
                  <th className="px-5 py-4 font-bold text-primary">Nano</th>
                  <th className="px-5 py-4 font-bold text-primary">Micro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr className="bg-card">
                  <td className="px-5 py-3.5 font-bold text-foreground">Symbol</td>
                  <td className="px-5 py-3.5 font-bold text-primary font-mono text-base">n</td>
                  <td className="px-5 py-3.5 font-bold text-primary font-mono text-base">µ</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3.5 font-bold text-foreground">Scientific notation</td>
                  <td className="px-5 py-3.5 font-mono font-bold">10⁻⁹</td>
                  <td className="px-5 py-3.5 font-mono font-bold">10⁻⁶</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3.5 font-bold text-foreground">Fraction of base unit</td>
                  <td className="px-5 py-3.5 text-muted-foreground">One-billionth</td>
                  <td className="px-5 py-3.5 text-muted-foreground">One-millionth</td>
                </tr>
                <tr className="bg-secondary/20">
                  <td className="px-5 py-3.5 font-bold text-foreground">Relative size</td>
                  <td className="px-5 py-3.5 font-semibold text-muted-foreground">Smaller</td>
                  <td className="px-5 py-3.5 font-semibold text-primary">1,000 times larger than nano</td>
                </tr>
                <tr className="bg-card">
                  <td className="px-5 py-3.5 font-bold text-foreground">Common examples</td>
                  <td className="px-5 py-3.5 text-muted-foreground">Nanometers, nanoseconds, nanograms</td>
                  <td className="px-5 py-3.5 text-muted-foreground">Micrometers, microseconds, micrograms</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Symbol & SI Notation Clarifications */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-bold text-foreground">The Greek Symbol µ</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Clarifying symbol usage: The Greek letter <strong>µ</strong> (mu) is the official, scientifically correct SI symbol for micro.
                Where users cannot easily type <strong>µ</strong> on standard keyboards, they may sometimes use <strong>u</strong> informally (e.g. <code>um</code> or <code>ug</code>), but this website uses the scientifically correct symbol <strong>µ</strong> whenever possible.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 text-amber-200">
              <h3 className="text-base font-bold text-amber-100 flex items-center gap-2">
                <span>⚠️</span> Do Not Confuse Symbols
              </h3>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-100 font-mono">Lowercase m:</span> Represents <strong>milli</strong> (10⁻³ = 0.001).
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-100 font-mono">Uppercase M:</span> Represents <strong>mega</strong> (10⁶ = 1,000,000).
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-100 font-mono">Greek letter µ:</span> Represents <strong>micro</strong> (10⁻⁶ = 0.000001).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: EXPLORE SPECIFIC NANO-TO-MICRO CONVERSIONS ── */}
      <section id="explore-converters" className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Explore Specific Nano-to-Micro Conversions</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Access individual conversion calculators with formulas, worked examples, and reference tables for each physical dimension.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Required Card 1: Spatial Dimensions */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">Spatial Dimensions</span>
                  <Ruler className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Nanometers to Micrometers</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Convert nanoscale lengths from nanometers, nm, into micrometers, µm, using the universal divide-by-1,000 formula.
                </p>
                <div className="numeric mt-3 text-xs font-mono font-semibold text-muted-foreground">
                  Symbols: <span className="text-foreground">nm → µm</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to="/nanometers-to-micrometers/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Convert nanometers to micrometers <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Required Card 2: Temporal Dimensions */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">Temporal Dimensions</span>
                  <Timer className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Nanoseconds to Microseconds</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Convert extremely short time intervals from nanoseconds, ns, into microseconds, µs.
                </p>
                <div className="numeric mt-3 text-xs font-mono font-semibold text-muted-foreground">
                  Symbols: <span className="text-foreground">ns → µs</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to="/nanoseconds-to-microseconds/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Convert nanoseconds to microseconds <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Required Card 3: Medical and Radiation Dosimetry */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">Medical & Radiation Dosimetry</span>
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Nanosieverts to Microsieverts</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Convert radiation dose-equivalent measurements from nanosieverts, nSv, into microsieverts, µSv.
                </p>
                <div className="numeric mt-3 text-xs font-mono font-semibold text-muted-foreground">
                  Symbols: <span className="text-foreground">nSv → µSv</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to="/nanosieverts-to-microsieverts/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Convert nanosieverts to microsieverts <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Required Card 4: Gravimetric Measurement */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">Gravimetric Measurement</span>
                  <Scale className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Nanograms to Micrograms</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Convert very small mass measurements from nanograms, ng, into micrograms, µg.
                </p>
                <div className="numeric mt-3 text-xs font-mono font-semibold text-muted-foreground">
                  Symbols: <span className="text-foreground">ng → µg</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to="/nanograms-to-micrograms/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Convert nanograms to micrograms <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Additional Card 5: Fluidics & Volume */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">Fluidics & Volume</span>
                  <FlaskConical className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Nanoliters to Microliters</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Convert liquid volumes from nanoliters, nL, into microliters, µL.
                </p>
                <div className="numeric mt-3 text-xs font-mono font-semibold text-muted-foreground">
                  Symbols: <span className="text-foreground">nL → µL</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to="/nanoliters-to-microliters/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Convert nanoliters to microliters <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Additional Card 6: Chemical Concentration */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">Chemical Concentration</span>
                  <Atom className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Nanomolar to Micromolar</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Convert biochemical solution concentrations from nanomolar, nM, into micromolar, µM.
                </p>
                <div className="numeric mt-3 text-xs font-mono font-semibold text-muted-foreground">
                  Symbols: <span className="text-foreground">nM → µM</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to="/nanomolar-to-micromolar/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Convert nanomolar to micromolar <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Additional Card 7: Electrical Capacitance */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">Electrical Capacitance</span>
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Nanofarads to Microfarads</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Convert circuit capacitance values from nanofarads, nF, into microfarads, µF.
                </p>
                <div className="numeric mt-3 text-xs font-mono font-semibold text-muted-foreground">
                  Symbols: <span className="text-foreground">nF → µF</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to="/nanofarads-to-microfarads/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Convert nanofarads to microfarads <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Additional Card 8: Electric Current */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">Electric Current</span>
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Nanoamps to Microamps</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Convert tiny electrical currents from nanoamps, nA, into microamps, µA.
                </p>
                <div className="numeric mt-3 text-xs font-mono font-semibold text-muted-foreground">
                  Symbols: <span className="text-foreground">nA → µA</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to="/nanoamps-to-microamps/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Convert nanoamps to microamps <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Additional Card 9: Electric Charge */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">Electric Charge</span>
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Nanocoulombs to Microcoulombs</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Convert electrostatic charge values from nanocoulombs, nC, into microcoulombs, µC.
                </p>
                <div className="numeric mt-3 text-xs font-mono font-semibold text-muted-foreground">
                  Symbols: <span className="text-foreground">nC → µC</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to="/nanocoulombs-to-microcoulombs/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Convert nanocoulombs to microcoulombs <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: NANO-TO-MICRO CONVERSION EXAMPLES ── */}
      <section className="border-y border-border/60 bg-card/30 py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nano-to-Micro Conversion Examples</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Real-world calculation examples demonstrating step-by-step conversion across different fields.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example 1 */}
            <div className="rounded-xl border border-border bg-card p-5">
              <span className="text-xs font-bold text-primary uppercase">Semiconductors (Length)</span>
              <h3 className="mt-1 text-base font-bold text-foreground">14 nm Gate to µm</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Convert a 14 nanometer transistor gate length into micrometers:
              </p>
              <div className="numeric mt-3 rounded-lg border border-border bg-secondary/50 p-2.5 text-xs font-mono font-bold text-foreground">
                14 nm ÷ 1,000 = <span className="text-primary">0.014 µm</span>
              </div>
            </div>

            {/* Example 2 */}
            <div className="rounded-xl border border-border bg-card p-5">
              <span className="text-xs font-bold text-primary uppercase">Computing (Time)</span>
              <h3 className="mt-1 text-base font-bold text-foreground">60 ns RAM Latency to µs</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Convert a 60 nanosecond memory fetch time into microseconds:
              </p>
              <div className="numeric mt-3 rounded-lg border border-border bg-secondary/50 p-2.5 text-xs font-mono font-bold text-foreground">
                60 ns ÷ 1,000 = <span className="text-primary">0.06 µs</span>
              </div>
            </div>

            {/* Example 3 */}
            <div className="rounded-xl border border-border bg-card p-5">
              <span className="text-xs font-bold text-primary uppercase">Microfluidics (Volume)</span>
              <h3 className="mt-1 text-base font-bold text-foreground">2,500 nL Reagent to µL</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Convert 2,500 nanoliters of lab liquid into microliters:
              </p>
              <div className="numeric mt-3 rounded-lg border border-border bg-secondary/50 p-2.5 text-xs font-mono font-bold text-foreground">
                2,500 nL ÷ 1,000 = <span className="text-primary">2.5 µL</span>
              </div>
            </div>

            {/* Example 4 */}
            <div className="rounded-xl border border-border bg-card p-5">
              <span className="text-xs font-bold text-primary uppercase">Pharmacology (Mass)</span>
              <h3 className="mt-1 text-base font-bold text-foreground">500 ng Drug Mass to µg</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Convert a 500 nanogram dosage into micrograms:
              </p>
              <div className="numeric mt-3 rounded-lg border border-border bg-secondary/50 p-2.5 text-xs font-mono font-bold text-foreground">
                500 ng ÷ 1,000 = <span className="text-primary">0.5 µg</span>
              </div>
            </div>

            {/* Example 5 */}
            <div className="rounded-xl border border-border bg-card p-5">
              <span className="text-xs font-bold text-primary uppercase">Electronics (Capacitance)</span>
              <h3 className="mt-1 text-base font-bold text-foreground">100 nF Capacitor to µF</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Convert a 100 nanofarad capacitor rating to microfarads:
              </p>
              <div className="numeric mt-3 rounded-lg border border-border bg-secondary/50 p-2.5 text-xs font-mono font-bold text-foreground">
                100 nF ÷ 1,000 = <span className="text-primary">0.1 µF</span>
              </div>
            </div>

            {/* Example 6 */}
            <div className="rounded-xl border border-border bg-card p-5">
              <span className="text-xs font-bold text-primary uppercase">Radiation Dose</span>
              <h3 className="mt-1 text-base font-bold text-foreground">8,500 nSv Exposure to µSv</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Convert 8,500 nanosieverts of environmental dose to microsieverts:
              </p>
              <div className="numeric mt-3 rounded-lg border border-border bg-secondary/50 p-2.5 text-xs font-mono font-bold text-foreground">
                8,500 nSv ÷ 1,000 = <span className="text-primary">8.5 µSv</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: COMMON APPLICATIONS OF NANO AND MICRO MEASUREMENTS ── */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Common Applications of Nano and Micro Measurements</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              How scientists, engineers, and healthcare professionals utilize nano-to-micro scale conversions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-primary">
                <Zap className="h-4 w-4" /> Semiconductor & Hardware Engineering
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Modern microchips feature transistor gates measured in nanometers (e.g., 3 nm process nodes), while chip dies and circuit interconnect tracks are measured in micrometers. Fast CPU cache access latency is measured in nanoseconds (ns), whereas DRAM cycle times span microseconds (µs).
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-primary">
                <FlaskConical className="h-4 w-4" /> Molecular Biology & Pharmacology
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Biochemists measure enzyme binding affinity in nanomolar (nM) concentrations, while cellular drug uptake is measured in micromolar (µM). Active pharmaceutical ingredients are weighed in nanograms (ng) or micrograms (µg) depending on dosage potency.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-primary">
                <Ruler className="h-4 w-4" /> Photonics, Optics & Laser Physics
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Visible light spectrum wavelengths are specified in nanometers (400–700 nm), while infrared laser optical fiber cores and lens coatings are specified in micrometers (0.8–10.6 µm).
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-primary">
                <Activity className="h-4 w-4" /> Electrical Circuit Design
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Capacitor component markings use nanofarads (nF) and microfarads (µF) interchanged depending on regional standard datasheets. Converting between nF and µF prevents costly PCB layout mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2: FREQUENTLY ASKED QUESTIONS ── */}
      <FaqSection faqs={HUB_FAQS} heading="Frequently Asked Questions" />
    </>
  );
}
