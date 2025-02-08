import { FC } from 'react';

import { CreateOrderButton } from '@/features/create-order';
import { AddressResponseType } from '@/entities/address';
import { CartResponseType } from '@/entities/cart';
import { calculateTotalPrice, calculateTotalQuantity } from '@/entities/shared/libs/price';
import { Receipt, ReceiptAddress, ReceiptDivide, ReceiptFooter, ReceiptHeader, ReceiptList } from '@/shared/ui/receipt';

interface Props {
  cart: CartResponseType | undefined,
  address: AddressResponseType | undefined
}

const Component: FC<Props> = ( { cart, address } ) => {
  return (
    <Receipt button={<CreateOrderButton user={cart?.user || ''} address={address?._id || ''} products={cart?.products || []} disabled={ !address?.city && !address?.street }>Buy</CreateOrderButton>}>
      <ReceiptHeader title="Store name" subtitle="Address, street location" />
      <ReceiptDivide />
      <ReceiptAddress city={address?.city || 'n/a'} address={address?.street || 'n/a'} />
      <ReceiptDivide />
      <ReceiptList products={cart?.products || []} />
      <ReceiptFooter total={calculateTotalPrice( cart?.products|| [] )} quantity={calculateTotalQuantity( cart?.products || [] )} />
      <ReceiptDivide />
    </Receipt>
  );
};

export default Component;