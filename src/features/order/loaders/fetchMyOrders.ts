import { orderService } from '../service';

const fetchMyOrders = async () => {
  try {
    const orders = await orderService.getAll( 'my=true' );
    return { success: true, data: orders };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchMyOrders;