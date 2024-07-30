import { IProductResponse, IProductRequest, IProductService } from '@/entities/product/types';
import { authInstance } from '@/shared/api';

export class ProductService implements IProductService {

  getAll = async () => {
    try {
      const response = await authInstance( 'product/all', { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as Array<IProductResponse>;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  getOne = async ( id: string ) => {
    try {
      const response = await authInstance( `product/${id}`, { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as IProductResponse;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  create = async ( product: IProductRequest ) => {
    try {
      const response = await authInstance( 'product', { method: 'post', body: JSON.stringify( { product } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  update = async ( id: string, updates: Partial<IProductRequest> ) => {
    try {
      const response = await authInstance( `product/${id}`, { method: 'put', body: JSON.stringify( { updates } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  delete = async ( id: string ) => {
    try {
      const response = await authInstance( `product/${id}`, { method: 'delete', headers: { 'content-type': 'application/json' } } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

}