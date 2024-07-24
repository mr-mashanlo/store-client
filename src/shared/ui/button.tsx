import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  className?: string
  loading?: boolean
  size?: string
}

const Button: FC<Props> = ( { children, className, loading, size = 'base', ...others } ) => {
  const sizes: { [ key: string ]: string } = { base: 'min-w-48 px-5 rounded-lg', sm: 'min-w-32 px-4 text-sm' };

  return (
    <button {...others} className={twMerge( 'py-2 bg-white text-[#202020] font-bold uppercase border-2 border-white relative', sizes[size], className )}>
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {loading && <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">● ● ●</span>}
    </button>
  );
};

export default Button;