import { ActionFunctionArgs, redirect } from 'react-router-dom';

import { orderService } from '@/shared/services';

const deleteOrder = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id as string;

  try {
    await orderService.delete( id );
    return redirect( '/dashboard/orders' );
  } catch ( error ) {
    return { success: false, error };
  }
};

export default deleteOrder;