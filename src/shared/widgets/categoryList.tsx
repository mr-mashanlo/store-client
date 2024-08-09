import { FC } from 'react';
import { Else, If, Then } from 'react-if';
import { Link } from 'react-router-dom';

import { ICategoryResponse } from '@/entities/category/types';

interface Props {
  categories: Array<ICategoryResponse>
}

const CategoryList: FC<Props> = ( { categories } ) => {
  return (
    <ul>
      {categories.map( category => (
        <li key={category._id} className="p-3 flex justify-between gap-4 items-center odd:bg-gray-100">
          <span className="flex items-center gap-3 sm:gap-5 col-span-2">
            <If condition={Boolean( category.image )} >
              <Then><img src={category.image.url} alt="" className="w-10 h-10 object-cover"/></Then>
              <Else><div className="w-10 h-10 object-cover bg-zinc-100"></div></Else>
            </If>
            <Link to={`/dashboard/categories/${category._id}`} className="hover:text-black hover:underline">{category.title}</Link>
          </span>
          <span>{category.slug}</span>
        </li>
      ) )}
    </ul>
  );
};

export default CategoryList;