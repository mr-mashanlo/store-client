import { ActionFunctionArgs } from 'react-router-dom';
import { userService } from '@/shared/service';

const updateMe = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const fullname = formData.get( 'fullname' );
  const phone = formData.get( 'phone' );

  if ( typeof fullname !== 'string' || typeof phone !== 'string' ) {
    return { success: false };
  }

  try {
    await userService.update( { fullname, phone } );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default updateMe;