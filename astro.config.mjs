// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.riverviewhighthemusical.com',
  // Emit `about/index.html` for pages and `2012/07/23/slug.html` for posts,
  // matching the URLs the old Jekyll site published.
  build: { format: 'preserve' },
  // Compression strips the line break before inline tags like <strong>,
  // gluing words together in the hand-wrapped page copy.
  compressHTML: false,
});
