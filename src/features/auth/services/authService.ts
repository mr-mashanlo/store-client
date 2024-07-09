import { IAuthService } from '@/entities/auth/types';

export class AuthService {

  private service;

  constructor( service: IAuthService ) {
    this.service = service;
  }

  signin = ( email: string, password: string ) => {
    return this.service.signin( email, password );
  };

  signup = ( email: string, password: string, confirm: string ) => {
    return this.service.signup( email, password, confirm );
  };

  logout = () => {
    return this.service.logout();
  };

  delete = () => {
    return this.service.delete();
  };

  token = () => {
    return this.service.token();
  };

}