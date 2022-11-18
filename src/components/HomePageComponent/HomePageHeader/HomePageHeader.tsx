import Image from 'next/image';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './HomePageHeader.module.scss';

const HomePageHeader = () => {
  return (
    <header id="homepage_header" className={styles.home_page_header_container}>
      <Image
        src={ASSETS_OBJ.logo}
        width="160px"
        height="100px"
        className={styles.logo}
      />
    </header>
  );
};

export default HomePageHeader;
