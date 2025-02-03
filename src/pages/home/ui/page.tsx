import { FC } from 'react';

import { ProductList } from '@/features/product-list';

const HomePage: FC = () => {
  return (
    <main aria-labelledby="products-heading">
      <h2 id="products-heading" className="sr-only">Our Products</h2>
      <div>
        <ProductList />
      </div>
    </main>
  );
};

export default HomePage;