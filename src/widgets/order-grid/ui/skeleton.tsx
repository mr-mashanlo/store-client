import { FC } from 'react';

const Skeleton: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="px-5 pb-30 flex justify-center items-start">
        <div className="w-100 bg-white shadow-xl shadow-zinc-300 relative animate-pulse">
          <div className="h-3 absolute bottom-full left-0 right-0 ticket-t"></div>
          <div className="p-6">
            <div className="h-[1.5rem] py-1.5"><div className="w-20 h-full mx-auto bg-zinc-200" /></div>
            <div className="h-[1.5rem] py-1.5"><div className="w-40 h-full mx-auto bg-zinc-200" /></div>
            <div className="h-1 my-4 ticket-d"></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-1 my-4 ticket-d"></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-1 my-4 ticket-d"></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-1 my-4 ticket-d"></div>
          </div>
          <div className="h-[3.25rem] flex items-center justify-center bg-zinc-100">
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
          </div>
          <div className="h-3 absolute top-full left-0 right-0 ticket-b"></div>
        </div>
        <div className="w-100 bg-white shadow-xl shadow-zinc-300 relative animate-pulse">
          <div className="h-3 absolute bottom-full left-0 right-0 ticket-t"></div>
          <div className="p-6">
            <div className="h-[1.5rem] py-1.5"><div className="w-20 h-full mx-auto bg-zinc-200" /></div>
            <div className="h-[1.5rem] py-1.5"><div className="w-40 h-full mx-auto bg-zinc-200" /></div>
            <div className="h-1 my-4 ticket-d"></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-1 my-4 ticket-d"></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-1 my-4 ticket-d"></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-1 my-4 ticket-d"></div>
          </div>
          <div className="h-[3.25rem] flex items-center justify-center bg-zinc-100">
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
          </div>
          <div className="h-3 absolute top-full left-0 right-0 ticket-b"></div>
        </div>
        <div className="w-100 bg-white shadow-xl shadow-zinc-300 relative animate-pulse">
          <div className="h-3 absolute bottom-full left-0 right-0 ticket-t"></div>
          <div className="p-6">
            <div className="h-[1.5rem] py-1.5"><div className="w-20 h-full mx-auto bg-zinc-200" /></div>
            <div className="h-[1.5rem] py-1.5"><div className="w-40 h-full mx-auto bg-zinc-200" /></div>
            <div className="h-1 my-4 ticket-d"></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-1 my-4 ticket-d"></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-1 my-4 ticket-d"></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
            <div className="h-1 my-4 ticket-d"></div>
          </div>
          <div className="h-[3.25rem] flex items-center justify-center bg-zinc-100">
            <div className="h-[1.5rem] py-1.5"><div className="h-full bg-zinc-200" /></div>
          </div>
          <div className="h-3 absolute top-full left-0 right-0 ticket-b"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;