import { z } from 'zod';

import { ProductSchema } from '@/entities/shared';

export const ProductResponseSchema = ProductSchema;

export const ProductsResponseSchema = z.array( ProductResponseSchema );

export type ProductResponseType = z.infer<typeof ProductResponseSchema>;

export type ProductsResponseType = z.infer<typeof ProductsResponseSchema>;