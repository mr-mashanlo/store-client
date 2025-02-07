import { FC } from 'react';

import { DecreaseProductButton } from '@/features/decrease-product';
import { IncreaseProductButton } from '@/features/increase-product';
import { useCartQuery } from '@/entities/cart';
import { calculateTotalPrice, calculateTotalQuantity } from '@/entities/shared/libs/price';
import { Receipt, ReceiptDivide, ReceiptFooter, ReceiptHeader, ReceiptLink, ReceiptList } from '@/shared/ui/receipt';

const ReceiptBox: FC = () => {
  const { cart } = useCartQuery();
  return (
    <Receipt button={<ReceiptLink to="/checkout">Checkout</ReceiptLink>}>
      <ReceiptHeader title="Store name" subtitle="Address, street location" />
      <ReceiptDivide />
      <ReceiptList
        products={cart.products}
        increase={id => <IncreaseProductButton id={id} className="w-2 h-2 mb-px bg-zinc-700 flex items-center justify-center cursor-pointer" />}
        decrease={id => <DecreaseProductButton id={id} className="w-2 h-2 mb-px bg-zinc-300 flex items-center justify-center cursor-pointer" />}
      />
      <ReceiptFooter total={calculateTotalPrice( cart.products )} quantity={calculateTotalQuantity( cart.products )} />
      <ReceiptDivide />
    </Receipt>
  );
};

export default ReceiptBox;