import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// News posts imported from the original WordPress site (2012–2013).
const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    author: z.string().optional(),
    categories: z.array(z.string()).default([]),
    published: z.boolean().default(true),
  }),
});

// Soundtrack albums sold on /soundtrack.
const albums = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/albums' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      price: z.string(),
      image: image(),
      paypal: z.string(),
      songs: z.array(z.object({ name: z.string() })),
    }),
});

// Sheet music sold on /sheet-music.
const scores = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/scores' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      price: z.string(),
      image: image(),
      key: z.string(),
      paypal: z.string(),
      ranges: z.array(z.object({ name: z.string(), range: z.string() })),
    }),
});

export const collections = { posts, albums, scores };
