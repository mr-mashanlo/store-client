import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getUserID } from '@/entities/user';

const ProtectedLayout: FC = () => {
  const user = getUserID();
  return user?.length ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedLayout;