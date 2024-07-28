import { IOrderResponse } from '@/entities/order/types';
import Button from '@/shared/ui/button';
import { FC } from 'react';
import { Else, If, Then } from 'react-if';
import { Form, useLoaderData } from 'react-router-dom';

const DashboardOrderPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: IOrderResponse};

  return (
    <div className="grid gap-10 sm:gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Order <span className="text-xs">#{loaderData.data._id}</span></h1>
      <div className="overflow-hidden">
        <h2 className="text-2xl font-bold uppercase">Products</h2>
        <ul className="mt-5 overflow-auto">
          {loaderData.data.products.map( product => (
            <li key={product.product._id} className="p-3 flex sm:grid sm:grid-cols-4 gap-4 items-center justify-between odd:bg-[#363636]">
              <span className="flex items-center gap-3 col-span-2">
                <If condition={Boolean( product.product.images[0] )}>
                  <Then><img src={product.product.images[0] ? product.product.images[0].url : ''} alt="" className="w-10 h-10 object-cover" /></Then>
                  <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
                </If>
                <span className="line-clamp-1">{product.product.name}</span>
              </span>
              <span className="hidden sm:inline sm:text-right">{product.product.category.title}</span>
              <span className="sm:text-right">{product.product.price}$</span>
            </li>
          ) )}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold uppercase">Status</h2>
        <Form method="post" action={`/dashboard/orders/${loaderData.data._id}`} className="mt-5">
          <div className="grid sm:grid-cols-2 gap-7">
            <div className="relative">
              <label htmlFor="status" className="px-2 text-sm font-medium absolute -top-[0.55rem] left-5 bg-[#202020]">Status</label>
              <select name="status" id="status" defaultValue={loaderData.data.status} className="w-full px-3 py-2 bg-transparent text-white border-2 border-[#909090] outline-none focus:border-white rounded-lg placeholder:text-[#909090] appearance-none">
                <option value="Processing" className="text-[#202020]">Processing</option>
                <option value="Delivering" className="text-[#202020]">Delivering</option>
                <option value="Done" className="text-[#202020]">Done</option>
              </select>
            </div>
            <Button>Update</Button>
          </div>
        </Form>
      </div>
      <div>
        <h2 className="text-2xl font-bold uppercase">Address</h2>
        <div className="mt-5 p-3 grid sm:grid-cols-4 gap-4 bg-[#363636]">
          <span className="sm:col-span-2">{loaderData.data.address?.district}</span>
          <span className="sm:text-right">{loaderData.data.address?.city}</span>
          <span className="sm:text-right">{loaderData.data.address?.street}</span>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold uppercase">Cusstomer</h2>
        <div className="mt-5 p-3 grid sm:grid-cols-4 gap-4 bg-[#363636]">
          <span className="sm:col-span-2">{loaderData.data.user?.fullname}</span>
          <span className="sm:text-right">{loaderData.data.user?.email}</span>
          <span className="sm:text-right">{loaderData.data.user?.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrderPage;