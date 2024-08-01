import { addressService } from '@/shared/services';

const fetchAddress = async () => {
  try {
    const address = await addressService.getOne();
    return { success: true, data: address };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchAddress;