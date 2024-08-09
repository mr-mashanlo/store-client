import { FC } from 'react';
import { Form } from 'react-router-dom';

import { IMedia } from '@/entities/media/types';

interface Props {
  images: Array<IMedia>
}

const ImageList: FC<Props> = ( { images } ) => {
  return (
    <ul className="grid gap-2 sm:gap-5 grid-cols-3 sm:grid-cols-6">
      {images.map( image => (
        <li key={image.name} className="relative group overflow-hidden">
          <img src={image.url} alt={image.alt} className="block aspect-square object-cover" />
          <Form method="DELETE" action={`/dashboard/media/delete/${image._id}`} navigate={false}>
            <button className="w-full p-1 text-center absolute bottom-0 left-0 text-white bg-[#505050CC] transition translate-y-full group-hover:translate-y-0">Delete</button>
          </Form>
        </li>
      ) )}
    </ul>
  );
};

export default ImageList;