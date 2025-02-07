import { FC } from 'react';

import { useAddressQuery } from '@/entities/address';
import { useOrdersQuery } from '@/entities/order';

import Component from './component';
import Skeleton from './skeleton';

const OrderGrid: FC = () => {
  const { data: orders, isLoading: isOrderLoading } = useOrdersQuery();
  const { data: address, isLoading: isAddressLoading } = useAddressQuery();
  return isOrderLoading && isAddressLoading ? <Skeleton /> : <Component orders={orders} address={address} />;
};

export default OrderGrid;