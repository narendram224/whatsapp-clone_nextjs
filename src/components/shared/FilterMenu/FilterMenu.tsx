import { Filter } from 'react-feather';
import styles from './FilterMenu.module.scss';

const FilterMenu = () => {
  return (
    <div id="filter" className={styles.filterMenu}>
      <Filter size={20} className={styles.filterIcon} />
    </div>
  );
};

export default FilterMenu;
