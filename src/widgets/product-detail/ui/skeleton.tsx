import { FC } from 'react';

const Skeleton: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2 animate-pulse">
      <div className="grid grid-cols-2 gap-2 col-span-2">
        <div className="w-full aspect-[6/7] bg-zinc-200 object-cover" />
        <div className="w-full aspect-[6/7] bg-zinc-200 object-cover" />
        <div className="w-full aspect-[6/7] bg-zinc-200 object-cover" />
        <div className="w-full aspect-[6/7] bg-zinc-200 object-cover" />
      </div>
      <div className="px-10 py-30 relative">
        <div className="sticky top-30">
          <div className="grid gap-5">
            <div className="h-[1.313rem] py-1"><div className="w-30 h-full bg-zinc-200" /></div>
            <div className="h-[1.313rem] py-1"><div className="w-15 h-full bg-zinc-200" /></div>
            <div className="h-[1.313rem] py-1"><div className="w-30 h-full bg-zinc-200" /></div>
            <div className="h-[1.313rem] py-1"><div className="h-60 bg-zinc-200" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;