import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useUserStore } from '@/entities/user';

const GuestLayout: FC = () => {
  const userID = useUserStore( state => state.userID );
  return userID ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestLayout;