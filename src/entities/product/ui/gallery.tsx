import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  name: string,
  images: Array<string>,
  className?: string
}

const ProductGallery: FC<Props> = ( { className, name, images } ) => {
  return (
    <div className={twMerge( 'grid sm:grid-cols-2 gap-2', className )}>
      {images?.map( ( image, index ) => <img itemProp="image" key={image} src={`${import.meta.env.VITE_REACT_APP_BLOB_URL}/${image}.webp`} alt={`${name} - view ${index}`} className="w-full aspect-[6/7] bg-zinc-200 object-cover" /> )}
    </div>
  );
};

export default ProductGallery;