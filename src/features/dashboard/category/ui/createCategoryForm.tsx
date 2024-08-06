import { FC, useEffect, useRef, useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { Button, Popup, TextInput } from '@/shared/widgets';
import { ICategory } from '@/entities/category/types';
import { Else, If, Then } from 'react-if';
import { IMedia } from '@/entities/media/types';

interface Props {
  action: string
  images: Array<IMedia>
  category?: ICategory
}

const CreateCategoryForm: FC<Props> = ( { action, images, category } ) => {
  const navigation = useNavigation();
  const actionData = useActionData() as { success: boolean, msg: string };
  const form = useRef<HTMLFormElement>( null );

  const [ isPopupVisible, setIsPopupVisible ] = useState<boolean>( false );
  const [ image, setImage ] = useState<IMedia | null>();

  useEffect( () => {
    if ( form.current ) {
      form.current.reset();
    }
  }, [ actionData ] );

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
              <button onClick={() => setIsPopupVisible( true )} type="button" className="open-popup w-full aspect-square border-2 border-dashed border-gray-300 flex items-center justify-center text-2xl">+</button>
            </Else>
          </If>
          <div className="grid sm:grid-cols-2 gap-7 sm:col-span-6">
            <TextInput id="title" name="title" label="Title" type="text" defaultValue={category?.title} required />
            <TextInput id="slug" name="slug" label="Slug" type="text" defaultValue={category?.slug} required />
            <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'} className="sm:col-span-2">{category ? 'Update' : 'Create'}</Button>
          </div>
        </div>
      </Form>
      <Popup visible={isPopupVisible} setVisible={setIsPopupVisible}>
        <div className="grid gap-3 grid-cols-4">
          {images.map( image => ( <button onClick={() => setImage( image )} key={image._id}><img src={image.url} alt="" className="aspect-square " /></button> ) )}
        </div>
      </Popup>
    </>
  );
};

export default CreateCategoryForm;