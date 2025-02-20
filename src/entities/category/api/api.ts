import { GeneralController } from '@/shared/api';

import { CategoryResponseType } from '../model/schema';

class CategoryController extends GeneralController<CategoryResponseType, Array<CategoryResponseType>> {}

const categoryController = new CategoryController( 'category' );

export default categoryController;