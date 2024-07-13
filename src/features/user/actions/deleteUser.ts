import { ActionFunctionArgs } from 'react-router-dom';
import { userService } from '../service';

const deleteUser = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id;

  if ( typeof id !== 'string' ) {
    return { success: false };
  }

  try {
    await userService.delete( id );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default deleteUser;