import { FC } from 'react';

import IncreaseProductButton from '@/features/increase-product/ui';
import { ProductDescription, ProductGallery, useProductQuery } from '@/entities/product';

interface Props {
  id: string
}

const ProductDetail: FC<Props> = ( { id } ) => {
  const { product } = useProductQuery( id );
  return (
    <article itemScope itemType="https://schema.org/Product" className="grid grid-cols-3 gap-2">
      <ProductGallery name={product.name} images={product.images || []} />
      <div className="px-10 py-30 relative">
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

export default ProductDetail;