import { ActionFunctionArgs } from 'react-router-dom';

import { addressService } from '@/shared/services';

const createAddress = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const district = formData.get( 'district' ) as string;
  const city = formData.get( 'city' ) as string;
  const street = formData.get( 'street' ) as string;

  try {
    await addressService.create( district, city, street );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default createAddress;