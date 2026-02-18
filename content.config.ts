import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
        tags: z.array(z.string()).optional(),
        category: z.string().optional(),
        readTime: z.number().optional(),
        image: z.string().optional(),
        coverImage: z.string().optional(),
      })
    }),
    changelog: defineCollection({
      type: 'page',
      source: 'changelog/**/*.md',
      schema: z.object({
        version: z.string(),
        date: z.string(),
        title: z.string(),
      })
    })
  }
})
