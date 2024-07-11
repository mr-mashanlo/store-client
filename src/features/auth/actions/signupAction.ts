import { ActionFunctionArgs } from 'react-router-dom';
import { authService } from '../services';
import { useAuthStore } from '@/entities/auth/model';

const signupAction = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const email = formData.get( 'email' );
  const password = formData.get( 'password' );
  const confirm = formData.get( 'confirm' );

  if ( typeof email !== 'string' || typeof password !== 'string' || typeof confirm !== 'string' ) {
    return { success: false };
  }

  try {
    await authService.signup( email, password, confirm );
    useAuthStore.setState( { auth: true } );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default signupAction;