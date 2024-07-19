import { FC } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { MainHeader } from '@/app/layouts/header/ui';
import { IProduct } from '@/entities/product/types';
import Button from '@/shared/ui/button';

const SingleProductPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: IProduct };
  console.log( loaderData );

  return (
    <>
      <MainHeader />
      <section className="py-10">
        <div className="container-block container-block--normal">
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-5">
                {loaderData.data.images.map( image => ( <img key={image} src={image} alt="" className="w-full aspect-square" /> ) )}
              </div>
            </div>
            <div className="relative">
              <div className="sticky top-32 left-0">
                <h1 className="text-2xl font-bold">{loaderData.data.name}</h1>
                <p className="mt-4 text-6xl font-bold">{loaderData.data.price}$</p>
                <Form method="post" action={`/product/${loaderData.data._id}`}>
                  <Button className="w-full mt-10">Add to cart</Button>
                </Form>
                <p className="mt-10">{loaderData.data.category}</p>
                <p className="mt-6">{loaderData.data.about}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;