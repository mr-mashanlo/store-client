import { FC } from 'react';

import { useCartQuery } from '@/entities/cart';

import Empty from './empty';
import ReceiptBox from './receipt';
import Skeleton from './skeleton';

const CartReceipt: FC = () => {
  const { cart, isSuccess } = useCartQuery();
  return isSuccess ? cart.products.length ? <ReceiptBox /> : <Empty /> : <Skeleton />;
};

export default CartReceipt;