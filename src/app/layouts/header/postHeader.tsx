import { FC } from 'react';
import MainHeader from './mainHeader';

const PostHeader: FC = () => {
  return (
    <div className="pb-14 bg-[#363636]">
      <MainHeader />
      <div className="mt-20">
        <div className="container-block container-block--small">
          <div>
            <p>Javascript</p>
            <h1 className="mt-4 text-3xl font-bold uppercase text-[#FFCCCC]">Optio saepe debitis</h1>
            <p className="mt-4">Published 01 January 2020</p>
          </div>
          <ul className="mt-12 flex items-center gap-12 font-medium">
            <li>Save to bookmark</li>
            <li>Share post</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;