import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/entities/auth/model';

interface Props {
  children: ReactNode
}

const NotRequestAuth: FC<Props> = ( { children } ) => {
  const { auth } = useAuthStore();
  console.log( useLocation() );

  if ( auth ) {
    return <Navigate to="/" />;
  }

  return children;
};

export default NotRequestAuth;