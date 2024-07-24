import { ActionFunctionArgs } from 'react-router-dom';
import { productService } from '../service';

const createProduct = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const name = formData.get( 'name' );
  const price = formData.get( 'price' );
  const about = formData.get( 'about' );
  const category = formData.get( 'category' );
  const images = formData.get( 'gallery' );

  if ( typeof name !== 'string' || typeof price !== 'string' || typeof about !== 'string' || typeof category !== 'string' || typeof images !== 'string' ) {
    return { success: false };
  }

  try {
    await productService.create( { name, price, about, category, images: images.split( ',' ) } );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default createProduct;