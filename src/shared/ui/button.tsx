import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '@headlessui/react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean,
  children: ReactNode,
  className?: string
}

const CustomButton: FC<Props> = ( { isLoading, children, className, ...others } ) => {
  return (
    <Button className={twMerge( 'w-full px-3 py-2 outline-none bg-black text-white border border-black rounded-md cursor-pointer', className )} {...others}>
      <span className={twMerge( isLoading ? 'animate-pulse' : '' )}>{isLoading ? '• • •' : children}</span>
    </Button>
  );
};

export default CustomButton;