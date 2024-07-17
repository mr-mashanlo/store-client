import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ImageList, UploadForm } from '@/features/media/ui';
import { IMedia } from '@/entities/media/types';

const MediaPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, error?: string, data?: Array<IMedia> };

  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Media page</h1>
      <UploadForm />
      <ImageList images={loaderData.data || []} />
    </div>
  );
};

export default MediaPage;