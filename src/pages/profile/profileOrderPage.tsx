import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ProductListWithQuantity } from '@/shared/widgets';
import { IOrderResponse } from '@/entities/order/types';

const ProfileOrderPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: IOrderResponse };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-black"></Link>
        <h1 className="text-3xl font-bold uppercase text-black">Order page</h1>
      </div>
      <div className="overflow-hidden">
        <h2 className="text-2xl font-bold uppercase">{loaderData.data.status}</h2>
        <ProductListWithQuantity products={loaderData.data.products} className="mt-5" />
      </div>
    </div>
  );
};

export default ProfileOrderPage;