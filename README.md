# NanoToMicro — Internationalization & Scientific Converter Architecture

High-precision SI metric unit converters and evidence-based antigravity physics research platform built with Astro and Svelte, supporting **52 international languages** with 100% key parity, complete hreflang architecture, RTL layouts, and chunked XML sitemaps.

---

## 🌍 All 52 Supported Languages

| Batch | Locales & Endonyms |
|---|---|
| **Tier 1 (Master & Core EU)** | `en` (English), `es` (Español), `de` (Deutsch), `fr` (Français), `pt` (Português), `pt-BR` (Português do Brasil) |
| **Tier 2 (West/East EU)** | `it` (Italiano), `nl` (Nederlands), `pl` (Polski), `ru` (Русский), `uk` (Українська) |
| **Tier 3 (South/SE EU)** | `tr` (Türkçe), `el` (Ελληνικά), `ro` (Română), `hu` (Magyar), `bg` (Български) |
| **Tier 4 (Slavic & Balkan)** | `cs` (Čeština), `sk` (Slovenčina), `sr` (Srpski Latin), `hr` (Hrvatski), `sl` (Slovenščina) |
| **Tier 5 (Nordic & Baltic)** | `sv` (Svenska), `no` (Norsk), `da` (Dansk), `fi` (Suomi), `et` (Eesti) |
| **Tier 6 (Baltic, Romance & RTL)** | `lv` (Latviešu), `lt` (Lietuvių), `ca` (Català), `ar` (العربية - RTL), `he` (עברית - RTL) |
| **Tier 7 (Middle East & South Asia)** | `fa` (فارسی - RTL), `ur` (اردو - RTL), `hi` (हिन्दी), `bn` (বাংলা), `ta` (தமிழ்) |
| **Tier 8 (South & West India)** | `te` (తెలుగు), `mr` (मराठी), `gu` (ગુજરાતી), `kn` (ಕನ್ನಡ), `ml` (മലയാളം) |
| **Tier 9 (East Asia & Indo-Aryan)** | `pa` (ਪੰਜਾਬੀ), `zh-CN` (简体中文), `zh-TW` (繁體中文), `ja` (日本語), `ko` (한국어) |
| **Tier 10 (SE Asia & Africa)** | `id` (Bahasa Indonesia), `ms` (Bahasa Melayu), `fil` (Filipino), `vi` (Tiếng Việt), `th` (ไทย), `sw` (Kiswahili) |

---

## 🌍 Add a New Language in 3 Steps

Adding a new language to the platform takes under 5 minutes with zero routing code changes:

### Step 1: Add a Config Row in `src/i18n/config.ts`
Add your language definition to the `LOCALES` array:
```typescript
{ code: 'is', hreflang: 'is', name: 'Íslenska', dir: 'ltr' },
```
* `code`: Internal ISO route prefix (e.g. `is` maps to `/is/`).
* `hreflang`: Standard BCP 47 hreflang tag for search engine crawlers.
* `name`: Native **endonym** of the language.
* `dir`: Text direction (`'ltr'` or `'rtl'`).

### Step 2: Create the Dictionary File in `src/i18n/dictionaries/[code].ts`
Create `src/i18n/dictionaries/is.ts` by copying the master structure from `src/i18n/dictionaries/en.ts` and translating the values.
Register your dictionary in `src/i18n/utils.ts`:
```typescript
import { is } from './dictionaries/is';
registerDictionary('is', is);
```

### Step 3: Run Validation & Build
Run the strict i18n validator and QA pass:
```bash
npm run i18n:check
npm run i18n:qa
npm run build
```
Once validated, your new language is automatically:
* Rendered at `/[code]/` with self-referencing canonicals.
* Injected as `<link rel="alternate" hreflang="[code]">` across all existing language pages.
* Indexed in `sitemap-index.xml` via `@astrojs/sitemap`.
* Listed in the global language switcher dropdown with native endonyms and exact-match URL preservation.

---

## 🛠️ CLI Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local development server at `http://localhost:4321/` |
| `npm run build` | Compile all 2,496 static HTML pages into `dist/` |
| `npm run i18n:check` | Validate all 52 dictionaries for 100% key parity against `en.ts` |
| `npm run i18n:qa` | Run automated QA test pass (RTL, Intl formatting, hreflang, sitemap) |
| `npm run audit` | Run comprehensive launch audit (headings, canonicals, links, JSON-LD) |
| `npx wrangler pages deploy dist` | Deploy static bundle live to Cloudflare Pages |
