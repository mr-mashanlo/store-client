import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { cartController, CartType } from '@/entities/cart';
import { orderController, OrderRequestType } from '@/entities/order';
import { ReceiptButton } from '@/shared/ui/receipt';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  user: string,
  address: string,
  products: Array<CartType>,
  children: ReactNode
}

const CreateOrderButton: FC<Props> = ( { user, address, products, children } ) => {
  const navigate = useNavigate();
  const orderMutation = useMutation( orderController.create<OrderRequestType> );
  const cartMutation = useMutation( cartController.delete );

  const order: OrderRequestType = {
    user,
    address,
    status: 'Processing',
    created: String( Date.now() ),
    products: products.map( item => ( { product: item.product._id, price: item.product.price, quantity: item.quantity } ) )
  };

  async function handleButtonClick() {
    try {
      const orderResponse = await orderMutation.mutateAsync( order );
      await cartMutation.mutateAsync( { user } );
      navigate( `/success/${orderResponse._id}` );
    } catch ( error ) {
      console.log( error );
    }
  }

  return (
    <ReceiptButton onClick={() => handleButtonClick()} isLoading={orderMutation.isLoading || cartMutation.isLoading} disabled={!address || orderMutation.isLoading || cartMutation.isLoading}>
      {children}
    </ReceiptButton>
  );
};

export default CreateOrderButton;