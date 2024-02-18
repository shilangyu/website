type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: Date, dateStyle: DateStyle = 'medium') {
  const dateFormatter = new Intl.DateTimeFormat('en', { dateStyle });
  return dateFormatter.format(date);
}

// disregards trailing slash
export function normalizeUrl(url: string) {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

export function isSamePath(a: string, b: string) {
  return normalizeUrl(a) === normalizeUrl(b);
}
