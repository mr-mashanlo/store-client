import { z } from 'zod';

export const CategoryRequestSchema = z.object( {
  category: z.string()
} );

export const CategoryResponseSchema = z.object( {
  _id: z.string(),
  name: z.string(),
  slug: z.string()
} );