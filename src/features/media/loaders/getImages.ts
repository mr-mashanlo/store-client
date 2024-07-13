import { mediaService } from '../service';

const getImages = async () => {
  try {
    const images = await mediaService.get();
    return { success: true, data: images };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default getImages;