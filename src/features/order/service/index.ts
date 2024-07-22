import { OrderService } from './orderService';
import { MongoOrderService } from './mongoOrderService';

const mongoOrderService = new MongoOrderService();
const orderService = new OrderService( mongoOrderService );

export { orderService };