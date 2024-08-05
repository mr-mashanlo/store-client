import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { IProductResponse } from '@/entities/product/types';

interface Props {
  products: Array<IProductResponse>
}

const ProductGrid: FC<Props> = ( { products } ) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-y-10">
      {products.map( product => (
        <div key={product._id}>
          <div className="group relative overflow-hidden">
            <Link to={`/product/${product._id}`}>
              <If condition={Boolean( product.images[0] )}>
                <Then><img src={product.images[0] ? product.images[0].url : ''} alt="" className="w-full aspect-[7/8] object-cover" /></Then>
                <Else><div className="w-full bg-[#363636] aspect-[7/8] object-cover"></div></Else>
              </If>
            </Link>
          </div>
          <p className="mt-2 text-sm">{product.name}</p>
          <p className="mt-1 text-xs font-bold">{product.price} $</p>
        </div>
      ) )}
    </div>
  );
};

export default ProductGrid;