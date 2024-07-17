import { FC } from 'react';
import { Form } from 'react-router-dom';
import { If, Then } from 'react-if';
import { ICategory } from '@/entities/category/types';

interface Props {
  categories: Array<ICategory>
}

const CategoryList: FC<Props> = ( { categories } ) => {
  return (
    <ul>
      {categories.map( category => (
        <li key={category._id} className="p-3 grid grid-cols-3 gap-4 items-center even:bg-[#363636]">
          <span>{category.title}</span>
          <span>{category.slug}</span>
          <If condition={category.slug !== 'default'}>
            <Then>
              <Form method="delete" action={`/dashboard/categories/delete/${category.slug}`} navigate={false} className="ml-auto">
                <button type="submit" className="px-4 py-2 bg-white text-[#202020] text-sm leading-normal border-2 border-solid">Delete category</button>
              </Form>
            </Then>
          </If>
        </li>
      ) )}
    </ul>
  );
};

export default CategoryList;