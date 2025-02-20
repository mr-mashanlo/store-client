import { z } from 'zod';

import { CartRequestSchema, CartResponseSchema, CartSchema } from './schema';

export type CartType = z.infer<typeof CartSchema>;

export type CartRequestType = z.infer<typeof CartRequestSchema>;

export type CartResponseType = z.infer<typeof CartResponseSchema>;