import { FC, FormEvent, useState } from 'react';
import { Check, Search, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button, Field, Input } from '@headlessui/react';

import { useFilterStore, validateSearchRequestData } from '@/entities/product';
import { validateResponseError } from '@/shared/libs';

const SearchQueryForm: FC = () => {
  const query = useFilterStore( state => state.query );
  const setQuery = useFilterStore( state => state.setQuery );
  const [ isSearchable, setIsSearchable ] = useState<boolean>( false );
  const [ type, setType ] = useState<'button' | 'submit'>( 'button' );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    try {
      e.preventDefault();
      const formData = new FormData( e.currentTarget );
      const fields = Object.fromEntries( formData.entries() );
      const { query } = validateSearchRequestData( fields );
      setQuery( query );
    } catch ( error ) {
      const result = await validateResponseError( error );
      console.log( result );
    }
  }

  function handleCloseButtonClick() {
    setQuery( '' );
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
        <Input defaultValue={query} type="text" name="query" placeholder="grey teapot" className={twMerge( 'w-40 h-6 px-2 text-xs outline-none border border-zinc-200/50' )} />
      </Field>
      <Button onClick={() => handleSubmitButtonClick()} type={type} className="w-6 h-6 flex items-center justify-center bg-zinc-200/50 cursor-pointer">
        {
          isSearchable
            ?
            <Check className="w-3" />
            :
            <Search className="w-3" />
        }
      </Button>
    </form>
  );
};

export default SearchQueryForm;