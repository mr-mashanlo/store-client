import { FC } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { IMedia } from '@/entities/media/types';

const ImageList: FC = () => {
  const data = useLoaderData() as { success: boolean, error?: string, data?: Array<IMedia> };

  return (
    <ul className="grid gap-5 grid-cols-6">
      {data.data && data.data.map( image => (
        <li key={image.name} className="relative group overflow-hidden">
          <img src={image.url} alt={image.alt} className="block aspect-square object-cover" />
          <Form method="DELETE" action={`/dashboard/media/delete/${image.name}`} navigate={false}>
            <button className="w-full p-1 text-center absolute bottom-0 left-0 text-white bg-[#505050CC] transition translate-y-full group-hover:translate-y-0">Delete</button>
          </Form>
        </li>
      ) )}
    </ul>
  );
};

export default ImageList;