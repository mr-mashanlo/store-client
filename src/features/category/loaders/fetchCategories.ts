import { categoryService } from '../service';

const fetchCategories = async () => {
  try {
    const categories = await categoryService.getAll();
    return { success: true, data: categories };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchCategories;