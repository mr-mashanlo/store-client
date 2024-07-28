import { addressService } from '@/features/address/service';
import { userService } from '@/features/user/service';
import { ActionFunctionArgs } from 'react-router-dom';

const fetchUserWithMetadata = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id;

  try {
    const user = id?.length ? await userService.getOne( id ) : await userService.getOne();
    const address = id?.length ?  await addressService.getOne( id ) : await addressService.getOne();
    return { success: true, data: { user, address } };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchUserWithMetadata;