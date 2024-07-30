import { authService } from '@/shared/service';
import { useAuthStore } from '@/entities/auth/model';

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