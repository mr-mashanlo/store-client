import { categoryService } from '@/shared/services';
import { ActionFunctionArgs } from 'react-router-dom';

const fetchCategory = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id as string;

  try {
    const category = await categoryService.getOne( id );
    return { success: true, data: category };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchCategory;