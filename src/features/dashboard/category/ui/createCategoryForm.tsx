import { FC, useEffect, useRef, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { Form, useActionData, useNavigation } from 'react-router-dom';

import { ICategoryResponse } from '@/entities/category/types';
import { IMedia } from '@/entities/media/types';
import { usePopup } from '@/shared/hooks';
import { Button, Popup, TextInput } from '@/shared/widgets';

interface Props {
  action: string
  images: Array<IMedia>
  category?: ICategoryResponse
}

const CreateCategoryForm: FC<Props> = ( { action, images, category } ) => {
  const form = useRef<HTMLFormElement>( null );
  const navigation = useNavigation();
  const actionData = useActionData() as { success: boolean };
  const { isVisible, open, close } = usePopup();
  const [ image, setImage ] = useState<IMedia | null>( category ? category.image : null );

  useEffect( () => {
    if ( actionData && actionData.success ) {
      setImage( null );
    }
    if ( form.current ) {
      form.current.reset();
    }
  }, [ actionData ] );

  useEffect( () => {
    if ( category ) {
      setImage( category.image );
    }
  }, [ category ] );

  return (
    <>
      <Form ref={form} method="post" action={action}>
        <div className="grid sm:grid-cols-7 gap-7">
          <If condition={Boolean( image )}>
            <Then>
              <div className="relative">
                <button onClick={() => setImage( null )} type="button" className="w-8 h-8 rounded-full bg-red-400 text-white font-bold flex items-center justify-center absolute -top-4 -right-4">×</button>
                <img src={image?.url} alt="" className="w-full aspect-square object-cover" />
              </div>
            </Then>
            <Else>
              <button onClick={open} type="button" className="open-popup w-full aspect-square border-2 border-dashed border-gray-300 flex items-center justify-center text-2xl">+</button>
            </Else>
          </If>
          <div className="grid sm:grid-cols-2 gap-7 sm:col-span-6">
            <TextInput id="title" name="title" label="Title" type="text" defaultValue={category?.title} required />
            <TextInput id="slug" name="slug" label="Slug" type="text" defaultValue={category?.slug} required />
            <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'} className="sm:col-span-2">{category ? 'Update' : 'Create'}</Button>
          </div>
        </div>
        <input id="image" name="image" type="text" defaultValue={image?._id} hidden />
      </Form>
      <Popup isVisible={isVisible} onClose={close}>
        <div className="grid gap-3 grid-cols-4">
          {images.map( image => ( <button onClick={() => setImage( image )} key={image._id}><img src={image.url} alt="" className="aspect-square " /></button> ) )}
        </div>
      </Popup>
    </>
  );
};

export default CreateCategoryForm;