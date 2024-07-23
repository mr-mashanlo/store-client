import { ActionFunctionArgs } from 'react-router-dom';
import { orderService } from '../service';

const fetchOrder = async ( { params }: ActionFunctionArgs ) => {
  if ( typeof params.id !== 'string' ) {
    return { success: false };
  }

  try {
    const order = await orderService.getOne( params.id );
    return { success: true, data: order };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchOrder;