import React, { useState, useId } from 'react';
import { Link } from 'react-router';
import { Calculator, Copy, Check, RotateCcw, AlertCircle, ArrowLeftRight } from 'lucide-react';

export interface SpokeCalculatorProps {
  title: string;
  subtitle: string;
  sourceUnitName: string;
  sourceUnitPlural: string;
  sourceUnitSymbol: string;
  destUnitName: string;
  destUnitPlural: string;
  destUnitSymbol: string;
  exampleInput?: number;
  presets?: Array<{ label: string; value: number | string }>;
  reverseUrl?: string;
  categoryName: string;
}

function formatNumber(val: number): string {
  if (isNaN(val) || !isFinite(val)) return '';
  if (Math.abs(val) >= 1e9 || (Math.abs(val) > 0 && Math.abs(val) < 1e-6)) {
    return val.toExponential(4).replace(/\.0+e/, 'e');
  }
  return val.toLocaleString('en-US', { maximumFractionDigits: 9 });
}

export function SpokeCalculator({
  title,
  subtitle,
  sourceUnitName,
  sourceUnitPlural,
  sourceUnitSymbol,
  destUnitName,
  destUnitPlural,
  destUnitSymbol,
  exampleInput = 1000,
  presets = [
    { label: `1 ${sourceUnitSymbol}`, value: 1 },
    { label: `100 ${sourceUnitSymbol}`, value: 100 },
    { label: `1,000 ${sourceUnitSymbol}`, value: 1000 },
    { label: `4,500 ${sourceUnitSymbol}`, value: 4500 },
    { label: `10,000 ${sourceUnitSymbol}`, value: 10000 },
  ],
  reverseUrl,
  categoryName,
}: SpokeCalculatorProps) {
  const inputId = useId();
  const [inputVal, setInputVal] = useState<string>(exampleInput.toString());
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const trimmed = inputVal.trim();
  let numericVal: number | null = null;
  let resultVal: number | null = null;

  if (trimmed !== '') {
    const parsed = Number(trimmed);
    if (!isNaN(parsed) && isFinite(parsed)) {
      numericVal = parsed;
      resultVal = parsed / 1000;
    }
  }

  const handleConvert = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (trimmed === '') {
      setError(`Please enter a valid ${sourceUnitName.toLowerCase()} value.`);
      return;
    }
    const parsed = Number(trimmed);
    if (isNaN(parsed) || !isFinite(parsed)) {
      setError(`Invalid numeric input. Please enter a valid number (e.g. 5000, 250, or 1e6).`);
      return;
    }
    setError(null);
  };

  const handleReset = () => {
    setInputVal('');
    setError(null);
    setCopied(false);
  };

  const handleCopy = () => {
    if (numericVal === null || resultVal === null) return;
    const formattedInput = formatNumber(numericVal);
    const formattedResult = formatNumber(resultVal);
    const textToCopy = `${formattedInput} ${sourceUnitSymbol} = ${formattedResult} ${destUnitSymbol}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="calculator-section" className="mx-auto max-w-3xl rounded-2xl border border-primary/40 bg-card p-6 shadow-xl sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">{categoryName} Converter</span>
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">{title}</h2>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{subtitle}</p>
        </div>
        {reverseUrl && (
          <Link
            to={reverseUrl}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            <ArrowLeftRight className="h-3.5 w-3.5 text-primary" /> Reverse ({destUnitSymbol} → {sourceUnitSymbol})
          </Link>
        )}
      </div>

      <form onSubmit={handleConvert} className="space-y-6">
        <div>
          <label htmlFor={inputId} className="mb-2 block text-xs font-bold uppercase tracking-wider text-primary">
            Value in {sourceUnitPlural} ({sourceUnitSymbol})
          </label>
          <div className="relative">
            <input
              id={inputId}
              type="text"
              inputMode="decimal"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
                if (error) setError(null);
              }}
              placeholder={`e.g. ${exampleInput}`}
              className={`numeric w-full rounded-xl border bg-card px-3.5 py-3 text-base font-bold text-foreground transition-colors focus:outline-none ${
                error ? 'border-destructive focus:border-destructive' : 'border-border focus:border-primary'
              }`}
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-mono text-xs font-bold text-muted-foreground">
              {sourceUnitSymbol}
            </span>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-xs font-semibold text-destructive">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calculator className="h-4 w-4" /> Convert to {destUnitPlural}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/60 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-border hover:bg-secondary hover:text-foreground"
          >
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        </div>

        {presets && presets.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="mr-1 text-xs font-semibold text-muted-foreground">Presets:</span>
            {presets.map((p) => (
              <button
                key={p.value.toString()}
                type="button"
                onClick={() => {
                  setInputVal(p.value.toString());
                  setError(null);
                }}
                className="numeric rounded-lg border border-border/80 bg-secondary/40 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                {p.label}
              </button>
            ))}
          </div>
        )}

        <div
          aria-live="polite"
          aria-atomic="true"
          className="min-h-[140px] rounded-xl border border-primary/30 bg-primary/10 p-5 transition-all"
        >
          {numericVal !== null && resultVal !== null ? (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary/20 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Calculated Result</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-card px-3 py-1 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied!' : 'Copy Result'}
                </button>
              </div>

              <div className="mt-3">
                <div className="numeric text-2xl font-black text-foreground sm:text-3xl">
                  {formatNumber(numericVal)} <span className="text-base font-semibold text-muted-foreground">{sourceUnitSymbol}</span> ={' '}
                  <span className="text-primary">{formatNumber(resultVal)}</span>{' '}
                  <span className="text-base font-bold text-primary">{destUnitSymbol}</span>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground sm:text-sm">
                <span>Formula:</span>
                <span className="numeric font-mono font-bold text-foreground">
                  {formatNumber(numericVal)} {sourceUnitSymbol} ÷ 1,000 = {formatNumber(resultVal)} {destUnitSymbol}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex h-full min-h-[100px] flex-col items-center justify-center text-center text-muted-foreground">
              <Calculator className="mb-2 h-6 w-6 opacity-40" />
              <p className="text-xs sm:text-sm font-medium">Enter a value above to compute the exact {destUnitName.toLowerCase()} result.</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
