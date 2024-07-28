import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { If, Then } from 'react-if';
import { IOrderResponse } from '@/entities/order/types';

const DashboardOrdersPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: Array<IOrderResponse> };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-[#505050] sm:hidden"></Link>
        <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Orders page</h1>
      </div>
      <If condition={loaderData.data.length}>
        <Then>
          <ul className="overflow-auto">
            {loaderData.data.map( order => (
              <li key={order._id} className="p-3 flex gap-4 items-center justify-between odd:bg-[#363636]">
                <span className="flex items-center gap-3 sm:gap-5">
                  <span className="block w-10 h-10 bg-[#404040]"></span>
                  <Link to={`/dashboard/orders/${order._id}`} className="hover:text-white hover:underline">{order._id}</Link>
                </span>
                <span className="hidden sm:inline">{order.status}</span>
              </li>
            ) )}
          </ul>
        </Then>
      </If>
    </div>
  );
};

export default DashboardOrdersPage;