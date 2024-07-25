import { FC } from 'react';
import MainHeader from './mainHeader';

interface Props {
  title: string
}

const PageHeader: FC<Props> = ( { title } ) => {
  return (
    <div className="pb-14 bg-[#363636]">
      <MainHeader />
      <div className="mt-20">
        <div className="container-block container-block--normal px-5">
          <div className="mt-4">
            <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;