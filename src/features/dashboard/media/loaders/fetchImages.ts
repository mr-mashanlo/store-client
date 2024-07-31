import { mediaService } from '@/shared/services';

const fetchImages = async () => {
  try {
    const images = await mediaService.getAll();
    return { success: true, data: images };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchImages;