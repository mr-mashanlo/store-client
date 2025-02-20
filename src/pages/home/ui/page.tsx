import { FC } from 'react';

import { Filter } from '@/widgets/filter';
import { Pagination } from '@/widgets/pagination';
import { ProductGrid } from '@/widgets/product-grid';

const HomePage: FC = () => {
  return (
    <main aria-labelledby="heading">
      <h2 id="heading" className="sr-only">Our Products</h2>
      <ProductGrid />
      <div className="p-2 flex items-center gap-4 bg-white fixed bottom-0 left-[50%] -translate-[50%]">
        <Filter />
        <Pagination />
      </div>
    </main>
  );
};

export default HomePage;