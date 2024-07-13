import { IUser, IUserService } from '@/entities/user/types';

export class UserService {

  private service;

  constructor( service: IUserService ) {
    this.service = service;
  }

  getAll = () => {
    return this.service.getAll();
  };

  getOne = ( id: string ) => {
    return this.service.getOne( id );
  };

  update = ( id: string, updates: Partial<IUser> ) => {
    return this.service.update( id, updates );
  };

  delete = ( id: string ) => {
    return this.service.delete( id );
  };

}