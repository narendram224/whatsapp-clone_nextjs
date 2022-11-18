import { MoreVertical, Settings } from 'react-feather';
import Typography from 'src/components/shared/Typography/Typography';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './HomePageDialoge.module.scss';

const HomePageDialoge = () => {
  return (
    <section id="dialog" className={styles.dialogContainer}>
      <div className={styles.topContainer}>
        <div>
          <Typography type="h1">To use WhatsApp on your computer:</Typography>
          <ol>
            <li>
              <Typography type="p">Open WhatsApp on your phone</Typography>
            </li>
            <li>
              <Typography type="p">
                <span>Tap &nbsp;</span>
                <strong>Menu</strong>
                <MoreVertical />
                <strong>Or Settings</strong>
                <Settings />
                and select <strong>Linked Devices</strong>
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
        <div>
          <Image
            src={ASSETS_OBJ.scan}
            width="300"
            height="300"
            alt="scanner image"
          />
        </div>
      </div>
      <div className={styles.bottomContainer}>Bottom Container</div>
    </section>
  );
};

export default HomePageDialoge;
