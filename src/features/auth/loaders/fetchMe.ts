import { userService } from '@/features/profile/user/service';

const fetchMe = async () => {
  try {
    const user = await userService.getOne();
    return { success: true, data: user };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchMe;