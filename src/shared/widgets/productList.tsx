import { FC } from 'react';
import { Else, If, Then } from 'react-if';
import { Link } from 'react-router-dom';

import { IProductResponse } from '@/entities/product/types';

interface Props {
  products: Array<IProductResponse>
  prefix?: string
  className?: string
}

const ProductList: FC<Props> = ( { products, prefix, className } ) => {
  return (
    <ul className={className}>
      {products.map( product => (
        <li key={product._id} className="p-3 flex sm:grid sm:grid-cols-4 gap-4 items-center justify-between odd:bg-gray-100">
          <span className="flex items-center gap-3 sm:gap-5 col-span-2">
            <If condition={Boolean( product.images[0] )}>
              <Then><img src={product.images[0] ? product.images[0].url : ''} alt="" className="w-10 h-10 object-cover" /></Then>
              <Else><div className="w-10 h-10 bg-gray-100"></div></Else>
            </If>
            <If condition={Boolean( prefix )}>
              <Then><span className=" line-clamp-1"><Link to={`/${prefix}/${product._id}`} className="hover:text-black hover:underline">{product.name}</Link></span></Then>
              <Else><span className=" line-clamp-1">{product.name}</span></Else>
            </If>
          </span>
          <span className="hidden sm:inline sm:text-right">{product.category.title}</span>
          <span className="sm:text-right">{product.price}$</span>
        </li>
      ) )}
    </ul>
  );
};

export default ProductList;