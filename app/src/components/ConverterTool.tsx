import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeftRight, Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { formatFixed, formatResult, groupThousands, parseInput } from '@/lib/num';

interface Props {
  fromName: string;
  fromSymbol: string;
  toName: string;
  toSymbol: string;
  /** multiply "from" by factor to get "to" */
  factor: number;
  reversePath: string;
  reverseLabel: string;
  defaultValue?: string;
}

type Precision = 'auto' | '2' | '4' | '6' | '9';

export function ConverterTool({
  fromName,
  fromSymbol,
  toName,
  toSymbol,
  factor,
  reversePath,
  reverseLabel,
  defaultValue = '1',
}: Props) {
  const [raw, setRaw] = useState(defaultValue);
  const [swapped, setSwapped] = useState(false);
  const [precision, setPrecision] = useState<Precision>('auto');
  const [copied, setCopied] = useState(false);

  const activeFactor = swapped ? 1 / factor : factor;
  const aName = swapped ? toName : fromName;
  const aSymbol = swapped ? toSymbol : fromSymbol;
  const bName = swapped ? fromName : toName;
  const bSymbol = swapped ? fromSymbol : toSymbol;

  const result = useMemo(() => {
    const v = parseInput(raw);
    if (Number.isNaN(v)) return '';
    const out = v * activeFactor;
    return precision === 'auto' ? formatResult(out) : formatFixed(out, Number(precision));
  }, [raw, activeFactor, precision]);

  const copy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="card-glow rounded-2xl border border-border bg-card p-5 sm:p-7">
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        <div>
          <label htmlFor="conv-input" className="mb-2 block text-xs font-semibold tracking-wider text-muted-foreground">
            {aName} ({aSymbol})
          </label>
          <div className="relative">
            <Input
              id="conv-input"
              inputMode="decimal"
              value={raw}
              onChange={(e) => setRaw(e.target.value)}
              placeholder={`Enter ${aName.toLowerCase()} value`}
              className="numeric h-14 border-input bg-background/60 pr-14 text-xl font-semibold"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rounded-md bg-primary/15 px-2 py-1 text-sm font-bold text-primary">
              {aSymbol}
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setSwapped((s) => !s)}
          aria-label="Swap conversion direction"
          title="Swap direction"
          className="mx-auto h-11 w-11 rounded-full border-primary/40 text-primary hover:bg-primary/10"
        >
          <ArrowLeftRight className="h-5 w-5" />
        </Button>

        <div>
          <label htmlFor="conv-output" className="mb-2 block text-xs font-semibold tracking-wider text-muted-foreground">
            {bName} ({bSymbol})
          </label>
          <div className="relative">
            <output
              id="conv-output"
              className="numeric flex h-14 w-full items-center overflow-x-auto rounded-md border border-primary/30 bg-primary/5 px-4 pr-20 text-xl font-bold text-primary"
            >
              {result || '—'}
            </output>
            <span className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 rounded-md bg-primary/15 px-2 py-1 text-sm font-bold text-primary">
              {bSymbol}
            </span>
            <button
              onClick={copy}
              aria-label="Copy result"
              title="Copy result"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground hover:text-primary"
            >
              {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Precision</span>
          <Select value={precision} onValueChange={(v) => setPrecision(v as Precision)}>
            <SelectTrigger className="h-8 w-28 border-input bg-background/60">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">Auto</SelectItem>
              <SelectItem value="2">2 decimals</SelectItem>
              <SelectItem value="4">4 decimals</SelectItem>
              <SelectItem value="6">6 decimals</SelectItem>
              <SelectItem value="9">9 decimals</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-wrap gap-2">
          {['1', '10', '100', '1000'].map((v) => (
            <button
              key={v}
              onClick={() => setRaw(v)}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {v} {aSymbol}
            </button>
          ))}
        </div>
        <Link to={reversePath} className="ml-auto text-sm font-medium text-primary hover:underline">
          {reverseLabel} →
        </Link>
      </div>

      <p className="mt-4 rounded-lg bg-secondary/50 px-4 py-2.5 text-center text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">Formula:</span> 1 {aSymbol} = {groupThousands(formatResult(activeFactor))}{' '}
        {bSymbol} &nbsp;·&nbsp; {bSymbol} = {aSymbol} × {groupThousands(formatResult(activeFactor))}
      </p>
    </div>
  );
}
