import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ICategory } from '@/entities/category/types';
import { IMedia } from '@/entities/media/types';
import { IProductResponse } from '@/entities/product/types';
import { CreateProductForm } from '@/features/product/ui';

const DashboardProductPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: { product: IProductResponse, categories: Array<ICategory>, images: Array<IMedia> } };

  return (
    <div className="grid gap-10 sm:gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Edit product page</h1>
      <CreateProductForm action="" categories={loaderData.data.categories} images={loaderData.data.images} product={loaderData.data.product} />
    </div>
  );
};

export default DashboardProductPage;