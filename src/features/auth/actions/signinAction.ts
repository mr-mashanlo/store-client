import { ActionFunctionArgs } from 'react-router-dom';
import { authService } from '../services';
import { useAuthStore } from '@/entities/auth/model';

const signinAction = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const email = formData.get( 'email' );
  const password = formData.get( 'password' );

  if ( typeof email !== 'string' || typeof password !== 'string' ) {
    return { success: false };
  }

  try {
    await authService.signin( email, password );
    useAuthStore.setState( { auth: true } );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default signinAction;