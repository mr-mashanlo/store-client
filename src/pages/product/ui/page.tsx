import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { ProductDetail } from '@/widgets/product-detail';

const ProductPage: FC = () => {
  const { id } = useParams();

  return (
    <main aria-labelledby="product-heading">
      <ProductDetail id={id || ''} />
    </main>
  );
};

export default ProductPage;