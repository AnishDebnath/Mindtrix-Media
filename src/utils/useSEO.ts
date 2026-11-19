import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
}

const BASE_URL = 'https://mindtrixmedia.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

const useSEO = ({
  title,
  description,
  keywords,
  canonicalPath = '/',
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Core meta
    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    // Canonical URL
    setLink('canonical', `${BASE_URL}${canonicalPath}`);

    // Open Graph
    setMeta('og:type', 'website', true);
    setMeta('og:site_name', 'Mindtrix Media', true);
    setMeta('og:url', `${BASE_URL}${canonicalPath}`, true);
    setMeta('og:title', ogTitle ?? title, true);
    setMeta('og:description', ogDescription ?? description, true);
    setMeta('og:image', ogImage ?? DEFAULT_OG_IMAGE, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:site', '@MindtrixMedia');
    setMeta('twitter:title', twitterTitle ?? ogTitle ?? title);
    setMeta('twitter:description', twitterDescription ?? ogDescription ?? description);
    setMeta('twitter:image', twitterImage ?? ogImage ?? DEFAULT_OG_IMAGE);

    // Structured Data (JSON-LD)
    let scriptEl = document.querySelector<HTMLScriptElement>('script[data-seo="structured-data"]');
    if (structuredData) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.setAttribute('type', 'application/ld+json');
        scriptEl.setAttribute('data-seo', 'structured-data');
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(structuredData);
    } else if (scriptEl) {
      // Remove structured data if none provided for this page
      scriptEl.remove();
    }
  }, [
    title, description, keywords, canonicalPath,
    ogTitle, ogDescription, ogImage,
    twitterTitle, twitterDescription, twitterImage,
    structuredData,
  ]);
};

export default useSEO;
