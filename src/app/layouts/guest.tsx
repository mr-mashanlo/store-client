import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getUserID } from '@/entities/user';

const GuestLayout: FC = () => {
  const user = getUserID();
  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestLayout;