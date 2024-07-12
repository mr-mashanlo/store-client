import { mediaService } from '../service';

const getLoader = async () => {
  try {
    const images = await mediaService.get();
    return { success: true, data: images };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default getLoader;