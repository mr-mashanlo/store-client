import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartStoreType {
  products: Array<string>
  addToProducts: ( product: string ) => void
}

const useCartStore = create( persist<CartStoreType>( set => ( {
  products: [],
  addToProducts: ( product: string ) => set( state => ( { products: [ ...state.products, product ] } ) )
} ), { name: 'cart' } ) );

export default useCartStore;