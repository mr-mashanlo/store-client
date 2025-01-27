import { FC } from 'react';

import { ProductList } from '@/features/product-list';

const HomePage: FC = () => {
  return (
    <>
      <main aria-labelledby="products-heading">
        <div className="pt-59 pb-9 bg-zinc-200">
          <h2 id="products-heading" className="font-bold text-center text-xs">Our Products</h2>
        </div>
        <div className="py-9 px-2 sm:px-10">
          <ProductList />
        </div>
      </main>
    </>
  );
};

export default HomePage;