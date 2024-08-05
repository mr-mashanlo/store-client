import { FC, Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { IProductResponse } from '@/entities/product/types';
import { MainHeader } from '@/shared/layouts/header';
import { ProductOverview, ProductOverviewSkeleton } from '@/shared/widgets';

const StoreProductPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: IProductResponse };

  return (
    <>
      <MainHeader className="w-full fixed top-0 left-0" />
      <section className="py-5 sm:p-3">
        <Suspense fallback={<ProductOverviewSkeleton />}>
          <Await resolve={loaderData.data}>
            {product => <ProductOverview product={product} />}
          </Await>
        </Suspense>
      </section>
    </>
  );
};

export default StoreProductPage;