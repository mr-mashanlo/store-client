import { FC } from 'react';

import { CreateOrderButton } from '@/features/create-order';
import { AddressResponseType } from '@/entities/address';
import { CartResponseType } from '@/entities/cart';
import { calculateTotalPrice, calculateTotalQuantity } from '@/shared/libs';
import { Receipt, ReceiptAddress, ReceiptDivide, ReceiptFooter, ReceiptHeader, ReceiptList } from '@/shared/ui/receipt';

interface Props {
  cart: CartResponseType | undefined,
  address: AddressResponseType | undefined
}

const Component: FC<Props> = ( { cart, address } ) => {
  return (
    <Receipt button={<CreateOrderButton user={cart?.user || ''} address={address?._id || ''} products={cart?.products || []} disabled={ !address?.city && !address?.street }>Buy</CreateOrderButton>}>
      <ReceiptHeader icon={<img src="/logo.svg" alt="Company logo" className="w-12 mx-auto mb-2" />} subtitle="Kazakhstan, Almaty, Somestreet, #30" />
      <ReceiptDivide />
      <ReceiptAddress city={address?.city || 'n/a'} address={address?.street || 'n/a'} />
      <ReceiptDivide />
      <ReceiptList products={cart?.products || []} />
      <ReceiptFooter total={calculateTotalPrice( cart?.products || [] )} quantity={calculateTotalQuantity( cart?.products || [] )} />
      <ReceiptDivide />
    </Receipt>
  );
};

export default Component;