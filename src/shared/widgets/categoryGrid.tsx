import { FC } from 'react';
import { Else, If, Then } from 'react-if';

import { ICategoryResponse } from '@/entities/category/types';

interface Props {
  categories: Array<ICategoryResponse>
}

const CategoryGrid: FC<Props> = ( { categories } ) => {
  return (
    <ul className="grid gap-5 grid-cols-6">
      <li key="all">
        <button className="block w-full aspect-square"><span className="block w-full aspect-square bg-zinc-200"></span></button>
        <p className="mt-2">All</p>
      </li>
      {categories.filter( category => category.slug !== 'default' ).map( category => (
        <li key={category._id}>
          <button className="block">
            <If condition={Boolean( category.image )} >
              <Then><img src={category.image.url} alt="" className="w-full aspect-square"/></Then>
              <Else><span className="block w-full aspect-square bg-zinc-100"></span></Else>
            </If>
          </button>
          <p className="mt-2">{category.title}</p>
        </li>
      ) )}
    </ul>
  );
};

export default CategoryGrid;