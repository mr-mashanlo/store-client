import { ActionFunctionArgs } from 'react-router-dom';
import { useCartStore } from '@/entities/cart/model';

const addToCart = async ( { params }: ActionFunctionArgs ) => {
  const productID = params.id;

  if ( typeof productID !== 'string' ) {
    return { success: false };
  }

  try {
    useCartStore.getState().setProducts( productID );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default addToCart;