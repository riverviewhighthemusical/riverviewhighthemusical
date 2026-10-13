import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE_TIMEZONE } from '../consts';

export type Post = CollectionEntry<'posts'>;

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => data.published);
  return posts.sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
}

function dateParts(date: Date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: SITE_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)!.value;
  return { year: get('year'), month: get('month'), day: get('day') };
}

/**
 * Reproduces Jekyll's default `/:categories/:year/:month/:day/:title` permalink
 * (without the `.html`) so links to the old site keep working.
 */
export function postPath(post: Post): string {
  const { year, month, day } = dateParts(post.data.date);
  const categories = post.data.categories.map((c) => c.toLowerCase());
  return [...categories, year, month, day, post.data.slug].join('/');
}

export function formatPostDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: SITE_TIMEZONE,
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}
