import { IUser } from '../../auth/types';

export interface IUserService {
  getAll: () => Promise<Array<IUser>>,
  getOne: ( id: string ) => Promise<IUser>,
  update: ( id: string, updates: Partial<IUser> ) => Promise<{ success: boolean, msg: string }>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}