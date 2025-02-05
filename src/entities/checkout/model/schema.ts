import { z } from 'zod';

import { ProductSchema } from '@/entities/shared';

export const CheckoutResponseSchema = z.object( {
  products: z.array( z.object( {
    product: ProductSchema,
    quantity: z.number(),
    price: z.number()
  } ) ),
  user: z.string(),
  address: z.string(),
  status: z.string(),
  created: z.number(),
  closed: z.number().optional()
} );

export type CheckoutResponseType = z.infer<typeof CheckoutResponseSchema>;