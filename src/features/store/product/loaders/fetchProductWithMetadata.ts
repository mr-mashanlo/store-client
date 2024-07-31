import { ActionFunctionArgs } from 'react-router-dom';
import { productService } from '../service';
import { categoryService } from '@/features/dashboard/category/service';
import { mediaService } from '@/features/dashboard/media/service';

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