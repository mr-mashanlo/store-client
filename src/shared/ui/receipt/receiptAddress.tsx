import { FC } from 'react';

interface Props {
  city: string,
  address: string
}

const ReceiptAddress: FC<Props> = ( { city, address } ) => {
  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <p className="">City:</p>
        <p className="line-clamp-1">{city}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className="">Address:</p>
        <p className="line-clamp-1">{address}</p>
      </div>
    </>
  );
};

export default ReceiptAddress;