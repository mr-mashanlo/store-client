import { categoryService, mediaService } from '@/shared/services';
import { ActionFunctionArgs } from 'react-router-dom';

const fetchCategory = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id as string;

  try {
    const images = await mediaService.getAll();
    const category = await categoryService.getOne( id );
    return { success: true, data: { category, images } };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchCategory;