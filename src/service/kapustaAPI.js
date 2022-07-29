import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';
axios.defaults.headers.common[
  'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmUyMzA2MGRiN2E4MTA4MTQwMmI4ODQiLCJzaWQiOiI2MmUyY2FjYmRiN2E4MTA4MTQwMmJiYzAiLCJpYXQiOjE2NTkwMzAyMTksImV4cCI6MTY1OTAzMzgxOX0.IhkWicHIU-tUTIJhK0IfOoRE5vJ82cxxYy4YQ7Du3rE`;

export const authHeader = {
  set: token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset: () => {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

const authMidpoint = 'auth';
const registerEndpoint = `/${authMidpoint}/register`;
const loginEndpoint = `/${authMidpoint}/login`;
const logoutEndpoint = `/${authMidpoint}/logout`;
const refreshEndpoint = `/${authMidpoint}/refresh`;
const googleEndpoint = `/${authMidpoint}/google`;
const transactionMidpoint = 'transaction';
const incomeEndpoint = `/${transactionMidpoint}/income`;
const expenseEndpoint = `/${transactionMidpoint}/expense`;
const deleteEndpoint = id => `/${transactionMidpoint}/${id}`;
const incomeCategoriesEndpoint = `/${transactionMidpoint}/income-categories`;
const expenseCategoriesEndpoint = `/${transactionMidpoint}/expense-categories`;
const periodDataEndpoint = date =>
  `${transactionMidpoint}/period-data?date=${date}`;
const userMidpoint = 'user';
const balanceEndpoint = `/${userMidpoint}/balance`;
const userEndpoint = `/${userMidpoint}`;

export const sendRegisterCredentialsQuery = async credentials =>
  await axios.post(registerEndpoint, credentials);

export const sendLoginCredentialsQuery = async credentials =>
  await axios.post(loginEndpoint, credentials);

export const sendLogoutQuery = async () => await axios.post(logoutEndpoint);

export const sendRefreshQuery = async sid =>
  await axios.post(refreshEndpoint, { sid });

export const getAuthTokensFromGoogleQuery = async () =>
  await axios.get(googleEndpoint);

export const sendIncomeTransactionQuery = async transaction =>
  await axios.post(incomeEndpoint, transaction);

export const getIncomeTransactionsQuery = async () =>
  await axios.get(incomeEndpoint);

export const sendExpenseTransactionQuery = async transaction =>
  await axios.post(expenseEndpoint, transaction);

export const getExpenseTransactionsQuery = async () =>
  await axios.get(expenseEndpoint);

export const deleteTransactionQuery = async transactionId =>
  await axios.delete(deleteEndpoint(transactionId));

export const getIncomeCategoriesQuery = async () =>
  await axios.get(incomeCategoriesEndpoint);

export const getExpenseCategoriesQuery = async () => {
  return await axios.get(expenseCategoriesEndpoint);
};

export const getPeriodDataQuery = async date =>
  await axios.get(periodDataEndpoint(date));

export const updateUserBalanceQuery = async newBalance =>
  await axios.patch(balanceEndpoint, { newBalance });

export const getAllUserInfoQuery = async () => await axios.get(userEndpoint);
