import { ActionFunctionArgs } from 'react-router-dom';
import { authService } from '../services';
import { useAuthStore } from '@/entities/auth/model';
import { decodeToken } from '@/shared/helpers';

const signinAction = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const email = formData.get( 'email' );
  const password = formData.get( 'password' );

  if ( typeof email !== 'string' || typeof password !== 'string' ) {
    return { success: false };
  }

  try {
    const user = await authService.signin( email, password );
    const { role } = decodeToken( user.RToken ) as { email: string, role: 'USER' | 'ADMIN' };
    useAuthStore.getState().setAuth( true );
    useAuthStore.getState().setRole( role );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default signinAction;