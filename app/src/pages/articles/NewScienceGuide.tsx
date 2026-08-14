import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';
import { ArticleLayout } from '@/components/ArticleLayout';
import { getArticle } from '@/data/articles';

interface Props { slug: 'sievert-gray-becquerel-difference' | 'visible-light-wavelength-nm-to-um' | 'semiconductor-process-nodes-explained' | 'cell-size-in-micrometers' }

const SOURCES: Record<Props['slug'], Array<{ label: string; href: string }>> = {
  'sievert-gray-becquerel-difference': [
    { label: 'BIPM — SI derived radiation units', href: 'https://www.bipm.org/en/publications/si-brochure/annex-1/derived-units' },
    { label: 'ICRP Publication 147 — dose quantities', href: 'https://www.icrp.org/publication.asp?id=ICRP+Publication+147' },
  ],
  'visible-light-wavelength-nm-to-um': [
    { label: 'NASA Science — Visible Light', href: 'https://science.nasa.gov/ems/09_visiblelight/' },
    { label: 'NASA MODIS — wavelength units', href: 'https://atmosphere-imager.gsfc.nasa.gov/links/modis-instrument' },
  ],
  'semiconductor-process-nodes-explained': [
    { label: 'TSMC — N3 and FINFLEX', href: 'https://www.tsmc.com/english/news-events/blog-article-20220616' },
    { label: 'TSMC — logic technology roadmap', href: 'https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_3micron' },
  ],
  'cell-size-in-micrometers': [
    { label: 'NHGRI — DNA is about 2 nm wide', href: 'https://www.genome.gov/27554929/2013-news-release-new-nih-awards-focus-on-nanopore-technology-for-dna-sequencing/' },
    { label: 'US EPA — PM2.5 size reference', href: 'https://www.epa.gov/pm-pollution/particulate-matter-pm-basics' },
  ],
};

function Sources({ slug }: Props) {
  return (
    <div className="article-callout">
      <p className="mb-3 font-bold">Primary references</p>
      <ul className="mb-0">
        {SOURCES[slug].map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} <ExternalLink className="inline h-3.5 w-3.5" /></a></li>)}
      </ul>
    </div>
  );
}

function RadiationUnits() {
  return <>
    <p><strong>Becquerel (Bq), gray (Gy) and sievert (Sv) are all radiation units, but they answer different questions.</strong> Treating them as three scales of the same quantity is a category error. The becquerel describes activity, the gray describes absorbed dose, and the sievert is used for radiation-protection dose quantities.</p>
    <h2>Becquerel: how often nuclear transformations occur</h2>
    <p>Activity is about the source, not directly about the dose to a person or material. One becquerel corresponds to one nuclear transformation per second. A high activity value does not by itself tell you an absorbed or effective dose; geometry, radiation type, energy, shielding, intake and time all matter.</p>
    <h2>Gray: absorbed radiation energy</h2>
    <p>The gray is the special SI unit of absorbed dose. One gray equals one joule of ionising-radiation energy absorbed per kilogram. It is a physical energy-per-mass quantity.</p>
    <h2>Sievert: radiation-protection dose quantities</h2>
    <p>Radiological protection uses weighted dose quantities expressed in sieverts. Effective dose incorporates radiation and tissue weighting so exposures affecting different organs or radiation types can be placed on a common protection scale. That is why a generic “Gy to Sv” conversion is not appropriate for every situation.</p>
    <h2>Why the distinction matters</h2>
    <p>A detector might report activity in Bq, absorbed dose in Gy or a protection-related dose quantity in Sv. Before doing any arithmetic, identify the physical quantity first. Prefix conversion—nSv to µSv, or µSv to mSv—is exact when the underlying quantity is the same; changing from Bq to Gy or Gy to Sv is a different problem.</p>
    <p>For prefix conversion, use the <Link to="/units/radiation">radiation hub</Link>. For the specific distinction between absorbed dose and protection quantities, see <Link to="/radiation/gray-vs-sievert">gray vs sievert</Link>.</p>
  </>;
}

function VisibleLight() {
  return <>
    <p><strong>Visible-light wavelengths sit directly across the nanometer-to-micrometer boundary.</strong> NASA gives a typical human-visible range of roughly 380–700 nm. Divide by 1,000 and the same range is 0.38–0.70 µm.</p>
    <h2>Visible light in nm and µm</h2>
    <div className="tbl"><table><thead><tr><th>Approx. wavelength</th><th>Nanometers</th><th>Micrometers</th></tr></thead><tbody><tr><td>Violet end</td><td>380 nm</td><td>0.38 µm</td></tr><tr><td>Green example</td><td>532 nm</td><td>0.532 µm</td></tr><tr><td>Red end</td><td>700 nm</td><td>0.70 µm</td></tr></tbody></table></div>
    <h2>Why optics switches units</h2>
    <p>Visible-light values are convenient as whole numbers in nanometers, while infrared work frequently becomes easier to read in micrometers. The underlying wavelength has not changed—the decimal point has simply moved three places because 1 µm = 1,000 nm.</p>
    <h2>The exact formula</h2>
    <div className="article-callout"><p className="mb-0 text-center font-bold">µm = nm ÷ 1,000</p></div>
    <p>Use the dedicated <Link to="/length/nm-to-um/">nm to µm scale guide</Link> for any wavelength value.</p>
  </>;
}

function SemiconductorNodes() {
  return <>
    <p><strong>Modern semiconductor “nanometer” node names are technology-generation labels, not a promise that every important transistor dimension equals the number in the name.</strong> That distinction matters when a datasheet says “3 nm” and a microscopy or layout document gives actual dimensions in nanometers or micrometers.</p>
    <h2>From literal dimensions to technology generations</h2>
    <p>Older process generations were more closely associated with a characteristic physical feature. Modern processes combine many dimensions—gate geometry, contacted pitch, metal pitch, cell height, fin or nanosheet structures—and one marketing node name cannot represent them all.</p>
    <h2>How foundries describe current nodes</h2>
    <p>TSMC describes N3 as a family or generation of 3-nanometer semiconductor technologies and discusses improvements in power, performance and area. Its own material also distinguishes multiple N3 variants and transistor configurations, which is a useful reminder that the node label represents an entire platform.</p>
    <h2>When nm → µm conversion is still valid</h2>
    <p>If you have an actual physical length—such as 500 nm film thickness, 2,000 nm spacing or a 150 nm feature—you can convert that length directly to micrometers. For example, 2,000 nm = 2 µm. What you should not do is assume a process called “3 nm” means every transistor dimension is literally 3 nm.</p>
    <p>For real dimensional values, use the <Link to="/length/nm-to-um/">nanometers to micrometers converter</Link>.</p>
  </>;
}

function CellScale() {
  return <>
    <p><strong>Micrometers are the everyday unit for cells and many airborne particles, while nanometers take over for molecules and smaller structures.</strong> Learning to move between these scales makes microscopy images and biology papers much easier to compare.</p>
    <h2>A useful scale ladder</h2>
    <p>NHGRI uses a DNA strand width of about 2 nm as a nanoscale reference. By contrast, EPA describes PM2.5 as fine inhalable particles generally 2.5 µm in diameter or smaller. Those two examples are separated by more than three orders of magnitude.</p>
    <div className="tbl"><table><thead><tr><th>Reference</th><th>µm</th><th>nm</th></tr></thead><tbody><tr><td>DNA strand width (approx.)</td><td>0.002 µm</td><td>2 nm</td></tr><tr><td>0.1 µm particle</td><td>0.1 µm</td><td>100 nm</td></tr><tr><td>PM2.5 upper size reference</td><td>2.5 µm</td><td>2,500 nm</td></tr></tbody></table></div>
    <h2>Do not assign one fixed size to “a cell”</h2>
    <p>Cells, bacteria, viruses and organelles vary greatly by species, tissue, life stage and measurement method. A scale guide should use examples as ranges or reference points rather than presenting a single universal cell diameter.</p>
    <p>Use the <Link to="/units/length">length conversion hub</Link> to move between nm, µm and neighboring length scales.</p>
  </>;
}

export default function NewScienceGuide({ slug }: Props) {
  const meta = getArticle(slug)!;
  return (
    <ArticleLayout meta={meta} ctas={[
      { to: '/nano-to-micro-conversion/', label: 'Nano to Micro Hub' },
      { to: slug === 'sievert-gray-becquerel-difference' ? '/units/radiation' : '/units/length', label: slug === 'sievert-gray-becquerel-difference' ? 'Radiation Hub' : 'Length Hub' },
    ]}>
      {slug === 'sievert-gray-becquerel-difference' && <RadiationUnits />}
      {slug === 'visible-light-wavelength-nm-to-um' && <VisibleLight />}
      {slug === 'semiconductor-process-nodes-explained' && <SemiconductorNodes />}
      {slug === 'cell-size-in-micrometers' && <CellScale />}
      <Sources slug={slug} />
    </ArticleLayout>
  );
}
