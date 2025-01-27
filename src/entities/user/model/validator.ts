import { AuthRequestSchema, AuthResponseSchema } from './authSchema';

export function validateAuthRequestData( data: unknown ) {
  return AuthRequestSchema.parse( data );
};

export function validateAuthResponseData( data: unknown ) {
  return AuthResponseSchema.parse( data );
}