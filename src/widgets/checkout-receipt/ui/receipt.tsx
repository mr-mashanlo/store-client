import { FC } from 'react';

import { CreateOrderButton } from '@/features/create-order';
import { useAddressQuery } from '@/entities/address';
import { useCartQuery } from '@/entities/cart';
import { calculateTotalPrice, calculateTotalQuantity } from '@/entities/shared/libs/price';
import { getUserID } from '@/entities/user';
import { Receipt, ReceiptAddress, ReceiptDivide, ReceiptFooter, ReceiptHeader, ReceiptList } from '@/shared/ui/receipt';

const ReceiptBox: FC = () => {
  const { cart } = useCartQuery();
  const { address } = useAddressQuery();
  const user = getUserID();

  return (
    <Receipt button={<CreateOrderButton user={user || ''} address={address._id} products={cart.products} disabled={ !address.city && !address.street }>Buy</CreateOrderButton>}>
      <ReceiptHeader title="Store name" subtitle="Address, street location" />
      <ReceiptDivide />
      <ReceiptAddress city={address.city || 'n/a'} address={address.street || 'n/a'} />
      <ReceiptDivide />
      <ReceiptList products={cart.products} />
      <ReceiptFooter total={calculateTotalPrice( cart.products )} quantity={calculateTotalQuantity( cart.products )} />
      <ReceiptDivide />
    </Receipt>
  );
};

export default ReceiptBox;