import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { IOrder } from '@/entities/order/types';

const MyOrderPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: Array<IOrder> };

  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Order page</h1>
      <If condition={loaderData.data.length}>
        <Then>
          <ul>
            {loaderData.data.map( order => (
              <li key={order._id} className="p-3 grid grid-cols-4 gap-4 items-center even:bg-[#363636]">
                <span>{order._id}</span>
                <span className="text-center">{order.status}</span>
                <span className="ml-auto col-span-2 flex gap-4">
                  {order.products.map( product => (
                    <If condition={product.product.images[0]} key={product.product._id}>
                      <Then><img src={product.product.images[0]} alt="" className="w-10 h-10 object-cover" /></Then>
                      <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
                    </If>
                  ) )}
                </span>
              </li>
            ) )}
          </ul>
        </Then>
      </If>
    </div>
  );
};

export default MyOrderPage;