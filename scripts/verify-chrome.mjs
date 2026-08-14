import fs from 'fs';

console.log('=== VERIFYING SITE CHROME LOCALIZATION & LINKS ===\n');

// 1. Spanish Header Inspection
console.log('--- 1. SPANISH (/es/) ---');
const esHtml = fs.readFileSync('dist/es/index.html', 'utf8');
const esNav = esHtml.match(/<nav class="nav-links"[^>]*>([\s\S]*?)<\/nav>/)?.[1]?.trim();
const esFooter = esHtml.match(/<div class="footer-links-grid"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<div class="footer-bottom"/)?.[1]?.trim();
console.log('Nav HTML:\n', esNav);
console.log('\nFooter First 200 chars:\n', esFooter?.slice(0, 200));

// 2. Arabic Header Inspection
console.log('\n--- 2. ARABIC (/ar/) ---');
const arHtml = fs.readFileSync('dist/ar/index.html', 'utf8');
const arNav = arHtml.match(/<nav class="nav-links"[^>]*>([\s\S]*?)<\/nav>/)?.[1]?.trim();
const arHtmlTag = arHtml.match(/<html[^>]*>/)?.[0];
console.log('HTML Tag:', arHtmlTag);
console.log('Nav HTML:\n', arNav);

// 3. German Header Inspection
console.log('\n--- 3. GERMAN (/de/) ---');
const deHtml = fs.readFileSync('dist/de/index.html', 'utf8');
const deNav = deHtml.match(/<nav class="nav-links"[^>]*>([\s\S]*?)<\/nav>/)?.[1]?.trim();
console.log('Nav HTML:\n', deNav);

console.log('\n=== CHROME VERIFICATION COMPLETE ===');
