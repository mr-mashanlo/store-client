import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header';

const ProductLayout: FC = () => {
  return (
    <div className="page">
      <Header />
      <main className="main"><Outlet /></main>
    </div>
  );
};

export default ProductLayout;