import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MainHeader } from '@/app/layouts/header/ui';
import { IProduct } from '@/entities/product/types';
import { Else, If, Then } from 'react-if';

const HomePage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: Array<IProduct> };

  return (
    <>
      <MainHeader />
      <section className="py-14">
        <div className="container-block container-block--normal">
          <div className="grid grid-cols-4 gap-5">
            {loaderData.data.map( product => (
              <div key={product._id} className="grid gap-2">
                <div className="group relative overflow-hidden">
                  <Link to={`/product/${product._id}`}>
                    <If condition={product.images[0]}>
                      <Then>
                        <img src={product.images[0]} alt="" className="w-full aspect-square object-cover" />
                      </Then>
                      <Else>
                        <div className="w-full bg-[#363636] aspect-square object-cover"></div>
                      </Else>
                    </If>
                  </Link>
                </div>
                <p className="text-sm">{product.name}</p>
                <p className="text-xs font-bold">{product.price} $</p>
              </div>
            ) )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;