import { ActionFunctionArgs } from 'react-router-dom';
import { userService } from '../service';

const updateUser = async ( { params, request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const id = params.id;
  const role = formData.get( 'role' );

  if ( typeof id !== 'string' || typeof role !== 'string' ) {
    return { success: false };
  }

  try {
    await userService.update( id, { role } );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default updateUser;