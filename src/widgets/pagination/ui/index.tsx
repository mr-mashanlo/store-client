import { FC } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { NextPageButton } from '@/features/next-page';
import { PrevPageButton } from '@/features/prev-page';
import { useFilterStore } from '@/entities/product';

const Pagination: FC = () => {
  const page = useFilterStore( state => state.page );
  const limit = useFilterStore( state => state.limit );
  const total = useFilterStore( state => state.total );

  return (
    <div className="flex items-center gap-1 sm:gap-4">
      <PrevPageButton page={page} className="w-6 h-6 flex items-center justify-center bg-zinc-200/50"><ArrowLeft className="w-3" /></PrevPageButton>
      <p className="text-[0.5rem] font-[Martian_Mono] font-medium text-nowrap">{page} / {Math.ceil( total / limit )}</p>
      <NextPageButton page={page} limit={limit} total={total} className="w-6 h-6 flex items-center justify-center bg-zinc-200/50"><ArrowRight className="w-3" /></NextPageButton>
    </div>
  );
};

export default Pagination;