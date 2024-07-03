import { FC, FormEvent, useState } from 'react';
import { defaultInstance } from '@/shared/api';

const EditProfile: FC = () => {
  const [ selectedFile, setSelectedFile ] = useState<File | null>( null );

  async function handleFormSubmit( event: FormEvent<HTMLFormElement> ) {
    event.preventDefault();

    if ( !selectedFile ) {
      return;
    }

    const formData = new FormData();
    formData.append( 'image', selectedFile );

    try {
      await defaultInstance( 'media/upload', { method: 'post', body: formData } );
    } catch ( error ) {
      console.log( 'Error uploading file: ' + error );
    }
  }

  return (
    <div>
      <form onSubmit={event => handleFormSubmit( event )}>
        <input onChange={ event => setSelectedFile( event.target.files ? event.target.files[0] : null ) } type="file" accept="image/*" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default EditProfile;