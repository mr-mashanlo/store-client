import { ActionFunctionArgs } from 'react-router-dom';
import { mediaService } from '../service';

const uploadImage = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const image = formData.get( 'image' );

  if ( !image || typeof image !== 'object' ) {
    return { success: false };
  }

  const body = new FormData();
  body.append( 'image', image );

  try {
    await mediaService.create( body );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default uploadImage;