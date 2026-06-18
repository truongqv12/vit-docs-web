import type { APIRoute } from 'astro';

/**
 * Sitemap tĩnh — chỉ còn tiếng Việt (vi), phục vụ tại '/'
 */
export const GET: APIRoute = () => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://vividkit.com';

  // Danh sách tất cả trang công khai
  const pages = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/guides', changefreq: 'weekly', priority: '0.9' },
    { path: '/guides/commands', changefreq: 'monthly', priority: '0.8' },
    { path: '/guides/workflows', changefreq: 'monthly', priority: '0.8' },
    { path: '/guides/uiux', changefreq: 'monthly', priority: '0.8' },
    { path: '/guides/ccs', changefreq: 'monthly', priority: '0.8' },
    { path: '/guides/permissions', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/fix-logs', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/session-recovery', changefreq: 'monthly', priority: '0.7' },
  ];

  const lastmod = new Date().toISOString().split('T')[0];

  // Chỉ sinh một entry mỗi trang — tiếng Việt tại '/'
  const urlEntries = pages.map((page) => `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="vi" href="${siteUrl}${page.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${page.path}" />
  </url>`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
