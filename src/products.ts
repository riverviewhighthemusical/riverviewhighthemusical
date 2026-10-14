import { getCollection } from 'astro:content';

/**
 * Returns a product collection in display order (filenames are date-prefixed).
 * Fails the build if two products, in either collection, share a Payhip key,
 * since buyers of one would be sent to the other's checkout.
 */
export async function getProducts<C extends 'albums' | 'scores'>(collection: C) {
  const [albums, scores] = await Promise.all([getCollection('albums'), getCollection('scores')]);
  const seen = new Map<string, string>();
  for (const { collection: c, id, data } of [...albums, ...scores]) {
    const other = seen.get(data.payhip);
    if (other) {
      throw new Error(`Payhip key "${data.payhip}" is used by both ${other} and ${c}/${id}`);
    }
    seen.set(data.payhip, `${c}/${id}`);
  }

  return (await getCollection(collection)).sort((a, b) => a.id.localeCompare(b.id));
}
