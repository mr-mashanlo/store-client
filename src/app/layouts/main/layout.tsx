import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

const MainLayout: FC = () => {
  return (
    <div className="page bg-zinc-100">
      <Header />
      <main className="main"><Outlet /></main>
      <Footer />
    </div>
  );
};

export default MainLayout;