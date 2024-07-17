import { CategoryService } from './categoryService';
import { MongoCategoryService } from './mongoCategoryService';

const mongoAuthService = new MongoCategoryService();
const categoryService = new CategoryService( mongoAuthService );

export { categoryService };