import { FC } from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { ICategory } from '@/entities/category/types';
import { IMedia } from '@/entities/media/types';
import { IProductResponse } from '@/entities/product/types';
import { CreateProductForm } from '@/features/store/product/ui';
import { Button } from '@/shared/widgets';

const DashboardProductPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: { product: IProductResponse, categories: Array<ICategory>, images: Array<IMedia> } };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/dashboard/products" className="w-6 h-6 rounded-full bg-[#505050] sm:hidden"></Link>
        <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Edit page</h1>
      </div>
      <CreateProductForm action="" categories={loaderData.data.categories} images={loaderData.data.images} product={loaderData.data.product} />
      <Form method="delete" action={`/dashboard/products/${loaderData.data.product._id}/delete`}>
        <Button className="w-full">Delete</Button>
      </Form>
    </div>
  );
};

export default DashboardProductPage;