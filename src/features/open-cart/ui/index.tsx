import { FC, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

import { CartList } from '@/features/cart-list';

const OpenCartButton: FC = () => {
  const [ isOpen, setIsOpen ] = useState( false );

  return (
    <>
      <button onClick={() => setIsOpen( true )}>Cart</button>
      <Dialog open={isOpen} onClose={() => setIsOpen( false )} className="relative z-50">
        <div className="fixed inset-0 flex items-top justify-end">
          <DialogPanel className="min-w-96 m-2 p-5 bg-zinc-100">
            <DialogTitle className="font-bold">Cart</DialogTitle>
            <CartList />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default OpenCartButton;