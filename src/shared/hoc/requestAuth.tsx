import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/entities/auth/model';

interface Props {
  children: ReactNode
}

const RequestAuth: FC<Props> = ( { children } ) => {
  const { auth } = useAuthStore();

  if ( !auth ) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequestAuth;