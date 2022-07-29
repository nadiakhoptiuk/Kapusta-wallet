export const currentPeriodDataSelector = state =>
  state.currentPeriodData.periodData;

export const isLoadingSelector = state => state.currentPeriodData.isLoading;

export const currentPeriodSelector = state =>
  state.currentPeriodData.currentPeriod;
