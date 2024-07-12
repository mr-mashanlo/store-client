import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { headerLinks } from '../config/headerLinks';

const PostHeader: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-14 bg-[#363636]">
      <header className="py-10">
        <div className="container-block container-block--small">
          <div className="flex items-center justify-between gap-5">
            <p className="text-xl font-medium uppercase text-[#FFCCCC]"><button onClick={() => navigate( -1 )} className="uppercase">Back</button></p>
            <nav>
              <ul className="flex items-center justify-between gap-10">
                {headerLinks.map( item => (
                  <li key={item.url}><Link to={item.url}>{item.name}</Link></li>
                ) )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
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