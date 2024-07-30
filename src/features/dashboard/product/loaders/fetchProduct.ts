import { ActionFunctionArgs } from 'react-router-dom';
import { productService } from '@/shared/service';

const fetchProduct = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id as string;

  try {
    const product = await productService.getOne( id );
    return { success: true, data: product };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchProduct;