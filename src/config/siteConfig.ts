/**
 * Central brand & business configuration.
 * Update values here — they flow through the navbar, footer, SEO, contact page and legal pages.
 *
 * Items marked PLACEHOLDER must be replaced before launch.
 */
const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://usksoftwaresolutions.com';

export const siteConfig = {
  companyName: 'USK Software Solutions',
  shortName: 'USK',
  logoSubtext: 'Software Solutions',
  tagline: 'Software Products & Technology Solutions',
  domain: 'usksoftwaresolutions.com',
  url: SITE_URL,

  founder: 'Umesh Pandhare',
  coFounder: 'Umesh Pandhare',

  // PLACEHOLDER — replace with real contact details
  email: 'hello@usksoftwaresolutions.com',
  phone: '+91 9529801391',
  address: 'Your Street Address, City, State, Country',
  locationShort: 'Your City, Country',

  // PLACEHOLDER — replace with real profile URLs. Leave a value empty ('') to hide that icon.
  socialLinks: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },

  /** ISO 4217 currency code used on pricing displays */
  currency: 'USD',
  locale: 'en-US',

  legal: {
    lastUpdated: 'January 1, 2026', // PLACEHOLDER — update when you finalise the policies
    jurisdiction: 'the jurisdiction in which USK Software Solutions is registered', // PLACEHOLDER
  },

  seo: {
    defaultTitle: 'USK Software Solutions | Software Products & Technology Solutions',
    titleSuffix: 'USK Software Solutions',
    defaultDescription:
      'USK Software Solutions builds software products, SaaS solutions and customized software for modern businesses.',
    ogImage: '/og-image.png',
    twitterHandle: '', // e.g. '@uskSoftware'
  },
} as const;

export type SiteConfig = typeof siteConfig;
