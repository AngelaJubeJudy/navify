export function appendUtmSource(url: string): string {
  if (!url) return url;
  try {
    const u = new URL(url, window.location.origin);
    // 只处理外部链接
    if (u.origin === window.location.origin) return url;
    u.searchParams.set('utm_source', 'navify.lol');
    return u.toString();
  } catch {
    // url 不是合法链接，直接返回
    return url;
  }
} 