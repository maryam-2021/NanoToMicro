// src/i18n/config.ts

export interface LocaleConfig {
  code: string;
  hreflang: string;
  name: string; // Native endonym
  dir: 'ltr' | 'rtl';
}

export const DEFAULT_LOCALE = 'en';

export const LOCALES: LocaleConfig[] = [
  // Default / English
  { code: 'en', hreflang: 'en', name: 'English', dir: 'ltr' },

  // European & Western Languages
  { code: 'es', hreflang: 'es', name: 'Español', dir: 'ltr' },
  { code: 'de', hreflang: 'de', name: 'Deutsch', dir: 'ltr' },
  { code: 'fr', hreflang: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'pt', hreflang: 'pt', name: 'Português', dir: 'ltr' },
  { code: 'pt-BR', hreflang: 'pt-BR', name: 'Português (Brasil)', dir: 'ltr' },
  { code: 'it', hreflang: 'it', name: 'Italiano', dir: 'ltr' },
  { code: 'nl', hreflang: 'nl', name: 'Nederlands', dir: 'ltr' },
  { code: 'pl', hreflang: 'pl', name: 'Polski', dir: 'ltr' },
  { code: 'ru', hreflang: 'ru', name: 'Русский', dir: 'ltr' },
  { code: 'uk', hreflang: 'uk', name: 'Українська', dir: 'ltr' },
  { code: 'tr', hreflang: 'tr', name: 'Türkçe', dir: 'ltr' },
  { code: 'el', hreflang: 'el', name: 'Ελληνικά', dir: 'ltr' },
  { code: 'ro', hreflang: 'ro', name: 'Română', dir: 'ltr' },
  { code: 'hu', hreflang: 'hu', name: 'Magyar', dir: 'ltr' },
  { code: 'bg', hreflang: 'bg', name: 'Български', dir: 'ltr' },
  { code: 'cs', hreflang: 'cs', name: 'Čeština', dir: 'ltr' },
  { code: 'sk', hreflang: 'sk', name: 'Slovenčina', dir: 'ltr' },
  { code: 'sr', hreflang: 'sr', name: 'Српски', dir: 'ltr' },
  { code: 'hr', hreflang: 'hr', name: 'Hrvatski', dir: 'ltr' },
  { code: 'sl', hreflang: 'sl', name: 'Slovenščina', dir: 'ltr' },
  { code: 'sv', hreflang: 'sv', name: 'Svenska', dir: 'ltr' },
  { code: 'no', hreflang: 'no', name: 'Norsk', dir: 'ltr' },
  { code: 'da', hreflang: 'da', name: 'Dansk', dir: 'ltr' },
  { code: 'fi', hreflang: 'fi', name: 'Suomi', dir: 'ltr' },
  { code: 'et', hreflang: 'et', name: 'Eesti', dir: 'ltr' },
  { code: 'lv', hreflang: 'lv', name: 'Latviešu', dir: 'ltr' },
  { code: 'lt', hreflang: 'lt', name: 'Lietuvių', dir: 'ltr' },
  { code: 'ca', hreflang: 'ca', name: 'Català', dir: 'ltr' },

  // Middle Eastern & RTL Languages
  { code: 'ar', hreflang: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'he', hreflang: 'he', name: 'עברית', dir: 'rtl' },
  { code: 'fa', hreflang: 'fa', name: 'فارسی', dir: 'rtl' },
  { code: 'ur', hreflang: 'ur', name: 'اردو', dir: 'rtl' },

  // South Asian Languages
  { code: 'hi', hreflang: 'hi', name: 'हिन्दी', dir: 'ltr' },
  { code: 'bn', hreflang: 'bn', name: 'বাংলা', dir: 'ltr' },
  { code: 'ta', hreflang: 'ta', name: 'தமிழ்', dir: 'ltr' },
  { code: 'te', hreflang: 'te', name: 'తెలుగు', dir: 'ltr' },
  { code: 'mr', hreflang: 'mr', name: 'मराठी', dir: 'ltr' },
  { code: 'gu', hreflang: 'gu', name: 'ગુજરાતી', dir: 'ltr' },
  { code: 'kn', hreflang: 'kn', name: 'ಕನ್ನಡ', dir: 'ltr' },
  { code: 'ml', hreflang: 'ml', name: 'മലയാളം', dir: 'ltr' },
  { code: 'pa', hreflang: 'pa', name: 'ਪੰਜਾਬੀ', dir: 'ltr' },

  // East & Southeast Asian Languages
  { code: 'zh-CN', hreflang: 'zh-CN', name: '简体中文', dir: 'ltr' },
  { code: 'zh-TW', hreflang: 'zh-TW', name: '繁體中文', dir: 'ltr' },
  { code: 'ja', hreflang: 'ja', name: '日本語', dir: 'ltr' },
  { code: 'ko', hreflang: 'ko', name: '한국어', dir: 'ltr' },
  { code: 'id', hreflang: 'id', name: 'Bahasa Indonesia', dir: 'ltr' },
  { code: 'ms', hreflang: 'ms', name: 'Bahasa Melayu', dir: 'ltr' },
  { code: 'fil', hreflang: 'fil', name: 'Filipino', dir: 'ltr' },
  { code: 'vi', hreflang: 'vi', name: 'Tiếng Việt', dir: 'ltr' },
  { code: 'th', hreflang: 'th', name: 'ไทย', dir: 'ltr' },

  // African Languages
  { code: 'sw', hreflang: 'sw', name: 'Kiswahili', dir: 'ltr' },
];

export const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l.code !== DEFAULT_LOCALE);

export function getLocale(code: string): LocaleConfig {
  return LOCALES.find((l) => l.code === code) || LOCALES[0];
}

export function isValidLocale(code: string): boolean {
  return LOCALES.some((l) => l.code === code);
}

/**
 * Given a path and a target locale, returns the properly formatted URL path.
 * English stays unprefixed at root. Non-en is prefixed: /es/...
 */
export function getLocalizedPath(pathname: string, targetLocale: string): string {
  // Normalize path
  let cleanPath = pathname.split('?')[0].split('#')[0];
  
  // Strip any existing locale prefix
  for (const loc of LOCALES) {
    if (loc.code !== DEFAULT_LOCALE) {
      if (cleanPath === `/${loc.code}` || cleanPath === `/${loc.code}/`) {
        cleanPath = '/';
        break;
      } else if (cleanPath.startsWith(`/${loc.code}/`)) {
        cleanPath = cleanPath.slice(loc.code.length + 1);
        break;
      }
    }
  }

  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }

  // Ensure trailing slash
  if (!cleanPath.endsWith('/')) {
    cleanPath = `${cleanPath}/`;
  }

  if (targetLocale === DEFAULT_LOCALE) {
    return cleanPath;
  }

  return `/${targetLocale}${cleanPath === '/' ? '/' : cleanPath}`;
}
