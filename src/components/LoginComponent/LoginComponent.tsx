import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { LogOut } from 'react-feather';
import { IUser } from 'src/interface/userInfo.interface';
import { actionAddUser } from 'src/redux/actions/authActions';
import { useAppDispatch } from 'src/redux/store';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './LoginComponent.module.scss';

const LoginComponent = () => {
  const { data: session }: any = useSession();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleGoogleLogin = () => {
    signIn();
  };
  const redirectToChat = () => {
    router.push('/chat');
  };
  const handleGoogleLogout = () => {
    signOut();
  };

  // useEffect(() => {
  //   if (session) {
  //     dispatch(actionAddUser(session?.user as IUser));
  //   }
  // }, [session]);

  if (session) {
    return (
      <section id="login_component" className={styles.loginContainer}>
        <span>Welcome 🚀,</span>
        <span className={styles.name}>{session?.user?.name}</span>
        <img
          src={session?.user?.image || ASSETS_OBJ.user}
          alt="user profile"
          width={180}
          height={160}
          loading="lazy"
          className={styles.profile_img}
        />
        <div className={styles.btnContainer}>
          <button
            type="button"
            className={`${styles.logout} ${styles.btnPrimary}`}
            onClick={redirectToChat}
          >
            chat
          </button>
          <LogOut
            size={26}
            className={`${styles.logout} ${styles.btnSecondary}`}
            onClick={handleGoogleLogout}
          />
          {/* <button
            type="button"
            className={`${styles.logout} ${styles.btnSecondary}`}
           
          >
            Logout
          </button> */}
        </div>
      </section>
    );
  }

  return (
    <section id="login_component" className={styles.logoutContainer}>
      <button
        type="button"
        className={styles.logoutBtn}
        onClick={handleGoogleLogin}
      >
        <Image
          src={ASSETS_OBJ.googleIcon}
          alt="GoogleIcon"
          width={50}
          height={50}
        />
        Sign with google
      </button>
    </section>
  );
};

export default LoginComponent;
