import { MediaService } from './mediaService';
import { MongoMediaService } from './mongoMediaService';

const mongoAuthService = new MongoMediaService();
const mediaService = new MediaService( mongoAuthService );

export { mediaService };