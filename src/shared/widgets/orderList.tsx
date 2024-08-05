import { FC } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { IOrderResponse } from '@/entities/order/types';

interface Props {
  orders: Array<IOrderResponse>
  prefix: string
  className?: string
}

const OrderList: FC<Props> = ( { orders, prefix, className } ) => {
  return (
    <ul className={twMerge( 'overflow-auto', className )}>
      {orders.map( order => (
        <li key={order._id} className="p-3 flex gap-4 items-center justify-between odd:bg-gray-100">
          <Link to={`/${prefix}/${order._id}`} className="hover:text-black hover:underline">{order._id}</Link>
          <span className="text-center">{order.status}</span>
        </li>
      ) )}
    </ul>
  );
};

export default OrderList;