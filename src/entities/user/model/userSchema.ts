import { z } from 'zod';

export const UserResponseSchema = z.object( {
  _id: z.string(),
  email: z.string().email(),
  role: z.string()
} );

export type UserResponseType = z.infer<typeof UserResponseSchema>;