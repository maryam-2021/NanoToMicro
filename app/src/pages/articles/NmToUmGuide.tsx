import { Link } from 'react-router';
import { ArticleLayout } from '@/components/ArticleLayout';
import { getArticle } from '@/data/articles';

const meta = getArticle('nanomolar-to-micromolar-guide')!;

export default function NmToUmGuide() {
  return (
    <ArticleLayout
      meta={meta}
      ctas={[
        { to: '/nanomolar-to-micromolar', label: 'nM to µM Converter' },
        { to: '/micromolar-to-nanomolar', label: 'µM to nM' },
        { to: '/nanomolar-to-millimolar', label: 'nM to mM' },
      ]}
    >
      <p>
        <strong>Converting nanomolar to micromolar is simple arithmetic — divide by 1,000.</strong> 1 nM = 0.001
        µM, and 1 µM = 1,000 nM. What trips people up is not the math but the context: drug potency data, assay
        protocols and published papers mix nM and µM constantly, and comparing values without converting first
        leads to thousand-fold misjudgments. This guide covers the conversion, the biology behind it, and the
        related calculations every lab needs.
      </p>

      <h2>What nM and µM Actually Mean</h2>
      <p>
        Molarity (M) counts moles of solute per liter of solution. A 1 molar solution holds 6.022 × 10²³
        molecules per liter. The prefixes scale it down:
      </p>
      <ul>
        <li><strong>mM</strong> (millimolar) = 10⁻³ mol/L — physiology: blood glucose ~5 mM, PCR Mg²⁺ ~1.5 mM</li>
        <li><strong>µM</strong> (micromolar) = 10⁻⁶ mol/L — assays: screening doses, enzyme reactions</li>
        <li><strong>nM</strong> (nanomolar) = 10⁻⁹ mol/L — potency: drug binding, receptor signaling</li>
        <li><strong>pM</strong> (picomolar) = 10⁻¹² mol/L — affinity: antibody Kd, hormones</li>
      </ul>
      <p>
        Each step is exactly 1,000× more dilute. The nM↔µM border is where most medicinal chemistry happens,
        which is why this particular conversion gets used daily. Try the{' '}
        <Link to="/nanomolar-to-micromolar">nM to µM converter</Link> or the reverse{' '}
        <Link to="/micromolar-to-nanomolar">µM to nM converter</Link>.
      </p>

      <h2>The Conversion Formula</h2>
      <div className="article-callout">
        <p className="mb-1 text-center text-lg font-bold text-primary">µM = nM ÷ 1,000</p>
        <p className="mb-0 text-center text-lg font-bold">nM = µM × 1,000</p>
      </div>
      <p>Worked examples:</p>
      <ul>
        <li>250 nM ÷ 1,000 = <strong>0.25 µM</strong></li>
        <li>5,000 nM ÷ 1,000 = <strong>5 µM</strong></li>
        <li>0.05 µM × 1,000 = <strong>50 nM</strong></li>
        <li>12.5 µM × 1,000 = <strong>12,500 nM</strong></li>
      </ul>
      <p>
        Mental shortcut: nM → µM moves the decimal three places left; µM → nM moves it three places right.
      </p>

      <h2>Why Drug Potency Lives Between nM and µM</h2>
      <p>
        Four metrics dominate pharmacology, and all of them straddle the nM–µM line:
      </p>
      <ul>
        <li><strong>IC50</strong> — concentration that inhibits 50% of activity. Screening hits start at 1–100 µM; optimized leads reach 10–500 nM; approved drugs often sit below 100 nM.</li>
        <li><strong>EC50</strong> — concentration producing 50% of maximal effect, used for agonists. Same nM/µM landscape.</li>
        <li><strong>Ki</strong> — inhibition binding constant. A Ki of 5 nM means the compound binds its target very tightly.</li>
        <li><strong>Kd</strong> — equilibrium dissociation constant. Great antibodies hit pM territory; small molecules celebrate single-digit nM.</li>
      </ul>
      <p>
        Databases like ChEMBL and PubChem store these values in mixed units pulled from decades of literature.
        Before comparing two compounds, <strong>normalize everything to one unit</strong> — µM for assay work, nM
        for potency rankings. A "compound A: 0.3 µM, compound B: 45 nM" comparison only makes sense after
        converting: A is 300 nM, so B is roughly 7× more potent.
      </p>

      <h2>Dilution Math: C1V1 = C2V2</h2>
      <p>
        Conversion between nM and µM usually shows up mid-protocol, inside a dilution. The universal dilution
        equation is:
      </p>
      <div className="article-callout">
        <p className="mb-0 text-center font-semibold">C₁ × V₁ = C₂ × V₂</p>
      </div>
      <p>
        <strong>Example:</strong> you have a 10 mM DMSO stock and need 200 µL of a 10 µM working solution.
        Convert units first — 10 mM = 10,000 µM — then V₁ = (10 µM × 200 µL) ÷ 10,000 µM ={' '}
        <strong>0.2 µL of stock</strong> into 199.8 µL of buffer. Sub-microliter pipetting is inaccurate, which
        is why labs do serial dilutions: first 10 mM → 100 µM (1:100), then 100 µM → 10 µM (1:10).
      </p>
      <p>
        Need liquid volumes for that? The <Link to="/microliters-to-milliliters">µL to mL converter</Link> and{' '}
        <Link to="/nanoliters-to-microliters">nL to µL converter</Link> cover the pipetting side.
      </p>

      <h2>Converting Molarity to Mass Concentration (ng/mL)</h2>
      <p>
        Molarity counts molecules; sometimes you need mass. The bridge is molecular weight:
      </p>
      <div className="article-callout">
        <p className="mb-1 text-center font-semibold">ng/mL = µM × MW (g/mol)</p>
        <p className="mb-0 text-center font-semibold">ng/mL = nM × MW ÷ 1,000</p>
      </div>
      <p>
        <strong>Example:</strong> a 500 g/mol compound at 2 µM = 2 × 500 = <strong>1,000 ng/mL</strong> (1 µg/mL).
        At 50 nM the same compound is 50 × 500 ÷ 1,000 = <strong>25 ng/mL</strong>. This is essential when
        comparing LC-MS results (reported in ng/mL) with assay concentrations (reported in nM or µM). For the
        mass side of that math, see <Link to="/nanograms-to-micrograms">ng to µg</Link> and{' '}
        <Link to="/micrograms-to-milligrams">µg to mg</Link>.
      </p>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Comparing papers without normalizing.</strong> A 2 µM IC50 from 1998 is not "weaker than" a 500 nM one from 2024 until you convert (2 µM = 2,000 nM — it is 4× weaker, not 250×).</li>
        <li><strong>Forgetting DMSO limits.</strong> Cell assays typically tolerate ≤0.1–0.5% DMSO; your stock concentration must be high enough that the final dilution respects that.</li>
        <li><strong>Mixing mM into nM calculations.</strong> mM to nM is ×1,000,000, not ×1,000 — use the <Link to="/millimolar-to-nanomolar">mM to nM converter</Link> when crossing that wider gap.</li>
        <li><strong>Assuming lower IC50 always means better drug.</strong> Potency without selectivity, solubility and exposure is just a number on a poster.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <h3>Is 1 µM more concentrated than 1 nM?</h3>
      <p>
        Yes — exactly 1,000 times more concentrated. A solution that is 1 µM contains one million molecules per
        liter for every one in a 1 nM solution (per 1,000 nM, precisely: 1 µM = 1,000 nM).
      </p>
      <h3>What is a good IC50 for a drug candidate?</h3>
      <p>
        Under 100 nM is generally considered potent; under 10 nM is excellent. But potency is table stakes —
        clinical success depends on selectivity, ADME properties and safety margins.
      </p>
      <h3>How do I convert nM to pM?</h3>
      <p>
        Multiply by 1,000: 1 nM = 1,000 pM. Antibody affinities often live in this range — use the{' '}
        <Link to="/nanomolar-to-picomolar">nM to pM converter</Link>, or go deeper with{' '}
        <Link to="/picomolar-to-femtomolar">pM to fM</Link> for digital-assay work.
      </p>
    </ArticleLayout>
  );
}
