import { FC } from 'react';

import { IncreaseProductButton } from '@/features/increase-product';
import { ProductDescription, ProductGallery, ProductResponseType } from '@/entities/product';

interface Props {
  product: ProductResponseType
}

const Component: FC<Props> = ( { product } ) => {
  return (
    <article itemScope itemType="https://schema.org/Product" className="grid sm:grid-cols-3 sm:gap-2">
      <ProductGallery name={product.name} images={product.images || []} className="sm:col-span-2" />
      <div className="px-4 sm:px-10 py-10 sm:py-30 relative">
        <div className="sticky top-30">
          <ProductDescription
            id={product._id}
            name={product.name}
            price={product.price}
            discount={product.discount}
            description={product.description || ''}
            increase={id => <IncreaseProductButton id={id} className="text-left cursor-pointer">Add to cart</IncreaseProductButton>}
          />
        </div>
      </div>
    </article>
  );
};

export default Component;