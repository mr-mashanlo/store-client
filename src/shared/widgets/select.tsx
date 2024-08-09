import { DetailedHTMLProps, FC, SelectHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  id: string
  name: string
  label: string
  options: Array<{ value: string, title: string }>
}

const Select: FC<Props> = ( { id, name, label, options, ...others } ) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="px-2 text-sm font-medium absolute -top-[0.55rem] left-5 bg-white">{label}</label>
      <select {...others} id={id} name={name} className="w-full px-3 py-3 bg-transparent border border-gray-300 outline-none focus:border-black placeholder:text-[#909090] appearance-none">
        {options.map( option => ( <option key={option.value} value={option.value} className="text-[#202020]">{option.title}</option> ) )}
      </select>
    </div>
  );
};

export default Select;