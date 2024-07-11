import { MainHeader } from '@/features/header/ui';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <>
      <MainHeader />

      <section className="py-14">
        <div className="container-block container-block--normal">
          <p>Hello</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;