import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { addProductToCart } from '@/entities/product';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string,
  children: ReactNode
}

const AddToCartButton: FC<Props> = ( { id, children, ...others } ) => {

  function handleButtonClick( id: string ) {
    addProductToCart( id );
  };

  return (
    <button onClick={() => handleButtonClick( id )} {...others}>{children}</button>
  );
};

export default AddToCartButton;