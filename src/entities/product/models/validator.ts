import { ProductResponseSchema, ProductsResponseSchema } from './schema';

export function validateProductsResponseData( data: unknown ) {
  return ProductsResponseSchema.parse( data );
}

export function validateProductResponseData( data: unknown ) {
  return ProductResponseSchema.parse( data );
}