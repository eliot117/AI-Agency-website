import React, { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FAQItemSchema {
  question: string;
  answer: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItemSchema[];
  additionalSchemas?: Record<string, unknown>[];
}

const DEFAULT_ORIGIN =
  typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : 'https://ai-launch-agency.vercel.app';

export const BASE_BUSINESS_SCHEMA = (origin: string = DEFAULT_ORIGIN) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${origin}/#organization`,
  name: 'AI Launch',
  url: `${origin}/`,
  logo: `${origin}/logo.png`,
  image: `${origin}/logo.png`,
  telephone: '+61431173090',
  email: 'eliot.rbn18@gmail.com',
  priceRange: '$$',
  description:
    'Turn missed calls into booked appointments on autopilot with 24/7 AI phone receptionists, automated follow-ups, and calendar booking agents.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    addressCountry: 'AU',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  knowsAbout: [
    'Artificial Intelligence Automation',
    'AI Phone Receptionist',
    'Appointment Scheduling AI',
    'Lead Follow-up Automation',
    'Customer Support AI Widgets',
  ],
});

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website',
  ogImage = '/logo.png',
  breadcrumbs,
  faqs,
  additionalSchemas = [],
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const origin = window.location.origin || DEFAULT_ORIGIN;
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${origin}${cleanPath === '/' ? '' : cleanPath}`;
    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${origin}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

    // 1. Page Title
    document.title = title;

    // Helper to set or update meta tag by name or property
    const setMetaTag = (attributeName: 'name' | 'property', attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attributeName}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Standard Meta Description
    setMetaTag('name', 'description', description);

    // 3. Robots
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 4. Canonical Link Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 5. OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:site_name', 'AI Launch');
    setMetaTag('property', 'og:locale', 'en_US');

    // 6. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // 7. Structured Data (JSON-LD)
    const schemaList: Record<string, unknown>[] = [
      BASE_BUSINESS_SCHEMA(origin),
    ];

    // If on homepage, add WebSite schema
    if (cleanPath === '/' || cleanPath === '') {
      schemaList.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        name: 'AI Launch',
        url: `${origin}/`,
        description: 'Turn missed calls into booked appointments on autopilot with AI Launch',
        publisher: {
          '@id': `${origin}/#organization`,
        },
      });
    }

    // Breadcrumbs schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaList.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: crumb.path.startsWith('http')
            ? crumb.path
            : `${origin}${crumb.path.startsWith('/') ? crumb.path : `/${crumb.path}`}`,
        })),
      });
    }

    // FAQ schema
    if (faqs && faqs.length > 0) {
      schemaList.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    // Additional schemas
    schemaList.push(...additionalSchemas);

    // Inject into head
    const SCRIPT_ID = 'ai-launch-structured-data';
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaList.length === 1 ? schemaList[0] : schemaList, null, 2);
    // 8. GA4 Page View Tracking (if gtag loaded)
    if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'page_view', {
        page_title: title,
        page_location: canonicalUrl,
        page_path: cleanPath,
      });
    }
  }, [
    title,
    description,
    canonicalPath,
    ogType,
    ogImage,
    breadcrumbs,
    faqs,
    additionalSchemas,
  ]);

  return null;
};

export default SEO;
