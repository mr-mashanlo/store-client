import { FC } from 'react';
import { Link } from 'react-router-dom';
import { headerLinks } from '../config';

const MainHeader: FC = () => {
  return (
    <header className="py-10">
      <div className="container-block container-block--normal">
        <div className="flex items-center justify-between gap-5">
          <p className="text-xl font-medium uppercase text-[#FFCCCC]">Lee Mashanlo</p>
          <nav>
            <ul className="flex items-center justify-between gap-10">
              {headerLinks.map( item => (
                <li key={item.url}><Link to={item.url}>{item.name}</Link></li>
              ) )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;