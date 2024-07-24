import { FC, useState } from 'react';
import { Link, useFetcher } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { IProductResponse } from '@/entities/product/types';
import Button from '@/shared/ui/button';

interface Props {
  products: Array<IProductResponse>
}

const ProductList: FC<Props> = ( { products } ) => {
  const deleteFetcher = useFetcher();
  const [ activeButton, setActiveButton ] = useState<string>( '' );

  return (
    <ul>
      {products.map( product => (
        <li key={product._id} className="p-3 grid grid-cols-6 gap-4 items-center even:bg-[#363636]">
          <If condition={Boolean( product.images[0] )}>
            <Then><img src={product.images[0] ? product.images[0].url : ''} alt="" className="w-10 h-10 object-cover" /></Then>
            <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
          </If>
          <span className="col-span-2 line-clamp-1"><Link to={`/dashboard/products/${product._id}`} className="hover:text-white hover:underline">{product.name}</Link></span>
          <span>{product.price}$</span>
          <span>{product.category.title}</span>
          <deleteFetcher.Form method="delete" action={`/dashboard/products/delete/${product._id}`} className="ml-auto">
            <Button onClick={() => setActiveButton( product._id || '' )} size="sm" loading={activeButton === product._id && deleteFetcher.state === 'submitting'} disabled={activeButton === product._id && deleteFetcher.state === 'submitting'}>Delete</Button>
          </deleteFetcher.Form>
        </li>
      ) )}
    </ul>
  );
};

export default ProductList;