import { FC } from 'react';
import { CreateProductForm, ProductList } from '@/features/product/ui';
import { useLoaderData } from 'react-router-dom';
import { IProduct } from '@/entities/product/types';

const ProductsPage: FC = () => {
  const products = useLoaderData() as { success: boolean, data: Array<IProduct> };

  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Products page</h1>
      <CreateProductForm />
      <ProductList products={products.data} />
    </div>
  );
};

export default ProductsPage;