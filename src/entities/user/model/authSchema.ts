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

export type AuthRequestType = z.infer<typeof AuthRequestSchema>;

export type AuthResponseType = z.infer<typeof AuthResponseSchema>;