import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  authHeader,
  sendRegisterCredentialsQuery,
  sendLoginCredentialsQuery,
  sendLogoutQuery,
  sendRefreshQuery,
  getAllUserInfoQuery,
  updateUserBalanceQuery,
  sendIncomeTransactionQuery,
  sendExpenseTransactionQuery,
  getIncomeTransactionsQuery,
  getExpenseTransactionsQuery,
  deleteTransactionQuery,
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
      const { data } = await updateUserBalanceQuery(newBalance);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

const sendIncomeTransaction = createAsyncThunk(
  'auth/add/income',
  async (transaction, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await sendIncomeTransactionQuery(transaction);
      dispatch(authOperations.getIncomeTransactions());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

const getIncomeTransactions = createAsyncThunk(
  'auth/get/income',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getIncomeTransactionsQuery();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

const sendExpenseTransaction = createAsyncThunk(
  'auth/add/expense',
  async (transaction, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await sendExpenseTransactionQuery(transaction);
      dispatch(authOperations.getExpenseTransactions());

      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
const getExpenseTransactions = createAsyncThunk(
  'auth/get/expense',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getExpenseTransactionsQuery();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

const deleteTransaction = createAsyncThunk(
  'auth/transaction/delete',
  async (transactionId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await deleteTransactionQuery(transactionId);
      dispatch(authOperations.getExpenseTransactions());
      dispatch(authOperations.getIncomeTransactions());
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
  sendIncomeTransaction,
  sendExpenseTransaction,
  getExpenseTransactions,
  getIncomeTransactions,
  deleteTransaction,
};
