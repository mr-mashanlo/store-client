import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStoreType {
  userID: string | null
  setUserID: ( userID: string | null ) => void
}

const useUserStore = create( persist<UserStoreType>( set => ( {
  userID: null,
  setUserID: ( userID: string | null ) => set( () => ( { userID } ) )
} ), { name: 'user' } ) );

export default useUserStore;