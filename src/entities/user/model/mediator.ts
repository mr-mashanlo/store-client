import useUserStore from './store';

export function getUserID(): string | null {
  return useUserStore.getState().userID;
}

export function setUserID( id: string | null ) {
  return useUserStore.getState().setUserID( id );
}