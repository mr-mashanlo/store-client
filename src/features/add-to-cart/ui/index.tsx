import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { cartController } from '@/entities/product';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string,
  children: ReactNode
}

const AddToCartButton: FC<Props> = ( { id, children, ...others } ) => {
  const queryClient = useQueryClient();
  const mutation = useMutation( {
    mutationFn: cartController.push,
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'cart' ] } )
  } );

  function handleButtonClick( id: string ) {
    try {
      mutation.mutate( { product: id, quantity: 1 } );
    } catch ( error ) {
      console.log( error );
    }
  }

  return (
    <button onClick={() => handleButtonClick( id )} {...others}>{children}</button>
  );
};

export default AddToCartButton;