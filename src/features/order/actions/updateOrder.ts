import { ActionFunctionArgs } from 'react-router-dom';
import { orderService } from '../service';

const updateOrder = async ( { params, request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const status = formData.get( 'status' ) as 'Processing' | 'Delivering' | 'Done';

  if ( typeof params.id !== 'string' || typeof status !== 'string' ) {
    return { success: false };
  }

  try {
    await orderService.update( { status }, params.id );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default updateOrder;