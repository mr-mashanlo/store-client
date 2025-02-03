import { z } from 'zod';

import { ProductSchema } from '@/entities/shared';

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
  products: z.array( CartSchema )
} );

export type CartType = z.infer<typeof CartSchema>;

export type CartRequestType = z.infer<typeof CartRequestSchema>;

export type CartResponseType = z.infer<typeof CartResponseSchema>;