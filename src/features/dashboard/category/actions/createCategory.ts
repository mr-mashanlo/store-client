import { ActionFunctionArgs } from 'react-router-dom';

import { categoryService } from '@/shared/services';

const createCategory = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const image = formData.get( 'image' ) as string;
  const title = formData.get( 'title' ) as string;
  const slug = formData.get( 'slug' ) as string;

  try {
    await categoryService.create( image, title, slug );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default createCategory;