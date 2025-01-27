import { GeneralController } from '@/shared/api/controller';

import { ProductResponseType } from '../models/schema';

class ProductController extends GeneralController<ProductResponseType> {}

const productController = new ProductController( 'product' );

export default productController;