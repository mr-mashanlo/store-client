import { DetailedHTMLProps, FC, SelectHTMLAttributes } from 'react';
import { ICategory } from '@/entities/category/types';

interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  id: string
  name: string
  label: string
  options: Array<ICategory>
}

const Select: FC<Props> = ( { id, name, label, options, ...others } ) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="px-2 text-sm font-medium absolute -top-[0.55rem] left-5 bg-[#202020]">{label}</label>
      <select {...others} id={id} name={name} className="w-full px-3 py-2 bg-transparent text-white border-2 border-[#909090] outline-none focus:border-white rounded-lg placeholder:text-[#909090] appearance-none">
        {options.map( option => ( <option key={option._id} value={option._id} className="text-[#202020]">{option.title}</option> ) )}
      </select>
    </div>
  );
};

export default Select;