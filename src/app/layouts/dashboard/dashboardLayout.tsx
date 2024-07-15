import { FC } from 'react';
import { NavLink, NavLinkProps, Outlet } from 'react-router-dom';

const DashboardLayout: FC = () => {

  const setActiveClass: NavLinkProps['className'] = ( { isActive } ) => {
    return isActive ? 'text-[#FFCCCC]' : '';
  };

  return (
    <div className="grid grid-cols-5">
      <div className="min-h-screen p-14 col-span-1 bg-[#363636] sticky top-0 left-0">
        <ul className="flex flex-col gap-5">
          <li className="text-3xl font-bold uppercase text-[#FFCCCC]"><NavLink to="/">Back</NavLink></li>
          <li><NavLink to="/dashboard/media" className={setActiveClass}>Media</NavLink></li>
          <li><NavLink to="/dashboard/users" className={setActiveClass}>Users</NavLink></li>
          <li><NavLink to="/dashboard/products" className={setActiveClass}>Products</NavLink></li>
          <li><NavLink to="/dashboard/categories" className={setActiveClass}>Categories</NavLink></li>
          <li><NavLink to="/dashboard/orders" className={setActiveClass}>Orders</NavLink></li>
        </ul>
      </div>
      <div className="min-h-screen p-14 col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;