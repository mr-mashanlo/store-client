import { FC } from 'react';
import { Form } from 'react-router-dom';
import TextInput from '@/shared/ui/textInput';
import Button from '@/shared/ui/button';

const CreateCategoryForm: FC = () => {
  return (
    <Form method="post" action="/dashboard/categories">
      <div className="grid grid-cols-3 gap-7">
        <TextInput id="title" name="title" label="Title" type="text" required />
        <TextInput id="slug" name="slug" label="Slug" type="text" required />
        <Button>Create</Button>
      </div>
    </Form>
  );
};

export default CreateCategoryForm;