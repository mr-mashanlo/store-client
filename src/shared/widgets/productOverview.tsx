import { FC } from 'react';
import { Form, useNavigation } from 'react-router-dom';

import { Button } from '.';

import { IProductResponse } from '@/entities/product/types';

interface Props {
  product: IProductResponse
}

const ProductOverview: FC<Props> = ( { product } ) => {
  const navigation = useNavigation();

  return (
    <div className="grid sm:grid-cols-[2.1fr_1fr] gap-3">
      <div>
        <div className="grid sm:grid-cols-2 gap-3">
          {product.images.map( image => ( <img key={image._id} src={image.url} alt="" className="w-full aspect-[7/8] object-cover" /> ) )}
        </div>
      </div>
      <div>
        <div className="px-10 sticky top-32 left-0">
          <h1 className="text-xl">{product.name}</h1>
          <p className="mt-1 text-base font-bold"><span className="text-zinc-400 line-through"> $100 </span> ${product.price}</p>
          <Form method="post" action={`/product/${product._id}`}>
            <input id="product" name="product" type="text" value={JSON.stringify( product )} readOnly hidden />
            <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'} className="w-full mt-3">Add to cart</Button>
          </Form>
          <p className="mt-6 leading-[2.2]">{product.about}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;