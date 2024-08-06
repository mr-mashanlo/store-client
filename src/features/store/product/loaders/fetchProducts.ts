import { defer } from 'react-router-dom';
import { categoryService, productService } from '@/shared/services';

const fetchProducts = async () => {
  try {
    return defer( { success: true, data: { products: productService.getAll(), categories: categoryService.getAll() } } );
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchProducts;