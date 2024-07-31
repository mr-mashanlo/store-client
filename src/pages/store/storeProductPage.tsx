import { FC } from 'react';
import { Form, useLoaderData, useNavigation } from 'react-router-dom';
import { MainHeader } from '@/shared/layouts/header';
import { Button } from '@/shared/widgets';
import { IProductResponse } from '@/entities/product/types';

const StoreProductPage: FC = () => {
  const navigation = useNavigation();
  const loaderData = useLoaderData() as { success: boolean, data: IProductResponse };

  return (
    <>
      <MainHeader />
      <section className="py-5 sm:py-14">
        <div className="container-block container-block--normal">
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="sm:col-span-2">
              <div className="grid sm:grid-cols-2 gap-5">
                {loaderData.data.images.map( image => ( <img key={image._id} src={image.url} alt="" className="w-full aspect-square" /> ) )}
              </div>
            </div>
            <div className="relative">
              <div className="sticky top-20 left-0">
                <h1 className="text-2xl font-bold">{loaderData.data.name}</h1>
                <p className="mt-4 text-6xl font-bold">{loaderData.data.price}$</p>
                <Form method="post" action={`/product/${loaderData.data._id}`}>
                  <input id="product" name="product" type="text" value={JSON.stringify( loaderData.data )} readOnly hidden />
                  <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'} className="w-full mt-10">Add to cart</Button>
                </Form>
                <p className="mt-10">{loaderData.data.category.title}</p>
                <p className="mt-6">{loaderData.data.about}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreProductPage;