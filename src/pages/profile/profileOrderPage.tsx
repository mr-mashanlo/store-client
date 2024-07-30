import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { IOrderResponse } from '@/entities/order/types';

const ProfileOrderPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: IOrderResponse };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-[#505050] sm:hidden"></Link>
        <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Order page</h1>
      </div>
      <div className="overflow-hidden">
        <h2 className="text-2xl font-bold uppercase">{loaderData.data.status}</h2>
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
    </div>
  );
};

export default ProfileOrderPage;