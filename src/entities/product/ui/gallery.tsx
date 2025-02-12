import { FC } from 'react';

interface Props {
  name: string,
  images: Array<string>
}

const ProductGallery: FC<Props> = ( { name, images } ) => {
  return (
    <div className="grid grid-cols-2 gap-2 col-span-2">
      {images?.map( ( image, index ) => <img itemProp="image" key={image} src={`${import.meta.env.VITE_REACT_APP_BLOB_URL}/${image}.webp`} alt={`${name} - view ${index}`} className="w-full aspect-[6/7] bg-zinc-200 object-cover" /> )}
    </div>
  );
};

export default ProductGallery;