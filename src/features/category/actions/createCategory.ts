import { ActionFunctionArgs } from 'react-router-dom';
import { categoryService } from '../service';

const createCategory = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const title = formData.get( 'title' );
  const slug = formData.get( 'slug' );

  if ( typeof title !== 'string' || typeof slug !== 'string' ) {
    return { success: false };
  }

  try {
    await categoryService.create( title, slug );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default createCategory;