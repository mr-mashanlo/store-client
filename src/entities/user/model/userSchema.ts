import { z } from 'zod';

export const UserRequestSchema = z.object( {
  fullname: z.string().min( 3 )
} );

export const UserResponseSchema = z.object( {
  _id: z.string(),
  email: z.string().email(),
  password: z.string(),
  fullname: z.string().optional()
} );

export type UserRequestType = z.infer<typeof UserRequestSchema>;

export type UserResponseType = z.infer<typeof UserResponseSchema>;