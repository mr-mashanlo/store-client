import { IOrder } from '@/entities/order/types';
import { FC } from 'react';
import { Else, If, Then } from 'react-if';
import { useLoaderData } from 'react-router-dom';

const SingleDashboardOrderPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: IOrder};

  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Order #{loaderData.data._id}</h1>
      <h2 className="text-2xl font-bold uppercase">Products</h2>
      <ul>
        {loaderData.data.products.map( product => (
          <li key={product.product._id} className="p-3 grid grid-cols-4 gap-4 items-center even:bg-[#363636]">
            <If condition={product.product.images[0]}>
              <Then><img src={product.product.images[0]} alt="" className="w-10 h-10 object-cover" /></Then>
              <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
            </If>
            <span className="col-span-2 line-clamp-1">{product.product.name}</span>
            <span>{product.quantity}</span>
          </li>
        ) )}
      </ul>
      <h2 className="text-2xl font-bold uppercase">Address</h2>

      <h2 className="text-2xl font-bold uppercase">Cusstomer</h2>
    </div>
  );
};

export default SingleDashboardOrderPage;