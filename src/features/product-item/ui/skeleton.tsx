import { FC } from 'react';

const Skeleton: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-8 animate-pulse">
      <div className="grid grid-cols-2 gap-2 col-span-2">
        <div className="w-full aspect-[6/7] bg-zinc-200"></div>
        <div className="w-full aspect-[6/7] bg-zinc-200"></div>
        <div className="w-full aspect-[6/7] bg-zinc-200"></div>
        <div className="w-full aspect-[6/7] bg-zinc-200"></div>
      </div>
      <div className="py-30 pr-8 relative">
        <div className="sticky top-30">
          <div className="w-30 h-2.5 mt-1 bg-zinc-200"></div>
          <div className="w-10 h-2.5 mt-8 bg-zinc-200"></div>
          <div className="w-20 h-2.5 mt-8 bg-zinc-200"></div>
          <div className="h-40 mt-8 bg-zinc-200"></div>
          <div className="h-30 mt-8 bg-zinc-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;