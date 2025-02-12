import { FC, ReactNode } from 'react';

interface Props {
  icon?: ReactNode,
  title?: string,
  subtitle: string
}

const ReceiptHeader: FC<Props> = ( { icon, title, subtitle } ) => {
  return (
    <>
      <h2 className="text-center font-bold">{icon}{title}</h2>
      <p className="text-center text-zinc-500">{subtitle}</p>
    </>
  );
};

export default ReceiptHeader;