import { FC } from 'react';

import { Receipt, ReceiptButton, ReceiptDivide, ReceiptHeader } from '@/shared/ui/receipt';

const SucceessReceipt: FC = () => {
  return (
    <Receipt button={<ReceiptButton to="/t" >Back to home</ReceiptButton>}>
      <ReceiptHeader title="Store name" subtitle="Address, street location" />
      <ReceiptDivide />
      {/* <ReceiptList products={cart.products}/>
      <ReceiptFooter total={calculateTotalPrice( cart.products )} quantity={calculateTotalQuantity( cart.products )} /> */}
      <ReceiptDivide />
    </Receipt>
  );
};

export default SucceessReceipt;