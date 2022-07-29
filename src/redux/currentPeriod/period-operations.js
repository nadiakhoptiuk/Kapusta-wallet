import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPeriodDataQuery } from 'service/kapustaAPI';

export const getPeriodData = createAsyncThunk(
  'period/get',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await getPeriodDataQuery(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
