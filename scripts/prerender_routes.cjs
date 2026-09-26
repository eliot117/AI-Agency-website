/**
 * Pre-renders static HTML pages for all routes into dist/
 * Ensures that direct HTTP GET requests return unique titles, meta tags, canonicals,
 * OpenGraph, Twitter Cards, JSON-LD structured data, and semantic H1 content directly in the server response.
 */
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://ais-pre-n3umzxa6pxb3kvsljrc3s6-43670058807.asia-east1.run.app';

const distDir = path.join(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html does not exist. Run "vite build" first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Load SEO metadata & raw data
const servicesFile = fs.readFileSync(path.join(__dirname, '../src/data/servicesData.ts'), 'utf8');
const integrationsFile = fs.readFileSync(path.join(__dirname, '../src/data/integrationsData.ts'), 'utf8');

// Parse services reliably
const serviceSlugMatches = [...servicesFile.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
const uniqueServiceSlugs = Array.from(new Set(serviceSlugMatches));

const services = uniqueServiceSlugs.map((slug) => {
  const blockMatch = new RegExp(`slug:\\s*['"]${slug}['"][\\s\\S]*?\\n\\s*\\},`).exec(servicesFile);
  const block = blockMatch ? blockMatch[0] : '';
  const nameMatch = block.match(/name:\s*['"]([^'"]+)['"]/);
  const catMatch = block.match(/category:\s*['"]([^'"]+)['"]/);
  const descMatch = block.match(/shortDescription:\s*['"]([^'"]+)['"]/);
  const taglineMatch = block.match(/tagline:\s*['"]([^'"]+)['"]/);
  const logoMatch = block.match(/logoUrl:\s*['"]([^'"]+)['"]/);

  return {
    slug,
    name: nameMatch ? nameMatch[1] : slug,
    category: catMatch ? catMatch[1] : 'Inbound AI Agents',
    shortDescription: descMatch ? descMatch[1] : 'Autonomous AI agent by AI Launch.',
    tagline: taglineMatch ? taglineMatch[1] : '',
    logoUrl: logoMatch ? logoMatch[1] : '/logo.png',
  };
});

// Parse integrations
const integrationsRegex = /"slug":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"category":\s*"([^"]+)",\s*"shortDescription":\s*"([^"]+)",[\s\S]*?"logoUrl":\s*"([^"]+)"/g;
const integrations = [];
while ((match = integrationsRegex.exec(integrationsFile)) !== null) {
  integrations.push({
    slug: match[1],
    name: match[2],
    category: match[3],
    shortDescription: match[4],
    logoUrl: match[5],
  });
}

console.log(`Prerendering HTML for ${services.length} services and ${integrations.length} integrations...`);

const BASE_ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: 'AI Launch',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
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
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI Launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Launch is an AI system that answers your calls and messages, follows up automatically, and books appointments for you around the clock, without hiring extra staff.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does AI Launch integrate with my existing tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI Launch connects with the tools you already use, like your calendar and messaging apps, so everything fits into how you already work.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of support do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer ongoing support from day one, helping you get set up, adjusting your AI as your business changes, and troubleshooting whenever something needs a look.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the AI follow-up work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your AI automatically follows up with new enquiries, keeps the conversation moving, and turns interest into a booked appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your AI runs on established, secure platforms (like Make.com), so your data and your customers information are handled properly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I customize the AI responses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every AI is built around your business, tone, and how you want customers spoken to, not a generic script.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel my subscription anytime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can cancel anytime, no long-term lock-in. Your AI stays active until the end of your current billing period.',
      },
    },
  ],
};

function createPageHtml({
  title,
  description,
  canonicalPath,
  ogImage = '/logo.png',
  breadcrumbs = [],
  h1Text,
  subheadText,
  extraSchemas = [],
}) {
  const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  const schemas = [BASE_ORGANIZATION_SCHEMA];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: `${SITE_URL}${b.path === '/' ? '' : b.path}`,
      })),
    });
  }

  schemas.push(FAQ_SCHEMA);
  schemas.push(...extraSchemas);

  let html = templateHtml;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

  // Replace description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${description}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace og:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${title}" />`
  );

  // Replace og:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${description}" />`
  );

  // Replace og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace og:image
  html = html.replace(
    /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:image" content="${fullOgImage}" />`
  );

  // Replace twitter:title
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${title}" />`
  );

  // Replace twitter:description
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${description}" />`
  );

  // Replace twitter:image
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:image" content="${fullOgImage}" />`
  );

  // Replace JSON-LD schema
  const schemaScriptTag = `<script type="application/ld+json" id="ai-launch-structured-data">\n${JSON.stringify(
    schemas,
    null,
    2
  )}\n</script>`;
  html = html.replace(
    /<script\s+type="application\/ld\+json"\s+id="ai-launch-structured-data">[\s\S]*?<\/script>/i,
    schemaScriptTag
  );

  // Pre-seed <div id="root"> with semantic SSR HTML fallback for crawlers that do not execute JS
  const ssrMarkup = `<div id="root"><header style="padding:16px 24px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;justify-content:space-between"><a href="/" style="font-weight:bold;font-size:20px;text-decoration:none;color:#0a0a0a">AI Launch</a><nav><a href="/services" style="margin:0 12px;color:#525252;text-decoration:none">Services</a><a href="/pricing" style="margin:0 12px;color:#525252;text-decoration:none">Pricing</a><a href="/integrations" style="margin:0 12px;color:#525252;text-decoration:none">Integrations</a><a href="/contact" style="margin:0 12px;color:#525252;text-decoration:none">Contact</a></nav></header><main style="max-width:1200px;margin:0 auto;padding:48px 24px"><h1 style="font-size:40px;font-weight:700;margin-bottom:16px;color:#0a0a0a">${h1Text}</h1><p style="font-size:18px;color:#525252;max-width:800px;line-height:1.6;margin-bottom:32px">${subheadText}</p></main></div>`;
  html = html.replace(/<div id="root"><\/div>/, ssrMarkup);

  return html;
}

// 1. Core routes
const corePages = [
  {
    route: 'pricing',
    title: 'Transparent Pricing & Plans | AI Launch Phone Agents',
    description:
      'Explore transparent pricing for AI Launch inbound phone agents, outbound follow-ups, and full-time AI architect systems. Scale your business on autopilot.',
    h1Text: 'Pricing scales for business.',
    subheadText: 'Plans built for founders, teams, and enterprises to automate appointments.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' },
    ],
    extraSchemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: 'AI Launch Plans & Pricing',
      },
    ],
  },
  {
    route: 'services',
    title: 'Autonomous AI Agents & Consulting Services | AI Launch',
    description:
      'Discover autonomous inbound and outbound AI agents from AI Launch. From 24/7 receptionists to lead follow-up and review capture, automate your front desk.',
    h1Text: 'Services',
    subheadText: 'Every AI agent and plan AI Launch offers, built to run your business on autopilot.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ],
  },
  {
    route: 'integrations',
    title: '40+ Business App & CRM Integrations | AI Launch',
    description:
      'Seamlessly connect AI Launch with Google Calendar, Outlook, Slack, HubSpot, Zapier, PayPal, and 40+ productivity, communication, and payment platforms.',
    h1Text: 'Integrations',
    subheadText: 'Connect AI, productivity, communication, and payment tools to create powerful workflows.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Integrations', path: '/integrations' },
    ],
  },
  {
    route: 'contact',
    title: 'Book a Live Demo & Free AI Consulting | AI Launch',
    description:
      'Get in touch with AI Launch in Melbourne, VIC. Book a personalized live demo, schedule free AI consulting, or submit your business inquiry to our team.',
    h1Text: "We're here to help you grow your business.",
    subheadText: 'Have a question or want to see how AI could work for your business? Send a message or book a demo.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
    extraSchemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact AI Launch',
      },
    ],
  },
];

for (const page of corePages) {
  const pageHtml = createPageHtml({
    title: page.title,
    description: page.description,
    canonicalPath: `/${page.route}`,
    h1Text: page.h1Text,
    subheadText: page.subheadText,
    breadcrumbs: page.breadcrumbs,
    extraSchemas: page.extraSchemas,
  });

  const pageDir = path.join(distDir, page.route);
  if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });
  fs.writeFileSync(path.join(pageDir, 'index.html'), pageHtml, 'utf8');
}
console.log(`Generated HTML for ${corePages.length} core pages.`);

// 2. Service detail pages
const serviceTitles = {
  'consulting-plan': 'Free AI Business Consulting Call | AI Launch Strategy',
  'receptionist-ai-agent': '24/7 Receptionist AI Agent | Inbound Call Answering',
  'customer-support-ai-call-agent': 'Customer Support AI Call Agent | 24/7 Phone Support',
  'customer-support-ai-agent-widget': 'Customer Support AI Chat Widget | Website Conversion',
  'spam-filter-ai-agent': 'Spam Filter AI Agent | Automatic Robocall Screening',
  'lead-call-ai-agent': 'Lead Call AI Agent | Outbound Lead Follow-Up in Minutes',
  'reviews-ai-agent': 'Google Reviews AI Agent | Automated Feedback & Ratings',
  'full-time-plan': 'Full Time Dedicated AI Architect | Enterprise Automation',
};

const serviceDescriptions = {
  'consulting-plan': 'Book a free, no-obligation AI consulting call. We map out your workflows, review assessment findings, and show live agent demos tailored to your business.',
  'receptionist-ai-agent': 'Answers every inbound customer call, books calendar appointments 24/7, filters spam, and connects to your CRM. Never lose another booking to voicemail.',
  'customer-support-ai-call-agent': 'Handle customer support calls around the clock with AI. Answers account and billing questions from your knowledge base with warm human agent escalation.',
  'customer-support-ai-agent-widget': 'Convert website visitors into booked appointments and buyers 24/7 with an on-brand AI chat widget answering product, pricing, and policy inquiries.',
  'spam-filter-ai-agent': 'Screens every incoming phone call in seconds. Automatically blocks robocalls and spam while routing genuine customer inquiries directly to your team.',
  'lead-call-ai-agent': 'Calls inbound leads within minutes of form submission, qualifies interest, handles common objections, and books meetings before inquiries go cold.',
  'reviews-ai-agent': 'Automatically calls customers after completed jobs to collect 5-star Google reviews and routes unsatisfied feedback privately to protect your reputation.',
  'full-time-plan': 'Empower your enterprise with a dedicated AI architect. Includes all inbound and outbound agents, bespoke workflows, custom tooling, and AI infrastructure.',
};

for (const srv of services) {
  const title = serviceTitles[srv.slug] || `${srv.name} | Autonomous AI Agent | AI Launch`;
  const description = serviceDescriptions[srv.slug] || srv.shortDescription;
  const isSoftware = srv.category.includes('AI Agents');
  const srvSchema = isSoftware
    ? {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: srv.name,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Cloud',
        description: srv.shortDescription,
        image: `${SITE_URL}${srv.logoUrl}`,
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: srv.name,
        serviceType: srv.category,
        description: srv.shortDescription,
        image: `${SITE_URL}${srv.logoUrl}`,
      };

  const pageHtml = createPageHtml({
    title,
    description,
    canonicalPath: `/services/${srv.slug}`,
    ogImage: srv.logoUrl,
    h1Text: srv.name,
    subheadText: srv.tagline || srv.shortDescription,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: srv.name, path: `/services/${srv.slug}` },
    ],
    extraSchemas: [srvSchema],
  });

  const srvDir = path.join(distDir, 'services', srv.slug);
  if (!fs.existsSync(srvDir)) fs.mkdirSync(srvDir, { recursive: true });
  fs.writeFileSync(path.join(srvDir, 'index.html'), pageHtml, 'utf8');
}
console.log(`Generated HTML for ${services.length} service pages.`);

// 3. Integration detail pages
for (const it of integrations) {
  const truncatedName = it.name.length > 20 ? it.name.slice(0, 18) + '...' : it.name;
  const rawTitle = `Connect ${truncatedName} with AI Launch | Integration`;
  const title =
    rawTitle.length >= 50 && rawTitle.length <= 60
      ? rawTitle
      : `${truncatedName} AI Integration & Automation | AI Launch`.slice(0, 60);

  let description = `${it.shortDescription} Connect ${it.name} with AI Launch to automate appointments, sync customer data, and streamline workflows.`;
  if (description.length > 160) {
    description = description.slice(0, 157) + '...';
  } else if (description.length < 150) {
    description = `${it.shortDescription} Seamlessly integrate ${it.name} with AI Launch to automate incoming calls, appointment bookings, and customer data workflows.`.slice(0, 160);
  }

  const itSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${it.name} Integration for AI Launch`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud',
    description: it.shortDescription,
    image: it.logoUrl,
  };

  const pageHtml = createPageHtml({
    title,
    description,
    canonicalPath: `/integrations/${it.slug}`,
    ogImage: it.logoUrl,
    h1Text: it.name,
    subheadText: it.shortDescription,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Integrations', path: '/integrations' },
      { name: it.name, path: `/integrations/${it.slug}` },
    ],
    extraSchemas: [itSchema],
  });

  const itDir = path.join(distDir, 'integrations', it.slug);
  if (!fs.existsSync(itDir)) fs.mkdirSync(itDir, { recursive: true });
  fs.writeFileSync(path.join(itDir, 'index.html'), pageHtml, 'utf8');
}
console.log(`Generated HTML for ${integrations.length} integration pages.`);
console.log('Static route prerendering completed successfully!');
