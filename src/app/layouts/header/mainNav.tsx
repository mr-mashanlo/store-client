import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { useAuthStore } from '@/entities/auth/model';
import { useCartStore } from '@/entities/cart/model';

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
      <ul className="grid grid-cols-3">
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
      <ul className="flex items-center justify-between gap-10">
        <li><Link to="/cart">Cart ({getTotalQuantity()})</Link></li>
        <If condition={!auth}>
          <Then><li><Link to="/signin">Sign in</Link></li></Then>
          <Else><li><Link to="/account/me">Account</Link></li></Else>
        </If>
        <If condition={role === 'ADMIN'}>
          <Then><li><Link to="/dashboard/media">Dashboard</Link></li></Then>
        </If>
      </ul>
    </nav>
  );
};

export default MainNav;