import Image from 'next/image';
import {
  Typography,
  MessageCount,
  MessageTime,
  ReadMessageTick,
} from 'src/components';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './UserListItem.module.scss';

const UserListItem = () => {
  return (
    <div className={styles.userListItem}>
      <Image
        src={ASSETS_OBJ.user}
        className={styles.profileImg}
        width={40}
        height={60}
        alt="user+profile"
      />
      <div className={styles.content}>
        <Typography type="h2" className={styles.heading}>
          First Name
        </Typography>
        <Typography type="p" className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, in!
        </Typography>
        <MessageCount className={styles.countContent} />
        <MessageTime className={styles.timeContent} />
        <ReadMessageTick isActive className={styles.tickContent} />
      </div>
    </div>
  );
};

export default UserListItem;
