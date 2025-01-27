import { authInstance, defaultInstance } from '@/shared/api';

import { AuthRequestType } from '../model/authSchema';

class UserController {

  signIn = async ( email: string, password: string ) => {
    const response = await defaultInstance( 'user/signin', { method: 'post', body: JSON.stringify( { email, password } ) } );
    return await response.json();
  };

  signUp = async ( email: string, password: string, confirm: string ) => {
    const response = await defaultInstance( 'user/signup', { method: 'post', body: JSON.stringify( { email, password, confirm } ) } );
    return await response.json();
  };

  signOut = async () => {
    const response = await defaultInstance( 'user/signout' );
    return await response.json();
  };

  refresh = async () => {
    const response = await defaultInstance( 'user/refresh' );
    return await response.json();
  };

  delete = async () => {
    const response = await authInstance( 'user/delete' );
    return await response.json();
  };

  update = async ( updates: Partial<AuthRequestType> ) => {
    const response = await authInstance( 'user/update', { method: 'post', body: JSON.stringify( updates ) } );
    return await response.json();
  };

}

const userController = new UserController();

export default userController;