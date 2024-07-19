import { productService } from '../service';

const fetchProducts = async () => {
  try {
    const products = await productService.getAll();
    return { success: true, data: products };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchProducts;