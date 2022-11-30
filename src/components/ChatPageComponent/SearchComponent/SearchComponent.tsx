import { SearchInput, FilterMenu } from 'src/components';
import { actionGetAllUser } from 'src/redux/actions/authActions';
import { useAppDispatch } from 'src/redux/store';
import styles from './SearchComponent.module.scss';

const SearchComponent = ({ searchTerm, setSearchTerm }: any) => {
  const dispatch = useAppDispatch();
  const handleSearchTerm = (e: any) => {
    if (e.target.value.length === 0) {
      dispatch(actionGetAllUser());
    }
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
