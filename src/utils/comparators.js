export const objectEntriesComparatorDesc = (arr1, arr2) => arr2[1] - arr1[1];
export const transactionDateComparatorDesc = (t1, t2) =>
  new Date(t2.date) - new Date(t1.date);
