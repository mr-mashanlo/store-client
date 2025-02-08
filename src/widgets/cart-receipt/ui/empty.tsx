import { FC } from 'react';
import { Link } from 'react-router-dom';

const Empty: FC = () => {
  return (
    <div className="w-100 text-center">
      <p>Your cart is empty. Please return to the <Link to="/" className="font-bold hover:underline">homepage</Link> to continue shopping</p>
    </div>
  );
};

export default Empty;