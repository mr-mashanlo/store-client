import { useCallback, useState } from 'react';

const usePopup = () => {
  const [ isVisible, setIsVisible ] = useState( false );

  const open = useCallback( () => setIsVisible( true ), [] );
  const close = useCallback( () => setIsVisible( false ), [] );
  const toggle = useCallback( () => setIsVisible( prev => !prev ), [] );

  return { isVisible, open, close, toggle };
};

export default usePopup;