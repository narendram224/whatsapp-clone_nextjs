import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { LogOut } from 'react-feather';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './LoginComponent.module.scss';

const LoginComponent = () => {
  const { data: session }: any = useSession();
  const handleGoogleLogin = () => {
    signIn();
  };
  const handleGoogleLogout = () => {
    signOut();
  };
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
            // onClick={handleGoogleLogout}
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
