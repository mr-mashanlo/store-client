import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  id: string
  name: string
  label: string
}

const Textarea: FC<Props> = ( { id, name, label, ...others } ) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="px-2 text-sm font-medium absolute -top-[0.55rem] left-5 bg-[#202020]">{label}</label>
      <textarea {...others} id={id} name={name} className="block w-full px-3 py-2 bg-transparent text-white border-2 border-[#909090] outline-none focus:border-white rounded-lg placeholder:text-[#909090]"></textarea>
    </div>
  );
};

export default Textarea;