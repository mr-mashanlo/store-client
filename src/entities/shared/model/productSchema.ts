import { z } from 'zod';

export const ProductSchema = z.object( {
  _id: z.string(),
  images: z.array( z.string() ).optional(),
  name: z.string(),
  price: z.number(),
  discount: z.number().optional(),
  description: z.string().optional(),
  categories: z.array( z.string() ).optional()
} );