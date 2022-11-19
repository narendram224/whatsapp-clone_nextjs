import { SearchInput, FilterMenu } from 'src/components';
import styles from './SearchComponent.module.scss';

const SearchComponent = () => {
  return (
    <div id="searchContainer" className={styles.searchContainer}>
      <SearchInput placeholder="search or start new chat" />
      <FilterMenu />
    </div>
  );
};

export default SearchComponent;
