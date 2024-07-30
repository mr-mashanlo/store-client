import { userService } from '@/shared/service';

const fetchUsers = async () => {
  try {
    const users = await userService.getAll();
    return { success: true, data: users };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchUsers;