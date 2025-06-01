import { defineCollection, z } from 'astro:content'

const postCollection2022 = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    collection: z.number(),
    description: z.string().optional(),
    readingTime: z.number().optional(),
  }),
})

const postCollection2023 = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    collection: z.number(),
    description: z.string().optional(),
    readingTime: z.number().optional(),
  }),
})

const postCollection2024 = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    collection: z.number(),
    description: z.string().optional(),
    readingTime: z.number().optional(),
  }),
})

const postCollection2025 = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    collection: z.number(),
    description: z.string().optional(),
    readingTime: z.number().optional(),
  }),
})

// New Wiki Collection
const wikiCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(), // e.g., "danang", "saigon", "thailand"
    category: z.string(), // e.g., "cafe", "coworking", "vegan-food"
    isPremium: z.boolean().default(false),
    previewLength: z.number().default(200), // Characters to show in free preview
    lastUpdated: z.string(),
    tags: z.array(z.string()).optional(),
    rating: z.number().min(1).max(5).optional(),
    priceRange: z.string().optional(), // "$", "$$", "$$$"
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    }).optional(),
  }),
})

export const collections = {
  2022: postCollection2022,
  2023: postCollection2023,
  2024: postCollection2024,
  2025: postCollection2025,
  wiki: wikiCollection,
}