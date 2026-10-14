import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The key from the product's payhip.com/b/... URL, not the full URL.
const payhip = z
  .string()
  .regex(/^[A-Za-z0-9]{5}$/, 'Expected a 5-character Payhip product key like "bol40", not a URL');

// Shown after a "$" on the page, so no currency symbol here.
const price = z.string().regex(/^\d+(\.\d{2})?$/, 'Expected a price like "5" or "4.99", without a "$"');

// Soundtrack albums sold on /soundtrack.
const albums = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/albums' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      price,
      image: image(),
      payhip,
      songs: z.array(z.object({ name: z.string() })),
    }),
});

// Sheet music sold on /sheet-music.
const scores = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/scores' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      price,
      image: image(),
      key: z.string(),
      payhip,
      ranges: z.array(z.object({ name: z.string(), range: z.string() })),
    }),
});

export const collections = { albums, scores };
