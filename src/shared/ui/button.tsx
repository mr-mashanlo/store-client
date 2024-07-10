import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  loading?: boolean
}

const Button: FC<Props> = ( { children, loading, ...others } ) => {
  return (
    <button {...others} className="px-3 py-2 bg-white text-black font-bold uppercase rounded-lg border-2 border-white relative">
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {loading && <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">● ● ●</span>}
    </button>
  );
};

export default Button;