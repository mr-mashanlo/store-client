import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const ReceiptButton: FC<Props> = ( { children, ...others } ) => {
  return <button className="block w-full pt-4 pb-3 bg-zinc-100 uppercase text-center font-bold cursor-pointer" {...others}>{children}</button>;
};

export default ReceiptButton;