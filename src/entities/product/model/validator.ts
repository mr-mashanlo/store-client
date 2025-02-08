import { ProductResponseSchema, ProductsResponseSchema } from './schema';

export function validateProductResponseData( data: unknown ) {
  return ProductResponseSchema.parse( data );
}

export function validateProductsResponseData( data: unknown ) {
  return ProductsResponseSchema.parse( data );
}