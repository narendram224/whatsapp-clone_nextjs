import React, { FC, ReactNode } from 'react';
import { EditInputField, Typography } from 'src/components';
import styles from './EditProfileInfo.module.scss';

interface IEditProfile {
  label: string;
  children: ReactNode;
}

const EditProfileInfo: FC<IEditProfile> = ({ label, children }) => {
  return (
    <div className={styles.editContainer}>
      <Typography type="p" className={styles.label}>
        {label}
      </Typography>
      <EditInputField value={children} />

      {/* <Typography type="p" className={styles.content}>
        {children}
      </Typography> */}
    </div>
  );
};

export default EditProfileInfo;
