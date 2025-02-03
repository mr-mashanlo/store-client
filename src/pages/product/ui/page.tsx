import { FC } from 'react';

import { ProductItem } from '@/features/product-item';

const ProductPage: FC = () => {
  return (
    <main aria-labelledby="product-heading">
      <ProductItem />
    </main>
  );
};

export default ProductPage;