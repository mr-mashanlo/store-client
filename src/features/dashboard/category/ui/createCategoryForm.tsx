import { FC, useEffect, useRef } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { Button, Popup, TextInput } from '@/shared/widgets';
import { ICategory } from '@/entities/category/types';
import { Else, If, Then } from 'react-if';

interface Props {
  action: string
  category?: ICategory
}

const CreateCategoryForm: FC<Props> = ( { action, category } ) => {
  const navigation = useNavigation();
  const actionData = useActionData() as { success: boolean, msg: string };
  const form = useRef<HTMLFormElement>( null );

  useEffect( () => {
    if ( form.current ) {
      form.current.reset();
    }
  }, [ actionData ] );

  return (
    <>
      <Form ref={form} method="post" action={action}>
        <div className="grid sm:grid-cols-7 gap-7">
          <If condition={false}>
            <Then>
              <div className="relative">
                <button type="button" className="w-8 h-8 rounded-full bg-red-400 text-white font-bold flex items-center justify-center absolute -top-4 -right-4">×</button>
                <img src={''} alt="" className="w-full aspect-square rounded-xl object-cover" />
              </div>
            </Then>
            <Else>
              <button type="button" className="w-full aspect-square border-2 border-dashed border-gray-300 flex items-center justify-center text-2xl">+</button>
            </Else>
          </If>
          <div className="grid sm:grid-cols-2 gap-7 sm:col-span-6">
            <TextInput id="title" name="title" label="Title" type="text" defaultValue={category?.title} required />
            <TextInput id="slug" name="slug" label="Slug" type="text" defaultValue={category?.slug} required />
            <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'} className="sm:col-span-2">{category ? 'Update' : 'Create'}</Button>
          </div>
        </div>
      </Form>
      <Popup visible={false}>
        images
      </Popup>
    </>
  );
};

export default CreateCategoryForm;