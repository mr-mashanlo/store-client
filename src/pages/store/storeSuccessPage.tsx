import { FC, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PageHeader } from '@/shared/layouts/header';
import { useCartStore } from '@/features/store/store';
import { IOrderResponse } from '@/entities/order/types';
import { ProductListWithQuantity } from '@/shared/widgets';

const StoreSuccessPage: FC = () => {
  const { resetCart } = useCartStore();
  const loaderData = useLoaderData() as { success: boolean, data: IOrderResponse };

  useEffect( () => { resetCart(); }, [ resetCart ] );

  return (
    <>
      <PageHeader title="Success Page" />
      <section className="py-5 sm:py-14">
        <div className="container-block">
          <div className="grid gap-14">
            <div>
              <h2 className="text-2xl font-bold uppercase">Products</h2>
              <ProductListWithQuantity products={loaderData.data.products} />
            </div>
            <div>
              <h2 className="text-2xl font-bold uppercase">Address</h2>
              <div className="mt-5 p-3 grid sm:grid-cols-3 gap-4 bg-[#363636]">
                <span>{loaderData.data.address?.district}</span>
                <span>{loaderData.data.address?.city}</span>
                <span>{loaderData.data.address?.street}</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold uppercase">Cusstomer</h2>
              <div className="mt-5 p-3 grid sm:grid-cols-3 gap-4 bg-[#363636]">
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