import {
  DrawerHeader,
  ProfilePictureComponent,
  EditProfileInfo,
  Typography,
} from 'src/components';
import styles from './ProfileDrawerComponent.module.scss';

const ProfileDrawerComponent = () => {
  return (
    <section id="profile_drawer" className={styles.profileDrawerContainer}>
      <DrawerHeader />
      <ProfilePictureComponent />

      <EditProfileInfo label="About">Shubh maurya</EditProfileInfo>
      <Typography type="p" className={styles.info}>
        This is not your pin , This name will be visible to your whatsapp
        contacts
      </Typography>
      <EditProfileInfo label="Description">
        Lorem ipsum dolor sit amet consectetur.
      </EditProfileInfo>
    </section>
  );
};

export default ProfileDrawerComponent;
