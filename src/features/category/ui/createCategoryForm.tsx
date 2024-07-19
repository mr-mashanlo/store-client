import { FC, useEffect, useRef } from 'react';
import { Form, useActionData } from 'react-router-dom';
import TextInput from '@/shared/ui/textInput';
import Button from '@/shared/ui/button';

const CreateCategoryForm: FC = () => {
  const actionData = useActionData() as { success: boolean, msg: string };
  const form = useRef<HTMLFormElement>( null );

  useEffect( () => {
    if ( form.current ) {
      form.current.reset();
    }
  }, [ actionData ] );

  return (
    <Form ref={form} method="post" action="/dashboard/categories">
      <div className="grid grid-cols-3 gap-7">
        <TextInput id="title" name="title" label="Title" type="text" required />
        <TextInput id="slug" name="slug" label="Slug" type="text" required />
        <Button>Create</Button>
      </div>
    </Form>
  );
};

export default CreateCategoryForm;