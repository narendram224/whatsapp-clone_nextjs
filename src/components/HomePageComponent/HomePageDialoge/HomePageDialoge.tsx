import Image from 'next/image';
import { MoreVertical, Settings } from 'react-feather';
import Typography from 'src/components/shared/Typography/Typography';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './HomePageDialoge.module.scss';

const HomePageDialoge = () => {
  return (
    <section id="dialog" className={styles.dialogContainer}>
      <div className={styles.topContainer}>
        <div>
          <Typography className={styles.heading} type="h1">
            To use WhatsApp on your computer:
          </Typography>
          <ol>
            <li>
              <Typography type="p">Open WhatsApp on your phone</Typography>
            </li>
            <li>
              <Typography type="p" className={styles.customType}>
                <span>Tap &nbsp;</span>
                <strong className={styles.strong}>Menu</strong>
                <MoreVertical size={20} className={styles.moreVertical} />
                <strong className={styles.strong}>Or Settings &nbsp;</strong>
                <Settings className={styles.moreVertical} />
                &nbsp; and select &nbsp;{' '}
                <strong className={styles.strong}>Linked Devices</strong>
              </Typography>
            </li>
            <li>
              <Typography type="p">
                Tap on <strong>Link a device</strong>
              </Typography>
            </li>
            <li>
              <Typography type="p">
                Point your phone to this screen to capture the code
              </Typography>
            </li>
          </ol>
        </div>
        <div className={styles.scannerContainer}>
          <Image
            src={ASSETS_OBJ.scan}
            width="280"
            height="280px"
            className={styles.logo}
            alt="scannerimg"
          />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Image src={ASSETS_OBJ.video} width={500} height={300} alt="video" />
      </div>
    </section>
  );
};

export default HomePageDialoge;
