import { siteConfig } from '@/config/siteConfig';

const currencyFormatter = new Intl.NumberFormat(siteConfig.locale, {
  style: 'currency',
  currency: siteConfig.currency,
  maximumFractionDigits: 0,
});

export const formatCurrency = (value: number): string => currencyFormatter.format(value);

/** Builds a /contact link that pre-selects a service in the form. */
export const contactLink = (service?: string, extra?: Record<string, string>): string => {
  const params = new URLSearchParams();
  if (service) params.set('service', service);
  if (extra) Object.entries(extra).forEach(([key, value]) => params.set(key, value));
  const query = params.toString();
  return query ? `/contact?${query}` : '/contact';
};

export const absoluteUrl = (path: string): string =>
  `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
