import { AuthRequestSchema, AuthResponseSchema } from './authSchema';
import { UserRequestSchema, UserResponseSchema } from './userSchema';

export function validateAuthRequestData( data: unknown ) {
  return AuthRequestSchema.parse( data );
};

export function validateAuthResponseData( data: unknown ) {
  return AuthResponseSchema.parse( data );
}

export function validateUserRequestData( data: unknown ) {
  return UserRequestSchema.parse( data );
};

export function validateUserResponseData( data: unknown ) {
  return UserResponseSchema.parse( data );
};