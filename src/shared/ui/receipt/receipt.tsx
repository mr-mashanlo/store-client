import { FC, ReactNode } from 'react';

interface ReceiptProps {
  children: ReactNode,
  button: ReactNode
}

const Receipt: FC<ReceiptProps> = ( { children, button } ) => {
  return (
    <div className="w-100 bg-white shadow-xl shadow-zinc-300 relative font-[Sofia_Sans_Condensed] uppercase text-base">
      <div className="h-3 absolute bottom-full left-0 right-0 ticket-t"></div>
      <div role="list" className="p-6">{children}</div>
      {button}
      <div className="h-3 absolute top-full left-0 right-0 ticket-b"></div>
    </div>
  );
};

export default Receipt;