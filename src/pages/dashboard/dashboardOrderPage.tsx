import { IOrderResponse } from '@/entities/order/types';
import { FC } from 'react';
import { Else, If, Then } from 'react-if';
import { useLoaderData } from 'react-router-dom';

const DashboardOrderPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: IOrderResponse};

  return (
    <div className="grid gap-10 sm:gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Order <span className="text-xs">#{loaderData.data._id}</span></h1>
      <div className="overflow-hidden">
        <h2 className="text-2xl font-bold uppercase">Products</h2>
        <ul className="mt-5 overflow-auto">
          {loaderData.data.products.map( product => (
            <li key={product.product._id} className="w-[50rem] sm:w-auto p-3 grid grid-cols-3 gap-4 items-center odd:bg-[#363636]">
              <span className="flex items-center gap-5 col-span-2">
                <If condition={Boolean( product.product.images[0] )}>
                  <Then><img src={product.product.images[0] ? product.product.images[0].url : ''} alt="" className="w-10 h-10 object-cover" /></Then>
                  <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
                </If>
                <span className="line-clamp-1">{product.product.name}</span>
              </span>
              <span>{product.quantity}</span>
            </li>
          ) )}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold uppercase">Address</h2>
        <div className="mt-5 p-3 grid sm:grid-cols-3 gap-4 bg-[#363636]">
          <span>{loaderData.data.address?.district}</span>
          <span>{loaderData.data.address?.city}</span>
          <span>{loaderData.data.address?.street}</span>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold uppercase">Cusstomer</h2>
        <div className="mt-5 p-3 grid sm:grid-cols-3 gap-4 bg-[#363636]">
          <span>{loaderData.data.user?.fullname}</span>
          <span>{loaderData.data.user?.email}</span>
          <span>{loaderData.data.user?.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrderPage;