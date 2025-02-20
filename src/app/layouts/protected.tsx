import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useUserStore } from '@/entities/user';

const ProtectedLayout: FC = () => {
  const userID = useUserStore( state => state.userID );
  return userID ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedLayout;