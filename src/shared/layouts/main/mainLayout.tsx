import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <div className="pb-16 sm:pb-0">
      <Outlet />
    </div>
  );
};

export default MainLayout;