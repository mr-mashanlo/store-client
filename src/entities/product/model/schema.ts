import { z } from 'zod';

import { ProductSchema } from '@/shared/schemas';

export const ProductResponseSchema = ProductSchema;

export const ProductsResponseSchema = z.array( ProductResponseSchema );

export const SearchRequestSchema = z.object( { query: z.string() } );