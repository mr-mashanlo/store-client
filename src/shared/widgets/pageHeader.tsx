import { FC } from 'react';

import MainHeader from './mainHeader';

interface Props {
  title: string
}

const PageHeader: FC<Props> = ( { title } ) => {
  return (
    <div className="pb-5 sm:pb-14 bg-gray-300">
      <MainHeader />
      <div className="mt-5 sm:mt-20">
        <div className="container-block px-9">
          <div className="mt-4">
            <h1 className="text-3xl font-bold uppercase text-black">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;