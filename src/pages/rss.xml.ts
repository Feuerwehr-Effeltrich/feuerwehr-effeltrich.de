import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const einsaetze = await getCollection('einsaetze');
  const sorted = einsaetze.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Feuerwehr Effeltrich – Einsätze',
    description: 'Einsatzberichte der Freiwilligen Feuerwehr Effeltrich.',
    site: context.site!.toString(),
    items: sorted.map(entry => ({
      title: entry.data.title,
      description: entry.data.description ?? '',
      pubDate: entry.data.date,
      link: `/einsaetze/${entry.id.replace('/index.md', '')}/`,
    })),
    customData: '<language>de</language>',
  });
}
