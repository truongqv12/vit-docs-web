import type { APIRoute } from 'astro';

/**
 * Sitemap tĩnh — chỉ còn tiếng Việt (vi), phục vụ tại '/'
 */
export const GET: APIRoute = () => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'http://localhost';

  // Danh sách tất cả trang công khai
  // Chỉ liệt kê trang còn tồn tại sau prune P3
  // Trang đã xóa: ccs, codex-app, ck-with-codex, deals, donate, promotions, lucky-draw, happy-ccs
  const pages = [
    { path: '/guides', changefreq: 'weekly', priority: '1.0' },
    { path: '/guides/what-is-claudekit', changefreq: 'monthly', priority: '0.9' },
    { path: '/guides/cli', changefreq: 'monthly', priority: '0.9' },
    { path: '/guides/commands', changefreq: 'monthly', priority: '0.8' },
    { path: '/guides/workflows', changefreq: 'monthly', priority: '0.8' },
    { path: '/guides/flowchart', changefreq: 'monthly', priority: '0.8' },
    { path: '/guides/uiux', changefreq: 'monthly', priority: '0.8' },
    { path: '/guides/permissions', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/fix-logs', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/session-recovery', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/hooks', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/coexistence', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/ide-config', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/remote-control', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/how-ck-works', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/inside-claudekit', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/migrate', changefreq: 'monthly', priority: '0.6' },
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
