import { IOrderResponse, IOrderRequest, IOrderService } from '@/entities/order/types';
import { authInstance } from '@/shared/api';

export class OrderService implements IOrderService {

  getAll = async () => {
    try {
      const response = await authInstance( 'order/all', { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as Array<IOrderResponse>;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  getOwn = async () => {
    try {
      const response = await authInstance( 'order/own', { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as Array<IOrderResponse>;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  getOne = async ( id: string ) => {
    try {
      const response = await authInstance( `order/${id}`, { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as IOrderResponse;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  create = async ( order: IOrderRequest ) => {
    try {
      const response = await authInstance( 'order', { method: 'post', body: JSON.stringify( order ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as IOrderResponse;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  update = async ( updates: Partial<IOrderRequest>, id: string ) => {
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