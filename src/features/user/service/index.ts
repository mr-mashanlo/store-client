import { UserService } from './userService';
import { MongoUserService } from './mongoUserService';

const mongoUserService = new MongoUserService();
const userService = new UserService( mongoUserService );

export { userService };