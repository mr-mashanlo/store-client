import { FC } from 'react';

import { useAddressQuery } from '@/entities/address';
import { useCartQuery } from '@/entities/cart';
import { calculateTotalPrice, calculateTotalQuantity } from '@/entities/shared/libs/price';
import { Receipt, ReceiptAddress, ReceiptButton, ReceiptDivide, ReceiptFooter, ReceiptHeader, ReceiptList } from '@/shared/ui/receipt';

const ReceiptBox: FC = () => {
  const { cart } = useCartQuery();
  const { address } = useAddressQuery();
  return (
    <Receipt button={<ReceiptButton disabled={ !address.city && !address.address }>Buy</ReceiptButton>}>
      <ReceiptHeader title="Store name" subtitle="Address, street location" />
      <ReceiptDivide />
      <ReceiptAddress city={address.city || 'n/a'} address={address.address || 'n/a'} />
      <ReceiptDivide />
      <ReceiptList products={cart.products} />
      <ReceiptFooter total={calculateTotalPrice( cart.products )} quantity={calculateTotalQuantity( cart.products )} />
      <ReceiptDivide />
    </Receipt>
  );
};

export default ReceiptBox;