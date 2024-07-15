import { FC } from 'react';
import { Form, Link } from 'react-router-dom';
import { IProduct } from '@/entities/product/types';

interface Props {
  products: Array<IProduct>
}

const ProductList: FC<Props> = ( { products } ) => {
  return (
    <ul>
      {products.map( product => (
        <li key={product._id} className="p-3 grid grid-cols-4 gap-4 items-center even:bg-[#363636]">
          <p><Link to={`/dashboard/product/${product._id}`}>{product.name}</Link></p>
          <span>{product.price}</span>
          <span>{product.category}</span>
          <Form method="delete" navigate={false} action={`/dashboard/product/delete/${product._id}`} className="ml-auto">
            <button type="submit" className="px-4 py-2 bg-white text-[#202020] text-sm leading-normal border-2 border-solid">Delete product</button>
          </Form>
        </li>
      ) )}
    </ul>
  );
};

export default ProductList;