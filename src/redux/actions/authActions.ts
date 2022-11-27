import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'src/interface/userInfo.interface';
import { addUser, fetchUserConversion, getAllUsers } from 'src/services/api';

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
export const actionFetchUserConversion: any = createAsyncThunk(
  'auth/fetchUserConversion',
  async (query?: string) => {
    const response = await fetchUserConversion(query);
    return response;
  },
);
