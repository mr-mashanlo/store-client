import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useAddressQuery } from '@/entities/address';
import { useOrderQuery } from '@/entities/order';

import Component from './component';
import Skeleton from './skeleton';

const SucceessReceipt: FC = () => {
  const { id } = useParams();
  const { data: order, isLoading: isOrderLoading } = useOrderQuery( id || '' );
  const { data: address, isLoading: isAddressLoading } = useAddressQuery();
  return isOrderLoading && isAddressLoading ? <Skeleton /> :  <Component order={order} address={address} />;
};

export default SucceessReceipt;