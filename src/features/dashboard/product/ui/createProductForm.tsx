import { FC, useEffect, useRef, useState } from 'react';
import { If, Then, Else } from 'react-if';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { ICategoryResponse } from '@/entities/category/types';
import { IMedia } from '@/entities/media/types';
import { IProductResponse } from '@/entities/product/types';
import { usePopup } from '@/shared/hooks';
import { Button, Popup, Select, TextInput, Textarea } from '@/shared/widgets';

interface Props {
  categories: Array<ICategoryResponse>
  images: Array<IMedia>
  product?: IProductResponse
  action: string
}

const CreateProductForm: FC<Props> = ( { categories, images, product, action } ) => {
  const form = useRef<HTMLFormElement>( null );
  const navigation = useNavigation();
  const actionData = useActionData() as { success: boolean };
  const { isVisible, open, close } = usePopup();
  const [ gallery, setGallery ] = useState<Array<IMedia>>( product ? product.images : [] );

  const appendImage = ( image: IMedia ) => {
    if ( gallery.indexOf( image ) !== -1 ) {
      return;
    }
    if ( gallery.length > 4 ) {
      setGallery( [ ...gallery.slice( 1 ), image ] );
    } else {
      setGallery( [ ...gallery, image ] );
    }
  };

  const removeImage = ( image: IMedia ) => {
    setGallery( gallery.filter( item => item !== image ) );
  };

  useEffect( () => {
    if ( !product ) {
      setGallery( [] );
    }
    if ( form.current ) {
      form.current.reset();
    }
  }, [ actionData, product ] );

  return (
    <>
      <Form ref={form} method="post" action={action}>
        <div className="grid sm:grid-cols-2 gap-7">
          <div className="flex flex-col gap-7">
            <TextInput id="name" name="name" label="Name" type="text" defaultValue={product?.name} required />
            <div className="grid sm:grid-cols-2 gap-7">
              <TextInput id="price" name="price" label="Price" type="text" defaultValue={product?.price} required />
              <Select id="category" name="category" label="Category" options={categories.map( category => ( { value: category.slug, title: category.title } ) )} defaultValue={product?.category._id} required />
            </div>
            <div className="grid grid-cols-5 gap-7">
              <If condition={Boolean( gallery[0] )}>
                <Then>
                  <div className="relative">
                    <button onClick={() => removeImage( gallery[0] )} type="button" className="w-8 h-8 rounded-full bg-red-400 text-white font-bold flex items-center justify-center absolute -top-4 -right-4">×</button>
                    <img src={gallery[0] ? gallery[0].url : ''} alt="" className="w-full aspect-square object-cover" />
                  </div>
                </Then>
                <Else>
                  <button onClick={open} type="button" className="open-popup w-full aspect-square border-2 border-dashed border-gray-300 flex items-center justify-center text-3xl">+</button>
                </Else>
              </If>
              <If condition={Boolean( gallery[1] )}>
                <Then>
                  <div className="relative">
                    <button onClick={() => removeImage( gallery[1] )} type="button" className="w-8 h-8 rounded-full bg-red-400 text-white font-bold flex items-center justify-center absolute -top-4 -right-4">×</button>
                    <img src={gallery[1] ? gallery[1].url : ''} alt="" className="w-full aspect-square object-cover" />
                  </div>
                </Then>
                <Else>
                  <button onClick={open} type="button" className="open-popup w-full aspect-square border-2 border-dashed border-gray-300 flex items-center justify-center text-3xl">+</button>
                </Else>
              </If>
              <If condition={Boolean( gallery[2] )}>
                <Then>
                  <div className="relative">
                    <button onClick={() => removeImage( gallery[2] )} type="button" className="w-8 h-8 rounded-full bg-red-400 text-white font-bold flex items-center justify-center absolute -top-4 -right-4">×</button>
                    <img src={gallery[2] ? gallery[2].url : ''} alt="" className="w-full aspect-square object-cover" />
                  </div>
                </Then>
                <Else>
                  <button onClick={open} type="button" className="open-popup w-full aspect-square border-2 border-dashed border-gray-300 flex items-center justify-center text-3xl">+</button>
                </Else>
              </If>
              <If condition={Boolean( gallery[3] )}>
                <Then>
                  <div className="relative">
                    <button onClick={() => removeImage( gallery[3] )} type="button" className="w-8 h-8 rounded-full bg-red-400 text-white font-bold flex items-center justify-center absolute -top-4 -right-4">×</button>
                    <img src={gallery[3] ? gallery[3].url : ''} alt="" className="w-full aspect-square object-cover" />
                  </div>
                </Then>
                <Else>
                  <button onClick={open} type="button" className="open-popup w-full aspect-square border-2 border-dashed border-gray-300 flex items-center justify-center text-3xl">+</button>
                </Else>
              </If>
              <If condition={Boolean( gallery[4] )}>
                <Then>
                  <div className="relative">
                    <button onClick={() => removeImage( gallery[4] )} type="button" className="w-8 h-8 rounded-full bg-red-400 text-white font-bold flex items-center justify-center absolute -top-4 -right-4">×</button>
                    <img src={gallery[4] ? gallery[4].url : ''} alt="" className="w-full aspect-square object-cover" />
                  </div>
                </Then>
                <Else>
                  <button onClick={open} type="button" className="open-popup w-full aspect-square border-2 border-dashed border-gray-300 flex items-center justify-center text-3xl">+</button>
                </Else>
              </If>
            </div>
          </div>
          <div>
            <Textarea id="about" name="about" label="About" rows={10} defaultValue={product?.about} required />
          </div>
        </div>
        <div className="mt-7 text-center">
          <Button type="submit" loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'} className="w-full">{product ? 'Update' : 'Create'}</Button>
        </div>
        <input id="gallery" name="gallery" type="text" value={gallery.map( item => item._id ).join( ',' )} hidden readOnly />
      </Form>
      <Popup isVisible={isVisible} onClose={close}>
        <div className="grid grid-cols-4 gap-4">
          {images.map( image => (
            <button onClick={() => appendImage( image )} key={image._id} type="button">
              <img src={image.url} alt={image.alt} className={twMerge( 'w-full aspect-square object-cover', gallery.indexOf( image ) !== -1 ? 'opacity-20' : '' )} />
            </button>
          ) )}
        </div>
      </Popup>
    </>
  );
};

export default CreateProductForm;