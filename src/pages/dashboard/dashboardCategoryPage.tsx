import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CreateCategoryForm, DeleteCategoryForm } from '@/features/dashboard/category/ui';
import { ICategory } from '@/entities/category/types';

const DashboardCategoryPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: ICategory };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/dashboard/categories" className="w-6 h-6 rounded-full bg-[#505050] sm:hidden"></Link>
        <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Category page</h1>
      </div>
      <CreateCategoryForm action={`/dashboard/categories/${loaderData.data._id}`} category={loaderData.data} />
      <DeleteCategoryForm />
    </div>
  );
};

export default DashboardCategoryPage;