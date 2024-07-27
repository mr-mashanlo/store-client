import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CreateProductForm, ProductList } from '@/features/product/ui';
import { IProductResponse } from '@/entities/product/types';
import { ICategory } from '@/entities/category/types';
import { IMedia } from '@/entities/media/types';

const DashboardProductsPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: { products: Array<IProductResponse>, categories: Array<ICategory>, images: Array<IMedia> }};

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-[#505050] sm:hidden"></Link>
        <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Products page</h1>
      </div>
      <CreateProductForm action="/dashboard/products" categories={loaderData.data.categories} images={loaderData.data.images} />
      <ProductList products={loaderData.data.products} />
    </div>
  );
};

export default DashboardProductsPage;