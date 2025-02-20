import { ProductResponseSchema, ProductsResponseSchema, SearchRequestSchema } from './schema';

export function validateProductResponseData( data: unknown ) {
  return ProductResponseSchema.parse( data );
}

export function validateProductsResponseData( data: unknown ) {
  return ProductsResponseSchema.parse( data );
}

export function validateSearchRequestData( data: unknown ) {
  return SearchRequestSchema.parse( data );
}