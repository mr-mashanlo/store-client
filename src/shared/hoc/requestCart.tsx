import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useCartStore } from '@/features/store/store';

interface Props {
  children: ReactNode
}

const RequestCart: FC<Props> = ( { children } ) => {
  const { getTotalQuantity } = useCartStore();

  if ( !getTotalQuantity() ) {
    return <Navigate to="/account/orders" />;
  }

  return children;
};

export default RequestCart;