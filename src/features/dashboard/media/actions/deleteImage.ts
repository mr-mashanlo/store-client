import { ActionFunctionArgs } from 'react-router-dom';
import { mediaService } from '@/shared/service';

const deleteImage = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id as string;

  try {
    await mediaService.delete( id );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default deleteImage;