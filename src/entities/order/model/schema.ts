import { z } from 'zod';

import { ProductSchema } from '@/entities/shared';

export const OrderRequestSchema = z.object( {
  user: z.string(),
  address: z.string(),
  status: z.enum( [ 'Processing', 'Delivering', 'Done' ] ),
  created: z.number(),
  products: z.array( z.object( {
    product: z.string(),
    price: z.number(),
    quantity: z.number()
  } ) )
} );

export const OrderResponseSchema = z.array( z.object( {
  _id: z.string(),
  user: z.string(),
  address: z.string(),
  status: z.string(),
  created: z.number(),
  closed: z.number().optional(),
  products: z.array( z.object( {
    product: ProductSchema,
    price: z.number(),
    quantity: z.number()
  } ) )
} ) );

export type OrderRequestType = z.infer<typeof OrderRequestSchema>;

export type OrderResponseType = z.infer<typeof OrderResponseSchema>;