import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import MainNav from './mainNav';

const MainHeader: FC = () => {
  const loacation = useLocation();
  const navigate = useNavigate();

  return (
    <header className="py-5 sm:py-10">
      <div className="container-block container-block--normal px-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <If condition={loacation.pathname === '/'}>
            <Then><p className=" sm:text-xl font-medium uppercase text-[#FFCCCC]">Lee Mashanlo</p></Then>
            <Else><p className="text-xl font-medium uppercase text-[#FFCCCC]"><button onClick={() => navigate( -1 )} className="uppercase">Back</button></p></Else>
          </If>
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;