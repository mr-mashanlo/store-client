import { orderService } from '@/shared/services';

const fetchAllOrders = async () => {
  try {
    const orders = await orderService.getAll();
    return { success: true, data: orders };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchAllOrders;