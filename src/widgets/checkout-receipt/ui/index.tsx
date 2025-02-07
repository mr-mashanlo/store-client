import { FC } from 'react';

import { useAddressQuery } from '@/entities/address';
import { useCartQuery } from '@/entities/cart';

import Component from './component';
import Skeleton from './skeleton';

const CheckoutReceipt: FC = () => {
  const { data: cart, isLoading: isCartLoading } = useCartQuery();
  const { data: address, isLoading: isAddressLoading } = useAddressQuery();
  return isCartLoading && isAddressLoading ? <Skeleton /> : <Component cart={cart} address={address} />;
};

export default CheckoutReceipt;