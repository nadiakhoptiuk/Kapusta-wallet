import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  authHeader,
  sendRegisterCredentialsQuery,
  sendLoginCredentialsQuery,
  sendLogoutQuery,
  sendRefreshQuery,
  getAuthTokensFromGoogleQuery,
  getAllUserInfoQuery,
} from 'service/kapustaAPI';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await sendRegisterCredentialsQuery(credentials);
      return data;
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
      const tokens = await sendRefreshQuery(getState().auth.sid);
      authHeader.set(tokens.data.newAccessToken);
      dispatch(authOperations.getUserData());
      return tokens;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

const googleLogin = createAsyncThunk(
  '/auth/googleLogin',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAuthTokensFromGoogleQuery();
      // authHeader.set(data.accessToken);
      document.querySelector('#root-modal').innerHTML = await data;
      // return data;
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

export const authOperations = {
  register,
  login,
  logout,
  fetchCurrentUser,
  googleLogin,
  getUserData,
};
