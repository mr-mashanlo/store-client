import { ActionFunctionArgs } from 'react-router-dom';
import { userService } from '../service';
import { addressService } from '../../address/service';

const fetchUserWithMetadata = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id as string;

  try {
    const user = id?.length ? await userService.getOne( id ) : await userService.getOne();
    const address = id?.length ?  await addressService.getOne( id ) : await addressService.getOne();
    return { success: true, data: { user, address } };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchUserWithMetadata;