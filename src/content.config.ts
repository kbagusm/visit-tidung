import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const places = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/contents/places' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      featuredImage: image(),
    }),
});

const culinary = defineCollection({
  loader: file('src/data/map/culinary.json'),
  schema: z.object({
    id: z.number(),
    name: z.string(),
    lat: z.number(),
    lng: z.number(),
  }),
});

const lodgings = defineCollection({
  loader: file('src/data/map/lodgings.json'),
  schema: z.object({
    id: z.number(),
    name: z.string(),
    lat: z.number(),
    lng: z.number(),
  }),
});

export const collections = { places, culinary, lodgings };