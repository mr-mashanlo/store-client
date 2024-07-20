import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ICartStore } from '../types';

const useCartStore = create( persist<ICartStore>( ( set, get ) => ( {
  products: [],

  setProducts( productID ) {
    const products = [ ...get().products ];
    const existProduct = products.find( item => item.productID === productID );
    const existProductIndex = products.findIndex( item => item.productID === productID );
    if ( typeof existProduct === 'object' ) {
      const updatedProduct = { productID, quantity: existProduct.quantity + 1 };
      products.splice( existProductIndex, 1, updatedProduct );
      return set( () => ( { products } ) );
    } else {
      products.push( { productID, quantity: 1 } );
      return set( () => ( { products } ) );
    }
  },

  getTotalQuantity() {
    const total = get().products.reduce( ( acc, item ) => {
      acc = acc + item.quantity;
      return acc;
    }, 0 );
    return total;
  }

} ), { name: 'cart' } ) );

export default useCartStore;