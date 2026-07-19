/** Format a number with up to 12 significant digits, trimming trailing zeros. */
export function formatResult(v: number): string {
  if (!Number.isFinite(v)) return '—';
  if (v === 0) return '0';
  const abs = Math.abs(v);
  if (abs >= 1e15 || abs < 1e-9) {
    return v.toExponential(6).replace(/(\.\d*?)0+e/, '$1e').replace(/\.e/, 'e');
  }
  let s = v.toPrecision(12);
  if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
  return s;
}

/** Format with a fixed number of decimal places, trimming trailing zeros. */
export function formatFixed(v: number, decimals: number): string {
  if (!Number.isFinite(v)) return '—';
  const s = v.toFixed(decimals);
  if (s.includes('.')) return s.replace(/0+$/, '').replace(/\.$/, '');
  return s;
}

/** Parse user input, accepting commas, spaces and scientific notation. Returns NaN on empty. */
export function parseInput(raw: string): number {
  const cleaned = raw.replace(/[,\s]/g, '');
  if (cleaned === '' || cleaned === '-' || cleaned === '.') return NaN;
  return Number(cleaned);
}

/** Add thousands separators for table display. */
export function groupThousands(s: string): string {
  const [int, ...rest] = s.split('.');
  const sign = int.startsWith('-') ? '-' : '';
  const digits = sign ? int.slice(1) : int;
  const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return sign + grouped + (rest.length ? '.' + rest.join('.') : '');
}
