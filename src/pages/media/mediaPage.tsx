import { FC } from 'react';
import { PageHeader } from '@/app/layouts/header/ui';
import { UploadForm } from '@/features/media/ui';

const MediaPage: FC = () => {
  return (
    <>
      <PageHeader title="Media Page" />

      <section className="py-14">
        <div className="container-block container-block--normal">
          <UploadForm />
        </div>
      </section>
    </>
  );
};

export default MediaPage;