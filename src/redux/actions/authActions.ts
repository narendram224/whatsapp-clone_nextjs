import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'src/interface/userInfo.interface';
import {
  addUser,
  addUserConversion,
  getAllUsers,
  getConversation,
  getConversationMessages,
  uploadFileToApi,
} from 'src/services/api';

// export const actionGenerateOtp: any = createAsyncThunk(
//   'auth/otp',
//   async (data: string) => {
//     const response = await getInfo(data);
//     return response;
//   },
// );
export const actionAddUser: any = createAsyncThunk(
  'auth/addUser',
  async (data: IUser) => {
    const response = await addUser(data);
    return response;
  },
);
export const actionGetAllUser: any = createAsyncThunk(
  'auth/getAllUsers',
  async (query?: string) => {
    const response = await getAllUsers(query);
    response.query = query;
    return response;
  },
);
export const actionAddUserConversion: any = createAsyncThunk(
  'auth/addUserConversion',
  async (query?: string) => {
    const response = await addUserConversion(query);
    return response;
  },
);

export const actionFetchUserConversion: any = createAsyncThunk(
  'auth/fetchUserConversion',
  async (query?: any) => {
    const response = await getConversation(query);
    return response;
  },
);

export const actionFetchMessages: any = createAsyncThunk(
  'auth/fetchConversionMessage',
  async (conversationId: string) => {
    console.log(conversationId);
    const response = await getConversationMessages(conversationId);
    return response;
  },
);
export const actionUploadFile: any = createAsyncThunk(
  'auth/uploadFile',
  async (payload: FormData) => {
    const response = await uploadFileToApi(payload);
    return response;
  },
);
