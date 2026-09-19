import { useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage,
  schema,
}: SEOProps) {
  useEffect(() => {
    // 1. Page Title
    const baseTitle = `${siteConfig.brandNameHindi} | ${siteConfig.brandName}`;
    const fullTitle = title ? `${title} | ${siteConfig.brandNameHindi}` : `${baseTitle} - प्रामाणिक वैदिक ज्योतिष परामर्श`;
    document.title = fullTitle;

    // Helper to set or create meta tags
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          const name = selector.match(/meta\[name="([^"]+)"\]/)?.[1];
          if (name) el.setAttribute('name', name);
        } else if (selector.startsWith('meta[property=')) {
          const prop = selector.match(/meta\[property="([^"]+)"\]/)?.[1];
          if (prop) el.setAttribute('property', prop);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // 2. Meta description & keywords
    const desc =
      description ||
      'संगम ज्योतिष संस्थान से प्रामाणिक वैदिक ज्योतिष, कुंडली विश्लेषण, विवाह एवं कुंडली मिलान, प्रेम व संबंध, करियर, व्यापार, वित्त, वास्तु एवं व्यक्तिगत ज्योतिष परामर्श प्राप्त करें।';
    setMetaTag('meta[name="description"]', 'content', desc);

    const kw =
      keywords ||
      'Sangam Jyotish Sansthan, Vedic Astrology, Jyotish Consultation, Kundli Analysis, Marriage Astrology, Career Astrology, Business Astrology, Vastu Consultation, ज्योतिष परामर्श, कुंडली विश्लेषण, वैदिक ज्योतिष';
    setMetaTag('meta[name="keywords"]', 'content', kw);

    // 3. OpenGraph tags
    setMetaTag('meta[property="og:title"]', 'content', fullTitle);
    setMetaTag('meta[property="og:description"]', 'content', desc);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:locale"]', 'content', 'hi_IN');

    const pageUrl = canonical ? `${siteConfig.siteUrl}${canonical}` : window.location.href;
    setMetaTag('meta[property="og:url"]', 'content', pageUrl);

    if (ogImage) {
      setMetaTag('meta[property="og:image"]', 'content', ogImage);
    }

    // 4. Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageUrl);

    // 5. Schema.org JSON-LD structured data
    let scriptTag = document.getElementById('dynamic-seo-schema') as HTMLScriptElement | null;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-seo-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, keywords, canonical, ogType, ogImage, schema]);

  return null;
}
