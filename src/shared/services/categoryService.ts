import { authInstance } from '@/shared/api';
import { ICategoryRequest, ICategoryResponse, ICategoryService } from '@/entities/category/types';

class CategoryService implements ICategoryService {

  getAll = async () => {
    try {
      const response = await authInstance( 'category/all', { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as Array<ICategoryResponse>;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  getOne = async ( id: string ) => {
    try {
      const response = await authInstance( `category/${id}`, { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as ICategoryResponse;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  create = async ( image: string, title: string, slug: string ) => {
    try {
      const response = await authInstance( 'category', { method: 'post', body: JSON.stringify( { image, title, slug } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as ICategoryResponse;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  update = async ( updates: Partial<ICategoryRequest>, id: string ) => {
    try {
      const response = await authInstance( `category/${id}`, { method: 'put', body: JSON.stringify( { updates, id } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as ICategoryResponse;
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

const categoryService = new CategoryService();

export default categoryService;