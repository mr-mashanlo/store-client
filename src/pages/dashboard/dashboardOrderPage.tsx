import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UpdateStatusForm } from '@/features/dashboard/order/ui';
import { DeleteForm, ProductListWithQuantity } from '@/shared/widgets';
import { IOrderResponse } from '@/entities/order/types';

const DashboardOrderPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: IOrderResponse};

  return (
    <div className="grid gap-10 sm:gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Order <span className="text-xs">#{loaderData.data._id}</span></h1>
      <div className="overflow-hidden">
        <h2 className="text-2xl font-bold uppercase">Products</h2>
        <ProductListWithQuantity products={loaderData.data.products} className="mt-5" />
      </div>
      <div>
        <h2 className="text-2xl font-bold uppercase">Status</h2>
        <UpdateStatusForm />
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
        <h2 className="text-2xl font-bold uppercase">Customer</h2>
        <div className="mt-5 p-3 grid sm:grid-cols-4 gap-4 bg-[#363636]">
          <span className="sm:col-span-2">{loaderData.data.user?.fullname}</span>
          <span className="sm:text-right">{loaderData.data.user?.email}</span>
          <span className="sm:text-right">{loaderData.data.user?.phone}</span>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold uppercase">Delete</h2>
        <DeleteForm action={`/dashboard/orders/${loaderData.data._id}/delete`} className="mt-5" />
      </div>
    </div>
  );
};

export default DashboardOrderPage;