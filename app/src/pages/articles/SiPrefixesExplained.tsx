import { Link } from 'react-router';
import { ArticleLayout } from '@/components/ArticleLayout';
import { getArticle } from '@/data/articles';
import { SI_PREFIXES } from '@/data/converters';

const meta = getArticle('si-prefixes-explained')!;

export default function SiPrefixesExplained() {
  return (
    <ArticleLayout
      meta={meta}
      ctas={[
        { to: '/si-prefix-converter', label: 'SI Prefix Converter' },
        { to: '/', label: 'Nano to Micro' },
        { to: '/picometers-to-nanometers', label: 'pm to nm' },
      ]}
    >
      <p>
        <strong>SI prefixes are the official short-hand for powers of ten.</strong> Instead of writing
        0.000000001 meters, you write 1 nanometer — the prefix "nano" carries the 10⁻⁹. There are 24 prefixes in
        the International System of Units, from quetta (10³⁰) down to quecto (10⁻³⁰), and four of them are
        brand-new: ronna, ronto, quetta and quecto were adopted in November 2022.
      </p>

      <h2>Why Prefixes Exist</h2>
      <p>
        Science spans absurd scales — the observable universe is ~8.8 × 10²⁶ m across, while a proton is ~10⁻¹⁵
        m. Writing raw powers of ten is error-prone, so the SI assigns each power a name and a symbol. Attach
        the prefix to any unit and you have a new, exactly-defined unit: kilo + gram = kilogram (1,000 g), nano +
        molar = nanomolar (10⁻⁹ mol/L).
      </p>
      <p>
        Every prefix is <strong>exact by definition</strong> — a kilogram is not approximately 1,000 grams, it is
        exactly 1,000 grams. That is what makes prefix conversions pure decimal shifts with zero rounding error.
      </p>

      <h2>The Complete SI Prefix Table (2026)</h2>
      <div className="tbl">
        <table className="numeric">
          <thead>
            <tr>
              <th>Prefix</th>
              <th>Symbol</th>
              <th>Factor</th>
              <th>Example use</th>
            </tr>
          </thead>
          <tbody>
            {SI_PREFIXES.map((p) => (
              <tr key={p.name}>
                <td><strong>{p.name === '(none)' ? 'unit (no prefix)' : p.name}</strong></td>
                <td>{p.symbol || '—'}</td>
                <td>10^{p.exponent}</td>
                <td>{EXAMPLES[p.name] ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>The Four Newest Prefixes (2022)</h2>
      <p>
        For the first time since 1991, the SI gained new prefixes in 2022, driven mostly by data science and
        particle physics:
      </p>
      <ul>
        <li><strong>ronna (R, 10²⁷)</strong> — Earth weighs about 6 ronnagrams; the observable universe's mass fits in ronnagrams.</li>
        <li><strong>quetta (Q, 10³⁰)</strong> — global data storage is approaching the quettabyte range within our lifetimes.</li>
        <li><strong>ronto (r, 10⁻²⁷)</strong> — an electron's mass is about 1 rontogram.</li>
        <li><strong>quecto (q, 10⁻³⁰)</strong> — the smallest official prefix; a single bit of mass-energy thinking territory.</li>
      </ul>

      <h2>The Ladder Everyone Should Know</h2>
      <p>
        In practice, most technical work happens within nine steps — giga down to femto. Each step of 1,000 has a
        name; each prefix converts to its neighbors by exactly × or ÷ 1,000:
      </p>
      <div className="article-callout">
        <p className="mb-0 text-center font-semibold">
          giga (G) → mega (M) → kilo (k) → unit → milli (m) → micro (µ) → nano (n) → pico (p) → femto (f)
        </p>
      </div>
      <p>
        This site's home territory is the micro↔nano border, with excursions into pico, femto and milli. Some
        neighbors worth bookmarking: <Link to="/nanograms-to-micrograms">ng to µg</Link>,{' '}
        <Link to="/micrograms-to-milligrams">µg to mg</Link>,{' '}
        <Link to="/picograms-to-nanograms">pg to ng</Link> and{' '}
        <Link to="/femtograms-to-picograms">fg to pg</Link>.
      </p>

      <h2>Symbols Are Case-Sensitive — Seriously</h2>
      <p>
        SI symbols are not suggestions; changing case changes meaning, sometimes by a factor of a billion:
      </p>
      <ul>
        <li><strong>k</strong> = kilo (1,000), but <strong>K</strong> = kelvin (temperature). Write "kWh", "kg", "km".</li>
        <li><strong>m</strong> = milli (0.001), but <strong>M</strong> = mega (1,000,000). "mW" vs "MW" is a 10⁹× difference — a phone charger vs a power plant.</li>
        <li><strong>µ</strong> = micro (10⁻⁶). On keyboards without µ, "u" is the accepted substitute (uF, ug). In medicine, "mc" is used (mcg) to protect against misread handwriting.</li>
        <li><strong>n</strong> = nano (10⁻⁹), <strong>p</strong> = pico (10⁻¹²), <strong>f</strong> = femto (10⁻¹⁵) — all lowercase.</li>
        <li>Powers of ten with positive exponents from mega upward use capitals: <strong>M, G, T, P, E, Z, Y, R, Q</strong>.</li>
      </ul>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Mixing "m" and "µ".</strong> 1 mF is 1,000,000 µF — on capacitors, "mF" almost always (wrongly) means µF; context matters.</li>
        <li><strong>Inventing abbreviations.</strong> "K" for thousand is fine informally ($50K) but the SI symbol is lowercase "k".</li>
        <li><strong>Forgetting prefixes don't stack.</strong> The SI forbids "mµg" (millimicrogram) — say nanogram. Old documents with "µµF" mean pF.</li>
        <li><strong>Confusing bytes and bits prefixes.</strong> Data "kilo" was historically 1,024; the IEC fixed this with kibi (Ki), mebi (Mi), gibi (Gi). SI kilo is always exactly 1,000.</li>
      </ul>

      <h2>Converting Between Any Two Prefixes</h2>
      <p>
        The universal rule: <strong>multiply by 10^(from exponent − to exponent)</strong>. Nano (10⁻⁹) to micro
        (10⁻⁶) means ×10⁻³ = ÷1,000. Micro to milli is another ÷1,000; pico to nano is ÷1,000 again. Rather than
        memorizing, use the <Link to="/si-prefix-converter">SI Prefix Converter</Link> — it covers all 24
        prefixes in both directions, instantly.
      </p>
    </ArticleLayout>
  );
}

const EXAMPLES: Record<string, string> = {
  quetta: 'future global data scales',
  ronna: 'mass of the Earth (~6 Rg)',
  yotta: 'mass of oceans (~1.4 Yg)',
  zetta: 'global annual data (~ZB)',
  exa: 'supercomputer flops (exaFLOPS)',
  peta: 'petaflop computing',
  tera: 'terabyte drives',
  giga: 'gigabytes, GHz processors',
  mega: 'megawatts, megapixels',
  kilo: 'kilograms, kilometers',
  hecto: 'hectopascals (air pressure)',
  deka: 'rarely used in practice',
  '(none)': 'meters, grams, seconds',
  deci: 'decibels, deciliters',
  centi: 'centimeters',
  milli: 'millimeters, milligrams',
  micro: 'micrometers, micrograms (µg/mcg)',
  nano: 'nanometers, nanomolar (nM)',
  pico: 'picofarads (pF), picomolar (pM)',
  femto: 'femtoseconds (fs), femtoliters (fL)',
  atto: 'attosecond physics',
  zepto: 'subatomic time scales',
  yocto: 'particle physics scales',
  ronto: 'electron mass (~1 rg)',
  quecto: 'smallest official prefix',
};
