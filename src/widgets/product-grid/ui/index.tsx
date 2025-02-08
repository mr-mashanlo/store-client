import { FC } from 'react';

import { useProductsQuery } from '@/entities/product';

import Component from './component';
import Skeleton from './skeleton';

const ProductGrid: FC = () => {
  const { data, isLoading } = useProductsQuery();
  return isLoading ? <Skeleton /> : <Component products={data || []} />;
};

export default ProductGrid;