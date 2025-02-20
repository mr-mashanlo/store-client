import { z } from 'zod';

import { AuthRequestSchema, AuthResponseSchema, UserRequestSchema, UserResponseSchema } from './schema';

export type AuthRequestType = z.infer<typeof AuthRequestSchema>;

export type AuthResponseType = z.infer<typeof AuthResponseSchema>;

export type UserRequestType = z.infer<typeof UserRequestSchema>;

export type UserResponseType = z.infer<typeof UserResponseSchema>;