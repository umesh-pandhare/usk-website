import { useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { absoluteUrl } from '@/utils/format';

interface SeoOptions {
  /** Page title without the company suffix. Omit for the home page. */
  title?: string;
  description?: string;
  /** Path used for canonical + og:url, e.g. "/products" */
  path?: string;
  image?: string;
  noIndex?: boolean;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

/** Lightweight per-route SEO (title, description, canonical, Open Graph, Twitter). */
export function useSeo({ title, description, path = '/', image, noIndex }: SeoOptions = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteConfig.seo.titleSuffix}` : siteConfig.seo.defaultTitle;
    const desc = description ?? siteConfig.seo.defaultDescription;
    const url = absoluteUrl(path === '/' ? '/' : path);
    const img = absoluteUrl(image ?? siteConfig.seo.ogImage);

    document.title = fullTitle;
    setMeta('name', 'description', desc);
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    setCanonical(url);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', siteConfig.companyName);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', img);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', img);
    if (siteConfig.seo.twitterHandle) setMeta('name', 'twitter:site', siteConfig.seo.twitterHandle);
  }, [title, description, path, image, noIndex]);
}
