import { AuthService } from './authService';
import { MongoAuthService } from './mongoAuthService';

const mongoAuthService = new MongoAuthService();
const authService = new AuthService( mongoAuthService );

export { authService };