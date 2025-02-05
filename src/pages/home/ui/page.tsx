import { FC } from 'react';

import { ProductGrid } from '@/widgets/product-grid';

const HomePage: FC = () => {
  return (
    <main aria-labelledby="products-heading">
      <h2 id="products-heading" className="sr-only">Our Products</h2>
      <ProductGrid />
    </main>
  );
};

export default HomePage;