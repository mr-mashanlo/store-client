import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { IProductResponse } from '@/entities/product/types';

interface Props {
  products: Array<IProductResponse>
}

const ProductGrid: FC<Props> = ( { products } ) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
      {products.map( product => (
        <div key={product._id} className="grid gap-2">
          <div className="group relative overflow-hidden">
            <Link to={`/product/${product._id}`}>
              <If condition={Boolean( product.images[0] )}>
                <Then><img src={product.images[0] ? product.images[0].url : ''} alt="" className="w-full aspect-square object-cover" /></Then>
                <Else><div className="w-full bg-[#363636] aspect-square object-cover"></div></Else>
              </If>
            </Link>
          </div>
          <p className="text-sm">{product.name}</p>
          <p className="text-xs font-bold">{product.price} $</p>
        </div>
      ) )}
    </div>
  );
};

export default ProductGrid;