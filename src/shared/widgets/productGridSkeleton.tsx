import { FC } from 'react';

const ProductGridSkeleton: FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-y-10 animate-pulse">
      {[ ...Array( 8 ) ].map( ( _, index ) => (
        <div key={index}>
          <div className="w-full bg-zinc-100 aspect-[7/8] object-cover"></div>
          <div className="w-52 h-3 mt-3 bg-zinc-100 rounded-full"></div>
          <div className="w-24 h-3 mt-3 bg-zinc-100 rounded-full"></div>
        </div>
      ) )}
    </div>
  );
};

export default ProductGridSkeleton;