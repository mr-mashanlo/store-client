import { z } from 'zod';

import { ProductResponseSchema, ProductsResponseSchema, SearchRequestSchema } from './schema';

export type ProductResponseType = z.infer<typeof ProductResponseSchema>;

export type ProductsResponseType = z.infer<typeof ProductsResponseSchema>;

export type SearchRequestType = z.infer<typeof SearchRequestSchema>;