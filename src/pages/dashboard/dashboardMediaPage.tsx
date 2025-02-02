import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { IMedia } from '@/entities/media/types';
import { ImageList, UploadForm } from '@/features/dashboard/media/ui';

const DashboardMediaPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, error?: string, data?: Array<IMedia> };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-black"></Link>
        <h1 className="text-3xl font-bold uppercase text-black">Media page</h1>
      </div>
      <UploadForm />
      <ImageList images={loaderData.data || []} />
    </div>
  );
};

export default DashboardMediaPage;