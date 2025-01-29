import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center bg-zinc-100 fixed top-0 bottom-0 left-0 right-0 z-20">
      <div className="animate-pulse">Loading</div>
    </div>
  );
};

export default Loader;