import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useCartQuery } from '@/entities/cart';
import { calculateTotalQuantity } from '@/entities/shared/libs/price';
import { getUserID } from '@/entities/user';

const Header: FC = () => {
  const { data } = useCartQuery();
  const user = getUserID();
  return (
    <header className="py-6 fixed top-0 left-0 right-0 z-10" aria-labelledby="header-heading">
      <div className="px-2 sm:px-10 flex gap-10 items-center justify-between">
        <h1 id="header-heading"><Link to="/" aria-label="Home">Logo</Link></h1>
        <nav aria-label="Main Navigation">
          <ul className="flex gap-10 items-center">
            {
              user?.length
                ?
                <>
                  <li><Link to="/account">Account</Link></li>
                  <li><Link to="/cart">Cart ({calculateTotalQuantity( data?.products || [] )})</Link></li>
                </>
                :
                <li><Link to="/signin">Sign in</Link></li>
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;