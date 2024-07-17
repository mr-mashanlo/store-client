import { ActionFunctionArgs } from 'react-router-dom';
import { productService } from '../service';

const deleteProduct = async ( { params }: ActionFunctionArgs ) => {

  if ( typeof params.id !== 'string' ) {
    return { success: false };
  }

  try {
    await productService.delete( params.id );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default deleteProduct;