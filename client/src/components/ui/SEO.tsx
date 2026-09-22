import { useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_KEYWORDS = [
  'Sangam Jyotish Sansthan',
  'संगम ज्योतिष संस्थान',
  'Vedic Astrology India',
  'वैदिक ज्योतिष',
  'Jyotish Consultation',
  'ज्योतिष परामर्श',
  'Kundli Analysis',
  'कुंडली विश्लेषण',
  'Kundali Matching for Marriage',
  'विवाह कुंडली मिलान',
  'Career Astrology',
  'करियर ज्योतिष',
  'Vastu Shastra Consultant',
  'वास्तु परामर्श',
  'Graha Shanti Pooja',
  'ग्रह शांति पूजा',
  'Best Astrologer Online',
];

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage,
  ogImageAlt,
  noindex = false,
  schema,
}: SEOProps) {
  useEffect(() => {
    // 1. Page Title
    const baseTitle = `${siteConfig.brandNameHindi} | ${siteConfig.brandName}`;
    const fullTitle = title
      ? `${title} | ${siteConfig.brandNameHindi}`
      : `${baseTitle} - प्रामाणिक वैदिक ज्योतिष परामर्श`;
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

    let kwString = '';
    if (Array.isArray(keywords)) {
      kwString = Array.from(new Set([...keywords, ...DEFAULT_KEYWORDS])).join(', ');
    } else if (typeof keywords === 'string' && keywords.trim()) {
      kwString = `${keywords}, ${DEFAULT_KEYWORDS.slice(0, 8).join(', ')}`;
    } else {
      kwString = DEFAULT_KEYWORDS.join(', ');
    }
    setMetaTag('meta[name="keywords"]', 'content', kwString);

    // 3. Robots
    const robotsContent = noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    setMetaTag('meta[name="robots"]', 'content', robotsContent);
    setMetaTag('meta[name="googlebot"]', 'content', robotsContent);

    // 4. OpenGraph tags
    setMetaTag('meta[property="og:title"]', 'content', fullTitle);
    setMetaTag('meta[property="og:description"]', 'content', desc);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:site_name"]', 'content', siteConfig.brandNameHindi);
    setMetaTag('meta[property="og:locale"]', 'content', 'hi_IN');

    const pageUrl = canonical ? `${siteConfig.siteUrl}${canonical}` : window.location.href;
    setMetaTag('meta[property="og:url"]', 'content', pageUrl);

    const imageToUse = ogImage || `${siteConfig.siteUrl}/favicon.svg`;
    setMetaTag('meta[property="og:image"]', 'content', imageToUse);
    setMetaTag('meta[property="og:image:alt"]', 'content', ogImageAlt || fullTitle);

    // 5. Twitter Card tags
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:site"]', 'content', '@sangamjyotish');
    setMetaTag('meta[name="twitter:title"]', 'content', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'content', desc);
    setMetaTag('meta[name="twitter:image"]', 'content', imageToUse);

    // 6. Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageUrl);

    // 7. Schema.org JSON-LD structured data
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
  }, [title, description, keywords, canonical, ogType, ogImage, ogImageAlt, noindex, schema]);

  return null;
}
