import { FC } from 'react';
import { ICategory } from '@/entities/category/types';
import { Link } from 'react-router-dom';

interface Props {
  categories: Array<ICategory>
}

const CategoryList: FC<Props> = ( { categories } ) => {
  return (
    <ul>
      {categories.map( category => (
        <li key={category._id} className="p-3 flex justify-between gap-4 items-center odd:bg-[#363636]">
          <Link to={`/dashboard/categories/${category._id}`} className="hover:text-white hover:underline">{category.title}</Link>
          <span>{category.slug}</span>
        </li>
      ) )}
    </ul>
  );
};

export default CategoryList;