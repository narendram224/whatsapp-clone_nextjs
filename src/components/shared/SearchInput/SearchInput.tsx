/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { Search } from 'react-feather';
import styles from './SearchInput.module.scss';

interface ISearchInput {
  className?: any;
  [key: string]: any;
}

const SearchInput: FC<ISearchInput> = ({ className, ...props }) => {
  return (
    <div className={styles.inputContainer}>
      <input {...props} className={`${className} ${styles.inputField}`} />
      <Search size={16} className={styles.searchIcon} />
    </div>
  );
};
SearchInput.defaultProps = {
  className: '',
};

export default SearchInput;
