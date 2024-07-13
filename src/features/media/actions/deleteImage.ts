import { ActionFunctionArgs } from 'react-router-dom';
import { mediaService } from '../service';

const deleteImage = async ( { params }: ActionFunctionArgs ) => {

  if ( typeof params.name !== 'string' ) {
    return { success: false };
  }

  try {
    await mediaService.delete( params.name );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default deleteImage;