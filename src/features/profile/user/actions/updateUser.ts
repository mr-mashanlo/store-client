import { ActionFunctionArgs } from 'react-router-dom';
import { addressService, userService } from '@/shared/service';

const updateUser = async ( { params, request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const id = params.id;

  const fullname = formData.get( 'fullname' ) as string;
  const phone = formData.get( 'phone' ) as string;
  const email = formData.get( 'email' ) as string;
  const role = formData.get( 'role' ) as string;

  const district = formData.get( 'district' ) as string;
  const city = formData.get( 'city' ) as string;
  const street = formData.get( 'street' ) as string;

  try {
    const user = await userService.update( { fullname, phone, email, role }, id );
    const address = await addressService.update( { district, city, street }, id );
    return { success: true, data: { user, address } };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default updateUser;