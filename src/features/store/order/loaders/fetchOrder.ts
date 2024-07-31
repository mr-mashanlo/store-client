import { ActionFunctionArgs } from 'react-router-dom';
import { orderService } from '@/shared/services';

const fetchOrder = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id as string;

  try {
    const order = await orderService.getOne( id );
    return { success: true, data: order };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchOrder;