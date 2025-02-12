import { ProductResponseType } from '@/entities/product';

export function calculatePrice( price: number, discount: number = 0 ) {
  return price - price * discount / 100;
}

export function calculateTotalPrice( products: Array<{ product: ProductResponseType, quantity: number }> | [] ) {
  if ( !products.length ) return 0;

  return products.reduce( ( acc, product ) => {
    const { price, discount = 0 } = product.product;
    const { quantity } = product;
    acc += ( price - price * discount / 100 ) * quantity;
    return acc;
  }, 0 );
}

export function calculateTotalQuantity( cart: Array<{ product: ProductResponseType, quantity: number }> ) {
  return cart.reduce( ( acc, product ) => {
    const { quantity } = product;
    acc += quantity;
    return acc;
  }, 0 );
}