import { IUser, IUserService } from '@/entities/user/types';
import { authInstance } from '@/shared/api';

export class MongoUserService implements IUserService {

  getAll = async () => {
    try {
      const response = await authInstance( 'user', { method: 'get' } );
      return await response.json() as Array<IUser>;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  getOne = async ( id: string ) => {
    try {
      const response = await authInstance( `user/${id}`, { method: 'get' } );
      return await response.json() as IUser;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  update = async ( id: string, updates: Partial<IUser> ) => {
    try {
      const response = await authInstance( `user/${id}`, { method: 'put', body: JSON.stringify( { updates } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  delete = async ( id: string ) => {
    try {
      const response = await authInstance( `user/${id}`, { method: 'delete' } );
      return await response.json() as { success: boolean, msg: string };
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

}