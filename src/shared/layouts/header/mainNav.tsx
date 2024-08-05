import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { useAuthStore } from '@/features/auth/store';
import { useCartStore } from '@/features/store/store';
import { twMerge } from 'tailwind-merge';

const MainNav: FC = () => {
  const { auth, role } = useAuthStore();
  const { getTotalQuantity } = useCartStore();
  const [ width, setWidth ] = useState( window.innerWidth );

  const handleResize = () => {
    setWidth( window.innerWidth );
  };

  useEffect( () => {
    window.addEventListener( 'resize', handleResize );
    return () => { window.removeEventListener( 'resize', handleResize ); };
  }, [] );

  if ( width < 500 ) return (
    <nav className="w-full fixed bottom-0 left-0 z-10 bg-[#303030]">
      <ul className={twMerge( 'grid', role === 'ADMIN' ? 'grid-cols-3' : 'grid-cols-2' )}>
        <li><Link to="/cart" className="inline-block w-full p-3 bg-[#909090] text-[#202020] text-center">Cart ({getTotalQuantity()})</Link></li>
        <If condition={!auth}>
          <Then><li><Link to="/signin" className="inline-block w-full p-3 text-center">Sign in</Link></li></Then>
          <Else><li><Link to="/account/me" className="inline-block w-full p-3 text-center">Account</Link></li></Else>
        </If>
        <If condition={role === 'ADMIN'}>
          <Then><li><Link to="/dashboard/media" className="inline-block w-full p-3 text-center">Dashboard</Link></li></Then>
        </If>
      </ul>
    </nav>
  );

  return (
    <nav>
      <ul className="flex items-center justify-between gap-7">
        <If condition={role === 'ADMIN'}>
          <Then><li><Link to="/dashboard/media">Dashboard</Link></li></Then>
        </If>
        <If condition={!auth}>
          <Then><li><Link to="/signin">Sign in</Link></li></Then>
          <Else><li><Link to="/account/me">My account</Link></li></Else>
        </If>
        <li><Link to="/cart"><span className="w-6 h-6 ml-1 bg-black text-white text-xs rounded-full inline-flex items-center justify-center">{getTotalQuantity()}</span></Link></li>
      </ul>
    </nav>
  );
};

export default MainNav;