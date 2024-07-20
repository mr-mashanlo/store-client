import { FC } from 'react';
import { Form, Link } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { IProduct } from '@/entities/product/types';

interface Props {
  products: Array<IProduct>
}

const ProductList: FC<Props> = ( { products } ) => {
  return (
    <ul>
      {products.map( product => (
        <li key={product._id} className="p-3 grid grid-cols-6 gap-4 items-center even:bg-[#363636]">
          <If condition={product.images[0]}>
            <Then><img src={product.images[0]} alt="" className="w-10 h-10 object-cover" /></Then>
            <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
          </If>
          <span className="col-span-2 line-clamp-1"><Link to={`/dashboard/products/${product._id}`} className="hover:text-white hover:underline">{product.name}</Link></span>
          <span>{product.price} $</span>
          <span>{product.category}</span>
          <Form method="delete" action={`/dashboard/products/delete/${product._id}`} navigate={false} className="ml-auto">
            <button type="submit" className="px-4 py-2 bg-white text-[#202020] text-sm leading-normal border-2 border-solid">Delete product</button>
          </Form>
        </li>
      ) )}
    </ul>
  );
};

export default ProductList;