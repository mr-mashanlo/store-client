import { mediaService } from '@/features/media/service';
import { productService } from '../service';
import { categoryService } from '@/features/category/service';

const fetchProducts = async () => {
  try {
    const products = await productService.getAll();
    const categories = await categoryService.getAll();
    const images = await mediaService.get();
    return { success: true, data: { products, categories, images } };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchProducts;