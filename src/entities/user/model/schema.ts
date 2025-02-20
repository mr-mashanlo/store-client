import { z } from 'zod';

export const AuthRequestSchema = z.object( {
  email: z.string().email(),
  password: z.string().min( 8, { message: 'Password must contain at least 8 characters' } ),
  confirm: z.string().min( 8 ).optional()
} );

export const AuthResponseSchema = z.object( {
  id: z.string(),
  at: z.string()
} );

export const UserRequestSchema = z.object( {
  fullname: z.string().min( 3 )
} );

export const UserResponseSchema = z.object( {
  _id: z.string(),
  email: z.string().email(),
  password: z.string(),
  fullname: z.string().optional()
} );