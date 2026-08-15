// scripts/verify-body-localization.mjs
import fs from 'fs';

console.log('=== VERIFYING BODY LOCALIZATION & RTL BIDI PROTECTION ===\n');

// 1. Urdu Inspection
console.log('--- 1. URDU (/ur/convert/nano-to-micro/) ---');
const urHtml = fs.readFileSync('dist/ur/convert/nano-to-micro/index.html', 'utf8');
const urH1 = urHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.trim();
const urHtmlTag = urHtml.match(/<html[^>]*>/)?.[0];
const urFormula = urHtml.match(/<section class="panel"[^>]*>([\s\S]*?)<\/section>/)?.[1]?.trim();
const urTable = urHtml.match(/<table>([\s\S]*?)<\/table>/)?.[0];

console.log('HTML Tag:', urHtmlTag);
console.log('H1:', urH1);
console.log('Formula Section:\n', urFormula?.slice(0, 300));
console.log('Table Headers & First Row:\n', urTable?.slice(0, 250));

// 2. Arabic Inspection
console.log('\n--- 2. ARABIC (/ar/convert/nano-to-micro/) ---');
const arHtml = fs.readFileSync('dist/ar/convert/nano-to-micro/index.html', 'utf8');
const arH1 = arHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.trim();
const arHtmlTag = arHtml.match(/<html[^>]*>/)?.[0];
console.log('HTML Tag:', arHtmlTag);
console.log('H1:', arH1);

// 3. Japanese Inspection
console.log('\n--- 3. JAPANESE (/ja/convert/nano-to-micro/) ---');
const jaHtml = fs.readFileSync('dist/ja/convert/nano-to-micro/index.html', 'utf8');
const jaH1 = jaHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.trim();
const jaTable = jaHtml.match(/<table>([\s\S]*?)<\/table>/)?.[0];
console.log('H1:', jaH1);
console.log('Table snippet:\n', jaTable?.slice(0, 200));

console.log('\n=== VERIFICATION COMPLETE ===');
