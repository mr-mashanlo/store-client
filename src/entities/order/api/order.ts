import { GeneralController } from '@/shared/api';

import { OrderResponseType } from '../model/schema';

class OrderController extends GeneralController<OrderResponseType> {}

const orderController = new OrderController( 'order' );

export default orderController;