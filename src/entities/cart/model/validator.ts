import { CartResponseSchema } from './schema';

export function validateCartResponseData( data: unknown ) {
  return CartResponseSchema.parse( data );
}