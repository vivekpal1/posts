import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
  const collection2023 = await getCollection('2023')
  const collection2024 = await getCollection('2024')
  const posts = [...collection2024, ...collection2023]
  return rss({
    title: 'yi',
    description: 'posts',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/post/${post.slug}/`,
    })),
  })
}
