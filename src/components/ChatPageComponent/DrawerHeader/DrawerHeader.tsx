import { ArrowLeft } from 'react-feather';
import { Typography } from 'src/components';
import {
  handleChangeDrawer,
  saveSelectedDrawer,
} from 'src/redux/reducers/appReducer';
import { useAppDispatch } from 'src/redux/store';
import styles from './DrawerHeader.module.scss';

const DrawerHeader = () => {
  const dispatch = useAppDispatch();
  const gotoBack = () => {
    dispatch(handleChangeDrawer(false));
    dispatch(saveSelectedDrawer('profile'));
  };
  return (
    <header id="drawerheader" className={styles.drawerHeaderContainer}>
      <ArrowLeft size={30} className={styles.backBtn} onClick={gotoBack} />
      <Typography type="h2">Profile</Typography>
    </header>
  );
};

export default DrawerHeader;
