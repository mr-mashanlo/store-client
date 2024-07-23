import { FC } from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { IOrder } from '@/entities/order/types';

const OrdersPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: Array<IOrder> };

  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Orders page</h1>
      <If condition={loaderData.data.length}>
        <Then>
          <ul>
            {loaderData.data.map( order => (
              <li key={order._id} className="p-3 grid grid-cols-4 gap-4 items-center even:bg-[#363636]">
                <Link to={`/dashboard/orders/${order._id}`} className="hover:text-white hover:underline">{order._id}</Link>
                <Form method="put" navigate={false} action={`/dashboard/orders/update/${order._id}`} className="ml-auto flex items-center">
                  <select name="status" id="status" defaultValue={order.status} className="px-4 py-2 bg-transparent border-2 border-solid text-sm leading-normal appearance-none">
                    <option value="Processing">Processing</option>
                    <option value="Delivering">Delivering</option>
                    <option value="Done">Done</option>
                  </select>
                  <button type="submit" className="px-4 py-2 bg-white text-[#202020] text-sm leading-normal border-2 border-solid">Save</button>
                </Form>
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

export default OrdersPage;