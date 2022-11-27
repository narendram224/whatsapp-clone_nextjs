import { IUser } from 'src/interface/userInfo.interface';
import { API_VERSION } from 'src/utils/constant';
import { axiosGet, axiosPost } from './request';

export const getAllUsers = (query?: string) =>
  axiosGet(`${API_VERSION}/user${query ? `?keyword=${query}` : ''}`);
export const addUser = (payload: IUser) =>
  axiosPost(`${API_VERSION}/user`, payload);
export const fetchUserConversion = (payload: any) =>
  axiosPost(`${API_VERSION}/user/conversation`, payload);
