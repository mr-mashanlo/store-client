import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthStore } from '@/features/auth/store';

interface Props {
  children: ReactNode
}

const RequestAdmin: FC<Props> = ( { children } ) => {
  const { role } = useAuthStore();

  if ( role !== 'ADMIN' ) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequestAdmin;