import { ProductService } from './productService';
import { MongoProductService } from './mongoProductService';

const mongoProductService = new MongoProductService();
const productService = new ProductService( mongoProductService );

export { productService };