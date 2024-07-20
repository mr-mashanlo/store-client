import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { useAuthStore } from '@/entities/auth/model';
import { useCartStore } from '@/entities/cart/model';

interface Props {
  title: string
}

const PageHeader: FC<Props> = ( { title } ) => {
  const loacation = useLocation();
  const navigate = useNavigate();
  const { auth, role } = useAuthStore();
  const { getTotalQuantity } = useCartStore();

  return (
    <div className="pb-14 bg-[#363636]">
      <header className="py-10">
        <div className="container-block container-block--normal">
          <div className="flex items-center justify-between gap-5">
            <If condition={loacation.pathname === '/'}>
              <Then><p className="text-xl font-medium uppercase text-[#FFCCCC]">Lee Mashanlo</p></Then>
              <Else><p className="text-xl font-medium uppercase text-[#FFCCCC]"><button onClick={() => navigate( -1 )} className="uppercase">Back</button></p></Else>
            </If>
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
          </div>
        </div>
      </header>
      <div className="mt-20">
        <div className="container-block container-block--normal">
          <div className="mt-4">
            <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;