import { z } from 'zod';

export const ProductResponseSchema = z.object( {
  _id: z.string(),
  images: z.array( z.string() ),
  name: z.string(),
  price: z.number(),
  discount: z.number(),
  description: z.string(),
  categories: z.array( z.string() ).optional()
} );

export const ProductsResponseSchema = z.array( ProductResponseSchema );

export type ProductResponseType = z.infer<typeof ProductResponseSchema>;

export type ProductsResponseType = z.infer<typeof ProductsResponseSchema>;