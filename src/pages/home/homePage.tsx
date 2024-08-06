import { FC, Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { MainHeader } from '@/shared/layouts/header';
import { IProductResponse } from '@/entities/product/types';
import { CategoryGrid, CategoryGridSkeleton, ProductGrid, ProductGridSkeleton } from '@/shared/widgets';
import { ICategoryResponse } from '@/entities/category/types';

const HomePage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: { products: Array<IProductResponse>, categories: Array<ICategoryResponse>} };

  return (
    <>
      <MainHeader />
      <section className="py-5 sm:py-14">
        <div className="container-block px-9">
          <Suspense fallback={<CategoryGridSkeleton />}>
            <Await resolve={loaderData.data.categories}>
              {categories => <CategoryGrid categories={categories} />}
            </Await>
          </Suspense>
        </div>
      </section>
      <section className="py-5 sm:py-14">
        <div className="container-block px-9">
          <Suspense fallback={<ProductGridSkeleton />}>
            <Await resolve={loaderData.data.products}>
              {products => <ProductGrid products={products} />}
            </Await>
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default HomePage;