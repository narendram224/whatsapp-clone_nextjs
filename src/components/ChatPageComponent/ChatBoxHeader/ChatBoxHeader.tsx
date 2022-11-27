import { MoreVertical, Search } from 'react-feather';
import Typography from 'src/components/shared/Typography/Typography';
import { useAppSelector } from 'src/redux/store';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './ChatBoxHeader.module.scss';

const ChatBoxHeader = () => {
  const { selectedUser } = useAppSelector((state) => state.auth);

  return (
    <header id="chatbox-header" className={styles.chatBoxHeaderContainer}>
      <div className={styles.statusContainer}>
        <div className={styles.profile}>
          <img
            src={selectedUser?.image || ASSETS_OBJ.user}
            width={30}
            height={30}
            className={styles.profilePicture}
            alt="user profile"
          />
        </div>
        <Typography type="h6">{selectedUser?.name}</Typography>
        <Typography type="p" className={styles.online}>
          online
        </Typography>
      </div>
      <div className={styles.moreOption}>
        <Search size={20} />
        <MoreVertical size={20} />
      </div>
    </header>
  );
};

export default ChatBoxHeader;
