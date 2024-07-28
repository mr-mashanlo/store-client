import { FC, useEffect } from 'react';
import { Form, useActionData, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { PageHeader } from '@/app/layouts/header';
import { useCartStore } from '@/entities/cart/model';
import { IUser } from '@/entities/auth/types';
import { IAddress } from '@/entities/address/types';
import TextInput from '@/shared/ui/textInput';
import Button from '@/shared/ui/button';
import { IOrderResponse } from '@/entities/order/types';

const StoreCheckoutPage: FC = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData() as { success: boolean, data: IOrderResponse };
  const loaderData = useLoaderData() as { success: boolean, data: { user: IUser, address: IAddress } };
  const { setFrom, getTotalQuantity } = useCartStore();
  const { products, getTotalPrice } = useCartStore();

  useEffect( () => { setFrom( '' ); }, [ setFrom ] );

  useEffect( () => {
    if( !actionData ) {
      return;
    }
    if ( actionData.success ) {
      navigate( `/success/${actionData.data._id}` );
    }
  }, [ actionData, navigate ] );

  return (
    <>
      <PageHeader title="Checkout Page" />
      <section className="py-5 sm:py-14">
        <div className="container-block container-block--normal">
          <div className="grid gap-20">
            <div>
              <h2 className="text-2xl font-bold uppercase">Products</h2>
              <ul className="mt-5 sm:mt-10">
                {products.map( product => (
                  <li key={product.product._id} className="p-3 flex gap-4 items-center justify-between odd:bg-[#363636]">
                    <span className="flex gap-3 items-center">
                      <If condition={product.product.images.length}>
                        <Then><img src={product.product.images[0] ? product.product.images[0].url : ''} alt="" className="w-10 h-10 object-cover" /></Then>
                        <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
                      </If>
                      <span className="line-clamp-1">{product.product.name}</span>
                    </span>
                    <span className="text-center">{product.quantity}</span>
                  </li>
                ) )}
              </ul>
              <div className="mt-5 text-right">
                <p className="text-5xl sm:text-6xl font-bold">Total: {getTotalPrice()}$</p>
              </div>
            </div>

            <If condition={getTotalQuantity()}>
              <Then>
                <div>
                  <h2 className="text-2xl font-bold uppercase">Address</h2>
                  <Form method="post" action="/checkout" className="mt-5 sm:mt-10">
                    <div className="flex flex-col gap-7">
                      <div className="grid sm:grid-cols-2 gap-7">
                        <TextInput id="fullname" name="fullname" label="Full name" type="text" placeholder="John Doe" defaultValue={loaderData.data.user.fullname} required />
                        <TextInput id="phone" name="phone" label="Phone" type="text" placeholder="+7 777 77 77 777" defaultValue={loaderData.data.user.phone} required />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-7">
                        <TextInput id="district" name="district" label="District" type="text" placeholder="Jambyl district" defaultValue={loaderData.data.address.district} required />
                        <TextInput id="city" name="city" label="City" type="text" placeholder="Sortobe" defaultValue={loaderData.data.address.city} required />
                      </div>
                      <TextInput id="street" name="street" label="Street" type="text" placeholder="Dank #31" defaultValue={loaderData.data.address.street} required />
                      <input id="products" name="products" type="text" value={JSON.stringify( products )} required readOnly hidden />
                      <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'}>Buy</Button>
                    </div>
                  </Form>
                </div>
              </Then>
            </If>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreCheckoutPage;