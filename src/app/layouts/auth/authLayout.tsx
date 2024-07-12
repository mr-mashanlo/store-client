import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;