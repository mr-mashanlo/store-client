import { FC } from 'react';

interface Props {
  total: number,
  quantity: number
}

const ReceiptFooter: FC<Props> = ( { total, quantity } ) => {
  return (
    <div className="grid grid-cols-5 gap-2 font-bold">
      <p className="col-span-3 line-clamp-1">Total</p>
      <p className="ml-auto">{total}</p>
      <p className="ml-auto">{quantity}</p>
    </div>
  );
};

export default ReceiptFooter;