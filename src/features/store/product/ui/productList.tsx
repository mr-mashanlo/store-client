import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { IProductResponse } from '@/entities/product/types';

interface Props {
  products: Array<IProductResponse>
}

const ProductList: FC<Props> = ( { products } ) => {
  return (
    <ul>
      {products.map( product => (
        <li key={product._id} className="p-3 flex sm:grid sm:grid-cols-4 gap-4 items-center justify-between odd:bg-[#363636]">
          <span className="flex items-center gap-3 sm:gap-5 col-span-2">
            <If condition={Boolean( product.images[0] )}>
              <Then><img src={product.images[0] ? product.images[0].url : ''} alt="" className="w-10 h-10 object-cover" /></Then>
              <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
            </If>
            <span className=" line-clamp-1"><Link to={`/dashboard/products/${product._id}`} className="hover:text-white hover:underline">{product.name}</Link></span>
          </span>
          <span className="hidden sm:inline sm:text-right">{product.category.title}</span>
          <span className="sm:text-right">{product.price}$</span>
        </li>
      ) )}
    </ul>
  );
};

export default ProductList;