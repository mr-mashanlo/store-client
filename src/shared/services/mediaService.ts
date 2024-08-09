import { IMedia, IMediaService } from '@/entities/media/types';
import { authInstance } from '@/shared/api';

class MediaService implements IMediaService {

  getAll = async () => {
    try {
      const response = await authInstance( 'media/all', { method: 'get' } );
      return await response.json() as Array<IMedia>;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  create = async ( image: FormData ) => {
    try {
      const response = await authInstance( 'media', { method: 'post', body: image, timeout: 60000 } );
      return await response.json() as IMedia;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  delete = async ( id: string ) => {
    try {
      const response = await authInstance( `media/${id}`, { method: 'delete' } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

}

const mediaService = new MediaService();

export default mediaService;