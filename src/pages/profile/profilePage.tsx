import { FC } from 'react';
import { ProfileHeader } from '@/app/layouts/header/ui';

const ProfilePage: FC = () => {
  return (
    <>
      <ProfileHeader title="John Doe" />

      <section className="py-14">
        <div className="container-block container-block--normal">
          <p>Hello</p>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;