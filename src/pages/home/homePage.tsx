import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MainHeader } from '@/shared/layouts/header';
import { IProductResponse } from '@/entities/product/types';
import { ProductGrid } from '@/shared/widgets';

const HomePage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: Array<IProductResponse> };

  return (
    <>
      <MainHeader />
      <section className="py-5 sm:py-14">
        <div className="container-block container-block--normal">
          <ProductGrid products={loaderData.data} />
        </div>
      </section>
    </>
  );
};

export default HomePage;