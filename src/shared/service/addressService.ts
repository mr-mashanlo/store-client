import { authInstance } from '@/shared/api';
import { IAddress, IAddressService } from '@/entities/address/types';

export class AddressService implements IAddressService {

  getOne = async ( id?: string ) => {
    try {
      const response = await authInstance( id ? `address/${id}` : 'address', { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as IAddress;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  create = async ( district: string, city: string, street: string ) => {
    try {
      const response = await authInstance( 'address', { method: 'post', body: JSON.stringify( { district, city, street } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  update = async ( updates: Partial<IAddress>, id?: string ) => {
    try {
      const response = await authInstance( id ? `address/${id}` : 'address', { method: 'put', body: JSON.stringify( { updates, id } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  delete = async ( id: string ) => {
    try {
      const response = await authInstance( `address/${id}`, { method: 'delete', headers: { 'content-type': 'application/json' } } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

}