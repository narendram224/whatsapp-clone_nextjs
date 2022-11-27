import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  actionAddUser,
  actionFetchUserConversion,
  actionGetAllUser,
} from '../actions/authActions';

const initialState: any = {
  userInfo: {},
  userList: [],
  loading: { loadingUserInfo: false, loadingUserList: false },
  error: { errorUserInfo: false, errorUserList: false },
  message: '',
  userConversion: [],

  selectedUser: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUserInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
    saveSelectedUser: (state, action: PayloadAction<any>) => {
      state.selectedUser = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(actionAddUser.pending, (state) => {
        state.loadingUserInfo = true;
      })
      .addCase(
        actionAddUser.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          // When the API call is successful and we get some data,the data becomes the `fulfilled` action payload
          state.loadingUserInfo = false;
          state.userInfo = payload?.data?.user;
        },
      )
      .addCase(
        actionAddUser.rejected,
        (state, { payload: { message } }: PayloadAction<any>) => {
          state.loadingUserInfo = false;
          state.errorUserInfo = true;
          state.message = message;
        },
      );
    builder
      .addCase(actionGetAllUser.pending, (state) => {
        state.loadingUserList = true;
      })
      .addCase(
        actionGetAllUser.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          // When the API call is successful and we get some data,the data becomes the `fulfilled` action payload
          state.loadingUserList = false;
          state.userList = payload?.data?.users;
        },
      )
      .addCase(
        actionGetAllUser.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.loadingUserList = false;
          state.errorUserList = true;
          state.message = payload || '';
        },
      );
    builder
      .addCase(actionFetchUserConversion.pending, (state) => {
        state.loadingUserConversion = true;
      })
      .addCase(
        actionFetchUserConversion.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          // When the API call is successful and we get some data,the data becomes the `fulfilled` action payload
          state.loadingUserConversion = false;
          state.userConversion = payload?.data?.messages;
        },
      )
      .addCase(
        actionFetchUserConversion.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.loadingUserConversion = false;
          state.errorUserList = true;
          state.message = payload || '';
        },
      );
  },
});

export const { getUserInfo, saveSelectedUser } = authSlice.actions;

export default authSlice.reducer;
