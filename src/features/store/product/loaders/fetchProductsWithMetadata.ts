import { productService } from '../service';
import { categoryService } from '@/features/dashboard/category/service';
import { mediaService } from '@/features/dashboard/media/service';

const fetchProductsWithMetadata = async () => {
  try {
    const products = await productService.getAll();
    const categories = await categoryService.getAll();
    const images = await mediaService.getAll();
    return { success: true, data: { products, categories, images } };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchProductsWithMetadata;