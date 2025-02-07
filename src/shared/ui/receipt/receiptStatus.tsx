import { FC } from 'react';

interface Props {
  uid: string,
  status: string,
  created: string,
  closed?: string
}

const ReceiptStatus: FC<Props> = ( { uid, status, created, closed } ) => {

  function formatTimestampToDate( timestamp: string ): string {
    const date = new Date( Number( timestamp ) );
    return date.toDateString();
  }

  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <p className="">UID:</p>
        <p className="line-clamp-1">{uid}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className="">Status:</p>
        <p className="line-clamp-1">{status}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className="">Created:</p>
        <p className="line-clamp-1">{formatTimestampToDate( created )}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className="">Closed:</p>
        <p className="line-clamp-1">{closed ? formatTimestampToDate( closed ) : 'N/A'}</p>
      </div>
    </>
  );
};

export default ReceiptStatus;