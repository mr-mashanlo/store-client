import { IProductResponse } from '@/entities/product/types';
import { FC } from 'react';
import { Form } from 'react-router-dom';
import Button from './button';

interface Props {
  product: IProductResponse
}

const ProductOverview: FC<Props> = ( { product } ) => {
  return (
    <div className="grid sm:grid-cols-3 gap-5">
      <div className="sm:col-span-2">
        <div className="grid sm:grid-cols-2 gap-5">
          {product.images.map( image => ( <img key={image._id} src={image.url} alt="" className="w-full aspect-square" /> ) )}
        </div>
      </div>
      <div className="relative">
        <div className="sticky top-20 left-0">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="mt-4 text-6xl font-bold">{product.price}$</p>
          <Form method="post" action={`/product/${product._id}`}>
            <input id="product" name="product" type="text" value={JSON.stringify( product )} readOnly hidden />
            <Button className="w-full mt-10">Add to cart</Button>
          </Form>
          <p className="mt-10">{product.category.title}</p>
          <p className="mt-6">{product.about}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;