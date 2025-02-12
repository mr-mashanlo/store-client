import { FC } from 'react';

import { AddressResponseType } from '@/entities/address';
import { OrdersResponseType } from '@/entities/order';
import { calculateTotalPrice, calculateTotalQuantity } from '@/shared/libs';
import { Receipt, ReceiptAddress, ReceiptDivide, ReceiptFooter, ReceiptHeader, ReceiptList, ReceiptStatus } from '@/shared/ui/receipt';

interface Props {
  orders: OrdersResponseType | undefined,
  address: AddressResponseType | undefined
}

const Component: FC<Props> = ( { orders, address } ) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {orders?.map( order => (
        <div key={order._id} className="px-5 pb-30 flex justify-center items-start">
          <Receipt button={<p className="block w-full h-13 bg-zinc-100"></p>}>
            <ReceiptHeader icon={<img src="/logo.svg" alt="Company logo" className="w-12 mx-auto mb-2" />} subtitle="Kazakhstan, Almaty, Somestreet, #30" />
            <ReceiptDivide />
            <ReceiptStatus uid={order._id} status={order.status} created={order.created} />
            <ReceiptDivide />
            <ReceiptAddress city={address?.city || ''} address={address?.street || ''} />
            <ReceiptDivide />
            <ReceiptList products={order.products} />
            <ReceiptFooter total={calculateTotalPrice( order.products )} quantity={calculateTotalQuantity( order.products )} />
            <ReceiptDivide />
          </Receipt>
        </div>
      ) )}
    </div>
  );
};

export default Component;