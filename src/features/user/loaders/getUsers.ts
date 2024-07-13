import { userService } from '../service';

const getUsers = async () => {
  try {
    const users = await userService.getAll();
    return { success: true, data: users };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default getUsers;