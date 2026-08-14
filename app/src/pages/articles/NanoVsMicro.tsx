import { Link } from 'react-router';
import { ArticleLayout } from '@/components/ArticleLayout';
import { getArticle } from '@/data/articles';

const meta = getArticle('nano-vs-micro-difference')!;

export default function NanoVsMicro() {
  return (
    <ArticleLayout
      meta={meta}
      ctas={[
        { to: '/', label: 'Nano to Micro Converter' },
        { to: '/si-prefix-converter', label: 'SI Prefix Converter' },
        { to: '/nanometers-to-micrometers', label: 'nm to µm' },
      ]}
    >
      <p>
        <strong>Nano and micro are both SI prefixes that shrink a base unit — but by different amounts.</strong>{' '}
        Micro (symbol µ) means one millionth (10⁻⁶); nano (symbol n) means one billionth (10⁻⁹). That makes a
        nano unit exactly <strong>1,000 times smaller</strong> than the same micro unit, and it is true for every
        quantity: nanometers vs micrometers, nanograms vs micrograms, nanomolar vs micromolar, nanofarads vs
        microfarads.
      </p>

      <h2>The Short Answer</h2>
      <div className="article-callout">
        <p className="mb-1 text-center text-lg font-bold text-primary">1 micro = 1,000 nano</p>
        <p className="mb-0 text-center text-lg font-bold">1 nano = 0.001 micro</p>
      </div>
      <p>
        Because the relationship is an exact power of ten, converting never involves approximation. To go from
        nano to micro you <strong>divide by 1,000</strong> (move the decimal point three places left); to go from
        micro to nano you <strong>multiply by 1,000</strong> (three places right). Our{' '}
        <Link to="/">nano to micro converter</Link> does it instantly, but you can honestly do it in your head.
      </p>

      <h2>Nano vs Micro: Side-by-Side Comparison</h2>
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Micro (µ)</th>
              <th>Nano (n)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Meaning</strong></td><td>one millionth</td><td>one billionth</td></tr>
            <tr><td><strong>Power of ten</strong></td><td>10⁻⁶</td><td>10⁻⁹</td></tr>
            <tr><td><strong>Decimal</strong></td><td>0.000001</td><td>0.000000001</td></tr>
            <tr><td><strong>Length example</strong></td><td>1 µm — bacterium, hair ÷ 70</td><td>1 nm — 10 atoms in a row</td></tr>
            <tr><td><strong>Mass example</strong></td><td>1 µg — vitamin B12 dose</td><td>1 ng — DNA in a PCR reaction</td></tr>
            <tr><td><strong>Time example</strong></td><td>1 µs — SSD read latency</td><td>1 ns — one CPU cycle at 1 GHz</td></tr>
            <tr><td><strong>Concentration</strong></td><td>1 µM — cell-assay dose</td><td>1 nM — potent drug level</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Where Each One Gets Used</h2>
      <p>
        Each prefix dominates wherever it keeps everyday numbers between about 1 and 1,000. That is why
        different fields "speak" different prefixes, and why converting between them is such a common task:
      </p>
      <ul>
        <li>
          <strong>Semiconductors:</strong> transistor gates are measured in <em>nanometers</em> (a "3 nm process"),
          while the chip package and PCB features are in <em>micrometers and millimeters</em>. See{' '}
          <Link to="/nanometers-to-micrometers">nm to µm</Link>.
        </li>
        <li>
          <strong>Pharmacology:</strong> potent drugs act at <em>nanomolar</em> concentrations; screening assays
          run at <em>micromolar</em>. Comparing IC50 values means converting — see{' '}
          <Link to="/nanomolar-to-micromolar">nM to µM</Link>.
        </li>
        <li>
          <strong>Electronics:</strong> decoupling capacitors are 100 <em>nF</em> (0.1 <em>µF</em>); sleep
          currents are <em>nA</em> while operating currents are <em>µA–mA</em>. See{' '}
          <Link to="/nanofarads-to-microfarads">nF to µF</Link> and{' '}
          <Link to="/nanoamps-to-microamps">nA to µA</Link>.
        </li>
        <li>
          <strong>Computing:</strong> CPU cycles tick in <em>nanoseconds</em>; storage and network latencies are
          in <em>microseconds</em>. See <Link to="/nanoseconds-to-microseconds">ns to µs</Link>.
        </li>
        <li>
          <strong>Medicine & nutrition:</strong> vitamin D and B12 are dosed in <em>micrograms (mcg)</em>, while
          lab instruments detect <em>nanograms</em>. See{' '}
          <Link to="/nanograms-to-micrograms">ng to µg</Link>.
        </li>
      </ul>

      <h2>The Formula (Works for Every Unit)</h2>
      <p>Whatever the base unit, the conversion is identical:</p>
      <ol>
        <li>Take your value in the nano unit.</li>
        <li><strong>Divide by 1,000</strong> — or shift the decimal point three places left.</li>
        <li>The result is the same quantity in the micro unit.</li>
      </ol>
      <p>
        Example: 2,500 nm ÷ 1,000 = <strong>2.5 µm</strong>. Going the other way: 0.75 µg × 1,000 ={' '}
        <strong>750 ng</strong>. The same rule covers nM→µM, nF→µF, ns→µs, nL→µL, nA→µA and nC→µC — all of which
        have dedicated calculators on this site.
      </p>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>
          <strong>Confusing µ with m.</strong> "m" is milli (10⁻³), one <em>thousand</em> times bigger than micro.
          Writing "mg" when you mean "µg" is a 1,000,000× error.
        </li>
        <li>
          <strong>Reading µg as mg on prescriptions.</strong> This is why pharmacists write <em>mcg</em> instead of
          µg — a misread is a 1,000-fold dosing error.
        </li>
        <li>
          <strong>Using "u" and "µ" inconsistently.</strong> Where µ is hard to type, "u" is the accepted stand-in
          (uF, ug, uM). They are identical — just never mix them with "m".
        </li>
        <li>
          <strong>Assuming approximate factors.</strong> Every SI prefix step of 1,000 is exact by definition; the
          only uncertainty lives in your original measurement.
        </li>
      </ul>

      <h2>Where Nano and Micro Sit on the SI Ladder</h2>
      <p>
        Around the base unit, the small-scale ladder runs: milli (10⁻³) → micro (10⁻⁶) → nano (10⁻⁹) → pico
        (10⁻¹²) → femto (10⁻¹⁵). Each step divides by 1,000, so nano→micro is one step up and nano→milli is two
        steps (÷1,000,000). The full ladder — all 24 prefixes including the ones added in 2022 — is covered in{' '}
        <Link to="/guides/si-prefixes-explained">SI Prefixes Explained</Link>, and you can convert between any of
        them with the <Link to="/si-prefix-converter">SI Prefix Converter</Link>.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>Which is bigger, nano or micro?</h3>
      <p>
        Micro is bigger — exactly 1,000 times bigger. One micrometer equals 1,000 nanometers; one microgram
        equals 1,000 nanograms.
      </p>
      <h3>How many nano are in 1 micro?</h3>
      <p>
        Always 1,000, regardless of the quantity: 1 µm = 1,000 nm, 1 µs = 1,000 ns, 1 µM = 1,000 nM, and so on.
      </p>
      <h3>Is nano the smallest common prefix?</h3>
        <p>
        No — pico (10⁻¹²), femto (10⁻¹⁵), atto (10⁻¹⁸) and smaller exist below it. Pico and femto units appear in
        electronics, physics and cutting-edge assays; we cover them in converters like{' '}
        <Link to="/picofarads-to-nanofarads">pF to nF</Link> and{' '}
        <Link to="/femtomolar-to-picomolar">fM to pM</Link>.
      </p>
    </ArticleLayout>
  );
}
