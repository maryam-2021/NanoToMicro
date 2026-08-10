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
import { converterPath, canonicalConverterUrl } from '@/lib/routes';

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
  { id: 'nanoliters', label: 'Nanoliters to microliters', category: 'Volume', fromSymbol: 'nL', toSymbol: 'µL', slug: 'nanoliters-to-microliters' },
  { id: 'nanowatts', label: 'Nanowatts to microwatts', category: 'Power', fromSymbol: 'nW', toSymbol: 'µW', slug: 'nanowatts-to-microwatts' },
  { id: 'nanoamps', label: 'Nanoamps to microamps', category: 'Electric Current', fromSymbol: 'nA', toSymbol: 'µA', slug: 'nanoamps-to-microamps' },
  { id: 'nanofarads', label: 'Nanofarads to microfarads', category: 'Capacitance', fromSymbol: 'nF', toSymbol: 'µF', slug: 'nanofarads-to-microfarads' },
  { id: 'nanomoles', label: 'Nanomoles to micromoles', category: 'Amount of Substance', fromSymbol: 'nmol', toSymbol: 'µmol', slug: 'nanomoles-to-micromoles' },
];

const HUB_FAQS = [
  {
    q: 'What is the formula for converting nano to micro?',
    a: 'Divide the nano value by 1,000. Formula: Micro = Nano ÷ 1,000.',
  },
  {
    q: 'How many nano-units are in one micro-unit?',
    a: 'There are 1,000 corresponding nano-units in one micro-unit.',
  },
  {
    q: 'Is nano smaller than micro?',
    a: 'Yes. A nano-unit is 1,000 times smaller than the corresponding micro-unit.',
  },
  {
    q: 'How do I convert micro back to nano?',
    a: 'Multiply the micro value by 1,000. Formula: Nano = Micro × 1,000.',
  },
  {
    q: 'How many micrometers are in one nanometer?',
    a: 'One nanometer equals 0.001 micrometers. Equation: 1 nm = 0.001 µm.',
  },
  {
    q: 'Is the nano-to-micro formula the same for every unit?',
    a: 'The scale factor is the same when both units measure the same physical quantity. For example, nanometers can convert to micrometers, and nanoseconds can convert to microseconds.',
  },
  {
    q: 'Why do I divide by 1,000?',
    a: 'Nano represents 10⁻⁹, while micro represents 10⁻⁶. The difference is three powers of ten, which equals a factor of 1,000.',
  },
  {
    q: 'Can I convert nano to micro by moving the decimal?',
    a: 'Yes. Move the decimal point three places to the left. Example: 8,500 nano-units = 8.5 micro-units.',
  },
  {
    q: 'What is the symbol for micro?',
    a: 'The official SI symbol for micro is the Greek letter µ.',
  },
  {
    q: 'Are µ and u the same?',
    a: 'The letter u is sometimes used as a keyboard-friendly substitute, but µ is the official SI prefix symbol.',
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
    if (validationError) setValidationError(null);
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
      <div className="mb-6 border-b border-border/60 pb-4">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">Universal Nano-to-Micro Calculator</h2>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Convert any compatible nano-to-micro value using the universal ÷1,000 formula.</p>
      </div>

      <form onSubmit={handleConvert} className="space-y-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={unitSelectId} className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Unit Category</label>
            <div className="relative">
              <select
                id={unitSelectId}
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(e.target.value)}
                className="w-full appearance-none rounded-xl border border-border bg-secondary/80 py-3 pl-3.5 pr-9 text-xs font-semibold text-foreground transition-colors focus:border-primary focus:outline-none sm:text-sm"
              >
                {UNIT_CATEGORIES.map((u) => <option key={u.id} value={u.id}>{u.label}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>

          <div>
            <label htmlFor={nanoInputId} className="mb-2 block text-xs font-bold uppercase tracking-wider text-primary">Nano Value ({selectedUnit.fromSymbol})</label>
            <div className="relative">
              <input
                id={nanoInputId}
                type="text"
                inputMode="decimal"
                value={nanoInput}
                onChange={handleInputChange}
                placeholder="e.g. 5000, 750, 2.5e6"
                className={`numeric w-full rounded-xl border bg-card px-3.5 py-2.5 text-base font-bold text-foreground transition-colors focus:outline-none ${validationError ? 'border-destructive focus:border-destructive' : 'border-border focus:border-primary'}`}
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">{selectedUnit.fromSymbol}</span>
            </div>
          </div>
        </div>

        {validationError && (
          <div className="flex items-center gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-xs font-semibold text-destructive">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]">
            <Calculator className="h-4 w-4" /> Convert
          </button>
          <button type="button" onClick={handleReset} className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/60 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-border hover:bg-secondary hover:text-foreground">
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="mr-1 text-xs font-semibold text-muted-foreground">Quick Presets:</span>
          {[1, 10, 100, 750, 1000, 5000, 10000, '2.5e6'].map((val) => (
            <button key={val.toString()} type="button" onClick={() => handlePreset(val)} className="numeric rounded-lg border border-border/80 bg-secondary/40 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary">
              {val} {selectedUnit.fromSymbol}
            </button>
          ))}
        </div>

        <div aria-live="polite" aria-atomic="true" className="min-h-[140px] rounded-xl border border-primary/30 bg-primary/10 p-5 transition-all">
          {numericVal !== null && microVal !== null ? (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary/20 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Conversion Result</span>
                <button type="button" onClick={handleCopy} className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-card px-3 py-1 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied!' : 'Copy Result'}
                </button>
              </div>
              <div className="mt-3">
                <div className="numeric text-2xl font-black text-foreground sm:text-3xl">
                  {formatNumber(numericVal)} <span className="text-base font-semibold text-muted-foreground">{selectedUnit.fromSymbol}</span> ={' '}
                  <span className="text-primary">{formatNumber(microVal)}</span>{' '}
                  <span className="text-base font-bold text-primary">{selectedUnit.toSymbol}</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-muted-foreground sm:text-sm">
                <span>Formula explanation:</span>
                <span className="numeric font-mono font-bold text-foreground">{formatNumber(numericVal)} ÷ 1,000 = {formatNumber(microVal)}</span>
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
            <Link to={converterPath(selectedUnit.slug)} className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
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
    description: 'Convert nano units to micro units using the universal ÷1,000 formula. Explore calculators for nanometers, nanoseconds, nanograms, nanosieverts and more.',
    canonical: 'https://www.nanotomicro.com/nano-to-micro-conversion/',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Nano to Micro Conversion: Formula, Guide & Calculators',
        description: 'Convert nano units to micro units using the universal ÷1,000 formula. Explore calculators for nanometers, nanoseconds, nanograms, nanosieverts and more.',
        url: 'https://www.nanotomicro.com/nano-to-micro-conversion/',
        isPartOf: { '@type': 'WebSite', name: 'NanoToMicro', url: 'https://www.nanotomicro.com/' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
            { '@type': 'ListItem', position: 2, name: 'Conversion Guides', item: 'https://www.nanotomicro.com/guides' },
            { '@type': 'ListItem', position: 3, name: 'Nano to Micro Conversion', item: 'https://www.nanotomicro.com/nano-to-micro-conversion/' },
          ],
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nanotomicro.com/' },
          { '@type': 'ListItem', position: 2, name: 'Conversion Guides', item: 'https://www.nanotomicro.com/guides' },
          { '@type': 'ListItem', position: 3, name: 'Nano to Micro Conversion', item: 'https://www.nanotomicro.com/nano-to-micro-conversion/' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: HUB_FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Universal Nano to Micro Calculator',
        description: 'Interactive conversion tool for converting nano-units (10⁻⁹) to micro-units (10⁻⁶) across length, mass, time, volume, and radiation.',
        url: 'https://www.nanotomicro.com/nano-to-micro-conversion/',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Explore Specific Nano-to-Micro Conversions',
        description: 'Defined topical cluster of individual nano-to-micro conversion calculators.',
        numberOfItems: 9,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Nanometers to Micrometers Converter', url: canonicalConverterUrl('nanometers-to-micrometers') },
          { '@type': 'ListItem', position: 2, name: 'Nanoseconds to Microseconds Converter', url: canonicalConverterUrl('nanoseconds-to-microseconds') },
          { '@type': 'ListItem', position: 3, name: 'Nanosieverts to Microsieverts Converter', url: canonicalConverterUrl('nanosieverts-to-microsieverts') },
          { '@type': 'ListItem', position: 4, name: 'Nanograms to Micrograms Converter', url: canonicalConverterUrl('nanograms-to-micrograms') },
          { '@type': 'ListItem', position: 5, name: 'Nanoliters to Microliters Converter', url: canonicalConverterUrl('nanoliters-to-microliters') },
          { '@type': 'ListItem', position: 6, name: 'Nanomolar to Micromolar Converter', url: canonicalConverterUrl('nanomolar-to-micromolar') },
          { '@type': 'ListItem', position: 7, name: 'Nanofarads to Microfarads Converter', url: canonicalConverterUrl('nanofarads-to-microfarads') },
          { '@type': 'ListItem', position: 8, name: 'Nanoamps to Microamps Converter', url: canonicalConverterUrl('nanoamps-to-microamps') },
          { '@type': 'ListItem', position: 9, name: 'Nanocoulombs to Microcoulombs Converter', url: canonicalConverterUrl('nanocoulombs-to-microcoulombs') },
        ],
      },
    ],
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-grid">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-5xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
              <li><Link to="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="text-muted-foreground/60">&gt;</li>
              <li><Link to="/guides" className="transition-colors hover:text-primary">Conversion Guides</Link></li>
              <li aria-hidden="true" className="text-muted-foreground/60">&gt;</li>
              <li><span aria-current="page" className="font-semibold text-foreground">Nano to Micro Conversion</span></li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">The Nano-to-Micro Conversion Hub: Bridging the 10<sup>−9</sup> to 10<sup>−6</sup> Scale</h1>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>Nano and micro are adjacent metric-prefix scales separated by three powers of ten. Nano represents 10<sup>−9</sup> of a base unit, while micro represents 10<sup>−6</sup>. This means one micro-unit is equal to 1,000 corresponding nano-units.</p>
              <p>
                To convert from nano to micro, divide the nano value by 1,000. The same scale relationship applies to compatible units of length, time, mass, electrical measurement, radiation dose and other scientific quantities. Try our dedicated{' '}
                <Link to={converterPath('nanometers-to-micrometers')} className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80">nanometers to micrometers calculator</Link>,{' '}
                <Link to={converterPath('nanoseconds-to-microseconds')} className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80">convert nanoseconds into microseconds</Link>, or explore our complete{' '}
                <Link to="/si-prefix-converter" className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80">metric prefix scale guide</Link>.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold text-primary sm:text-sm"><Atom className="h-4 w-4" /> Nano → Micro: Divide by 1,000</div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground sm:text-sm"><ArrowLeftRight className="h-4 w-4 text-primary" /> Micro → Nano: Multiply by 1,000</div>
            </div>

            <div className="mt-8 rounded-2xl border border-primary/30 bg-card/90 p-5 shadow-sm text-left backdrop-blur sm:p-6">
              <h3 className="flex items-center gap-2 border-b border-border/60 pb-2.5 text-xs font-bold uppercase tracking-wider text-primary sm:text-sm"><BookOpen className="h-4 w-4 text-primary" /> Nano-to-Micro Summary</h3>
              <div className="numeric mt-3.5 grid gap-2.5 text-xs sm:text-sm font-medium text-foreground sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-secondary/40 px-3 py-2"><span className="font-semibold text-muted-foreground">Nano prefix:</span><span className="font-mono font-bold text-primary">10⁻⁹</span></div>
                <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-secondary/40 px-3 py-2"><span className="font-semibold text-muted-foreground">Micro prefix:</span><span className="font-mono font-bold text-primary">10⁻⁶</span></div>
                <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-secondary/40 px-3 py-2"><span className="font-semibold text-muted-foreground">One micro-unit:</span><span className="font-mono font-bold text-foreground">1,000 nano-units</span></div>
                <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-secondary/40 px-3 py-2"><span className="font-semibold text-muted-foreground">Nano to micro:</span><span className="font-mono font-bold text-primary">divide by 1,000</span></div>
                <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-secondary/40 px-3 py-2"><span className="font-semibold text-muted-foreground">Micro to nano:</span><span className="font-mono font-bold text-foreground">multiply by 1,000</span></div>
                <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-secondary/40 px-3 py-2"><span className="font-semibold text-muted-foreground">Decimal movement:</span><span className="font-mono font-bold text-foreground">three places left</span></div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button type="button" onClick={() => scrollToSection('calculator-section')} className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"><Calculator className="h-4 w-4" /> Use the Calculator</button>
              <button type="button" onClick={() => scrollToSection('explore-converters')} className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"><BookOpen className="h-4 w-4" /> Explore Conversion Tools</button>
            </div>
          </div>

          <div className="mt-12"><UniversalCalculator /></div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-card/30 py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nano-to-Micro Conversion Formula</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Understanding the simple mathematical foundation connecting nano (10⁻⁹) and micro (10⁻⁶).</p>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-center"><span className="block text-xs font-bold uppercase tracking-wider text-primary">Fundamental Equality</span><span className="numeric mt-1 block text-lg font-black text-primary sm:text-xl">1 micro-unit = 1,000 nano-units</span></div>
            <div className="rounded-xl border border-border bg-secondary/60 p-4 text-center"><span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Unit Conversion Factor</span><span className="numeric mt-1 block text-lg font-bold text-foreground sm:text-xl">1 nano-unit = 0.001 micro-units</span></div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-foreground">The Universal Math Rule</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">To convert any nano-unit into the corresponding micro-unit, <strong>divide the nano value by 1,000</strong>. To perform the reverse conversion from micro to nano, <strong>multiply the micro value by 1,000</strong>.</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-primary/40 bg-primary/10 p-4 text-center"><span className="block text-xs font-bold uppercase tracking-wider text-primary">Forward Formula (Nano → Micro)</span><span className="numeric mt-1 block text-xl font-extrabold text-primary">Micro value = Nano value ÷ 1,000</span></div>
                <div className="rounded-xl border border-border bg-secondary/60 p-4 text-center"><span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Reverse Formula (Micro → Nano)</span><span className="numeric mt-1 block text-lg font-bold text-foreground">Nano value = Micro value × 1,000</span></div>
              </div>
              <div className="mt-6 rounded-xl border border-border bg-secondary/30 p-4">
                <span className="block text-xs font-bold uppercase tracking-wider text-primary">Exponent Math Breakdown</span>
                <p className="numeric mt-2 font-mono text-sm font-bold text-foreground">10⁻⁹ ÷ 10⁻⁶ = 10⁻³ = 0.001</p>
                <p className="mt-1 text-xs text-muted-foreground">Dividing 10⁻⁹ by 10⁻⁶ yields 10⁻³, which equals exactly 0.001 (or 1 / 1,000).</p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div>
                <h3 className="text-lg font-bold text-foreground">Why This Formula Works</h3>
                <ol className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">1</span><span><strong>Nano means 10⁻⁹</strong> (one-billionth of a base unit).</span></li>
                  <li className="flex items-start gap-2"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">2</span><span><strong>Micro means 10⁻⁶</strong> (one-millionth of a base unit).</span></li>
                  <li className="flex items-start gap-2"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">3</span><span><strong>The difference between the exponents is three</strong> (|-9 - (-6)| = 3).</span></li>
                  <li className="flex items-start gap-2"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">4</span><span>A difference of three powers of ten equals a factor of <strong>10³, or 1,000</strong>.</span></li>
                  <li className="flex items-start gap-2"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">5</span><span>Therefore, <strong>one micro-unit contains 1,000 corresponding nano-units</strong>.</span></li>
                </ol>
                <div className="mt-5 rounded-xl border border-border/80 bg-secondary/50 p-4"><span className="text-xs font-bold uppercase text-primary">Example Calculation</span><p className="mt-1 text-xs font-semibold text-foreground">5,000 nano-units ÷ 1,000 = <strong>5 micro-units</strong></p></div>
              </div>
              <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs leading-relaxed text-amber-200"><span className="font-bold">💡 Quick Rule:</span> Move the decimal point <strong>3 places to the left</strong> to convert nano to micro (5,000 → 5). To convert micro to nano, move the decimal point <strong>3 places to the right</strong> (5 → 5,000).</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center"><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Understanding the Metric Prefix Scale</h2><p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Clarifying how SI prefixes modify scale while preserving the underlying physical quantity.</p></div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="leading-relaxed text-muted-foreground">It is important to clarify that <strong>nano and micro are metric prefixes, not standalone measurement units</strong>. A prefix is attached to a base unit of measurement to indicate a power of ten multiplication factor. The underlying physical quantity—whether it is <em>length</em> (meters), <em>mass</em> (grams), <em>time</em> (seconds), <em>electric charge</em> (coulombs), or <em>radiation dose</em> (sieverts)—remains completely identical regardless of the prefix used.</p>
            <div className="mt-8 overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead><tr className="bg-secondary/70 text-foreground"><th className="px-4 py-3 font-bold">Prefix</th><th className="px-4 py-3 font-bold">Symbol</th><th className="px-4 py-3 font-bold">Power of Ten</th><th className="px-4 py-3 font-bold">Decimal Value</th><th className="px-4 py-3 font-bold">Relationship</th></tr></thead>
                <tbody className="numeric divide-y divide-border/60">
                  <tr className="bg-card"><td className="px-4 py-3 font-semibold text-foreground">Pico</td><td className="px-4 py-3 font-bold text-foreground">p</td><td className="px-4 py-3 font-mono">10⁻¹²</td><td className="px-4 py-3 font-mono text-muted-foreground">0.000000000001</td><td className="px-4 py-3 text-muted-foreground">1,000 times smaller than nano</td></tr>
                  <tr className="bg-primary/20 text-primary"><td className="px-4 py-3 font-bold">Nano</td><td className="px-4 py-3 font-extrabold">n</td><td className="px-4 py-3 font-mono font-bold">10⁻⁹</td><td className="px-4 py-3 font-mono font-bold">0.000000001</td><td className="px-4 py-3 font-bold">1,000 times smaller than micro</td></tr>
                  <tr className="bg-primary/15 text-primary"><td className="px-4 py-3 font-bold">Micro</td><td className="px-4 py-3 font-extrabold">µ</td><td className="px-4 py-3 font-mono font-bold">10⁻⁶</td><td className="px-4 py-3 font-mono font-bold">0.000001</td><td className="px-4 py-3 font-bold">1,000 times larger than nano</td></tr>
                  <tr className="bg-card"><td className="px-4 py-3 font-semibold text-foreground">Milli</td><td className="px-4 py-3 font-bold text-foreground">m</td><td className="px-4 py-3 font-mono">10⁻³</td><td className="px-4 py-3 font-mono text-muted-foreground">0.001</td><td className="px-4 py-3 text-muted-foreground">1,000 times larger than micro</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-4 text-center"><span className="block text-xs font-bold uppercase tracking-wider text-primary">Visual Prefix Sequence</span><div className="numeric mt-2 flex flex-wrap items-center justify-center gap-2 text-sm font-extrabold text-foreground sm:text-base"><span className="rounded-lg bg-card px-3 py-1.5 border border-border">Pico 10⁻¹²</span><span className="text-primary font-bold">→</span><span className="rounded-lg bg-primary/30 px-3 py-1.5 border border-primary/50 text-primary font-black">Nano 10⁻⁹</span><span className="text-primary font-bold">→</span><span className="rounded-lg bg-primary/30 px-3 py-1.5 border border-primary/50 text-primary font-black">Micro 10⁻⁶</span><span className="text-primary font-bold">→</span><span className="rounded-lg bg-card px-3 py-1.5 border border-border">Milli 10⁻³</span></div><p className="mt-3 text-xs sm:text-sm font-semibold text-muted-foreground">“Each step in this sequence represents a change of three powers of ten, or a factor of 1,000.”</p></div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-secondary/40 p-4 text-xs sm:text-sm"><span className="font-bold text-foreground uppercase tracking-wider text-xs block mb-2">Direction Movement Rules</span><ul className="space-y-2 text-muted-foreground"><li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /><span><strong>Moving from nano to micro:</strong> divide by 1,000.</span></li><li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /><span><strong>Moving from micro to nano:</strong> multiply by 1,000.</span></li><li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /><span><strong>Moving the decimal from nano to micro:</strong> shift it three places to the left.</span></li></ul></div>
              <div className="rounded-xl border border-border bg-secondary/40 p-4 text-xs sm:text-sm"><span className="font-bold text-primary uppercase tracking-wider text-xs block mb-2">Shift Example</span><div className="numeric rounded-lg border border-border/80 bg-card p-3 font-mono text-sm font-bold text-foreground">12,500 nano-units → 12.5 micro-units</div><p className="mt-2 text-xs text-muted-foreground">Shifting the decimal point 3 places left in 12,500.0 yields 12.5 (12,500 ÷ 1,000 = 12.5).</p></div>
            </div>
            <div className="mt-6 flex justify-center"><Link to="/si-prefix-converter" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline sm:text-sm">View all 24 SI prefixes in the full SI Prefix Converter <ArrowRight className="h-4 w-4" /></Link></div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30 py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center"><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nano vs Micro: What Is the Difference?</h2><p className="mx-auto mt-3 max-w-2xl text-muted-foreground">A comprehensive side-by-side comparison of the nano (10⁻⁹) and micro (10⁻⁶) metric scale factors.</p></div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead><tr className="bg-secondary/80 text-foreground border-b border-border"><th className="px-5 py-4 font-bold">Feature</th><th className="px-5 py-4 font-bold text-primary">Nano</th><th className="px-5 py-4 font-bold text-primary">Micro</th></tr></thead>
              <tbody className="divide-y divide-border/60">
                <tr className="bg-card"><td className="px-5 py-3.5 font-bold text-foreground">Symbol</td><td className="px-5 py-3.5 font-bold text-primary font-mono text-base">n</td><td className="px-5 py-3.5 font-bold text-primary font-mono text-base">µ</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3.5 font-bold text-foreground">Scientific notation</td><td className="px-5 py-3.5 font-mono font-bold">10⁻⁹</td><td className="px-5 py-3.5 font-mono font-bold">10⁻⁶</td></tr>
                <tr className="bg-card"><td className="px-5 py-3.5 font-bold text-foreground">Fraction of base unit</td><td className="px-5 py-3.5 text-muted-foreground">One-billionth</td><td className="px-5 py-3.5 text-muted-foreground">One-millionth</td></tr>
                <tr className="bg-secondary/20"><td className="px-5 py-3.5 font-bold text-foreground">Relative size</td><td className="px-5 py-3.5 font-semibold text-muted-foreground">Smaller</td><td className="px-5 py-3.5 font-semibold text-primary">1,000 times larger than nano</td></tr>
                <tr className="bg-card"><td className="px-5 py-3.5 font-bold text-foreground">Common examples</td><td className="px-5 py-3.5 text-muted-foreground">Nanometers, nanoseconds, nanograms</td><td className="px-5 py-3.5 text-muted-foreground">Micrometers, microseconds, micrograms</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6"><h3 className="text-base font-bold text-foreground">The Greek Symbol µ</h3><p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">Clarifying symbol usage: The Greek letter <strong>µ</strong> (mu) is the official, scientifically correct SI symbol for micro. Where users cannot easily type <strong>µ</strong> on standard keyboards, they may sometimes use <strong>u</strong> informally (e.g. <code>um</code> or <code>ug</code>), but this website uses the scientifically correct symbol <strong>µ</strong> whenever possible.</p></div>
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 text-amber-200"><h3 className="text-base font-bold text-amber-100 flex items-center gap-2"><span>⚠️</span> Do Not Confuse Symbols</h3><ul className="mt-3 space-y-2 text-xs sm:text-sm"><li className="flex items-start gap-2"><span className="font-bold text-amber-100 font-mono">Lowercase m:</span> Represents <strong>milli</strong> (10⁻³ = 0.001).</li><li className="flex items-start gap-2"><span className="font-bold text-amber-100 font-mono">Uppercase M:</span> Represents <strong>mega</strong> (10⁶ = 1,000,000).</li><li className="flex items-start gap-2"><span className="font-bold text-amber-100 font-mono">Greek letter µ:</span> Represents <strong>micro</strong> (10⁻⁶ = 0.000001).</li></ul></div>
          </div>
        </div>
      </section>

      <section id="explore-converters" className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center"><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Explore Specific Nano-to-Micro Conversions</h2><p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Access individual conversion calculators with formulas, worked examples, and reference tables for each physical dimension.</p></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { category: 'Spatial Dimensions', title: 'Nanometers to Micrometers', description: 'Convert nanoscale lengths from nanometers, nm, into micrometers, µm, using the universal divide-by-1,000 formula.', symbols: 'nm → µm', slug: 'nanometers-to-micrometers', Icon: Ruler },
              { category: 'Temporal Dimensions', title: 'Nanoseconds to Microseconds', description: 'Convert extremely short time intervals from nanoseconds, ns, into microseconds, µs.', symbols: 'ns → µs', slug: 'nanoseconds-to-microseconds', Icon: Timer },
              { category: 'Medical & Radiation Dosimetry', title: 'Nanosieverts to Microsieverts', description: 'Convert radiation dose-equivalent measurements from nanosieverts, nSv, into microsieverts, µSv.', symbols: 'nSv → µSv', slug: 'nanosieverts-to-microsieverts', Icon: Activity },
              { category: 'Gravimetric Measurement', title: 'Nanograms to Micrograms', description: 'Convert very small mass measurements from nanograms, ng, into micrograms, µg.', symbols: 'ng → µg', slug: 'nanograms-to-micrograms', Icon: Scale },
              { category: 'Fluidics & Volume', title: 'Nanoliters to Microliters', description: 'Convert liquid volumes from nanoliters, nL, into microliters, µL.', symbols: 'nL → µL', slug: 'nanoliters-to-microliters', Icon: FlaskConical },
              { category: 'Chemical Concentration', title: 'Nanomolar to Micromolar', description: 'Convert biochemical solution concentrations from nanomolar, nM, into micromolar, µM.', symbols: 'nM → µM', slug: 'nanomolar-to-micromolar', Icon: Atom },
              { category: 'Electrical Capacitance', title: 'Nanofarads to Microfarads', description: 'Convert circuit capacitance values from nanofarads, nF, into microfarads, µF.', symbols: 'nF → µF', slug: 'nanofarads-to-microfarads', Icon: Zap },
              { category: 'Electric Current', title: 'Nanoamps to Microamps', description: 'Convert tiny electrical currents from nanoamps, nA, into microamps, µA.', symbols: 'nA → µA', slug: 'nanoamps-to-microamps', Icon: Zap },
              { category: 'Electric Charge', title: 'Nanocoulombs to Microcoulombs', description: 'Convert electrostatic charge values from nanocoulombs, nC, into microcoulombs, µC.', symbols: 'nC → µC', slug: 'nanocoulombs-to-microcoulombs', Icon: Zap },
            ].map(({ category, title, description, symbols, slug, Icon }) => (
              <div key={slug} className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div>
                  <div className="mb-3 flex items-center justify-between"><span className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary">{category}</span><Icon className="h-5 w-5 text-primary" /></div>
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p>
                  <div className="numeric mt-3 text-xs font-mono font-semibold text-muted-foreground">Symbols: <span className="text-foreground">{symbols}</span></div>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link to={converterPath(slug)} className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">Open {title.toLowerCase()} converter <ArrowRight className="h-3.5 w-3.5" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30 py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center"><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nano-to-Micro Conversion Examples</h2><p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Reference conversion table and step-by-step worked calculation examples.</p></div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead><tr className="bg-secondary/80 text-foreground border-b border-border"><th className="px-5 py-4 font-bold">Nano Value</th><th className="px-5 py-4 font-bold text-muted-foreground">Calculation</th><th className="px-5 py-4 font-bold text-primary">Micro Value</th></tr></thead>
              <tbody className="numeric divide-y divide-border/60">
                {[1, 10, 100, 500, 1000, 5000, 25000, 1000000].map((value, i) => <tr key={value} className={i % 2 ? 'bg-secondary/20' : 'bg-card'}><td className="px-5 py-3 font-semibold text-foreground">{value.toLocaleString()}</td><td className="px-5 py-3 font-mono text-muted-foreground">{value.toLocaleString()} ÷ 1,000</td><td className="px-5 py-3 font-bold text-primary">{formatNumber(value / 1000)}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6"><span className="text-xs font-bold uppercase tracking-wider text-primary">Example 1</span><h3 className="mt-1 text-base font-bold text-foreground">Convert 4,500 nanometers to micrometers</h3><div className="numeric mt-3 space-y-2 rounded-xl border border-border/80 bg-secondary/40 p-4 text-xs sm:text-sm"><div className="flex justify-between border-b border-border/60 pb-2"><span className="text-muted-foreground">Calculation:</span><span className="font-mono font-bold">4,500 ÷ 1,000 = 4.5</span></div><div className="flex justify-between pt-1 text-sm font-extrabold text-primary"><span>Therefore:</span><span>4,500 nm = 4.5 µm</span></div></div></div>
            <div className="rounded-2xl border border-border bg-card p-6"><span className="text-xs font-bold uppercase tracking-wider text-primary">Example 2</span><h3 className="mt-1 text-base font-bold text-foreground">Convert 250 nanoseconds to microseconds</h3><div className="numeric mt-3 space-y-2 rounded-xl border border-border/80 bg-secondary/40 p-4 text-xs sm:text-sm"><div className="flex justify-between border-b border-border/60 pb-2"><span className="text-muted-foreground">Calculation:</span><span className="font-mono font-bold">250 ÷ 1,000 = 0.25</span></div><div className="flex justify-between pt-1 text-sm font-extrabold text-primary"><span>Therefore:</span><span>250 ns = 0.25 µs</span></div></div></div>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2"><Layers className="h-5 w-5 text-primary" /> Physical Quantity Compatibility Rule</h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">The conversion formula is identical across all compatible quantities, but users must <strong>never convert between unrelated physical dimensions</strong>.</p>
            <div className="mt-4 grid gap-3 text-xs sm:text-sm md:grid-cols-3">
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3.5 text-green-200"><span className="font-bold text-green-100 block mb-1">✓ Length Compatibility</span><span>Nanometers can convert to micrometers because both measure <em>length</em>.</span></div>
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3.5 text-green-200"><span className="font-bold text-green-100 block mb-1">✓ Mass Compatibility</span><span>Nanograms can convert to micrograms because both measure <em>mass</em>.</span></div>
              <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-3.5 text-destructive-foreground"><span className="font-bold text-destructive-foreground block mb-1">✗ Dimension Mismatch</span><span>Nanometers cannot be converted directly to microseconds because length and time are different physical quantities.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center"><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Common Applications of Nano and Micro Measurements</h2><p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Overview of key scientific, medical, and engineering fields utilizing nano and micro scale units.</p></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6"><div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-primary"><Atom className="h-4 w-4" /> Nanotechnology</div><p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">Nanometers are commonly used to describe nanoparticles, semiconductor process features, molecular structures and optical wavelengths. Try our dedicated{' '}<Link to={converterPath('nanometers-to-micrometers')} className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80">nanometers-to-micrometers calculator</Link>.</p></div>
            <div className="rounded-2xl border border-border bg-card p-6"><div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-primary"><FlaskConical className="h-4 w-4" /> Biology and Medicine</div><p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">Micrometers are often used for biological cells and microorganisms, while nanometers may be used for proteins, viruses and molecular structures. Note that biological structures span variable size ranges rather than a single fixed dimension.</p></div>
            <div className="rounded-2xl border border-border bg-card p-6"><div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-primary"><Zap className="h-4 w-4" /> Electronics</div><p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">Nanoseconds and microseconds are used to describe transistor switching speeds, signal delays, processor clock timings and digital communication systems. Learn how to{' '}<Link to={converterPath('nanoseconds-to-microseconds')} className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80">convert nanoseconds into microseconds</Link>.</p></div>
            <div className="rounded-2xl border border-border bg-card p-6"><div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-primary"><Scale className="h-4 w-4" /> Pharmaceuticals & Lab Science</div><p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">Nanograms and micrograms are used for small masses, biochemical solution concentrations and active ingredient dosage-related measurements. Perform accurate{' '}<Link to={converterPath('nanograms-to-micrograms')} className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80">nanogram and microgram conversion</Link>.</p></div>
            <div className="rounded-2xl border border-border bg-card p-6 md:col-span-2 lg:col-span-2"><div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-primary"><Activity className="h-4 w-4" /> Radiation Measurement</div><p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">Nanosieverts and microsieverts describe small quantities of equivalent or effective radiation dose. Use our dedicated{' '}<Link to={converterPath('nanosieverts-to-microsieverts')} className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80">nanosievert-to-microsievert tool</Link>{' '}to convert dose values. These measurements reflect mathematical values only and do not provide medical diagnosis or exposure-safety conclusions.</p></div>
          </div>
          <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6 text-center text-amber-200"><p className="text-xs sm:text-sm font-bold leading-relaxed">“Medical doses and radiation measurements should always be interpreted by a qualified professional. This calculator performs mathematical unit conversions only.”</p></div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/20 py-12">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-lg font-bold text-foreground">Reverse Conversions & Related Tools</h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Convert micro units back to nano units or navigate our main SI prefix conversion guides:</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold">
              <Link to={converterPath('micrometers-to-nanometers')} className="rounded-lg border border-border bg-secondary/50 px-3 py-2 text-foreground transition-colors hover:border-primary/50 hover:text-primary">Convert Micrometers to Nanometers (µm → nm)</Link>
              <Link to={converterPath('microseconds-to-nanoseconds')} className="rounded-lg border border-border bg-secondary/50 px-3 py-2 text-foreground transition-colors hover:border-primary/50 hover:text-primary">Convert Microseconds to Nanoseconds (µs → ns)</Link>
              <Link to={converterPath('micrograms-to-nanograms')} className="rounded-lg border border-border bg-secondary/50 px-3 py-2 text-foreground transition-colors hover:border-primary/50 hover:text-primary">Convert Micrograms to Nanograms (µg → ng)</Link>
              <Link to="/si-prefix-converter" className="rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Main SI Prefix Conversion Directory</Link>
              <Link to="/guides" className="rounded-lg border border-border bg-secondary/50 px-3 py-2 text-foreground transition-colors hover:border-primary/50 hover:text-primary">All Metric Conversion Guides</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-gradient-to-b from-card/40 to-background py-16 text-center">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <div className="rounded-3xl border border-primary/30 bg-card p-8 shadow-xl sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Choose a Nano-to-Micro Converter</h2>
            <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground">Select the physical quantity you are working with to open a dedicated converter with the correct units, examples and reference table.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { slug: 'nanometers-to-micrometers', label: 'Nanometers to micrometers', Icon: Ruler },
                { slug: 'nanoseconds-to-microseconds', label: 'Nanoseconds to microseconds', Icon: Timer },
                { slug: 'nanograms-to-micrograms', label: 'Nanograms to micrograms', Icon: Scale },
                { slug: 'nanosieverts-to-microsieverts', label: 'Nanosieverts to microsieverts', Icon: Activity },
              ].map(({ slug, label, Icon }) => (
                <Link key={slug} to={converterPath(slug)} className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 p-4 text-xs font-bold text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary sm:text-sm">
                  <div className="flex items-center gap-3"><Icon className="h-5 w-5 text-primary" /><span>{label}</span></div>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={HUB_FAQS} heading="Frequently Asked Questions" />
    </>
  );
}
