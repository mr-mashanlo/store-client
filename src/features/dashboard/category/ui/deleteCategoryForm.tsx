import { FC } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { Button } from '@/shared/widgets';
import { ICategory } from '@/entities/category/types';

const DeleteCategoryForm: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: ICategory };

  return (
    <Form method="delete" action={`/dashboard/categories/${loaderData.data._id}/delete`}>
      <Button className="w-full">Delete</Button>
    </Form>
  );
};

export default DeleteCategoryForm;