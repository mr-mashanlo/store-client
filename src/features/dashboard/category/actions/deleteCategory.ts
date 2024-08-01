import { categoryService } from '@/shared/services';
import { ActionFunctionArgs, redirect } from 'react-router-dom';

const deleteCategory = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id as string;

  try {
    await categoryService.delete( id );
    return redirect( '/dashboard/categories' );
  } catch ( error ) {
    return { success: false, error };
  }
};

export default deleteCategory;