/* eslint-disable no-underscore-dangle */
import { useContext, useEffect, useRef, useState } from 'react';
import { Loader, Paperclip, Send } from 'react-feather';
import { useDispatch } from 'react-redux';
import { Model } from 'src/components';
import { SocketContext } from 'src/context/VideoCallContext';
import useModel from 'src/hooks/useModel';
import { actionAddEmitMsg } from 'src/redux/actions/authActions';
import { useAppSelector } from 'src/redux/store';
import { uploadFileToApi } from 'src/services/api';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './FileUploaded.module.scss';

const FileUploaded = () => {
  const [selectedFile, setSelectedFile] = useState<any>('');
  const [loader, setLoader] = useState<boolean>(false);

  const { selectedUser, userInfo, conversationInfo } = useAppSelector(
    (state) => state.auth,
  );
  const [defaultUserImage, setDefaultUserImage] = useState(ASSETS_OBJ.user);
  const { handleToggleModel } = useModel();
  const { socket } = useContext(SocketContext);

  const dispatch = useDispatch();

  const inputRef = useRef<any>();

  const handleChangeFile = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setDefaultUserImage(objectURL);
      handleToggleModel();
      // Clean up the selection to avoid memory leak
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [selectedFile]);

  const sendImageMessage = async (imageUrl: string) => {
    const reqObject = {
      type: 'image',
      message: imageUrl,
      imageText: inputRef.current.value,
      senderId: userInfo.id,
      receiverId: selectedUser.id,
      conversationId: conversationInfo._id,
    };
    dispatch(actionAddEmitMsg(reqObject));
    socket.emit('sendMessage', { ...reqObject, createdAt: Date.now() });
    setLoader(false);
    handleToggleModel();
    setSelectedFile('');
    inputRef.current.value = '';
  };

  const submitImage = async () => {
    setLoader(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('name', selectedFile.name);
    const response = await uploadFileToApi(formData);
    await sendImageMessage(response?.data?.imageUrl);
  };
  const hadleOnClicked = (e: any) => {
    e.target.value = null;
    setSelectedFile('');
  };
  const closeModel = () => setSelectedFile('');

  return (
    <div className={styles.uploaderContainer}>
      <label htmlFor="selectFile">
        <Paperclip className={styles.uploaderIcon} />
        <input
          id="selectFile"
          type="file"
          style={{ display: 'none' }}
          onChange={handleChangeFile}
          onClick={hadleOnClicked}
        />
      </label>
      <Model onClose={closeModel}>
        <div className={styles.modelBody}>
          <p>
            File send to <span>{selectedUser?.name}</span>{' '}
          </p>
          <img
            src={defaultUserImage}
            width={200}
            alt="uplaoded"
            style={{ borderRadius: '4px' }}
          />
          <div className={styles.content}>
            <input
              ref={inputRef}
              type="text"
              placeholder="what to write something"
            />
            {loader ? (
              <Loader size={30} className={styles.spin} />
            ) : (
              <Send onClick={submitImage} className={styles.submit} />
            )}
          </div>
        </div>
      </Model>
    </div>
  );
};

export default FileUploaded;
