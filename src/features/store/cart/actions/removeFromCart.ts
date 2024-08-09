import { ActionFunctionArgs } from 'react-router-dom';

import { useCartStore } from '@/features/store/store';

const removeFromCart = async ( { params }: ActionFunctionArgs ) => {
  if ( typeof params.id !== 'string' ) {
    return { success: false };
  }

  try {
    useCartStore.getState().removeFromProducts( params.id );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default removeFromCart;