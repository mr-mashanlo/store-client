import { FC } from 'react';

import { useProductQuery } from '@/entities/product';

import Component from './component';
import Skeleton from './skeleton';

interface Props {
  id: string
}

const ProductDetail: FC<Props> = ( { id } ) => {
  const { data, isLoading } = useProductQuery( id );
  return isLoading ? <Skeleton /> : <Component product={data || { _id: '', name: '', price: 0 }} />;
};

export default ProductDetail;