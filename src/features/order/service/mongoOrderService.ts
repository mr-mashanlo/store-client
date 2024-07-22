import { IOrder, IOrderService } from '@/entities/order/types';
import { authInstance } from '@/shared/api';

export class MongoOrderService implements IOrderService {

  getAll = async ( query?: string ) => {
    try {
      const response = await authInstance( query ? `order?${query}` : 'order', { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as Array<IOrder>;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  getOne = async ( id: string ) => {
    try {
      const response = await authInstance( `order/${id}`, { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as IOrder;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  create = async ( order: IOrder ) => {
    try {
      const response = await authInstance( 'order', { method: 'post', body: JSON.stringify( order ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as IOrder;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  update = async ( updates: Partial<IOrder>, id: string ) => {
    try {
      const response = await authInstance( `order/${id}`, { method: 'put', body: JSON.stringify( { updates } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  delete = async ( id: string ) => {
    try {
      const response = await authInstance( `order/${id}`, { method: 'delete' } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

}