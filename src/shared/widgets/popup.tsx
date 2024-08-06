import { FC, ReactNode, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  visible: boolean
  children: ReactNode
  setVisible: ( status: boolean ) => void
}

const Popup: FC<Props> = ( { visible, setVisible, children } ) => {

  useEffect( () => {
    const handleClick = ( e: MouseEvent ) => {
      const target = e.target as Element;
      if ( !target.closest( '.popup' ) && !target.classList.contains( 'open-popup' ) ) { setVisible( false ); }
    };
    document.body.addEventListener( 'click', handleClick );
    return () => document.body.removeEventListener( 'click', handleClick );
  }, [ visible, setVisible ] );

  return (
    <div className={twMerge( 'popup w-[30rem] p-5 fixed top-5 bottom-5 right-5 z-20 bg-gray-100 transition-transform duration-500 overflow-x-auto hidden-scrollbar', visible ? 'translate-x-0' : 'translate-x-[110%]' )}>
      {children}
    </div>
  );
};

export default Popup;