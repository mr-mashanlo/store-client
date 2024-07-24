import { FC, useState } from 'react';
import { useFetcher } from 'react-router-dom';
import { If, Then } from 'react-if';
import { ICategory } from '@/entities/category/types';
import Button from '@/shared/ui/button';

interface Props {
  categories: Array<ICategory>
}

const CategoryList: FC<Props> = ( { categories } ) => {
  const deleteFetcher = useFetcher();
  const [ activeButton, setActiveButton ] = useState<string>( '' );

  return (
    <ul>
      {categories.map( category => (
        <li key={category._id} className="p-3 grid grid-cols-3 gap-4 items-center even:bg-[#363636]">
          <span>{category.title}</span>
          <span>{category.slug}</span>
          <If condition={category.slug !== 'default'}>
            <Then>
              <deleteFetcher.Form method="delete" action={`/dashboard/categories/delete/${category.slug}`} className="ml-auto">
                <Button onClick={() => setActiveButton( category._id || '' )} size="sm" loading={activeButton === category._id && deleteFetcher.state === 'submitting'} disabled={activeButton === category._id && deleteFetcher.state === 'submitting'}>Delete</Button>
              </deleteFetcher.Form>
            </Then>
          </If>
        </li>
      ) )}
    </ul>
  );
};

export default CategoryList;