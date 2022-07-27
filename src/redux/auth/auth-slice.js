import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './auth-operations';

const initialState = {
  userData: { email: null, id: null, balance: 0, transactions: [] },
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  // isLoadingRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.userData.email = action.payload.email;
      state.userData.id = action.payload.id;
    },
    [authOperations.login.fulfilled](state, action) {
      state.userData = action.payload.userData;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled](state) {
      state.userData = { email: null, id: null, balance: 0, transactions: [] };
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.accessToken = action.payload.newAccessToken;
      state.refreshToken = action.payload.newRefreshToken;
      state.sid = action.payload.data.newSid;
    },
    [authOperations.googleLogin.fulfilled](state, action) {},
    [authOperations.getUserData.fulfilled](state, action) {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
