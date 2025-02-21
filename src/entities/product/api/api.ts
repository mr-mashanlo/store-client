import { GeneralController } from '@/shared/api';

import { ProductResponseType } from '../model/type';

class ProductController extends GeneralController<ProductResponseType, { count: number, documents: Array<ProductResponseType> }> {}

const productController = new ProductController( 'product' );

export default productController;