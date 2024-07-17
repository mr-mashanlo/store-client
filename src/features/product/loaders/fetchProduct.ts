import { ActionFunctionArgs } from 'react-router-dom';
import { productService } from '../service';
import { categoryService } from '@/features/category/service';
import { mediaService } from '@/features/media/service';

const fetchProduct = async ( { params }: ActionFunctionArgs ) => {

  if ( typeof params.id !== 'string' ) {
    return { success: false };
  }

  try {
    const product = await productService.getOne( params.id );
    const categories = await categoryService.getAll();
    const images = await mediaService.getAll();
    return { success: true, data: { product, categories, images } };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchProduct;