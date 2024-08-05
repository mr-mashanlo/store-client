import { FC } from 'react';
import { ICategory } from '@/entities/category/types';
import { Link } from 'react-router-dom';
import { Else, If, Then } from 'react-if';

interface Props {
  categories: Array<ICategory>
}

const CategoryGrid: FC<Props> = ( { categories } ) => {
  return (
    <ul className="grid gap-5 grid-cols-6">
      {categories.map( category => (
        <li key={category._id}>
          <Link to={`/category/${category.slug}`}>
            <If condition={Boolean( category.image )} >
              <Then><div className="w-full aspect-square bg-zinc-100"></div></Then>
              <Else><div className="w-full aspect-square bg-zinc-100"></div></Else>
            </If>
          </Link>
          <p className="mt-2">{category.title}</p>
        </li>
      ) )}
    </ul>
  );
};

export default CategoryGrid;