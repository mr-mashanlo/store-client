import { FC } from 'react';

import { ProductList, useProductsQuery } from '@/entities/product';

const ProductGrid: FC = () => {
  const { products } = useProductsQuery();
  return <ProductList products={products} />;
};

export default ProductGrid;