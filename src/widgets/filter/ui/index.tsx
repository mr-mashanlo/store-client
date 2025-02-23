import { FC } from 'react';

import { SearchCategoryForm } from '@/features/search-category-form';
import { SearchQueryForm } from '@/features/search-query-form';

const Filter: FC = () => {
  return (
    <div className="flex items-center gap-1 sm:gap-4">
      <SearchQueryForm />
      <SearchCategoryForm />
    </div>
  );
};

export default Filter;