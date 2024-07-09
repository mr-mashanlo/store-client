import { IMedia, IMediaService } from '@/entities/media/types';
import { authInstance } from '@/shared/api';

export class MongoMediaService implements IMediaService {

  create = async ( name: string, alt: string ) => {
    try {
      const response = await authInstance( 'media/create', { method: 'post', body: JSON.stringify( { name, alt } ) } );
      return await response.json() as IMedia;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  delete = async ( name: string ) => {
    try {
      const response = await authInstance( `auth/signup/${name}`, { method: 'get' } );
      return await response.json() as IMedia;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

}