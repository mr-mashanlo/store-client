import { FC } from 'react';

import { useAddressQuery } from '@/entities/address';
import { useOrdersQuery } from '@/entities/order';
import { calculateTotalPrice, calculateTotalQuantity } from '@/entities/shared/libs/price';
import { Receipt, ReceiptAddress, ReceiptDivide, ReceiptFooter, ReceiptHeader, ReceiptList, ReceiptStatus } from '@/shared/ui/receipt';

const OrderGrid: FC = () => {
  const { orders } = useOrdersQuery();
  const { address } = useAddressQuery();

  return (
    <div className="grid grid-cols-3 gap-2">
      {orders.map( order => (
        <div key={order._id} className="px-5 pb-30 flex justify-center items-start">
          <Receipt button={<p className="block w-full h-13 bg-zinc-100"></p>}>
            <ReceiptHeader title="Store name" subtitle="Address, street location" />
            <ReceiptDivide />
            <ReceiptStatus uid={order._id} status={order.status} created={order.created} />
            <ReceiptDivide />
            <ReceiptAddress city={address.city} address={address.street} />
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

export default OrderGrid;