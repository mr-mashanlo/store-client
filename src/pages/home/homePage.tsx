import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const HomePage: FC = () => {
  return (
    <>
      <header className="py-10">
        <div className="container-block">
          <div className="flex items-center justify-between gap-5">
            <p className="text-xl font-medium uppercase text-[#FFCCCC]">Lee Mashanlo</p>
            <nav>
              <ul className="flex items-center justify-between gap-5">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/media">Media</NavLink></li>
                <li><NavLink to="/signin">Sign in</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-10">
        <div className="container-block">

        </div>
      </section>
    </>
  );
};

export default HomePage;