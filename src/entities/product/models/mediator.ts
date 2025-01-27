import useCartStore from './store';

export function getProductsFromCart(): Array<string> {
  return useCartStore.getState().products;
}

export function addProductToCart( product: string ): void {
  return useCartStore.getState().addToProducts( product );
}