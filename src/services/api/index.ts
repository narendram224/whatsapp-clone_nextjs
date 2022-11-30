import { IUser } from 'src/interface/userInfo.interface';
import { API_VERSION } from 'src/utils/constant';
import { axiosGet, axiosPost } from './request';

export const getAllUsers = (query?: string) =>
  axiosGet(`${API_VERSION}/user${query ? `?keyword=${query}` : ''}`);
export const addUser = (payload: IUser) =>
  axiosPost(`${API_VERSION}/user`, payload);
export const addUserConversion = (payload: any) =>
  axiosPost(`${API_VERSION}/user/conversation`, payload);
export const sendMsgToApi = (payload: any) =>
  axiosPost(`${API_VERSION}/message`, payload);
export const getConversationMessages = (conversationId: string) =>
  axiosGet(`${API_VERSION}/message/conversation/${conversationId}`);
export const uploadFileToApi = (payload: FormData) =>
  axiosPost(`${API_VERSION}/file-upload`, payload);

export const getConversation = ({
  senderId,
  receiverId,
}: {
  senderId: string;
  receiverId: string;
}) => axiosGet(`${API_VERSION}/user/conversation/${senderId}/${receiverId}`);
