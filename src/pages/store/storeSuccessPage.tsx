import { FC, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { PageHeader } from '@/app/layouts/header';
import { useCartStore } from '@/entities/cart/model';
import { IOrderResponse } from '@/entities/order/types';

const StoreSuccessPage: FC = () => {
  const { resetCart } = useCartStore();
  const loaderData = useLoaderData() as { success: boolean, data: IOrderResponse };

  useEffect( () => { resetCart(); }, [ resetCart ] );

  return (
    <>
      <PageHeader title="Success Page" />
      <section className="py-14">
        <div className="container-block container-block--normal">
          <div className="grid gap-14">
            <div>
              <h2 className="text-2xl font-bold uppercase">Products</h2>
              <ul className="mt-5">
                {loaderData.data.products.map( item => (
                  <li key={item.product._id} className="p-3 grid grid-cols-4 gap-4 items-center odd:bg-[#363636]">
                    <If condition={Boolean( item.product.images[0] )}>
                      <Then><img src={item.product.images[0] ? item.product.images[0].url : ''} alt="" className="w-10 h-10 object-cover" /></Then>
                      <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
                    </If>
                    <span className="col-span-2 line-clamp-1">{item.product.name}</span>
                    <span>{item.quantity}</span>
                  </li>
                ) )}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold uppercase">Address</h2>
              <div className="mt-5 p-3 grid grid-cols-3 gap-4 bg-[#363636]">
                <span>{loaderData.data.address?.district}</span>
                <span>{loaderData.data.address?.city}</span>
                <span>{loaderData.data.address?.street}</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold uppercase">Cusstomer</h2>
              <div className="mt-5 p-3 grid grid-cols-3 gap-4 bg-[#363636]">
                <span>{loaderData.data.user?.fullname}</span>
                <span>{loaderData.data.user?.email}</span>
                <span>{loaderData.data.user?.phone}</span>
              </div>
            </div>
            <div className="text-center">
              <Link to="/" className="inline-block min-w-48 px-5 py-2 bg-white text-[#202020] font-bold uppercase border-2 border-white rounded-lg">Go to home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreSuccessPage;