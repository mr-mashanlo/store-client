import { z } from 'zod';

export const AddressRequestSchema = z.object( {
  city: z.string(),
  street: z.string()
} );

export const AddressResponseSchema = z.object( {
  _id: z.string(),
  user: z.string(),
  city: z.string(),
  street: z.string()
} );

export type AddressRequestType = z.infer<typeof AddressRequestSchema>;

export type AddressResponseType = z.infer<typeof AddressResponseSchema>;