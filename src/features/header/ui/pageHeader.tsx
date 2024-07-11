import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  title: string
}

const PageHeader: FC<Props> = ( { title } ) => {
  const navigate = useNavigate();

  return (
    <div className="pb-14 bg-[#363636]">
      <header className="py-10">
        <div className="container-block container-block--normal">
          <div className="flex items-center justify-between gap-5">
            <p className="text-xl font-medium uppercase text-[#FFCCCC]"><button onClick={() => navigate( -1 )} className="uppercase">Back</button></p>
            <nav>
              <ul className="flex items-center justify-between gap-10">
                <li><Link to="/profile">Account</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="mt-20">
        <div className="container-block container-block--normal">
          <div className="mt-4">
            <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;