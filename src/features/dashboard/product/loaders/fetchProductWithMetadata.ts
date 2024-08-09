import { ActionFunctionArgs } from 'react-router-dom';

import { categoryService, mediaService, productService } from '@/shared/services';

const fetchProductWithMetadata = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id as string;

  try {
    const product = await productService.getOne( id );
    const categories = await categoryService.getAll();
    const images = await mediaService.getAll();
    return { success: true, data: { product, categories, images } };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchProductWithMetadata;