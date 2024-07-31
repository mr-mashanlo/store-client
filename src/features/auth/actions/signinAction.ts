import { ActionFunctionArgs } from 'react-router-dom';
import { authService } from '@/shared/services';
import { decodeToken } from '@/shared/helpers';
import { useAuthStore } from '@/features/auth/store';

const signinAction = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const email = formData.get( 'email' ) as string;
  const password = formData.get( 'password' ) as string;

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