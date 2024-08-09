import { FC } from 'react';
import { Form, useLoaderData } from 'react-router-dom';

import { ICategoryResponse } from '@/entities/category/types';
import { Button } from '@/shared/widgets';

const DeleteCategoryForm: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: ICategoryResponse };

  return (
    <Form method="delete" action={`/dashboard/categories/${loaderData.data._id}/delete`}>
      <Button className="w-full">Delete</Button>
    </Form>
  );
};

export default DeleteCategoryForm;