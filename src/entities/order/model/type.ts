import { z } from 'zod';

import { OrderRequestSchema, OrderResponseSchema, OrdersRequestSchema, OrdersResponseSchema } from './schema';

export type OrderRequestType = z.infer<typeof OrderRequestSchema>;

export type OrderResponseType = z.infer<typeof OrderResponseSchema>;

export type OrdersRequestType = z.infer<typeof OrdersRequestSchema>;

export type OrdersResponseType = z.infer<typeof OrdersResponseSchema>;