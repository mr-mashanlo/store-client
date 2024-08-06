import { categoryService } from '@/shared/services';
import { ActionFunctionArgs } from 'react-router-dom';

const updateCategory = async ( { request, params }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const id = params.id as string;
  const image = formData.get( 'image' ) as string;
  const title = formData.get( 'title' ) as string;
  const slug = formData.get( 'slug' ) as string;

  try {
    const category = await categoryService.update( { image, title, slug }, id );
    return { success: true, data: category };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default updateCategory;