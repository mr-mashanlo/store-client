import { IMedia, IMediaService } from '@/entities/media/types';
import { authInstance } from '@/shared/api';

export class MongoMediaService implements IMediaService {

  getAll = async () => {
    try {
      const response = await authInstance( 'media', { method: 'get' } );
      return await response.json() as Array<IMedia>;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  create = async ( image: FormData ) => {
    try {
      const response = await authInstance( 'media/upload', { method: 'post', body: image, timeout: 60000 } );
      return await response.json() as IMedia;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  delete = async ( name: string ) => {
    try {
      const response = await authInstance( `media/delete/${name}`, { method: 'delete' } );
      return await response.json() as IMedia;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

}