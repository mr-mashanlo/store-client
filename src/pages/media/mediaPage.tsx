import { PageHeader } from '@/features/header/ui';
import { FC } from 'react';

const MediaPage: FC = () => {
  return (
    <>
      <PageHeader title="Media Page" />

      <section className="py-14">
        <div className="container-block container-block--normal">
          <p>Hello</p>
        </div>
      </section>
    </>
  );
};

export default MediaPage;