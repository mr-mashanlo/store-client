import { FC, useState } from 'react';
import { Link, useFetcher, useLoaderData } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { IOrderResponse } from '@/entities/order/types';
import Button from '@/shared/ui/button';

const DashboardOrdersPage: FC = () => {
  const updateFetcher = useFetcher();
  const loaderData = useLoaderData() as { success: boolean, data: Array<IOrderResponse> };
  const [ activeButton, setActiveButton ] = useState<string>( '' );

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
              <li key={order._id} className="w-[70rem] sm:w-auto p-3 grid grid-cols-4 gap-4 items-center odd:bg-[#363636]">
                <Link to={`/dashboard/orders/${order._id}`} className="hover:text-white hover:underline">{order._id}</Link>
                <span className="ml-auto col-span-2 flex gap-4">
                  {order.products.map( product => (
                    <If condition={Boolean( product.product.images[0] )} key={product.product._id}>
                      <Then><img src={product.product.images[0] ? product.product.images[0].url : ''} alt="" className="w-10 h-10 object-cover" /></Then>
                      <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
                    </If>
                  ) )}
                </span>
                <updateFetcher.Form method="put" action={`/dashboard/orders/update/${order._id}`} className="ml-auto flex items-center">
                  <select name="status" id="status" defaultValue={order.status} className="px-4 py-2 bg-transparent border-2 border-solid text-sm leading-normal appearance-none">
                    <option value="Processing" className="text-[#202020]">Processing</option>
                    <option value="Delivering" className="text-[#202020]">Delivering</option>
                    <option value="Done" className="text-[#202020]">Done</option>
                  </select>
                  <Button onClick={() => setActiveButton( order._id || '' )} size="sm" loading={activeButton === order._id && updateFetcher.state === 'submitting'} disabled={activeButton === order._id && updateFetcher.state === 'submitting'} className="leading-normal">Save</Button>
                </updateFetcher.Form>
              </li>
            ) )}
          </ul>
        </Then>
      </If>
    </div>
  );
};

export default DashboardOrdersPage;