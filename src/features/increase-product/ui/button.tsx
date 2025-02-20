import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { cartController } from '@/entities/cart';
import { useUserStore } from '@/entities/user';
import { validateResponseError } from '@/shared/libs';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string,
  className: string,
  children?: ReactNode
}

const IncreaseProductButton: FC<Props> = ( { id, className, children, ...others } ) => {
  const queryClient = useQueryClient();
  const mutation = useMutation( cartController.push );
  const userID = useUserStore( state => state.userID );

  async function handleButtonClick( id: string ) {
    try {
      await mutation.mutateAsync( { product: id, quantity: 1 } );
      queryClient.invalidateQueries( { queryKey: [ 'cart' ] } );
    } catch ( error ) {
      const result = await validateResponseError( error );
      console.log( result );
    }
  }

  return (
    userID
      ?
      <button onClick={() => handleButtonClick( id )} disabled={mutation.isLoading} className={twMerge( 'font-bold', mutation.isLoading ? 'animate-pulse' : '', className )} {...others}>
        {children}
      </button>
      :
      <Link to="/signin" className="font-bold">Sign in to shop</Link>
  );
};

export default IncreaseProductButton;