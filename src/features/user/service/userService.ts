import { IUser, IUserService } from '@/entities/user/types';

export class UserService {

  private service;

  constructor( service: IUserService ) {
    this.service = service;
  }

  getAll = () => {
    return this.service.getAll();
  };

  getOne = ( id?: string ) => {
    return this.service.getOne( id );
  };

  update = ( updates: Partial<IUser>, id?: string ) => {
    return this.service.update( updates, id );
  };

  delete = ( id: string ) => {
    return this.service.delete( id );
  };

}