import {
  Typography,
  MessageCount,
  MessageTime,
  ReadMessageTick,
} from 'src/components';
import { actionAddUserConversion } from 'src/redux/actions/authActions';
import { saveSelectedUser } from 'src/redux/reducers/authReducer';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './UserListItem.module.scss';

const UserListItem = ({ user, isTyping, isOnline, lastMessage }: any) => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleSelectedUser = () => {
    dispatch(saveSelectedUser(user));
    dispatch(
      actionAddUserConversion({
        senderId: userInfo?.id,
        receiverId: user?.id,
      }),
    );
  };
  return (
    <div className={styles.userListItem}>
      <img
        src={user.image || ASSETS_OBJ.user}
        className={styles.profileImg}
        width={40}
        height={60}
        alt="user+profile"
        loading="lazy"
      />
      {isOnline ? <div className={styles.onlineCircle} /> : ''}
      <div
        className={styles.content}
        onClick={handleSelectedUser}
        onKeyDown={handleSelectedUser}
        role="button"
        tabIndex={0}
      >
        <Typography type="h2" className={styles.heading}>
          {user?.name}|<span>{isTyping ? 'typing...' : '.'}</span>
        </Typography>
        <Typography type="p" className={styles.desc}>
          {lastMessage}
        </Typography>
        <MessageCount className={styles.countContent} />
        <MessageTime className={styles.timeContent} />
        <ReadMessageTick isActive className={styles.tickContent} />
      </div>
    </div>
  );
};

export default UserListItem;
