import { FC } from 'react';
import { Else, If, Then } from 'react-if';
import { Link } from 'react-router-dom';

import { IProductResponse } from '@/entities/product/types';
import { useCartStore } from '@/features/store/store';

interface Props {
  products: Array<{product: IProductResponse, quantity: number}>
  prefix?: string
  className?: string
}

const ProductListWithButton: FC<Props> = ( { products, prefix, className } ) => {
  const { removeFromProducts, getTotalQuantity } = useCartStore();

  return (
    <ul className={className}>
      {products.map( product => (
        <li key={product.product._id} className="p-3 flex sm:grid sm:grid-cols-5 gap-4 items-center justify-between odd:bg-gray-100">
          <span className="flex items-center gap-3 sm:gap-5 col-span-3">
            <button onClick={() => removeFromProducts( product.product._id || '' )}><span className="open-popup w-5 h-5 bg-red-400 flex items-center justify-center rounded-full"></span></button>
            <If condition={Boolean( product.product.images[0] )}>
              <Then><img src={product.product.images[0] ? product.product.images[0].url : ''} alt="" className="w-10 h-10 object-cover" /></Then>
              <Else><div className="w-10 h-10 bg-gray-100"></div></Else>
            </If>
            <If condition={getTotalQuantity()}>
              <Then><span className=" line-clamp-1"><Link to={`/${prefix}/${product.product._id}`} className="hover:text-black hover:underline">{product.product.name}</Link></span></Then>
              <Else><span className=" line-clamp-1">{product.product.name}</span></Else>
            </If>
          </span>
          <span className="hidden sm:inline sm:text-right">{product.quantity}</span>
          <span className="sm:text-right">{product.product.price}$</span>
        </li>
      ) )}
    </ul>
  );
};

export default ProductListWithButton;