import { ICategory, ICategoryService } from '@/entities/category/types';
import { authInstance } from '@/shared/api';

export class CategoryService implements ICategoryService {

  getAll = async () => {
    try {
      const response = await authInstance( 'category/all', { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as Array<ICategory>;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  getOne = async ( id: string ) => {
    try {
      const response = await authInstance( `category/${id}`, { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as ICategory;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  create = async ( title: string, slug: string ) => {
    try {
      const response = await authInstance( 'category', { method: 'post', body: JSON.stringify( { title, slug } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as ICategory;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  update = async ( updates: Partial<ICategory>, id: string ) => {
    try {
      const response = await authInstance( `category/${id}`, { method: 'put', body: JSON.stringify( { updates, id } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as ICategory;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  delete = async ( id: string ) => {
    try {
      const response = await authInstance( `category/${id}`, { method: 'delete', headers: { 'content-type': 'application/json' } } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

}