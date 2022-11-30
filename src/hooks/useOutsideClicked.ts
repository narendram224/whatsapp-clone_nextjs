import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveSelectedDrawer } from 'src/redux/reducers/appReducer';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutsideAlerter = (ref: any) => {
  const [isOutSideClicked, setIsOutSideClicked] = useState<any>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutSideClicked(true);
        dispatch(saveSelectedDrawer(null));
      }
    }
    if (ref) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    // Bind the event listener
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return { setIsOutSideClicked, isOutSideClicked };
};
