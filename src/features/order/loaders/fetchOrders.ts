import { orderService } from '../service';

const fetchOrders = async () => {
  try {
    const orders = await orderService.getAll();
    return { success: true, data: orders };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchOrders;