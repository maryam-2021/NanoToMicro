const AUTHORITY_ROUTE_BY_CONVERTER_SLUG: Record<string, string> = {
  'nanometers-to-micrometers': '/length/nm-to-um/',
  'nanoseconds-to-microseconds': '/time/ns-to-us/',
  'nanosieverts-to-microsieverts': '/radiation/nsv-to-usv/',
};

export function converterPath(slug: string): string {
  return AUTHORITY_ROUTE_BY_CONVERTER_SLUG[slug] ?? `/${slug}/`;
}

export function canonicalConverterUrl(slug: string): string {
  return `https://www.nanotomicro.com${converterPath(slug)}`;
}
