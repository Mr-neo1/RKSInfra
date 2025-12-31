/**
 * Sitemap Generator Script
 * Generates sitemap.xml for SEO
 * Run: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.REACT_APP_SITE_URL || 'https://rksinfra.com';
const BUILD_DIR = path.join(__dirname, '..', 'public');

// All routes in your application
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/1', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/2', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/3', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/4', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/5', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/6', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/7', priority: '0.8', changefreq: 'monthly' },
  { path: '/portfolio', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions', priority: '0.8', changefreq: 'monthly' },
  { path: '/how-we-work', priority: '0.8', changefreq: 'monthly' },
  { path: '/case-studies', priority: '0.8', changefreq: 'monthly' },
];

const currentDate = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Ensure public directory exists
if (!fs.existsSync(BUILD_DIR)) {
  fs.mkdirSync(BUILD_DIR, { recursive: true });
}

// Write sitemap.xml
fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemap, 'utf8');
console.log('✅ Sitemap generated successfully at public/sitemap.xml');

