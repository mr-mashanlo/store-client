import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  visible: boolean
  children: ReactNode
}

const Popup: FC<Props> = ( { visible, children } ) => {
  return (
    <div className={twMerge( 'p-5 fixed top-5 bottom-5 right-5 bg-gray-100 duration-500 ease-in-out overflow-hidden', visible ? 'w-[30rem]' : 'w-[0rem] p-0' )}>
      {children}
    </div>
  );
};

export default Popup;