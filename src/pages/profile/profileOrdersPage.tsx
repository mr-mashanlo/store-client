import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { When } from 'react-if';
import { IOrderResponse } from '@/entities/order/types';
import { OrderList } from '@/shared/widgets';

const ProfileOrdersPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: Array<IOrderResponse> };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-[#505050] sm:hidden"></Link>
        <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Order page</h1>
      </div>
      <When condition={loaderData.data.length}><OrderList orders={loaderData.data} prefix="account/orders" /></When>
    </div>
  );
};

export default ProfileOrdersPage;