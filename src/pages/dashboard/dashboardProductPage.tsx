import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { ICategoryResponse } from '@/entities/category/types';
import { IMedia } from '@/entities/media/types';
import { IProductResponse } from '@/entities/product/types';
import { CreateProductForm } from '@/features/dashboard/product/ui';
import { DeleteForm } from '@/shared/widgets';

const DashboardProductPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: { product: IProductResponse, categories: Array<ICategoryResponse>, images: Array<IMedia> } };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/dashboard/products" className="w-6 h-6 rounded-full bg-black"></Link>
        <h1 className="text-3xl font-bold uppercase text-black">Edit page</h1>
      </div>
      <CreateProductForm action="" categories={loaderData.data.categories} images={loaderData.data.images} product={loaderData.data.product} />
      <DeleteForm action={`/dashboard/products/${loaderData.data.product._id}/delete`} />
    </div>
  );
};

export default DashboardProductPage;