import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  className?: string
  loading?: boolean
  size?: string
  color?: 'black' | 'white'
}

const Button: FC<Props> = ( { children, className, loading, size = 'base', color = 'black', ...others } ) => {
  const sizes: { [ key: string ]: string } = { base: 'min-w-48 px-5', sm: 'min-w-32 px-4 text-sm' };
  const colors = { black: 'border-black bg-black text-white', white: 'border-gray-300 bg-transparent text-black' };

  return (
    <button {...others} className={twMerge( 'py-3 font-medium border relative', sizes[size], colors[color], className )}>
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {loading && <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">● ● ●</span>}
    </button>
  );
};

export default Button;