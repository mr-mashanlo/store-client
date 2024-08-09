import { useAuthStore } from '@/features/auth/store';
import { authService } from '@/shared/services';

const logoutUser = async () => {
  try {
    await authService.logout();
    useAuthStore.getState().setID( '' );
    useAuthStore.getState().setAuth( false );
    useAuthStore.getState().setRole( 'USER' );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default logoutUser;