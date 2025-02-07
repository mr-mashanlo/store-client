import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { cartController } from '@/entities/cart';
import { validateResponseError } from '@/entities/shared';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string,
  children?: ReactNode
}

const DecreaseProductButton: FC<Props> = ( { id, children, ...others } ) => {
  const queryClient = useQueryClient();
  const mutation = useMutation( cartController.pull );

  async function handleButtonClick( id: string ) {
    try {
      await mutation.mutateAsync( id );
      queryClient.invalidateQueries( { queryKey: [ 'cart' ] } );
    } catch ( error ) {
      const result = await validateResponseError( error );
      console.log( result );
    }
  }

  return (
    <button onClick={() => handleButtonClick( id )} disabled={mutation.isLoading} {...others}>{children}</button>
  );
};

export default DecreaseProductButton;