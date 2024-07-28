import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/entities/auth/model';
import { useCartStore } from '@/entities/cart/model';

interface Props {
  children: ReactNode
}

const NotRequestAuth: FC<Props> = ( { children } ) => {
  const { auth } = useAuthStore();
  const { from } = useCartStore();

  if ( auth && from === '/cart' ) {
    return <Navigate to="/checkout" />;
  }

  if ( auth ) {
    return <Navigate to="/" />;
  }

  return children;
};

export default NotRequestAuth;