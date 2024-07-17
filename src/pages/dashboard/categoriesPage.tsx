import { FC } from 'react';
import { CategoryList, CreateCategoryForm } from '@/features/category/ui';
import { useLoaderData } from 'react-router-dom';
import { ICategory } from '@/entities/category/types';

const CategoriesPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data?: Array<ICategory> };

  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Categories page</h1>
      <CreateCategoryForm />
      <CategoryList categories={loaderData.data || []} />
    </div>
  );
};

export default CategoriesPage;