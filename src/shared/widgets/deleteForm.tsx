import { FC } from 'react';
import { Form } from 'react-router-dom';
import Button from './button';

interface Props {
  action: string
  className?: string
}

const DeleteForm: FC<Props> = ( { action, className } ) => {
  return (
    <Form method="delete" action={action} className={className}>
      <Button className="w-full">Delete</Button>
    </Form>
  );
};

export default DeleteForm;