import { FC } from 'react';
import { When } from 'react-if';
import { Link, useLoaderData } from 'react-router-dom';

import { IOrderResponse } from '@/entities/order/types';
import { OrderList } from '@/shared/widgets';

const DashboardOrdersPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: Array<IOrderResponse> };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-black"></Link>
        <h1 className="text-3xl font-bold uppercase text-black">Orders page</h1>
      </div>
      <When condition={loaderData.data.length}><OrderList orders={loaderData.data} prefix="dashboard/orders" /></When >
    </div>
  );
};

export default DashboardOrdersPage;