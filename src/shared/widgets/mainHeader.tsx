import { FC } from 'react';
import { Else, If, Then } from 'react-if';
import { useLocation, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import MainNav from './mainNav';

interface Props {
  className?: string
}

const MainHeader: FC<Props> = ( { className } ) => {
  const loacation = useLocation();
  const navigate = useNavigate();

  return (
    <header className={twMerge( 'py-5 sm:py-7', className )}>
      <div className="container-block px-9">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <If condition={loacation.pathname === '/'}>
            <Then><p className="text-2xl font-bold text-black uppercase tracking-[0.8rem]">Lee</p></Then>
            <Else><p className="text-2xl font-bold text-black uppercase"><button onClick={() => navigate( -1 )} className="uppercase">Back</button></p></Else>
          </If>
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;