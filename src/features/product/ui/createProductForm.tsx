import { FC } from 'react';
import { Form } from 'react-router-dom';

import Button from '@/shared/ui/button';
import Select from '@/shared/ui/select';
import TextInput from '@/shared/ui/textInput';
import Textarea from '@/shared/ui/textarea';

const CreateProductForm: FC = () => {
  return (
    <Form method="post">
      <div className="grid grid-cols-2 gap-7">
        <div className="flex flex-col gap-7">
          <TextInput id="name" name="name" label="Name" type="text" />
          <div className="grid grid-cols-2 gap-7">
            <TextInput id="price" name="price" label="Price" type="text" />
            <Select id="category" name="category" label="Category" options={[ { value: 'default', name: 'Default' } ]} />
          </div>
          <div className="grid grid-cols-4 gap-7">
            <div className="w-full aspect-square rounded-xl border-4 border-dashed border-[#363636] flex items-center justify-center text-4xl">+</div>
            <div className="w-full aspect-square rounded-xl border-4 border-dashed border-[#363636] flex items-center justify-center text-4xl">+</div>
            <div className="w-full aspect-square rounded-xl border-4 border-dashed border-[#363636] flex items-center justify-center text-4xl">+</div>
            <div className="w-full aspect-square rounded-xl border-4 border-dashed border-[#363636] flex items-center justify-center text-4xl">+</div>
          </div>
        </div>
        <div>
          <Textarea id="about" name="about" label="About" rows={8} />
        </div>
      </div>
      <div className="mt-7 text-center">
        <Button type="submit">Create</Button>
      </div>
    </Form>
  );
};

export default CreateProductForm;