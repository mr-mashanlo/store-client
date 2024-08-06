import { FC } from 'react';

const CategoryGridSkeleton: FC = () => {
  return (
    <ul className="grid gap-5 grid-cols-6 animate-pulse">
      {[ ...Array( 6 ) ].map( ( _, index ) => (
        <li key={index}>
          <div className="w-full aspect-square bg-zinc-100"></div>
          <div className="w-24 h-3 mt-3 bg-zinc-100 rounded-full"></div>
        </li>
      ) )}
    </ul>
  );
};

export default CategoryGridSkeleton;