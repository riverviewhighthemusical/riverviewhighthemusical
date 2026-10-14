import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Soundtrack albums sold on /soundtrack.
const albums = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/albums' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      price: z.string(),
      image: image(),
      payhip: z.string(),
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
      payhip: z.string(),
      ranges: z.array(z.object({ name: z.string(), range: z.string() })),
    }),
});

export const collections = { albums, scores };
