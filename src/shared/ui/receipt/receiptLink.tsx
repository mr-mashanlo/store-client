import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface Props extends LinkProps {
  to: string
  children: ReactNode
}

const ReceiptLink: FC<Props> = ( { to, children, ...others } ) => {
  return <Link to={to} className="block w-full pt-4 pb-3 bg-zinc-100 uppercase text-center font-bold cursor-pointer" {...others}>{children}</Link>;
};

export default ReceiptLink;