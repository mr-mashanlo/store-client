import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useCartQuery } from '@/entities/cart';
import { useUserStore } from '@/entities/user';
import { calculateTotalQuantity } from '@/shared/libs/price';

const Header: FC = () => {
  const userID = useUserStore( state => state.userID );

  if ( !userID ) {
    return (
      <header className="py-6 fixed top-0 left-0 right-0 z-10" aria-labelledby="header-heading">
        <div className="px-2 sm:px-10 flex gap-10 items-center justify-between">
          <h1 id="header-heading">
            <Link to="/" aria-label="Home">
              <img src="/logo.svg" alt="Company logo" className="w-12" />
            </Link>
          </h1>
          <nav aria-label="Main Navigation">
            <ul className="flex gap-10 items-center">
              <li><Link to="/signin">Sign in</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  const { data } = useCartQuery();
  return (
    <header className="py-6 fixed top-0 left-0 right-0 z-10" aria-labelledby="header-heading">
      <div className="px-2 sm:px-10 flex gap-10 items-center justify-between">
        <h1 id="header-heading">
          <Link to="/" aria-label="Home">
            <img src="/logo.svg" alt="Company logo" className="w-12" />
          </Link>
        </h1>
        <nav aria-label="Main Navigation">
          <ul className="flex gap-10 items-center">
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/cart">Cart ({calculateTotalQuantity( data?.products || [] )})</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;