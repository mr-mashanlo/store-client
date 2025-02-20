import { FC } from 'react';
import { useQuery } from 'react-query';

import { productController, useFilterStore } from '@/entities/product';
import { validateResponseError } from '@/shared/libs';

import Component from './component';
import Skeleton from './skeleton';

const ProductGrid: FC = () => {
  const page = useFilterStore( state => state.page );
  const limit = useFilterStore( state => state.limit );
  const query = useFilterStore( state => state.query );
  const category = useFilterStore( state => state.category );
  const setTotal = useFilterStore( state => state.setTotal );

  const filter = Object.entries( { page, limit, query, category } ).reduce( ( acc: Record<string, string>, [ key, value ] ) => {
    if ( value !== '' ) acc[key] = String( value );
    return acc;
  }, {} );

  const { data, isLoading } = useQuery( {
    keepPreviousData: true,
    queryKey: [ 'products', page, query, category ],
    queryFn: () => productController.getMany( filter ),
    onSuccess: data => setTotal( data.count ),
    onError: async error => {
      const result = await validateResponseError( error );
      console.log( result );
    }
  } );

  return isLoading ? <Skeleton /> : <Component products={data?.documents || []} />;
};

export default ProductGrid;