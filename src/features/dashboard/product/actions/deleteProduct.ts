import { ActionFunctionArgs, redirect } from 'react-router-dom';

import { productService } from '@/shared/services';

const deleteProduct = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id as string;

  try {
    await productService.delete( id );
    return redirect( '/dashboard/products' );
  } catch ( error ) {
    return { success: false, error };
  }
};

export default deleteProduct;