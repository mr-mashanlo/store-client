import { FC } from 'react';
import { ImageList, UploadForm } from '@/features/media/ui';

const MediaPage: FC = () => {
  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Media page</h1>
      <UploadForm />
      <ImageList />
    </div>
  );
};

export default MediaPage;