import { FC } from 'react';

const Skeleton: FC = () => {
  return (
    <div className="w-100 bg-white shadow-xl shadow-zinc-300 relative animate-pulse">
      <div className="h-3 absolute bottom-full left-0 right-0 ticket-t"></div>

      <div role="list" className="p-6">
        <div className="w-20 h-3 mx-auto mt-1.5 bg-zinc-200"></div>
        <div className="w-40 h-3 mx-auto mt-3 bg-zinc-200"></div>
        <div className="h-1 my-5.5 ticket-d"></div>

        <div className="grid grid-cols-5 gap-2">
          <div className="w-20 h-3 bg-zinc-200 col-span-3"></div>
          <div className="w-7 h-3 ml-auto bg-zinc-200"></div>
          <div className="w-5 h-3 ml-auto bg-zinc-200"></div>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-2">
          <div className="w-40 h-3 bg-zinc-200 col-span-3"></div>
          <div className="w-7 h-3 ml-auto bg-zinc-200"></div>
          <div className="w-5 h-3 ml-auto bg-zinc-200"></div>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-2">
          <div className="w-10 h-3 bg-zinc-200 col-span-3"></div>
          <div className="w-7 h-3 ml-auto bg-zinc-200"></div>
          <div className="w-5 h-3 ml-auto bg-zinc-200"></div>
        </div>

        <div className="h-1 mt-5.5 mb-4 ticket-d"></div>
      </div>

      <div className="w-full pt-4 pb-3 bg-zinc-100 uppercase font-bold cursor-pointer">
        <div className="w-15 h-3 mx-auto mt-1.5 mb-2 bg-zinc-200"></div>
      </div>
      <div className="h-3 absolute top-full left-0 right-0 ticket-b"></div>
    </div>
  );
};

export default Skeleton;