import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { ICategoryResponse } from '@/entities/category/types';
import { IMedia } from '@/entities/media/types';
import { CreateCategoryForm } from '@/features/dashboard/category/ui';
import { DeleteForm } from '@/shared/widgets';

const DashboardCategoryPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: {category: ICategoryResponse, images: Array<IMedia>} };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/dashboard/categories" className="w-6 h-6 rounded-full bg-black"></Link>
        <h1 className="text-3xl font-bold uppercase text-[#-black">Category page</h1>
      </div>
      <CreateCategoryForm action={`/dashboard/categories/${loaderData.data.category._id}`} images={loaderData.data.images} category={loaderData.data.category} />
      <DeleteForm action={`/dashboard/categories/${loaderData.data.category._id}/delete`}/>
    </div>
  );
};

export default DashboardCategoryPage;