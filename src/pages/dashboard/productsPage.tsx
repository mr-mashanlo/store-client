import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CreateProductForm, ProductList } from '@/features/product/ui';
import { IProduct } from '@/entities/product/types';
import { ICategory } from '@/entities/category/types';
import { IMedia } from '@/entities/media/types';

const ProductsPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: { products: Array<IProduct>, categories: Array<ICategory>, images: Array<IMedia> }};

  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Products page</h1>
      <CreateProductForm categories={loaderData.data.categories} images={loaderData.data.images} />
      <ProductList products={loaderData.data.products} />
    </div>
  );
};

export default ProductsPage;