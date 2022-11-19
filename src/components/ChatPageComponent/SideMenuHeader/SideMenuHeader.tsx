import { Circle, MessageSquare, MoreVertical, UserPlus } from 'react-feather';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './SideMenuHeader.module.scss';

const SideMenuHeader = () => {
  return (
    <header id="side_menu_header" className={styles.menuContainer}>
      <div className={styles.userProfileContainer}>
        <img
          src={ASSETS_OBJ.user}
          alt="user profile"
          className={styles.profileImg}
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
