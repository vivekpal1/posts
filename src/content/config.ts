import { z, defineCollection } from 'astro:content'

// Existing collections
const postCollection2022 = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    collection: z.union([z.string(), z.number()]),
    description: z.string().optional(),
    readingTime: z.number().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

const postCollection2023 = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    collection: z.union([z.string(), z.number()]),
    description: z.string().optional(),
    readingTime: z.number().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

const postCollection2024 = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    collection: z.union([z.string(), z.number()]),
    description: z.string().optional(),
    readingTime: z.number().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

const postCollection2025 = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    collection: z.union([z.string(), z.number()]),
    description: z.string().optional(),
    readingTime: z.number().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

// New wiki collections
const wiki = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    country: z.string(),
    city: z.string(),
    category: z.string(),
    lastUpdated: z.string(),
    tags: z.array(z.string()).default([]),
    rating: z.number().min(1).max(5).optional(),
    priceRange: z.string().optional(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }).optional(),
    address: z.string().optional(),
    contactInfo: z.object({
      phone: z.string().optional(),
      website: z.string().optional(),
      instagram: z.string().optional(),
    }).optional(),
  }),
})

export const collections = {
  2022: postCollection2022,
  2023: postCollection2023,
  2024: postCollection2024,
  2025: postCollection2025,
  wiki,
}