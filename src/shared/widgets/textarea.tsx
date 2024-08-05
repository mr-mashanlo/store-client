import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  id: string
  name: string
  label: string
  className: string
}

const Textarea: FC<Props> = ( { id, name, label, className, ...others } ) => {
  return (
    <div className={twMerge( 'relative', className )}>
      <label htmlFor={id} className="px-2 text-sm font-medium absolute -top-[0.55rem] left-5 bg-white">{label}</label>
      <textarea {...others} id={id} name={name} className="block w-full px-3 py-3 bg-transparent border border-gray-300 outline-none focus:border-black placeholder:text-[#909090]"></textarea>
    </div>
  );
};

export default Textarea;