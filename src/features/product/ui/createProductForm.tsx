import { FC, useEffect, useRef, useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { If, Then, Else } from 'react-if';
import { twMerge } from 'tailwind-merge';

import Button from '@/shared/ui/button';
import Select from '@/shared/ui/select';
import TextInput from '@/shared/ui/textInput';
import Textarea from '@/shared/ui/textarea';

import { ICategory } from '@/entities/category/types';
import { IMedia } from '@/entities/media/types';
import { IProductResponse } from '@/entities/product/types';

interface Props {
  categories: Array<ICategory>
  images: Array<IMedia>
  product?: IProductResponse
  action: string
}

const CreateProductForm: FC<Props> = ( { categories, images, product, action } ) => {
  const navigation = useNavigation();
  const actionData = useActionData() as { success: boolean };
  const form = useRef<HTMLFormElement>( null );
  const [ gallery, setGallery ] = useState<Array<IMedia>>( product ? product.images : [] );
  const [ isShowImages, setIsShowImages ] = useState<boolean>( false );

  const appendImage = ( image: IMedia ) => {
    if ( gallery.indexOf( image ) !== -1 ) {
      return;
    }
    if ( gallery.length > 3 ) {
      setGallery( [ ...gallery.slice( 1 ), image ] );
    } else {
      setGallery( [ ...gallery, image ] );
    }
  };

  const removeImage = ( image: IMedia ) => {
    setGallery( gallery.filter( item => item !== image ) );
  };

  useEffect( () => {
    if ( typeof actionData === 'object' ) {
      setIsShowImages( false );
    }
    if ( !product ) {
      setGallery( [] );
    }
    if ( form.current ) {
      form.current.reset();
    }
  }, [ actionData, product ] );

  return (
    <Form ref={form} method="post" action={action}>
      <div className="grid sm:grid-cols-2 gap-7">
        <div className="flex flex-col gap-7">
          <TextInput id="name" name="name" label="Name" type="text" defaultValue={product?.name} required />
          <div className="grid sm:grid-cols-2 gap-7">
            <TextInput id="price" name="price" label="Price" type="text" defaultValue={product?.price} required />
            <Select id="category" name="category" label="Category" options={categories} defaultValue={product?.category._id} required />
          </div>
          <div className="grid grid-cols-4 gap-7">
            <If condition={Boolean( gallery[0] )}>
              <Then>
                <div className="relative">
                  <button onClick={() => removeImage( gallery[0] )} type="button" className="w-8 h-8 rounded-full bg-red-400 text-white font-bold flex items-center justify-center absolute -top-4 -right-4">×</button>
                  <img src={gallery[0] ? gallery[0].url : ''} alt="" className="w-full aspect-square rounded-xl object-cover" />
                </div>
              </Then>
              <Else>
                <button onClick={() => setIsShowImages( true )} type="button" className="w-full aspect-square rounded-xl border-4 border-dashed border-[#363636] flex items-center justify-center text-4xl">+</button>
              </Else>
            </If>
            <If condition={Boolean( gallery[1] )}>
              <Then>
                <div className="relative">
                  <button onClick={() => removeImage( gallery[1] )} type="button" className="w-8 h-8 rounded-full bg-red-400 text-white font-bold flex items-center justify-center absolute -top-4 -right-4">×</button>
                  <img src={gallery[1] ? gallery[1].url : ''} alt="" className="w-full aspect-square rounded-xl object-cover" />
                </div>
              </Then>
              <Else>
                <button onClick={() => setIsShowImages( true )} type="button" className="w-full aspect-square rounded-xl border-4 border-dashed border-[#363636] flex items-center justify-center text-4xl">+</button>
              </Else>
            </If>
            <If condition={Boolean( gallery[2] )}>
              <Then>
                <div className="relative">
                  <button onClick={() => removeImage( gallery[2] )} type="button" className="w-8 h-8 rounded-full bg-red-400 text-white font-bold flex items-center justify-center absolute -top-4 -right-4">×</button>
                  <img src={gallery[2] ? gallery[2].url : ''} alt="" className="w-full aspect-square rounded-xl object-cover" />
                </div>
              </Then>
              <Else>
                <button onClick={() => setIsShowImages( true )} type="button" className="w-full aspect-square rounded-xl border-4 border-dashed border-[#363636] flex items-center justify-center text-4xl">+</button>
              </Else>
            </If>
            <If condition={Boolean( gallery[3] )}>
              <Then>
                <div className="relative">
                  <button onClick={() => removeImage( gallery[3] )} type="button" className="w-8 h-8 rounded-full bg-red-400 text-white font-bold flex items-center justify-center absolute -top-4 -right-4">×</button>
                  <img src={gallery[3] ? gallery[3].url : ''} alt="" className="w-full aspect-square rounded-xl object-cover" />
                </div>
              </Then>
              <Else>
                <button onClick={() => setIsShowImages( true )} type="button" className="w-full aspect-square rounded-xl border-4 border-dashed border-[#363636] flex items-center justify-center text-4xl">+</button>
              </Else>
            </If>
          </div>
          <input id="gallery" name="gallery" type="text" value={gallery.map( item => item._id ).join( ',' )} hidden readOnly />
        </div>
        <div>
          <div className={twMerge( 'h-[16.222rem] bg-[#363636] rounded-lg relative', isShowImages ? '' : 'hidden' )}>
            <button onClick={() => setIsShowImages( false )} type="button" className="w-8 h-8 rounded-full bg-red-400 text-white font-bold flex items-center justify-center absolute -top-4 -right-4">×</button>
            <div className="h-[16.1rem] p-4 grid grid-cols-3 gap-4 items-start overflow-x-auto hidden-scrollbar">
              {images.map( image => (
                <button onClick={() => appendImage( image )} key={image._id} type="button">
                  <img src={image.url} alt={image.alt} className={twMerge( 'w-full aspect-square object-cover rounded-lg', gallery.indexOf( image ) !== -1 ? 'opacity-20' : '' )} />
                </button>
              ) )}
            </div>
          </div>
          <Textarea id="about" name="about" label="About" rows={8} defaultValue={product?.about} className={twMerge( isShowImages ? 'hidden' : '' )} required />
        </div>
      </div>
      <div className="mt-7 text-center">
        <Button type="submit" loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'}>{product ? 'Save' : 'Create'}</Button>
      </div>
    </Form>
  );
};

export default CreateProductForm;