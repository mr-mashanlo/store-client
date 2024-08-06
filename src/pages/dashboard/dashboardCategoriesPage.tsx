import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CreateCategoryForm } from '@/features/dashboard/category/ui';
import { CategoryList } from '@/shared/widgets';
import { ICategory } from '@/entities/category/types';
import { IMedia } from '@/entities/media/types';

const DashboardCategoriesPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: { categories: Array<ICategory>, images: Array<IMedia> } };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-black"></Link>
        <h1 className="text-3xl font-bold uppercase text-black">Categories page</h1>
      </div>
      <CreateCategoryForm action="/dashboard/categories" images={loaderData.data.images} />
      <CategoryList categories={loaderData.data.categories || []} />
    </div>
  );
};

export default DashboardCategoriesPage;