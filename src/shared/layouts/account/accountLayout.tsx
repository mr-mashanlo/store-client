import { FC, useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { NavLink, Outlet } from 'react-router-dom';

const AccountLayout: FC = () => {
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
              <li className="w-6 h-6"><NavLink to="/account/me" className="inline-block w-6 h-6 rounded-full bg-[#505050] aria-[current=page]:bg-[#FFCCCC]"></NavLink></li>
              <li className="w-6 h-6"><NavLink to="/account/address" className="inline-block w-6 h-6 rounded-full bg-[#505050] aria-[current=page]:bg-[#FFCCCC]"></NavLink></li>
              <li className="w-6 h-6"><NavLink to="/account/orders" className="inline-block w-6 h-6 rounded-full bg-[#505050] aria-[current=page]:bg-[#FFCCCC]"></NavLink></li>
            </ul>
          </div>
        </Then>
        <Else>
          <div className="sm:min-h-screen p-5 sm:p-14 sm:col-span-1 bg-gray-200 relative">
            <ul className="flex flex-col gap-5 sticky top-14 left-0">
              <li><NavLink to="/account/me" className="aria-[current=page]:text-black">User</NavLink></li>
              <li><NavLink to="/account/address" className="aria-[current=page]:text-black">Address</NavLink></li>
              <li><NavLink to="/account/orders" className="aria-[current=page]:text-black">Orders</NavLink></li>
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

export default AccountLayout;