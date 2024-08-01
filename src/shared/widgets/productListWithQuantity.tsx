import { IProductResponse } from '@/entities/product/types';
import { FC } from 'react';
import { Else, If, Then } from 'react-if';
import { Link } from 'react-router-dom';

interface Props {
  products: Array<{product: IProductResponse, quantity: number}>
  prefix?: string
  className?: string
}

const ProductListWithQuantity: FC<Props> = ( { products, prefix, className } ) => {
  return (
    <ul className={className}>
      {products.map( product => (
        <li key={product.product._id} className="p-3 flex sm:grid sm:grid-cols-5 gap-4 items-center justify-between odd:bg-[#363636]">
          <span className="flex items-center gap-3 sm:gap-5 col-span-2">
            <If condition={Boolean( product.product.images[0] )}>
              <Then><img src={product.product.images[0] ? product.product.images[0].url : ''} alt="" className="w-10 h-10 object-cover" /></Then>
              <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
            </If>
            <If condition={Boolean( prefix )}>
              <Then><span className=" line-clamp-1"><Link to={`/${prefix}/${product.product._id}`} className="hover:text-white hover:underline">{product.product.name}</Link></span></Then>
              <Else><span className=" line-clamp-1">{product.product.name}</span></Else>
            </If>
          </span>
          <span className="hidden sm:inline sm:text-right">{product.quantity}</span>
          <span className="hidden sm:inline sm:text-right">{product.product.category.title}</span>
          <span className="sm:text-right">{product.product.price}$</span>
        </li>
      ) )}
    </ul>
  );
};

export default ProductListWithQuantity;