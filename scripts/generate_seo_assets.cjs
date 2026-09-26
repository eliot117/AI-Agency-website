/**
 * Generates public/sitemap.xml and public/robots.txt
 * Automatically includes all core pages, services, and integrations.
 */
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://ais-pre-n3umzxa6pxb3kvsljrc3s6-43670058807.asia-east1.run.app';
const TODAY = '2026-09-25';

// Core routes
const CORE_ROUTES = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: 'services', changefreq: 'weekly', priority: '0.9' },
  { path: 'pricing', changefreq: 'weekly', priority: '0.9' },
  { path: 'integrations', changefreq: 'weekly', priority: '0.8' },
  { path: 'contact', changefreq: 'monthly', priority: '0.8' },
];

// Extract service slugs from src/data/servicesData.ts
const servicesFile = fs.readFileSync(path.join(__dirname, '../src/data/servicesData.ts'), 'utf8');
const serviceSlugs = [...servicesFile.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
// dedupe
const uniqueServiceSlugs = Array.from(new Set(serviceSlugs));

// Extract integration slugs from src/data/integrationsData.ts
const integrationsFile = fs.readFileSync(path.join(__dirname, '../src/data/integrationsData.ts'), 'utf8');
const integrationSlugs = [...integrationsFile.matchAll(/"slug":\s*"([^"]+)"/g)].map((m) => m[1]);
const uniqueIntegrationSlugs = Array.from(new Set(integrationSlugs));

console.log(`Found ${uniqueServiceSlugs.length} services and ${uniqueIntegrationSlugs.length} integrations.`);

// Build sitemap XML
const allUrls = [
  ...CORE_ROUTES.map((r) => ({
    loc: r.path ? `${SITE_URL}/${r.path}` : `${SITE_URL}/`,
    changefreq: r.changefreq,
    priority: r.priority,
  })),
  ...uniqueServiceSlugs.map((slug) => ({
    loc: `${SITE_URL}/services/${slug}`,
    changefreq: 'monthly',
    priority: '0.85',
  })),
  ...uniqueIntegrationSlugs.map((slug) => ({
    loc: `${SITE_URL}/integrations/${slug}`,
    changefreq: 'monthly',
    priority: '0.7',
  })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Generated public/sitemap.xml with ${allUrls.length} URLs.`);

// Build robots.txt
const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
console.log('Generated public/robots.txt successfully.');
