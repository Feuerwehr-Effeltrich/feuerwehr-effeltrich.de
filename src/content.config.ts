import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const einsaetze = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/einsaetze' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.date(),
      image: image().optional(),
    }),
});

export const collections = { einsaetze };
