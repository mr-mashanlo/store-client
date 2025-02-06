import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { cartController } from '@/entities/cart';
import { validateResponseError } from '@/entities/shared';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string,
  children?: ReactNode
}

const IncreaseProductButton: FC<Props> = ( { id, children, ...others } ) => {
  const queryClient = useQueryClient();
  const mutation = useMutation( cartController.push );

  async function handleButtonClick( id: string ) {
    try {
      await mutation.mutateAsync( { product: id, quantity: 1 } );
      queryClient.invalidateQueries( { queryKey: [ 'cart' ] } );
    } catch ( error ) {
      const response = await validateResponseError( error );
      console.log( response );
    }
  }

  return (
    <button onClick={() => handleButtonClick( id )}  disabled={mutation.isLoading} {...others}>{children}</button>
  );
};

export default IncreaseProductButton;