import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { useFilterStore } from '@/entities/product';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  page: number,
  limit: number,
  total: number,
  className: string,
  children: ReactNode
}

const NextPageButton: FC<Props> = ( { page, limit, total, className, children, ...others } ) => {
  const increasePage = useFilterStore( state => state.increasePage );
  const isDisabled = page >= Math.ceil( total / limit );

  return (
    <button onClick={() => increasePage()} disabled={isDisabled} className={twMerge( isDisabled ? 'opacity-40' : 'opacity-100 cursor-pointer', className )} {...others}>{children}</button>
  );
};

export default NextPageButton;