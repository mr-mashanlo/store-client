import { FC, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Description, Field, Input, Label } from '@headlessui/react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error: { name: string, message: string },
  type: 'text' | 'email' | 'password',
  name: string,
  label: string,
  className?: string
}

const CustomInput: FC<Props> = ( { type, name, label, error, className, ...others } ) => {
  return (
    <Field className={twMerge( 'relative', className )}>
      <Label className="px-2 text-xs font-medium bg-zinc-100 absolute -top-[0.55rem] left-3 z-10">{label}</Label>
      <Input type={type} name={name} className={twMerge( 'block w-full px-3 py-2 outline-none border rounded-md bg-transparent placeholder:text-zinc-400/50 focus:border-zinc-500', error.name === name ? 'border-red-400' : 'border-zinc-300' )} required {...others} />
      {error.name === name && <Description className="mt-1 text-xs text-red-400 absolute top-full right-0">{error.message}</Description>}
    </Field>
  );
};

export default CustomInput;