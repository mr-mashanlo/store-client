import { GeneralController } from '@/shared/api';

import { OrderResponseType } from '../model/type';

class OrderController extends GeneralController<OrderResponseType, Array<OrderResponseType>> {}

const orderController = new OrderController( 'order' );

export default orderController;