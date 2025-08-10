import { defineCollection, z } from '@nuxt/content'

export const collections = {
  content: defineCollection({
    type: 'page',
    source: '**/*.md',
    schema: z.object({
      tags: z.array(z.string()),
      image: z.string(),
      date: z.object({
        value: z.date(),
        label: z.string()
      }),
      hero: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        orientation: z.string().optional(),
        img: z.object({
          src: z.string().optional(),
          class: z.string().optional()
        }),
        links: z.array(z.object({
          label: z.string().optional(),
          icon: z.string().optional(),
          trailing: z.boolean().optional(),
          trailingIcon: z.string().optional(),
          to: z.string().optional(),
          target: z.string().optional(),
          color: z.string().optional(),
          size: z.string().optional()
        })).optional()
      }).optional(),
      features: z.object({
        title: z.string(),
        links: z.array(z.object({
          label: z.string().optional(),
          icon: z.string().optional(),
          trailing: z.boolean().optional(),
          trailingIcon: z.string().optional(),
          to: z.string().optional(),
          target: z.string().optional(),
          color: z.string().optional(),
          size: z.string().optional()
        })).optional(),
        items: z.array(z.object({
          title: z.string(),
          description: z.string().optional(),
          icon: z.string().optional(),
          to: z.string().optional(),
          target: z.string().optional()
        })).optional()
      }).optional()
    })
  })
}
