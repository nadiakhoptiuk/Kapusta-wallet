export const getUserData = state => state.auth.userData;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsLoadingRegister = state => state.auth.isLoadingRegister;
export const getIsLoadingLogin = state => state.auth.isLoadingLogin;
export const getIsLoadingLogout = state => state.auth.isLoadingLogout;
export const getIsLoadingRefresh = state => state.auth.isLoadingRefresh;
export const getIsSendingIncome = state => state.auth.isSendingIncome;
export const getIsSendingExpense = state => state.auth.isSendingExpense;
export const getIncomeTransactions = state => state.auth.incomeTransactions;
export const getExpenseTransactions = state => state.auth.expenseTransactions;
export const getMonthStats = state => state.auth.monthsStats;
export const isGettingIncome = state => state.auth.isGettingIncome;
export const isGettingExpense = state => state.auth.isGettingExpense;
export const isDeleting = state => state.auth.isDeleting;