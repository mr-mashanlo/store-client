import { addressService } from '@/features/address/service';
import { userService } from '@/features/user/service';

const fetchUserDepends = async () => {
  try {
    const user = await userService.getOne();
    const address = await addressService.getOne();
    return { success: true, data: { user, address } };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchUserDepends;