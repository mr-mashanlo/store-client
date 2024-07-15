import { productService } from '../service';

const getProducts = async () => {
  try {
    const products = await productService.getAll();
    // const categories = await categoryService.getAll();
    return { success: true, data: products };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default getProducts;