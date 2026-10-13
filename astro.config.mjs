// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.riverviewhighthemusical.com',
  // Compression strips the line break before inline tags like <strong>,
  // gluing words together in the hand-wrapped page copy.
  compressHTML: false,
});
