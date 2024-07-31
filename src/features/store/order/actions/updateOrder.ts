import { ActionFunctionArgs } from 'react-router-dom';
import { orderService } from '../service';

const updateOrder = async ( { params, request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const id = params.id as string;
  const status = formData.get( 'status' ) as 'Processing' | 'Delivering' | 'Done' ;

  try {
    await orderService.update( { status }, id );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default updateOrder;