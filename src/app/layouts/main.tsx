import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header';

const MainLayout: FC = () => {
  return (
    <div className="page">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;