import { Link } from 'react-router';
import { ArticleLayout } from '@/components/ArticleLayout';
import { getArticle } from '@/data/articles';

const meta = getArticle('capacitor-codes-explained')!;

export default function CapacitorCodes() {
  return (
    <ArticleLayout
      meta={meta}
      ctas={[
        { to: '/picofarads-to-nanofarads', label: 'pF to nF Converter' },
        { to: '/nanofarads-to-microfarads', label: 'nF to µF' },
        { to: '/microfarads-to-nanofarads', label: 'µF to nF' },
      ]}
    >
      <p>
        <strong>The three digits on a ceramic capacitor are its value in picofarads.</strong> The first two
        digits are the significant figures; the third digit is the number of zeros to append. A capacitor marked
        <code>104</code> is 10 followed by 4 zeros — 100,000 pF, better known as 100 nF or 0.1 µF. Once you know
        the system, any code decodes in seconds.
      </p>

      <h2>The 3-Digit Code System</h2>
      <div className="article-callout">
        <p className="mb-0 text-center font-semibold">
          code = <strong>AB</strong> followed by <strong>C</strong> zeros, in pF → value = AB × 10^C pF
        </p>
      </div>
      <p>
        The code always speaks <strong>picofarads</strong>, regardless of how the part will eventually be
        labeled or sold. That is why the pF↔nF↔µF conversions are daily tools in electronics:
      </p>
      <ul>
        <li><code>101</code> → 10 + 1 zero = 100 pF = 0.1 nF</li>
        <li><code>102</code> → 10 + 2 zeros = 1,000 pF = 1 nF</li>
        <li><code>103</code> → 10 + 3 zeros = 10,000 pF = 10 nF = 0.01 µF</li>
        <li><code>104</code> → 10 + 4 zeros = 100,000 pF = 100 nF = 0.1 µF</li>
        <li><code>105</code> → 10 + 5 zeros = 1,000,000 pF = 1,000 nF = 1 µF</li>
        <li><code>472</code> → 47 + 2 zeros = 4,700 pF = 4.7 nF</li>
      </ul>
      <p>
        For values under 10 pF, the letter <strong>R</strong> acts as the decimal point: <code>4R7</code> = 4.7
        pF, <code>2R2</code> = 2.2 pF.
      </p>

      <h2>Full Reference Table: Codes → pF → nF → µF</h2>
      <div className="tbl">
        <table className="numeric">
          <thead>
            <tr>
              <th>Code</th>
              <th>Picofarads (pF)</th>
              <th>Nanofarads (nF)</th>
              <th>Microfarads (µF)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>100</strong></td><td>10 pF</td><td>0.01 nF</td><td>0.00001 µF</td></tr>
            <tr><td><strong>220</strong></td><td>22 pF</td><td>0.022 nF</td><td>0.000022 µF</td></tr>
            <tr><td><strong>101</strong></td><td>100 pF</td><td>0.1 nF</td><td>0.0001 µF</td></tr>
            <tr><td><strong>221</strong></td><td>220 pF</td><td>0.22 nF</td><td>0.00022 µF</td></tr>
            <tr><td><strong>471</strong></td><td>470 pF</td><td>0.47 nF</td><td>0.00047 µF</td></tr>
            <tr><td><strong>102</strong></td><td>1,000 pF</td><td>1 nF</td><td>0.001 µF</td></tr>
            <tr><td><strong>222</strong></td><td>2,200 pF</td><td>2.2 nF</td><td>0.0022 µF</td></tr>
            <tr><td><strong>472</strong></td><td>4,700 pF</td><td>4.7 nF</td><td>0.0047 µF</td></tr>
            <tr><td><strong>103</strong></td><td>10,000 pF</td><td>10 nF</td><td>0.01 µF</td></tr>
            <tr><td><strong>223</strong></td><td>22,000 pF</td><td>22 nF</td><td>0.022 µF</td></tr>
            <tr><td><strong>473</strong></td><td>47,000 pF</td><td>47 nF</td><td>0.047 µF</td></tr>
            <tr><td><strong>104</strong></td><td>100,000 pF</td><td>100 nF</td><td>0.1 µF</td></tr>
            <tr><td><strong>224</strong></td><td>220,000 pF</td><td>220 nF</td><td>0.22 µF</td></tr>
            <tr><td><strong>474</strong></td><td>470,000 pF</td><td>470 nF</td><td>0.47 µF</td></tr>
            <tr><td><strong>105</strong></td><td>1,000,000 pF</td><td>1,000 nF</td><td>1 µF</td></tr>
            <tr><td><strong>225</strong></td><td>2,200,000 pF</td><td>2,200 nF</td><td>2.2 µF</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The 22 nF and 47 nF rows explain two famous values: guitar tone capacitors are sold as "0.022 µF" and
        "0.047 µF" — identical to 22 nF and 47 nF, codes 223 and 473. Convert any value with the{' '}
        <Link to="/nanofarads-to-microfarads">nF to µF</Link>,{' '}
        <Link to="/picofarads-to-nanofarads">pF to nF</Link> or{' '}
        <Link to="/microfarads-to-nanofarads">µF to nF</Link> converters.
      </p>

      <h2>Tolerance Letters</h2>
      <p>
        Many capacitors add a letter after the digits — that is the tolerance, not part of the value:
      </p>
      <div className="tbl">
        <table>
          <thead>
            <tr><th>Letter</th><th>Tolerance</th><th>Typical use</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>B</strong></td><td>± 0.1 pF</td><td>tiny RF values</td></tr>
            <tr><td><strong>C</strong></td><td>± 0.25 pF</td><td>RF matching</td></tr>
            <tr><td><strong>D</strong></td><td>± 0.5 pF</td><td>precision RF</td></tr>
            <tr><td><strong>F</strong></td><td>± 1%</td><td>precision film</td></tr>
            <tr><td><strong>G</strong></td><td>± 2%</td><td>film capacitors</td></tr>
            <tr><td><strong>J</strong></td><td>± 5%</td><td>film, C0G/NP0 ceramics</td></tr>
            <tr><td><strong>K</strong></td><td>± 10%</td><td>general ceramics (X7R)</td></tr>
            <tr><td><strong>M</strong></td><td>± 20%</td><td>electrolytics, Y5V</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        So <code>104K</code> = 100 nF ± 10%, and <code>472J</code> = 4.7 nF ± 5%. Timing and filter circuits
        should use J or better; decoupling tolerates K and M happily.
      </p>

      <h2>The µµF, mF and uF Traps</h2>
      <ul>
        <li><strong>µµF on vintage schematics</strong> means micromicrofarad — the old name for the picofarad. 1 µµF = 1 pF. A "500 µµF" mica capacitor is 500 pF = 0.5 nF.</li>
        <li><strong>mF on capacitor bodies</strong> almost never means millifarad. Especially on older American parts, "mF" was (incorrectly) used for microfarad. A real millifarad is 1,000 µF — supercapacitor territory. Read context: a 50 V "4 mF" can is 4,000 µF, not 4 F.</li>
        <li><strong>uF vs µF</strong> — identical; "u" is simply the keyboard-friendly µ. Same for "uf". No conversion needed.</li>
        <li><strong>Electrolytics print values directly</strong> (e.g. "470 µF 25 V") and mark the negative stripe — no code decoding required, but mind polarity.</li>
      </ul>

      <h2>Why Three Units Survive</h2>
      <p>
        Different industries standardized on different prefixes decades ago: RF engineering kept pF (stray
        capacitance is pF-scale), European distributors pushed nF for film and ceramic parts, and American
        schematics favored µF down to 0.001 µF. Modern bills of materials mix all three — a single design might
        specify 18 pF crystal loads, a 100 nF decoupler and a 10 µF bulk cap. Normalizing everything to one unit
        before ordering prevents the classic 1,000× purchasing mistakes.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>What does 104 mean on a capacitor?</h3>
      <p>
        100,000 pF — "10" followed by 4 zeros. That is 100 nF or 0.1 µF, the most common decoupling capacitor in
        electronics. A tolerance letter may follow: 104K = 100 nF ±10%.
      </p>
      <h3>Is 100 nF the same as 0.1 µF?</h3>
      <p>
        Exactly the same: 1 µF = 1,000 nF, so 0.1 µF = 100 nF. Schematics, datasheets and suppliers choose
        between the two notations arbitrarily — the physics is identical.
      </p>
      <h3>How do I measure a capacitor to verify the code?</h3>
      <p>
        Many multimeters include a capacitance range covering nF and µF. For pF values you need an LCR meter.
        Measure out of circuit, discharge first, and expect the reading within the marked tolerance (±10% for K,
        ±20% for M).
      </p>
    </ArticleLayout>
  );
}
