import { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const CartLayout: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <button onClick={() => navigate( -1 )} className="fixed top-6 left-10 cursor-pointer">Back</button>
      <Outlet />
    </div>
  );
};

export default CartLayout;