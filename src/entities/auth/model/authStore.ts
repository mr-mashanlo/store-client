import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IAuthStore } from '../types';

const useAuthStore = create( persist<IAuthStore>( set => ( {
  auth: false,

  setAuth( status ) {
    set( () => ( { auth: status } ) );
  }

} ), { name: 'auth' } ) );

export default useAuthStore;