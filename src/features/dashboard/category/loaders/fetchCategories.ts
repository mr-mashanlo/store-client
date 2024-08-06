import { categoryService, mediaService } from '@/shared/services';

const fetchCategories = async () => {
  try {
    const images = await mediaService.getAll();
    const categories = await categoryService.getAll();
    return { success: true, data: { categories, images } };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchCategories;