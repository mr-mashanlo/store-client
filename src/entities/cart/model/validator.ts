import { CartResponseSchema, CartSchema } from './schema';

export function validateCartData( data: unknown ) {
  return CartSchema.parse( data );
}

export function validateCartResponseData( data: unknown ) {
  return CartResponseSchema.parse( data );
}