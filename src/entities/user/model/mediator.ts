import useUserStore from './store';

export function getUserID() {
  return useUserStore.getState().userID;
}

export function setUserID( id: string | null ) {
  return useUserStore.getState().setUserID( id );
}