import { ActionFunctionArgs } from 'react-router-dom';
import { productService } from '../service';

const updateProduct = async ( { params, request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const id = params.id as string;
  const name = formData.get( 'name' ) as string;
  const price = formData.get( 'price' ) as string;
  const about = formData.get( 'about' ) as string;
  const category = formData.get( 'category' ) as string;
  const images = formData.get( 'gallery' ) as string;

  try {
    await productService.update( id, { name, price, about, category, images: images.length ? images.split( ',' ) : [] } );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default updateProduct;