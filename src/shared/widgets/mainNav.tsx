import { FC, useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { usePopup } from '../hooks';

import Popup from './popup';
import ProductListWithButton from './productListWithButton';

import { useAuthStore } from '@/features/auth/store';
import { useCartStore } from '@/features/store/store';

const MainNav: FC = () => {
  const { auth, role } = useAuthStore();
  const { products, getTotalQuantity, getTotalPrice, setFrom } = useCartStore();
  const [ width, setWidth ] = useState( window.innerWidth );
  const { isVisible, open, close } = usePopup();

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
    <>
      <nav>
        <ul className="flex items-center justify-between gap-7">
          <If condition={role === 'ADMIN'}>
            <Then><li><Link to="/dashboard/media">Dashboard</Link></li></Then>
          </If>
          <If condition={!auth}>
            <Then><li><Link to="/signin">Sign in</Link></li></Then>
            <Else><li><Link to="/account/me">My account</Link></li></Else>
          </If>
          <li><button onClick={open} className="open-popup"><span className="w-6 h-6 ml-1 bg-black text-white text-xs rounded-full inline-flex items-center justify-center">{getTotalQuantity()}</span></button></li>
        </ul>
      </nav>
      <Popup isVisible={isVisible} onClose={close}>
        <ProductListWithButton products={products} />
        <div className="mt-5 sm:mt-5 text-right">
          <p className="text-5xl sm:text-4xl font-bold">Total: {getTotalPrice()}$</p>
          <Link to={auth ? '/checkout' : '/signin'} onClick={auth ? () => setFrom( '/cart' ) : () => {}} className="inline-block min-w-48 mt-5 sm:mt-5 px-5 py-2 bg-white text-[#202020] text-center font-bold uppercase rounded-lg border-2 border-white">Next</Link>
        </div>
      </Popup>
    </>
  );
};

export default MainNav;