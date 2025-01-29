import { z } from 'zod';

import { ProductSchema } from '@/entities/shared';

export const CartRequestSchema = z.object( {
  product: z.string(),
  quantity: z.number()
} );

export const CartResponseSchema = z.array( z.object( {
  _id: z.string(),
  products: z.array( z.object( {
    product: ProductSchema,
    quantity: z.number()
  } ) )
} ) );

export type CartRequestType = z.infer<typeof CartRequestSchema>;

export type CartResponseType = z.infer<typeof CartResponseSchema>;