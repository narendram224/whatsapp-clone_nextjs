import { useRef, useState } from 'react';
import { Check, Edit2 } from 'react-feather';
import styles from './EditInputField.module.scss';

const EditInputField = ({ value }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<any>(null);

  const handleFocus = () => {
    inputRef.current.focus();
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const saveProfileInfo = () => {
    console.log('Input', inputRef.current.value);

    // inputRef.current;
    handleBlur();
  };
  return (
    <div className={styles.editInputContainer}>
      <input
        ref={inputRef}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={styles.editInput}
        defaultValue={value}
        onClick={handleFocus}
      />
      {isFocused ? (
        <Check
          size={20}
          className={styles.editicon}
          onClick={saveProfileInfo}
        />
      ) : (
        <Edit2 size={20} className={styles.editicon} onClick={handleFocus} />
      )}
    </div>
  );
};

export default EditInputField;
