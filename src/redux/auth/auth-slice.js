import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './auth-operations';

const initialState = {
  userData: { email: null, id: null, balance: 0, transactions: [] },
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isLoadingRegister: false,
  isLoadingLogin: false,
  isLoadingLogout: false,
  isLoadingRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // register
    [authOperations.register.pending](state) {
      state.isLoadingRegister = true;
    },
    [authOperations.register.fulfilled](state) {
      state.isLoadingRegister = false;
      toast('You have successfully registered.');
    },
    [authOperations.register.rejected](state, action) {
      state.isLoadingRegister = false;
      switch (action.payload) {
        case 400:
          toast.error('Wrong email or password, please try again.');
          break;

        case 409:
          toast.error('This email is already being used');
          break;

        default:
          toast.error('Server error, please try again later');
      }
    },

    // login
    [authOperations.login.pending](state) {
      state.isLoadingLogin = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.userData = action.payload.userData;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.isLoggedIn = true;
      state.isLoadingLogin = false;
    },
    [authOperations.login.rejected](state, action) {
      state.isLoadingLogin = false;
      switch (action.payload) {
        case 400:
          toast.error('Wrong email or password, please try again.');
          break;

        case 403:
          toast.error('Wrong email or password, please try again.');
          break;

        default:
          toast.error('Server error, please try again later');
      }
    },

    // logout
    [authOperations.logout.pending](state) {
      state.isLoadingLogout = true;
    },
    [authOperations.logout.fulfilled](state) {
      state.userData = { email: null, id: null, balance: 0, transactions: [] };
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.isLoggedIn = false;
      state.isLoadingLogout = false;
    },
    [authOperations.logout.rejected](state) {
      state.isLoadingLogout = false;
      toast.error('Server error, please try again later');
    },

    // refresh
    [authOperations.fetchCurrentUser.pending](state) {
      state.isLoadingRefresh = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.accessToken = action.payload.newAccessToken;
      state.refreshToken = action.payload.newRefreshToken;
      state.sid = action.payload.data.newSid;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isLoadingRefresh = false;
    },
    [authOperations.getUserData.fulfilled](state, action) {
      state.userData = action.payload;
      state.isLoggedIn = true;
      state.isLoadingRefresh = false;
    },
    [authOperations.getUserData.rejected](state) {
      state.isLoadingRefresh = false;
    },

    // google
    [authOperations.googleLogin.pending](state) {
      state.isLoadingLogin = true;
    },
    [authOperations.googleLogin.fulfilled](state, action) {
      state.isLoadingLogin = false;
    },
    [authOperations.googleLogin.rejected](state) {
      state.isLoadingLogin = false;
      toast.error('error');
    },
  },
});

export default authSlice.reducer;
