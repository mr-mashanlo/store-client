import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IAuthStore } from '../types';

const useAuthStore = create( persist<IAuthStore>( set => ( {
  id: '',
  auth: false,
  role: 'USER',

  setID( id ) {
    set( () => ( { id } ) );
  },

  setAuth( auth ) {
    set( () => ( { auth } ) );
  },

  setRole( role ) {
    set( () => ( { role } ) );
  }

} ), { name: 'auth' } ) );

export default useAuthStore;