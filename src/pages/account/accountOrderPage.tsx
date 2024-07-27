import { FC, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { IOrderResponse } from '@/entities/order/types';

const AccountOrderPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: Array<IOrderResponse> };
  const [ width, setWidth ] = useState( window.innerWidth );

  useEffect( () => {
    const handleResize = () => { setWidth( window.innerWidth ); };
    window.addEventListener( 'resize', handleResize );
    return () => { window.removeEventListener( 'resize', handleResize ); };
  }, [] );

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-[#505050] sm:hidden"></Link>
        <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Order page</h1>
      </div>
      <If condition={loaderData.data.length}>
        <Then>
          <If condition={width < 500}>
            <Then>
              <ul className="grid gap-5">
                {loaderData.data.map( order => (
                  <li key={order._id} className="p-3 grid grid-cols-5 gap-4 items-center bg-[#363636]">
                    <span className="h-full col-span-2 flex items-center justify-center bg-[#505050]">{order.status}</span>
                    {order.products.map( product => (
                      <If condition={Boolean( product.product.images[0] )} key={product.product._id}>
                        <Then><img src={product.product.images[0] ? product.product.images[0].url : ''} alt="" className="w-full aspect-square object-cover" /></Then>
                        <Else><div className="w-full aspect-square bg-[#363636]"></div></Else>
                      </If>
                    ) )}
                  </li>
                ) )}
              </ul>
            </Then>
            <Else>
              <ul>
                {loaderData.data.map( order => (
                  <li key={order._id} className="p-3 grid grid-cols-4 gap-4 items-center odd:bg-[#363636]">
                    <span>{order._id}</span>
                    <span className="text-center">{order.status}</span>
                    <span className="ml-auto col-span-2 flex gap-4">
                      {order.products.map( product => (
                        <If condition={Boolean( product.product.images[0] )} key={product.product._id}>
                          <Then><img src={product.product.images[0] ? product.product.images[0].url : ''} alt="" className="w-10 aspect-square object-cover" /></Then>
                          <Else><div className="w-10 aspect-square bg-[#363636]"></div></Else>
                        </If>
                      ) )}
                    </span>
                  </li>
                ) )}
              </ul>
            </Else>
          </If>
        </Then>
      </If>
    </div>
  );
};

export default AccountOrderPage;