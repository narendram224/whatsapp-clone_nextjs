import {
  Typography,
  MessageCount,
  MessageTime,
  ReadMessageTick,
} from 'src/components';
import { actionFetchUserConversion } from 'src/redux/actions/authActions';
import { saveSelectedUser } from 'src/redux/reducers/authReducer';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './UserListItem.module.scss';

const UserListItem = ({ user }: any) => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleSelectedUser = () => {
    dispatch(saveSelectedUser(user));
    dispatch(
      actionFetchUserConversion({
        senderId: userInfo?.id,
        receiverId: user?.id,
      }),
    );
    console.log('Event received', user);
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
      <div
        className={styles.content}
        onClick={handleSelectedUser}
        onKeyDown={handleSelectedUser}
        role="button"
        tabIndex={0}
      >
        <Typography type="h2" className={styles.heading}>
          {user?.name}
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
