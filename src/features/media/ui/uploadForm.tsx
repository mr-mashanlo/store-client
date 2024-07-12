import { FC, DragEvent, useState, useRef, ChangeEvent, useEffect } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { If, Then, Else } from 'react-if';
import { twMerge } from 'tailwind-merge';
import Button from '@/shared/ui/button';

interface Action {
  success: boolean
  error?: { errors: Array<{ path: string, msg: string }> }
}

const UploadForm: FC = () => {
  const actionData = useActionData() as Action;
  const navigation = useNavigation();

  const input = useRef<HTMLInputElement>( null );
  const [ image, setImage ] = useState<null | File>( null );
  const [ isDragging, setIsDragging ] = useState<boolean>( false );
  const [ isSuccess, setIsSuccess ] = useState<boolean>( false );

  const handleDragOver = ( event: DragEvent<HTMLDivElement> ) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging( true );
  };

  const handleDragLeave = ( event: DragEvent<HTMLDivElement> ) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging( false );
  };

  const handleDrop = ( event: DragEvent<HTMLDivElement> ) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging( false );

    if ( event.dataTransfer.files && event.dataTransfer.files[0] ) {
      const file = event.dataTransfer.files[0];
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add( event.dataTransfer.files[0] );
      input.current ? input.current.files = dataTransfer.files : null;
      setImage( file );
    }
  };

  const handleImageChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    if ( event.target.files && event.target.files[0] ) {
      const file = event.target.files[0];
      setImage( file );
    }
  };

  const handleImageClear = () => {
    setImage( null );
    input.current ? input.current.value = '' : null;
  };

  useEffect( () => {
    if ( !actionData || !actionData.success ) {
      return;
    }

    handleImageClear();
    setIsSuccess( true );
  }, [ actionData ] );

  return (
    <Form method="post" encType="multipart/form-data">
      <div onDragOver={( event ) => handleDragOver( event )} onDragLeave={( event ) => handleDragLeave( event )} onDrop={( event ) => handleDrop( event )} className={twMerge( 'max-w-2xl h-80 mx-auto p-4 rounded-xl flex items-center justify-center border-dashed border-4', isDragging ? 'border-[#FFCCCC]' : 'border-[#363636]', image && 'border-[#FFCCCC]' )}>
        <If condition={image !== null}>
          <Then>
            <div className="text-center">
              <p className="font-medium text-xl">The file {image ? image.name : 'default-file.png'} is ready for upload.</p>
              <p className="mt-4">Its size is {Math.floor( image ? image.size / 1024 : 1 )} KB and it's prepared for transfer.</p>
              <div className="mt-5 flex justify-center gap-6">
                <Button onClick={() => handleImageClear()} type="reset" disabled={navigation.state === 'submitting'}>Clear</Button>
                <Button type="submit" loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'}>Save</Button>
              </div>
            </div>
          </Then>
          <Else>
            <If condition={isSuccess}>
              <Then>
                <div className="text-center">
                  <p className="font-medium text-xl">The file was successfully uploaded to the server.</p>
                  <p className="mt-4">The process completed smoothly and efficiently.</p>
                  <Button onClick={() => setIsSuccess( false )} type="button" className="mt-5">Done</Button>
                </div>
              </Then>
              <Else>
                <div className="text-center">
                  <p className="font-medium text-xl">Choose a file or drag & drop it here</p>
                  <p className="mt-4">JPEG PNG WEBP formats, up to 2MB</p>
                  <Button onClick={() => input.current?.click()} type="button" className="mt-5">Browse File</Button>
                </div>
              </Else>
            </If>
          </Else>
        </If>
      </div>
      <input ref={input} onChange={( event ) => handleImageChange( event )} type="file" accept="image/*" id="image" name="image" hidden />
    </Form>
  );
};

export default UploadForm;