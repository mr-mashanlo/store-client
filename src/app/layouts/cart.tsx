import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const CartLayout: FC = () => {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
};

export default CartLayout;