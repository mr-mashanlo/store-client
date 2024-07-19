import { ActionFunctionArgs } from 'react-router-dom';
import { productService } from '../service';

const fetchProduct = async ( { params }: ActionFunctionArgs ) => {

  if ( typeof params.id !== 'string' ) {
    return { success: false };
  }

  try {
    const product = await productService.getOne( params.id );
    return { success: true, data: product };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchProduct;