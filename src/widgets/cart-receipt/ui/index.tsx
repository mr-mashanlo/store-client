import { FC } from 'react';

import { useCartQuery } from '@/entities/cart';

import Component from './component';
import Empty from './empty';
import Skeleton from './skeleton';

const CartReceipt: FC = () => {
  const { data, isLoading } = useCartQuery();
  return isLoading ? <Skeleton /> : data?.products.length ? <Component cart={data} /> : <Empty />;
};

export default CartReceipt;