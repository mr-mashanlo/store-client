import { ICategory, ICategoryService } from '@/entities/category/types';
import { authInstance } from '@/shared/api';

export class MongoCategoryService implements ICategoryService {

  getAll = async () => {
    try {
      const response = await authInstance( 'category', { method: 'get' } );
      return await response.json() as Array<ICategory>;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  create = async ( title: string, slug: string ) => {
    try {
      const response = await authInstance( 'category', { method: 'post', body: JSON.stringify( { title, slug } ) } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  delete = async ( id: string ) => {
    try {
      const response = await authInstance( `category/${id}`, { method: 'delete' } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

}