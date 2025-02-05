import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { cartController } from '@/entities/cart';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string,
  children?: ReactNode
}

const DecreaseProductButton: FC<Props> = ( { id, children, ...others } ) => {
  const queryClient = useQueryClient();

  const mutation = useMutation( {
    mutationFn: cartController.pull,
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'cart' ] } )
  } );

  function handleButtonClick( id: string ) {
    try {
      mutation.mutate( id );
    } catch ( error ) {
      console.log( error );
    }
  }

  return (
    <button onClick={() => handleButtonClick( id )} disabled={mutation.isLoading} {...others}>{children}</button>
  );
};

export default DecreaseProductButton;