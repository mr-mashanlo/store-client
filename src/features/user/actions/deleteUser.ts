import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { userService } from '../service';

const deleteUser = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id as string;

  try {
    await userService.delete( id );
    return redirect( '/dashboard/users' );
  } catch ( error ) {
    return { success: false, error };
  }
};

export default deleteUser;