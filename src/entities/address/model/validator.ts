import { AddressRequestSchema, AddressResponseSchema } from './schema';

export function validateAddressRequestData( data: unknown ) {
  return AddressRequestSchema.parse( data );
}

export function validateAddressResponseData( data: unknown ) {
  return AddressResponseSchema.parse( data );
}