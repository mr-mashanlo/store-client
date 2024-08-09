import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { ICategoryResponse } from '@/entities/category/types';
import { IMedia } from '@/entities/media/types';
import { IProductResponse } from '@/entities/product/types';
import { CreateProductForm } from '@/features/dashboard/product/ui';
import { ProductList } from '@/shared/widgets';

const DashboardProductsPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: { products: Array<IProductResponse>, categories: Array<ICategoryResponse>, images: Array<IMedia> }};

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-black"></Link>
        <h1 className="text-3xl font-bold uppercase text-black">Products page</h1>
      </div>
      <CreateProductForm action="/dashboard/products" categories={loaderData.data.categories} images={loaderData.data.images} />
      <ProductList products={loaderData.data.products} prefix="dashboard/products" />
    </div>
  );
};

export default DashboardProductsPage;