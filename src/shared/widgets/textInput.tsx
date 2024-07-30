import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string
  name: string
  label: string
  type: 'text' | 'password'
}

const TextInput: FC<Props> = ( { id, name, label, type, ...others } ) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="px-2 text-sm font-medium absolute -top-[0.55rem] left-5 bg-[#202020]">{label}</label>
      <input {...others} type={type} id={id} name={name} className="w-full px-3 py-2 bg-transparent text-white border-2 border-[#909090] outline-none focus:border-white rounded-lg placeholder:text-[#909090]" />
    </div>
  );
};

export default TextInput;