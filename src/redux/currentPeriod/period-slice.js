import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import { getPeriodData } from './period-operations';
import { actionName } from './period-operations';

const initialState = { periodData: {}, isLoading: false, currentPeriod: '' };

const periodSlice = createSlice({
  name: 'currentPeriodData',
  initialState,
  reducers: {
    [actionName]: (state, action) => {
      state.currentPeriod = action.payload;
    },
  },
  extraReducers: {
    [getPeriodData.pending](state) {
      state.isLoading = true;
    },
    [getPeriodData.fulfilled](state, action) {
      state.periodData = action.payload;
      state.isLoading = false;
    },
    [getPeriodData.rejected](state, action) {
      state.isLoading = false;
      switch (action.payload) {
        case 401:
          toast.error('Unauthorized');
          break;

        case 404:
          toast.error('Invalid user');
          break;

        default:
          toast.error('Bad reguest');
      }
    },
  },
});

export default periodSlice.reducer;
