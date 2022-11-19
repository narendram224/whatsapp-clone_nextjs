import Image from 'next/image';
import Typography from 'src/components/shared/Typography/Typography';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './DefaultChatScreen.module.scss';

const DefaultChatScreen = () => {
  return (
    <section className={styles.defailCont}>
      <div className={styles.defaultChatContainer}>
        <div className={styles.content}>
          <Image
            src={ASSETS_OBJ.landing}
            width={360}
            height={280}
            alt="default"
          />
          <Typography type="h1" className={styles.defaultHeader}>
            Whatsapp Web{' '}
          </Typography>
          <Typography type="p" className={styles.defaultDesc}>
            Send and receive message without keeping your phone online. Use
            whatsapp on upto 4 linked devices and 1 phone at the same time.
          </Typography>
        </div>
        <Typography className={styles.enrypt}>END TO END ENCRYPTION</Typography>
      </div>
    </section>
  );
};

export default DefaultChatScreen;
