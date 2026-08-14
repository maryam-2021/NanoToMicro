import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CONVERTERS } from '../src/data/converters.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://nanotomicro.com';
const today = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: `${BASE}/`, priority: '1.0', changefreq: 'weekly' },
  { loc: `${BASE}/si-prefix-converter`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE}/conversion-charts`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/`, priority: '0.9', changefreq: 'weekly' },
  { loc: `${BASE}/antigravity/what-is-antigravity/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/gravitational-shielding/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/negative-mass/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/antimatter-gravity/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/equivalence-principle/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/weight-vs-mass/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/general-relativity-basics/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/newtonian-gravity-basics/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/gravitational-fields/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/inertial-mass-vs-gravitational-mass/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/magnetic-levitation/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/diamagnetic-levitation/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/superconducting-levitation/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/acoustic-levitation/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/optical-levitation/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/ion-wind-lift/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/casimir-effect/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/warp-drive-physics/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/exotic-matter/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/negative-energy/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/propellantless-propulsion/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/biefeld-brown-effect/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/gyroscopic-antigravity-claims/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/superconductor-anomaly-claims/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/uap-propulsion-claims/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/reproducibility-and-experimental-errors/`, priority: '0.85', changefreq: 'monthly' },
  { loc: `${BASE}/antigravity/superconductors/`, priority: '0.85', changefreq: 'monthly' },
  ...CONVERTERS.map(c => ({
    loc: `${BASE}/convert/${c.slug}/`,
    priority: '0.9',
    changefreq: 'monthly'
  }))
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

mkdirSync(join(root, 'public'), { recursive: true });
writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml created with ${urls.length} URLs`);
