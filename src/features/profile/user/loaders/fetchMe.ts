import { userService } from '@/shared/services';

const fetchMe = async () => {
  try {
    const user = await userService.getOne();
    return { success: true, data: user };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchMe;