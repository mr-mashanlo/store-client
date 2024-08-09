import { FC } from 'react';
import { Form, useLoaderData } from 'react-router-dom';

import { ICategoryRequest } from '@/entities/category/types';
import { IOrderResponse } from '@/entities/order/types';
import { Button, Select } from '@/shared/widgets';

const UpdateStatusForm: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: IOrderResponse};
  const categories: Array<ICategoryRequest> = [
    { _id: 'Processing', image: '', slug: 'Processing', title: 'Processing' },
    { _id: 'Delivering', image: '', slug: 'Delivering', title: 'Delivering' },
    { _id: 'Done', image: '', slug: 'Done', title: 'Done' }
  ];

  return (
    <Form method="post" action={`/dashboard/orders/${loaderData.data._id}`} className="mt-5">
      <div className="grid sm:grid-cols-2 gap-7">
        <Select id="status" name="status" label="Status" options={categories} defaultValue={loaderData.data.status} required />
        <Button>Update</Button>
      </div>
    </Form>
  );
};

export default UpdateStatusForm;