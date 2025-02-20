import { z } from 'zod';

import { AddressRequestSchema, AddressResponseSchema } from './schema';

export type AddressRequestType = z.infer<typeof AddressRequestSchema>;

export type AddressResponseType = z.infer<typeof AddressResponseSchema>;