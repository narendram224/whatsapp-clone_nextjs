/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Circle, MessageSquare, MoreVertical, UserPlus } from 'react-feather';
import { Drawer } from 'src/components';

import { ASSETS_OBJ } from 'src/utils/assetsObject';

import { useDispatch } from 'react-redux';
import {
  handleChangeDrawer,
  saveSelectedDrawer,
} from 'src/redux/reducers/appReducer';
import styles from './SideMenuHeader.module.scss';

const SideMenuHeader = () => {
  const dispatch = useDispatch();

  const handleOpenProfileSection = () => {
    dispatch(handleChangeDrawer(true));
    dispatch(saveSelectedDrawer('profile'));
  };

  return (
    <header id="side_menu_header" className={styles.menuContainer}>
      <Drawer position="left" />
      <div className={styles.userProfileContainer}>
        <img
          src={ASSETS_OBJ.user}
          alt="user profile"
          className={styles.profileImg}
          onClick={handleOpenProfileSection}
        />
      </div>
      <div className={styles.itemContainer}>
        <UserPlus size={20} />
        <Circle size={20} />
        <MessageSquare size={20} />
        <MoreVertical size={20} />
      </div>
    </header>
  );
};

export default SideMenuHeader;
