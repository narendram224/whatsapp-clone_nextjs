import { createAsyncThunk } from '@reduxjs/toolkit';
import { getInfo } from 'src/services/api';

export const actionGenerateOtp: any = createAsyncThunk(
  'auth/otp',
  async (data: string) => {
    const response = await getInfo(data);
    return response;
  },
);
