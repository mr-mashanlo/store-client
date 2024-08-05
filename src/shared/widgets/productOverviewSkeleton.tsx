import { FC } from 'react';

const ProductOverviewSkeleton: FC = () => {
  return (
    <div className="grid sm:grid-cols-[2.1fr_1fr] gap-3 animate-pulse">
      <div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[ ...Array( 4 ) ].map( ( _, index ) => ( <div key={index} className="w-full bg-gray-100 aspect-[7/8] object-cover"></div> ) )}
        </div>
      </div>
      <div>
        <div className="px-10 sticky top-32 left-0">
          <div className="w-40 h-6 bg-gray-100 rounded-full"></div>
          <div className="w-40 h-4 mt-3 bg-gray-100 rounded-full"></div>
          <div className="w-full h-11 mt-4 bg-gray-100"></div>
          <div className="mt-8">
            <div className="w-full h-3 bg-gray-100 rounded-full"></div>
            <div className="mt-5 w-full h-3 bg-gray-100 rounded-full"></div>
            <div className="mt-5 w-full h-3 bg-gray-100 rounded-full"></div>
            <div className="mt-5 w-full h-3 bg-gray-100 rounded-full"></div>
            <div className="mt-5 w-full h-3 bg-gray-100 rounded-full"></div>
            <div className="mt-5 w-full h-3 bg-gray-100 rounded-full"></div>
            <div className="mt-5 w-full h-3 bg-gray-100 rounded-full"></div>
            <div className="mt-5 w-full h-3 bg-gray-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverviewSkeleton;