import { FC } from 'react';

import { AddressResponseType } from '@/entities/address';
import { OrderResponseType } from '@/entities/order';
import { calculateTotalPrice, calculateTotalQuantity } from '@/entities/shared/libs/price';
import { Receipt, ReceiptAddress, ReceiptDivide, ReceiptFooter, ReceiptHeader, ReceiptLink, ReceiptList, ReceiptStatus } from '@/shared/ui/receipt';

interface Props {
  order: OrderResponseType | undefined
  address: AddressResponseType | undefined
}

const Component: FC<Props> = ( { order, address } ) => {
  return (
    <Receipt button={<ReceiptLink to="/" >Back to home</ReceiptLink>}>
      <ReceiptHeader title="Store name" subtitle="Address, street location" />
      <ReceiptDivide />
      <ReceiptStatus uid={order?._id || ''} status={order?.status || ''} created={order?.created || ''} />
      <ReceiptDivide />
      <ReceiptAddress city={address?.city || ''} address={address?.street || ''} />
      <ReceiptDivide />
      <ReceiptList products={order?.products || []}/>
      <ReceiptFooter total={calculateTotalPrice( order?.products || [] )} quantity={calculateTotalQuantity( order?.products || [] )} />
      <ReceiptDivide />
    </Receipt>
  );
};

export default Component;