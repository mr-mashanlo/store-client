import { orderService } from '@/shared/services';

const fetchMyOrders = async () => {
  try {
    const orders = await orderService.getOwn();
    return { success: true, data: orders };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchMyOrders;