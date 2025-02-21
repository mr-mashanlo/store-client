import { z } from 'zod';

import { ProductSchema } from '@/shared/schemas';

export const OrderRequestSchema = z.object( {
  user: z.string(),
  address: z.string(),
  status: z.enum( [ 'Processing', 'Delivering', 'Done' ] ),
  created: z.string(),
  products: z.array( z.object( {
    product: z.string(),
    price: z.number(),
    quantity: z.number()
  } ) )
} );

export const OrderResponseSchema = z.object( {
  _id: z.string(),
  user: z.string(),
  address: z.string(),
  status: z.string(),
  created: z.string(),
  closed: z.number().optional(),
  products: z.array( z.object( {
    product: ProductSchema,
    price: z.number(),
    quantity: z.number()
  } ) )
} );

export const OrdersRequestSchema = z.array( OrderRequestSchema );

export const OrdersResponseSchema = z.array( OrderResponseSchema );