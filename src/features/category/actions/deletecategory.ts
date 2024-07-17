import { ActionFunctionArgs } from 'react-router-dom';
import { categoryService } from '../service';

const deleteCategory = async ( { params }: ActionFunctionArgs ) => {
  if ( typeof params.id !== 'string' ) {
    return { success: false };
  }

  try {
    await categoryService.delete( params.id );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default deleteCategory;