import { FC } from 'react';
import { Form, useLoaderData } from 'react-router-dom';

import { IOrderResponse } from '@/entities/order/types';
import { Button, Select } from '@/shared/widgets';

const UpdateStatusForm: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: IOrderResponse};
  const categories = [
    { value: 'Processing', title: 'Processing' },
    { value: 'Delivering', title: 'Delivering' },
    { value: 'Done', title: 'Done' }
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