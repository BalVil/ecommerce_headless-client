import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showSuccessToast: state => {
      state.open = true;
    },
    hideToast: state => {
      state.open = false;
    },
  },
});

export const { showSuccessToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;
