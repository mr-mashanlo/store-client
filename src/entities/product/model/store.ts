import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreType {
  page: number,
  limit: number,
  total: number,
  query: string,
  category: string,
  increasePage: () => void,
  decreasePage: () => void,
  setLimit: ( limit: number ) => void,
  setTotal: ( total: number ) => void,
  setQuery: ( query: string ) => void,
  setCategory: ( caregory: string ) => void
}

const useFilterStore = create( persist<StoreType>( set => ( {
  page: 1,
  limit: 6,
  total: 0,
  query: '',
  category: '',
  increasePage: () => set( state => ( { page: state.page + 1 } ) ),
  decreasePage: () => set( state => ( { page: state.page - 1 } ) ),
  setLimit: ( limit ) => set( () => ( { limit } ) ),
  setTotal: ( total ) => set( () => ( { total } ) ),
  setQuery: ( query ) => set( () => ( { query } ) ),
  setCategory: ( category ) => set( () => ( { category } ) )
} ), { name: 'filter' } ) );

export default useFilterStore;