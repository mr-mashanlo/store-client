import { ActionFunctionArgs, defer } from 'react-router-dom';

import { productService } from '@/shared/services';

const fetchProduct = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id as string;

  try {
    return defer( { success: true, data: productService.getOne( id ) } );
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchProduct;