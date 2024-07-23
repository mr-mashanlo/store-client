import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useCartStore } from '@/entities/cart/model';

interface Props {
  children: ReactNode
}

const RequestCart: FC<Props> = ( { children } ) => {
  const { getTotalQuantity } = useCartStore();

  if ( !getTotalQuantity() ) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequestCart;