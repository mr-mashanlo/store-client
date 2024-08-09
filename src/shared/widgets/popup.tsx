import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

interface Props {
  isVisible: boolean
  onClose: () => void
  children: ReactNode
}

const Popup: FC<Props> = ( { isVisible, onClose, children } ) => {
  return (
    createPortal(
      <div onClick={onClose} className={twMerge( 'w-screen h-screen fixed top-0 left-0 z-20 transition-transform duration-700 overflow-hidden', isVisible ? 'translate-x-0' : 'translate-x-[110%]' )}>
        <div onClick={e => e.stopPropagation()} className={twMerge( 'popup w-[30rem] p-5 fixed top-5 bottom-5 right-5 z-50 bg-gray-200 transition-transform duration-300 overflow-x-auto hidden-scrollbar', isVisible ? 'translate-x-0' : 'translate-x-[110%]' )}>
          {children}
        </div>
      </div>,
      document.body
    )
  );
};

export default Popup;