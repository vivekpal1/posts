export async function get() {
  const { getCollection } = await import('astro:content');
  
  const posts2025 = await getCollection('2025');
  const posts2024 = await getCollection('2024');
  const posts2023 = await getCollection('2023');
  const wikiEntries = await getCollection('wiki');
  
  const allContent = [
    ...posts2025.map(post => ({ slug: `posts/${post.slug}`, date: post.data.pubDate })),
    ...posts2024.map(post => ({ slug: `posts/${post.slug}`, date: post.data.pubDate })),
    ...posts2023.map(post => ({ slug: `posts/${post.slug}`, date: post.data.pubDate })),
    ...wikiEntries.map(entry => ({ slug: `wiki/${entry.slug}`, date: entry.data.lastUpdated })),
  ];

  const staticPages = [
    { slug: '', date: '2025-01-15' },
    { slug: 'posts', date: '2025-01-15' },
    { slug: 'projects', date: '2025-01-15' },
    { slug: 'wiki', date: '2025-01-15' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...staticPages, ...allContent]
    .map(({ slug, date }) => `
  <url>
    <loc>https://vivekpal.xyz/${slug}</loc>
    <lastmod>${date}</lastmod>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' }
  });
}