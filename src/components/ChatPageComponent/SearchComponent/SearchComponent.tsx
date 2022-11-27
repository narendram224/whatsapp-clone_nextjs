import { SearchInput, FilterMenu } from 'src/components';
import styles from './SearchComponent.module.scss';

const SearchComponent = ({ searchTerm, setSearchTerm }: any) => {
  const handleSearchTerm = (e: any) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div id="searchContainer" className={styles.searchContainer}>
      <SearchInput
        placeholder="search or start new chat"
        value={searchTerm}
        onChange={handleSearchTerm}
      />
      <FilterMenu />
    </div>
  );
};

export default SearchComponent;
