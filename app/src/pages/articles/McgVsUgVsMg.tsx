import { Link } from 'react-router';
import { ArticleLayout } from '@/components/ArticleLayout';
import { getArticle } from '@/data/articles';

const meta = getArticle('mcg-vs-ug-vs-mg')!;

export default function McgVsUgVsMg() {
  return (
    <ArticleLayout
      meta={meta}
      ctas={[
        { to: '/micrograms-to-milligrams', label: 'µg to mg Converter' },
        { to: '/milligrams-to-micrograms', label: 'mg to µg (mcg)' },
        { to: '/nanograms-to-micrograms', label: 'ng to µg' },
      ]}
    >
      <p>
        <strong>mcg and µg are the same unit — the microgram — while mg (milligram) is 1,000 times larger.</strong>{' '}
        1 mg = 1,000 mcg = 1,000 µg. The two spellings exist because medicine adopted "mcg" as a safer way to
        write µg by hand: a quickly-written "µg" can be misread as "mg", and that mistake is a{' '}
        <strong>1,000-fold dosing error</strong>.
      </p>

      <h2>The Short Answer</h2>
      <div className="article-callout">
        <p className="mb-1 text-center text-lg font-bold text-primary">1 mg = 1,000 mcg = 1,000 µg</p>
        <p className="mb-0 text-center text-lg font-bold">1 mcg = 1 µg = 0.001 mg</p>
      </div>
      <div className="tbl">
        <table>
          <thead>
            <tr><th>Unit</th><th>Means</th><th>Fraction of a gram</th><th>Same as</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>mcg</strong></td><td>microgram (medical spelling)</td><td>10⁻⁶ g</td><td>1 µg = 0.001 mg</td></tr>
            <tr><td><strong>µg</strong></td><td>microgram (SI spelling)</td><td>10⁻⁶ g</td><td>1 mcg = 0.001 mg</td></tr>
            <tr><td><strong>ug</strong></td><td>microgram (keyboard spelling)</td><td>10⁻⁶ g</td><td>1 µg = 0.001 mg</td></tr>
            <tr><td><strong>mg</strong></td><td>milligram</td><td>10⁻³ g</td><td>1,000 µg</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Why "mcg" Exists at All</h2>
      <p>
        The SI symbol for micro is the Greek letter µ (mu). On paper prescriptions, a hurried µ looks almost
        identical to "m" — turning "µg" into "mg" and multiplying the dose by 1,000. After documented
        medication tragedies from exactly this mix-up, medication-safety organizations recommended writing
        "mcg" instead. You will see all three spellings in the wild:
      </p>
      <ul>
        <li><strong>mcg</strong> — prescriptions, clinical guidelines, supplement facts (US)</li>
        <li><strong>µg</strong> — scientific papers, European labels, lab reports</li>
        <li><strong>ug</strong> — keyboards and systems without the µ character</li>
      </ul>
      <p>
        All three convert identically — our <Link to="/micrograms-to-milligrams">µg to mg converter</Link>{' '}
        works for mcg too.
      </p>

      <h2>The 1,000× Danger</h2>
      <p>
        Confusing mcg with mg is not a rounding error — it is giving a thousand times too much, or a thousandth
        of what is needed:
      </p>
      <ul>
        <li><strong>Levothyroxine</strong> is dosed at 25–300 <em>mcg</em>. Reading 100 mcg as 100 mg would be catastrophic — that is why it is never written in mg.</li>
        <li><strong>Vitamin D</strong> at 1,000 IU = 25 <em>mcg</em> = 0.025 <em>mg</em>. A label reading "25 mg" of D3 would be a poisonous 1,000× overdose.</li>
        <li><strong>Fentanyl</strong> patches release <em>mcg</em> per hour — one of the most potent drugs in common use, and a permanent fixture of error-prevention training.</li>
      </ul>
      <p>
        Rule of thumb: if a number looks large for a nutrient or hormone (hundreds of "mg" of B12, for
        instance), the unit was probably mcg.
      </p>

      <h2>Converting: mcg ↔ µg ↔ mg</h2>
      <p>Since mcg and µg are identical, there are only two conversions to learn:</p>
      <ol>
        <li><strong>µg/mcg → mg: divide by 1,000</strong> (decimal point three places left). 500 mcg = 0.5 mg; 2,500 µg = 2.5 mg.</li>
        <li><strong>mg → µg/mcg: multiply by 1,000</strong> (three places right). 0.4 mg = 400 mcg; 0.075 mg = 75 mcg.</li>
      </ol>
      <div className="tbl">
        <table className="numeric">
          <thead>
            <tr><th>mcg / µg</th><th>mg</th><th>Real-world example</th></tr>
          </thead>
          <tbody>
            <tr><td>2.4 mcg</td><td>0.0024 mg</td><td>daily vitamin B12 requirement</td></tr>
            <tr><td>25 mcg</td><td>0.025 mg</td><td>vitamin D3, 1,000 IU</td></tr>
            <tr><td>75 mcg</td><td>0.075 mg</td><td>common levothyroxine dose</td></tr>
            <tr><td>400 mcg</td><td>0.4 mg</td><td>prenatal folic acid</td></tr>
            <tr><td>500 mcg</td><td>0.5 mg</td><td>typical B12 supplement</td></tr>
            <tr><td>1,000 mcg</td><td>1 mg</td><td>high-dose B12 / melatonin boundary</td></tr>
          </tbody>
        </table>
      </div>

      <h2>What About IU?</h2>
      <p>
        Some vitamins are labeled in IU (International Units) — a biological-activity measure, not a mass. The
        conversion is substance-specific: for <strong>vitamin D3, 1 µg = 40 IU</strong> (so 25 µg = 1,000 IU);
        for vitamin E, 1 mg of natural d-alpha-tocopherol ≈ 1.49 IU. There is no universal IU↔µg formula —
        always check which substance the IU refers to.
      </p>

      <h2>Where Each Unit Shows Up</h2>
      <ul>
        <li><strong>Micrograms (mcg/µg):</strong> vitamin D, B12, folate, vitamin K, thyroid hormones, potent drugs, hormone assays.</li>
        <li><strong>Milligrams (mg):</strong> vitamin C, magnesium, zinc, calcium, most painkillers and tablets, caffeine (~95 mg per coffee).</li>
        <li><strong>Nanograms (ng):</strong> lab territory — blood levels of hormones and drugs are reported in ng/mL. 1 µg = 1,000 ng; see <Link to="/nanograms-to-micrograms">ng to µg</Link>.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <h3>Is mcg bigger than mg?</h3>
      <p>
        No — it is 1,000 times smaller. mg (milligram) &gt; mcg/µg (microgram) &gt; ng (nanogram), each step
        dividing by 1,000. Mnemonic: <strong>m</strong>illigram is the <strong>m</strong>edium one.
      </p>
      <h3>Is 400 mcg the same as 0.4 mg?</h3>
      <p>
        Yes — 400 mcg ÷ 1,000 = 0.4 mg. Prenatal folic acid is the famous example; labels print it both ways,
        which is exactly why this conversion matters.
      </p>
      <h3>Why do B12 supplements say 1,000 mcg instead of 1 mg?</h3>
      <p>
        Marketing and habit: the nutrient is naturally dosed in micrograms, and 1,000 mcg reads as "high
        strength" to shoppers. It is exactly 1 mg — the units are interchangeable once you know the factor.
      </p>
      <h3>My lab result is in ng/mL — how does that relate?</h3>
      <p>
        ng/mL is mass per volume. To compare with a µg dose you convert ng → µg (÷1,000) and account for the
        volume. Blood-level interpretation belongs with your clinician — but the unit math is on our{' '}
        <Link to="/micrograms-to-nanograms">µg to ng converter</Link>.
      </p>
    </ArticleLayout>
  );
}
