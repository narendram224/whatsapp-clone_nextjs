import { useEffect, useState } from 'react';
import { Paperclip } from 'react-feather';
import useModel from 'src/hooks/useModel';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import Model from '../Model/Model';
import styles from './Uploader.module.scss';

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [defaultUserImage, setDefaultUserImage] = useState(ASSETS_OBJ.user);
  const { handleToggleModel } = useModel();

  // const imageRef = useRef();

  const handleChangeFile = (e: any) => {
    const file = e.target.files[0];
    console.log('[File Changed]', e.target.files[0]);
    setSelectedFile(file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);
    // dispatch(actionUploadFile(formData));
  };

  // Clean up the selection to avoid memory leak
  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setDefaultUserImage(objectURL);
      handleToggleModel();

      return () => URL.revokeObjectURL(objectURL);
    }
  }, [selectedFile]);

  return (
    <div className={styles.uploaderContainer}>
      <label htmlFor="selectFile">
        <Paperclip />
        <input
          id="selectFile"
          type="file"
          style={{ display: 'none' }}
          onChange={handleChangeFile}
        />
      </label>
      <Model>
        <h1>Upload Image </h1>
        <div>
          <img src={defaultUserImage} width={200} alt="uplaoded" />
        </div>
      </Model>
    </div>
  );
};

export default Uploader;
