import { FC, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Else, If, Then } from 'react-if';

const DashboardLayout: FC = () => {
  const [ width, setWidth ] = useState( window.innerWidth );

  useEffect( () => {
    const handleResize = () => { setWidth( window.innerWidth ); };
    window.addEventListener( 'resize', handleResize );
    return () => { window.removeEventListener( 'resize', handleResize ); };
  }, [] );


  return (
    <div className="pb-16 sm:pb-0 sm:grid sm:grid-cols-5">
      <If condition={width < 500}>
        <Then>
          <div className="p-5 bg-[#363636] fixed bottom-0 left-0 right-0 z-10">
            <ul className="flex justify-between">
              <li className="w-6 h-6"><NavLink to="/dashboard/media" className="inline-block w-6 h-6 rounded-full bg-[#505050] aria-[current=page]:bg-[#FFCCCC]"></NavLink></li>
              <li className="w-6 h-6"><NavLink to="/dashboard/users" className="inline-block w-6 h-6 rounded-full bg-[#505050] aria-[current=page]:bg-[#FFCCCC]"></NavLink></li>
              <li className="w-6 h-6"><NavLink to="/dashboard/products" className="inline-block w-6 h-6 rounded-full bg-[#505050] aria-[current=page]:bg-[#FFCCCC]"></NavLink></li>
              <li className="w-6 h-6"><NavLink to="/dashboard/categories" className="inline-block w-6 h-6 rounded-full bg-[#505050] aria-[current=page]:bg-[#FFCCCC]"></NavLink></li>
              <li className="w-6 h-6"><NavLink to="/dashboard/orders" className="inline-block w-6 h-6 rounded-full bg-[#505050] aria-[current=page]:bg-[#FFCCCC]"></NavLink></li>
            </ul>
          </div>
        </Then>
        <Else>
          <div className="min-h-screen p-14 col-span-1 bg-[#363636] relative">
            <ul className="flex flex-col gap-5 sticky top-14 left-0">
              <li className="text-3xl font-bold uppercase text-[#FFCCCC]"><NavLink to="/">Back</NavLink></li>
              <li><NavLink to="/dashboard/media" className="aria-[current=page]:text-[#FFCCCC]">Media</NavLink></li>
              <li><NavLink to="/dashboard/users" className="aria-[current=page]:text-[#FFCCCC]">Users</NavLink></li>
              <li><NavLink to="/dashboard/products" className="aria-[current=page]:text-[#FFCCCC]">Products</NavLink></li>
              <li><NavLink to="/dashboard/categories" className="aria-[current=page]:text-[#FFCCCC]">Categories</NavLink></li>
              <li><NavLink to="/dashboard/orders" className="aria-[current=page]:text-[#FFCCCC]">Orders</NavLink></li>
            </ul>
          </div>
        </Else>
      </If>
      <div className="sm:min-h-screen p-5 sm:p-14 sm:col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;