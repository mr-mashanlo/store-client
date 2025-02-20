import { GeneralController } from '@/shared/api';
import { defaultInstance } from '@/shared/api';

import { UserResponseType } from '../model/userSchema';

class UserController extends GeneralController<UserResponseType, Array<UserResponseType>> {

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

}

const userController = new UserController( 'user' );

export default userController;