import { ActionFunctionArgs } from 'react-router-dom';
import { useCartStore } from '@/entities/cart/model';

const addToCart = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const product = formData.get( 'product' );

  if ( typeof product !== 'string' ) {
    return { success: false };
  }

  try {
    useCartStore.getState().addToProducts( JSON.parse( product ) );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default addToCart;