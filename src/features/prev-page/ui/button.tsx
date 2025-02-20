import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { useFilterStore } from '@/entities/product';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  page: number,
  className: string,
  children: ReactNode
}

const PrevPageButton: FC<Props> = ( { page, className, children } ) => {
  const decreasePage = useFilterStore( state => state.decreasePage );
  const isDisabled = page <= 1;

  return (
    <button onClick={() => decreasePage()} disabled={isDisabled} className={twMerge( isDisabled ? 'opacity-40' : 'opacity-100 cursor-pointer', className )}>{children}</button>
  );
};

export default PrevPageButton;