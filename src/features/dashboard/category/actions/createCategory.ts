import { ActionFunctionArgs } from 'react-router-dom';
import { categoryService } from '../service';

const createCategory = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const title = formData.get( 'title' ) as string;
  const slug = formData.get( 'slug' ) as string;

  try {
    await categoryService.create( title, slug );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default createCategory;