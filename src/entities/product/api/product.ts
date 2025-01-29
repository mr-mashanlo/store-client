import { GeneralController } from '@/entities/shared';

import { ProductResponseType } from '../model/schema';

class ProductController extends GeneralController<ProductResponseType> {}

const productController = new ProductController( 'product' );

export default productController;