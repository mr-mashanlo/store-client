import { FC } from 'react';

import { useCartQuery } from '@/entities/cart';

import ReceiptBox from './receipt';
import Skeleton from './skeleton';

const CartReceipt: FC = () => {
  const { isSuccess } = useCartQuery();
  return isSuccess ? <ReceiptBox /> : <Skeleton />;
};

export default CartReceipt;