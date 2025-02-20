import { CategoryRequestSchema } from './schema';

export function validateCategoryRequestData( data: unknown ) {
  return CategoryRequestSchema.parse( data );
}