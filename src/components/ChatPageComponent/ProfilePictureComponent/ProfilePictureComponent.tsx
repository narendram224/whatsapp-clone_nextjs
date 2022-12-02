import Image from 'next/image';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './ProfilePictureComponent.module.scss';

const ProfilePictureComponent = () => {
  return (
    <div className={styles.profileImgContainer}>
      <Image
        src={ASSETS_OBJ.user}
        className={styles.profileImage}
        width={200}
        height={200}
        alt="Profile Picture"
      />
    </div>
  );
};

export default ProfilePictureComponent;
