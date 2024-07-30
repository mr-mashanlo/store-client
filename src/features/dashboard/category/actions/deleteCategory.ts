import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { categoryService } from '@/shared/service';

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