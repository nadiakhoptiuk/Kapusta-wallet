import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  authHeader,
  sendRegisterCredentialsQuery,
  sendLoginCredentialsQuery,
  sendLogoutQuery,
  sendRefreshQuery,
  getAllUserInfoQuery,
  updateUserBalanceQuery,
} from 'service/kapustaAPI';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      await sendRegisterCredentialsQuery(credentials);
      dispatch(authOperations.login(credentials));
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await sendLoginCredentialsQuery(credentials);
      authHeader.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

const logout = createAsyncThunk(
  '/auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await sendLogoutQuery();
      authHeader.unset();
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  '/auth/refresh',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const savedToken = getState().auth.refreshToken;

    if (savedToken === null) {
      return rejectWithValue();
    }

    authHeader.set(savedToken);

    try {
      const { data } = await sendRefreshQuery(getState().auth.sid);

      authHeader.set(data.newAccessToken);

      dispatch(authOperations.getUserData());

      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

const getUserData = createAsyncThunk(
  'auth/getUserData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllUserInfoQuery();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

const updateUserBalance = createAsyncThunk(
  'auth/updateUserBalance',
  async (newBalance, { rejectWithValue }) => {
    try {
      const { data } = await updateUserBalanceQuery();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const authOperations = {
  register,
  login,
  logout,
  fetchCurrentUser,
  getUserData,
  updateUserBalance,
};
