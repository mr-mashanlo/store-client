import { FC } from 'react';

import { DecreaseProductButton } from '@/features/decrease-product';
import { IncreaseProductButton } from '@/features/increase-product';
import { CartResponseType } from '@/entities/cart';
import { calculateTotalPrice, calculateTotalQuantity } from '@/shared/libs';
import { Receipt, ReceiptDivide, ReceiptFooter, ReceiptHeader, ReceiptLink, ReceiptList } from '@/shared/ui/receipt';

interface Props {
  cart: CartResponseType | undefined
}

const Component: FC<Props> = ( { cart } ) => {
  return (
    <Receipt button={<ReceiptLink to="/checkout">Checkout</ReceiptLink>}>
      <ReceiptHeader icon={<img src="/logo.svg" alt="Company logo" className="w-12 mx-auto mb-2" />} subtitle="Kazakhstan, Almaty, Somestreet, #30" />
      <ReceiptDivide />
      <ReceiptList
        products={cart?.products || []}
        increase={id => <IncreaseProductButton id={id} className="w-2 h-2 mb-px bg-zinc-700 flex items-center justify-center cursor-pointer" />}
        decrease={id => <DecreaseProductButton id={id} className="w-2 h-2 mb-px bg-zinc-300 flex items-center justify-center cursor-pointer" />}
      />
      <ReceiptFooter total={calculateTotalPrice( cart?.products || [] )} quantity={calculateTotalQuantity( cart?.products || [] )} />
      <ReceiptDivide />
    </Receipt>
  );
};

export default Component;