import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { useAuthStore } from '@/entities/auth/model';

const MainHeader: FC = () => {
  const { auth, role } = useAuthStore();
  return (
    <header className="py-10">
      <div className="container-block container-block--normal">
        <div className="flex items-center justify-between gap-5">
          <p className="text-xl font-medium uppercase text-[#FFCCCC]">Lee Mashanlo</p>
          <nav>
            <ul className="flex items-center justify-between gap-10">
              <If condition={!auth}>
                <Then>
                  <li><Link to="/signin">Sign in</Link></li>
                </Then>
                <Else>
                  <li><Link to="/account/me">Account</Link></li>
                </Else>
              </If>
              <If condition={role === 'ADMIN'}>
                <Then>
                  <li><Link to="/dashboard/media">Dashboard</Link></li>
                </Then>
              </If>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;