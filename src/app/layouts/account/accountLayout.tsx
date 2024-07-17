import { FC } from 'react';
import { NavLink, NavLinkProps, Outlet } from 'react-router-dom';

const AccountLayout: FC = () => {

  const setActiveClass: NavLinkProps['className'] = ( { isActive } ) => {
    return isActive ? 'text-[#FFCCCC]' : '';
  };

  return (
    <div className="grid grid-cols-5">
      <div className="min-h-screen p-14 col-span-1 bg-[#363636] relative">
        <ul className="flex flex-col gap-5 sticky top-14 left-0">
          <li className="text-3xl font-bold uppercase text-[#FFCCCC]"><NavLink to="/">Back</NavLink></li>
          <li><NavLink to="/account/me" className={setActiveClass}>User</NavLink></li>
          <li><NavLink to="/account/address" className={setActiveClass}>Address</NavLink></li>
          <li><NavLink to="/account/orders" className={setActiveClass}>Orders</NavLink></li>
        </ul>
      </div>
      <div className="min-h-screen p-14 col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountLayout;