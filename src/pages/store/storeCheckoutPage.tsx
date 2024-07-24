import { FC } from 'react';
import { Form, useLoaderData, useNavigation } from 'react-router-dom';
import { PageHeader } from '@/app/layouts/header/ui';
import { useCartStore } from '@/entities/cart/model';
import { IUser } from '@/entities/auth/types';
import { IAddress } from '@/entities/address/types';
import TextInput from '@/shared/ui/textInput';
import Button from '@/shared/ui/button';

const StoreCheckoutPage: FC = () => {
  const navigation = useNavigation();
  const loaderData = useLoaderData() as { success: boolean, data: { user: IUser, address: IAddress } };
  const { products, getTotalPrice } = useCartStore();

  return (
    <>
      <PageHeader title="Checkout Page" />
      <section className="py-14">
        <div className="container-block container-block--normal">
          <div className="grid gap-20">
            <div>
              <h2 className="text-2xl font-bold uppercase">Products</h2>
              <ul className="mt-10">
                {products.map( product => (
                  <li key={product.product._id} className="p-3 grid grid-cols-3 gap-4 items-center odd:bg-[#363636]">
                    <span className="line-clamp-1">{product.product.name}</span>
                    <span className="text-center">{product.quantity}</span>
                    <span className="text-right">{product.product.price}$</span>
                  </li>
                ) )}
              </ul>
              <div className="mt-5 text-right">
                <p className="text-6xl font-bold">Total: {getTotalPrice()}$</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold uppercase">Address</h2>
              <Form method="post" action="/checkout" className="mt-10">
                <div className="flex flex-col gap-7">
                  <div className="grid grid-cols-2 gap-7">
                    <TextInput id="fullname" name="fullname" label="Full name" type="text" placeholder="John Doe" defaultValue={loaderData.data.user.fullname} required />
                    <TextInput id="phone" name="phone" label="Phone" type="text" placeholder="+7 777 77 77 777" defaultValue={loaderData.data.user.phone} required />
                  </div>
                  <div className="grid grid-cols-2 gap-7">
                    <TextInput id="district" name="district" label="District" type="text" placeholder="Jambyl district" defaultValue={loaderData.data.address.district} required />
                    <TextInput id="city" name="city" label="City" type="text" placeholder="Sortobe" defaultValue={loaderData.data.address.city} required />
                  </div>
                  <TextInput id="street" name="street" label="Street" type="text" placeholder="Dank #31" defaultValue={loaderData.data.address.street} required />
                  <input id="products" name="products" type="text" value={JSON.stringify( products )} readOnly hidden />
                  <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'}>Buy</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreCheckoutPage;