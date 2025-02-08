import { OrderRequestSchema, OrderResponseSchema, OrdersRequestSchema, OrdersResponseSchema } from './schema';

export function validateOrderRequestData( data: unknown ) {
  return OrderRequestSchema.parse( data );
}

export function validateOrderResponseData( data: unknown ) {
  return OrderResponseSchema.parse( data );
}

export function validateOrdersRequestData( data: unknown ) {
  return OrdersRequestSchema.parse( data );
}

export function validateOrdersResponseData( data: unknown ) {
  return OrdersResponseSchema.parse( data );
}