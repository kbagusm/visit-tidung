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

// Tambahkan koleksi artikel
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/contents/articles' }),
  schema: ({ image }) => 
    z.object({
      title: z.string(),
      excerpt: z.string(),
      author: z.string(),
      date: z.coerce.date(), // Perubahan penting di sini
      readTime: z.string(),
      image: image(),
      featuredImage: z.object({
        src: image(),
        alt: z.string(),
      }),
    }),
});

const culinary = defineCollection({
  loader: file('src/data/map/culinary.json'),
  schema: z.object({
    id: z.number(),
    name: z.string(),
    operational: z.string().optional(),
    price: z.string().optional(),
    facility: z.string().optional(),
    menu: z.string().optional(),
    lat: z.number(),
    lng: z.number(),
  }),
});

const lodgings = defineCollection({
  loader: file('src/data/map/lodgings.json'),
  schema: z.object({
    id: z.number(),
    name: z.string(),
    operational: z.string().optional(),
    price: z.string().optional(),
    facility: z.string().optional(),
    lat: z.number(),
    lng: z.number(),
  }),
});

export const collections = { 
  places, 
  culinary, 
  lodgings,
  articles // Pastikan koleksi artikel diekspor
};