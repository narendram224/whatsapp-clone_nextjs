import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  Info: [],
  selectedDrawer: null,
  isDrawerActive: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    saveDeviceInfo: (state, action: PayloadAction<Object>) => {
      state.deviceInfo = action.payload;
    },
    saveSelectedDrawer: (state, action: PayloadAction<string | null>) => {
      state.selectedDrawer = action.payload;
    },
    handleChangeDrawer: (state, action: PayloadAction<boolean>) => {
      state.isDrawerActive = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: () => {},
});

export const { save, saveDeviceInfo, saveSelectedDrawer, handleChangeDrawer } =
  appSlice.actions;

export default appSlice.reducer;
