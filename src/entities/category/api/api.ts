import { GeneralController } from '@/shared/api';

import { CategoryResponseType } from '../model/type';

class CategoryController extends GeneralController<CategoryResponseType, Array<CategoryResponseType>> {}

const categoryController = new CategoryController( 'category' );

export default categoryController;