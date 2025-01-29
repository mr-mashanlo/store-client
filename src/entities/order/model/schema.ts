import { z } from 'zod';

import { ProductSchema } from '@/entities/shared';

export const OrderRequestSchema = z.array( z.object( {
  products: z.array( z.object( {
    product: z.string(),
    quantity: z.number()
  } ) )
} ) );

export const OrderResponseSchema = z.array( z.object( {
  _id: z.string(),
  status: z.string(),
  created: z.number(),
  closed: z.number().optional(),
  products: z.array( z.object( {
    quantity: z.number(),
    product: ProductSchema
  } ) )
} ) );

export type OrderRequestType = z.infer<typeof OrderRequestSchema>;

export type OrderResponseType = z.infer<typeof OrderResponseSchema>;