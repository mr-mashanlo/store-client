import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IAuthStore } from '../types';

const useAuthStore = create( persist<IAuthStore>( set => ( {
  auth: false,
  role: 'USER',

  setAuth( auth ) {
    set( () => ( { auth } ) );
  },

  setRole( role ) {
    set( () => ( { role } ) );
  }

} ), { name: 'auth' } ) );

export default useAuthStore;