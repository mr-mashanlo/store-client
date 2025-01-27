import { FC } from 'react';

const Skeleton: FC = () => {
  return (
    <div className="grid sm:grid-cols-12 gap-8 animate-pulse">
      <div className="text-xs col-span-3 nth-[7n+1]:col-span-4 nth-[7n+2]:col-span-4 nth-[7n+3]:col-span-4">
        <div className="aspect-[6/7] bg-zinc-200"></div>
        <div className="w-20 h-2 mt-3 bg-zinc-200"></div>
        <div className="w-10 h-2 mt-2 bg-zinc-200"></div>
      </div>
      <div className="text-xs col-span-3 nth-[7n+1]:col-span-4 nth-[7n+2]:col-span-4 nth-[7n+3]:col-span-4">
        <div className="aspect-[6/7] bg-zinc-200"></div>
        <div className="w-20 h-2 mt-3 bg-zinc-200"></div>
        <div className="w-10 h-2 mt-2 bg-zinc-200"></div>
      </div>
      <div className="text-xs col-span-3 nth-[7n+1]:col-span-4 nth-[7n+2]:col-span-4 nth-[7n+3]:col-span-4">
        <div className="aspect-[6/7] bg-zinc-200"></div>
        <div className="w-20 h-2 mt-3 bg-zinc-200"></div>
        <div className="w-10 h-2 mt-2 bg-zinc-200"></div>
      </div>
      <div className="text-xs col-span-3 nth-[7n+1]:col-span-4 nth-[7n+2]:col-span-4 nth-[7n+3]:col-span-4">
        <div className="aspect-[6/7] bg-zinc-200"></div>
        <div className="w-20 h-2 mt-3 bg-zinc-200"></div>
        <div className="w-10 h-2 mt-2 bg-zinc-200"></div>
      </div>
      <div className="text-xs col-span-3 nth-[7n+1]:col-span-4 nth-[7n+2]:col-span-4 nth-[7n+3]:col-span-4">
        <div className="aspect-[6/7] bg-zinc-200"></div>
        <div className="w-20 h-2 mt-3 bg-zinc-200"></div>
        <div className="w-10 h-2 mt-2 bg-zinc-200"></div>
      </div>
      <div className="text-xs col-span-3 nth-[7n+1]:col-span-4 nth-[7n+2]:col-span-4 nth-[7n+3]:col-span-4">
        <div className="aspect-[6/7] bg-zinc-200"></div>
        <div className="w-20 h-2 mt-3 bg-zinc-200"></div>
        <div className="w-10 h-2 mt-2 bg-zinc-200"></div>
      </div>
      <div className="text-xs col-span-3 nth-[7n+1]:col-span-4 nth-[7n+2]:col-span-4 nth-[7n+3]:col-span-4">
        <div className="aspect-[6/7] bg-zinc-200"></div>
        <div className="w-20 h-2 mt-3 bg-zinc-200"></div>
        <div className="w-10 h-2 mt-2 bg-zinc-200"></div>
      </div>
    </div>
  );
};

export default Skeleton;