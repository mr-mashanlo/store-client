import { FC } from 'react';

interface Props {
  title: string,
  subtitle: string
}

const ReceiptHeader: FC<Props> = ( { title, subtitle } ) => {
  return (
    <>
      <h2 className="text-center font-bold">{title}</h2>
      <p className="text-center text-zinc-500">{subtitle}</p>
    </>
  );
};

export default ReceiptHeader;