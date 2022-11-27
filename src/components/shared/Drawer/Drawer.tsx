import { useEffect, useRef } from 'react';
import ProfileDrawerComponent from 'src/components/ChatPageComponent/ProfileDrawerComponent/ProfileDrawerComponent';
import { useOutsideAlerter } from 'src/hooks/useOutsideClicked';
import { handleChangeDrawer } from 'src/redux/reducers/appReducer';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import styles from './Drawer.module.scss';

const Drawer = ({ position }: { position: string }) => {
  const { selectedDrawer, isDrawerActive } = useAppSelector(
    (state) => state.app,
  );
  const dispatch = useAppDispatch();
  // console.log('selectedDrawer', selectedDrawer);

  const DrawerComponent: any = {
    profile: <ProfileDrawerComponent />,
  };

  const styledClass: any = {
    left: styles.leftDrawer,
    rightight: styles.rightDrawer,
    top: styles.topDrawer,
    bottom: styles.bottomDrawer,
  };
  // console.log('styledClass', styledClass[position]);

  const wrapperRef = useRef(null);
  const { isOutSideClicked, setIsOutSideClicked } =
    useOutsideAlerter(wrapperRef);
  useEffect(() => {
    if (isOutSideClicked) {
      setIsOutSideClicked(false);
      dispatch(handleChangeDrawer(false));
    }
  }, [isOutSideClicked]);

  return (
    <aside
      className={`${
        isDrawerActive ? styledClass[position] : styles.drawerContainer
      } `}
      id="drawerContainer"
      ref={wrapperRef}
    >
      {DrawerComponent[selectedDrawer]}
    </aside>
  );
};

export default Drawer;
