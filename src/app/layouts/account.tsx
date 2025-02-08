import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AccountLayout: FC = () => {
  return (
    <div className="page">
      <Link to="/" className="fixed top-6 left-10 cursor-pointer">Home</Link>
      <Outlet />
    </div>
  );
};

export default AccountLayout;