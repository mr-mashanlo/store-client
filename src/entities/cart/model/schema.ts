import { z } from 'zod';

import { ProductSchema } from '@/shared/schemas';

export const CartSchema = z.object( {
  product: ProductSchema,
  quantity: z.number()
} );

export const CartRequestSchema = z.object( {
  product: z.string(),
  quantity: z.number()
} );

export const CartResponseSchema = z.object( {
  _id: z.string(),
  user: z.string(),
  products: z.array( CartSchema )
} );