import { ActionFunctionArgs } from 'react-router-dom';
import { addressService } from '@/shared/service';

const createAddress = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const district = formData.get( 'district' );
  const city = formData.get( 'city' );
  const street = formData.get( 'street' );

  if ( typeof district !== 'string' || typeof city !== 'string' || typeof street !== 'string' ) {
    return { success: false };
  }

  try {
    await addressService.create( district, city, street );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default createAddress;