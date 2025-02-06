import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  disabled?: boolean,
  isLoading?: boolean
}

const ReceiptButton: FC<Props> = ( { children, disabled, isLoading, ...others } ) => {
  return <button className={twMerge( 'block w-full pt-4 pb-3 bg-zinc-100 uppercase text-center font-bold', disabled ? 'text-zinc-500' : 'cursor-pointer', isLoading ? 'animate-pulse' : 'cursor-pointer' )} {...others}>
    {isLoading ? 'Loading' : children}
  </button>;
};

export default ReceiptButton;