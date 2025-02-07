import { FC } from 'react';

const Skeleton: FC = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-2 animate-pulse">
      <div className="w-full aspect-[6/7] bg-zinc-200 object-cover" />
      <div className="w-full aspect-[6/7] bg-zinc-200 object-cover" />
      <div className="w-full aspect-[6/7] bg-zinc-200 object-cover" />
      <div className="w-full aspect-[6/7] bg-zinc-200 object-cover" />
      <div className="w-full aspect-[6/7] bg-zinc-200 object-cover" />
      <div className="w-full aspect-[6/7] bg-zinc-200 object-cover" />
    </div>
  );
};

export default Skeleton;