import { FC, FormEvent, useState } from 'react';
import { Check, Settings2, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button, Field, Select } from '@headlessui/react';

import { useCategoryQuery, validateCategoryRequestData } from '@/entities/category';
import { useFilterStore } from '@/entities/product';
import { validateResponseError } from '@/shared/libs';

const SearchCategoryForm: FC = () => {
  const { data } = useCategoryQuery();
  const category = useFilterStore( state => state.category );
  const setCategory = useFilterStore( state => state.setCategory );
  const [ isSearchable, setIsSearchable ] = useState<boolean>( false );
  const [ type, setType ] = useState<'button' | 'submit'>( 'button' );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    try {
      e.preventDefault();
      const formData = new FormData( e.currentTarget );
      const fields = Object.fromEntries( formData.entries() );
      const { category } = validateCategoryRequestData( fields );
      setCategory( category );
    } catch ( error ) {
      const result = await validateResponseError( error );
      console.log( result );
    }
  }

  function handleCloseButtonClick() {
    setCategory( '' );
    setIsSearchable( false );
    setTimeout( () => setType( 'button' ), 500 );
  }

  function handleSubmitButtonClick() {
    if ( !isSearchable ) {
      setIsSearchable( true );
      setTimeout( () => setType( 'submit' ), 500 );
    }
  }

  return (
    <form onSubmit={e => handleFormSubmit( e )} className="flex">
      <Field className={twMerge( isSearchable ? 'flex items-center' : 'hidden' )}>
        <Button onClick={() => handleCloseButtonClick()} type="reset" className="w-6 h-6 flex items-center justify-center bg-zinc-200/50 cursor-pointer"><X className="w-3" /></Button>
        <Select defaultValue={category} name="category" className="w-40 h-6 px-2 text-xs outline-none border border-zinc-200/50">
          {data?.map( category => <option key={category._id} value={category._id}>{category.name}</option> )}
        </Select>
      </Field>
      <Button onClick={() => handleSubmitButtonClick()} type={type} className="w-6 h-6 flex items-center justify-center bg-zinc-200/50 cursor-pointer">
        {
          isSearchable
            ?
            <Check className="w-3" />
            :
            <Settings2 className="w-3" />
        }
      </Button>
    </form>
  );
};

export default SearchCategoryForm;