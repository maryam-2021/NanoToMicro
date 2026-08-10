import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  jsonLd?: Record<string, unknown>[];
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function normalizeCanonical(canonical?: string): string | undefined {
  if (!canonical) return undefined;
  try {
    const url = new URL(canonical);
    if (url.hostname === 'www.nanotomicro.com' && !url.pathname.endsWith('/')) {
      url.pathname = `${url.pathname}/`;
    }
    return url.toString();
  } catch {
    return canonical;
  }
}

export function useSEO({
  title,
  description,
  canonical,
  robots = 'index, follow, max-image-preview:large',
  jsonLd,
}: SeoOptions) {
  const normalizedCanonical = normalizeCanonical(canonical);
  const jsonLdStr = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', robots);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);

    if (normalizedCanonical) {
      upsertMeta('property', 'og:url', normalizedCanonical);
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', normalizedCanonical);
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }

    document.head.querySelectorAll('script[data-seo-jsonld]').forEach((n) => n.remove());
    if (jsonLd) {
      for (const obj of jsonLd) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-jsonld', '1');
        script.textContent = JSON.stringify(obj);
        document.head.appendChild(script);
      }
    }
  }, [title, description, normalizedCanonical, robots, jsonLdStr]);
}
