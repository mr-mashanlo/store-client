import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ICartStore } from '@/entities/cart/types';

const useCartStore = create( persist<ICartStore>( ( set, get ) => ( {
  products: [],
  from: '',

  addToProducts( product ) {
    const products = [ ...get().products ];
    const existProduct = products.find( item => item.product._id === product._id );
    const existProductIndex = products.findIndex( item => item.product._id === product._id );
    if ( typeof existProduct === 'object' ) {
      const updatedProduct = { product, quantity: existProduct.quantity + 1 };
      products.splice( existProductIndex, 1, updatedProduct );
      return set( () => ( { products } ) );
    } else {
      products.push( { product, quantity: 1 } );
      return set( () => ( { products } ) );
    }
  },

  removeFromProducts( id ) {
    const products = [ ...get().products ];
    const filteredProducts = products.filter( item => item.product._id !== id );
    return set( () => ( { products: filteredProducts } ) );
  },

  setFrom( location ) {
    return set( () => ( { from: location } ) );
  },

  resetCart() {
    return set( () => ( { products: [], from: '' } ) );
  },

  getTotalQuantity() {
    const total = get().products.reduce( ( acc, item ) => {
      acc = acc + item.quantity;
      return acc;
    }, 0 );
    return total;
  },

  getTotalPrice() {
    const total = get().products.reduce( ( acc, item ) => {
      acc = acc + ( Number( item.product.price ) * Number( item.quantity ) );
      return acc;
    }, 0 );
    return total;
  }

} ), { name: 'cart' } ) );

export default useCartStore;