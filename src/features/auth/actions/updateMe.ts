import { ActionFunctionArgs } from 'react-router-dom';
import { userService } from '@/features/profile/user/service';

const updateMe = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const fullname = formData.get( 'fullname' ) as string;
  const phone = formData.get( 'phone' ) as string;

  try {
    await userService.update( { fullname, phone } );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default updateMe;