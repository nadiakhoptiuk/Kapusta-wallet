import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { toast } from 'react-toastify';

import {
  deleteTransactionQuery,
  getExpenseTransactionsQuery,
  getIncomeTransactionsQuery,
} from 'service/kapustaAPI';
import { MODES } from 'utils/transactionConstants';
import Loader from 'components/Loader';
import Sprite from '../../images/sprite.svg';
import s from './TransactionsTable.module.css';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';

const TransactionsTable = ({
  transactions,
  setTransactions,
  setSummary,
  isLoading,
  setIsLoading,
  mode,
  userData,
}) => {
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsFetching(true);
    if (mode === MODES.expenseMode) {
      getExpenseTransactionsQuery()
        .then(({ data }) => {
          setTransactions(data.expenses);
        })
        .catch(err => toast.error(err.message))
        .finally(() => {
          setIsFetching(false);
        });
    }

    if (mode === MODES.incomeMode) {
      getIncomeTransactionsQuery()
        .then(({ data }) => {
          setTransactions(data.incomes);
        })
        .catch(err => toast.error(err.message))
        .finally(() => {
          setIsFetching(false);
        });
    }
  }, [mode, setIsLoading, setTransactions]);

  const deleteTransaction = async (id, amount) => {
    if (amount !== userData.balance && mode === MODES.incomeMode) {
      const response = await deleteTransactionQuery(id);

      if (response.status === 200) {
        transactions.map(el =>
          dispatch(
            authOperations.updateUserBalance(userData.balance - el.amount)
          )
        );
        setTransactions(transactions.filter(el => el._id !== id));
        getIncomeTransactionsQuery()
          .then(({ data }) => {
            setSummary(data.monthsStats);
          })
          .catch(err => toast.error(err.message));
      }
      return;
    } else if (amount === userData.balance && mode === MODES.incomeMode) {
      return toast.error('You can not delete the last Income transaction');
    }

    if (mode === MODES.expenseMode) {
      const response = await deleteTransactionQuery(id);

      if (response.status === 200) {
        transactions.map(el =>
          dispatch(
            authOperations.updateUserBalance(userData.balance + el.amount)
          )
        );
        setTransactions(transactions.filter(el => el._id !== id));
        getExpenseTransactionsQuery()
          .then(({ data }) => {
            setSummary(data.monthsStats);
          })
          .catch(err => toast.error(err.message));
      }
      return;
    }
  };

  return (
    <div>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr className={s.tableRow}>
            <th className={s.tableTitle}>Date</th>
            <th className={s.tableTitle}>Description</th>
            <th className={s.tableTitle}>Category</th>
            <th className={s.tableTitle}>Sum</th>
            <th className={s.lastTD}></th>
          </tr>
        </thead>
        <tbody className={s.tableBody}>
          {isFetching || isLoading ? (
            <tr>
              <td className={s.loader}>
                <Loader />
              </td>
            </tr>
          ) : transactions.length > 0 ? (
            transactions.map(el => (
              <tr key={el._id} className={s.tableRow}>
                <td className={s.description}>
                  {moment(el.date).format('DD.MM.YYYY')}
                </td>
                <td className={s.description}>{el.description}</td>
                <td className={s.description}>{el.category}</td>
                {mode === MODES.expenseMode ? (
                  <td className={s.descriptionExpense}>-{el.amount} грн.</td>
                ) : (
                  <td className={s.descriptionIncome}>{el.amount} грн.</td>
                )}
                <td className={s.descriptionLast}>
                  <button
                    className={s.btnDelete}
                    onClick={() => deleteTransaction(el._id, el.amount)}
                  >
                    <svg className={s.calendarIcon} width={18} height={18}>
                      <use href={`${Sprite}#delete-icon`}></use>
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className={s.message}>
              <td>
                <p>You can add your transactions</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className={s.tableMobileWrap}>
        <table className={s.mobileTable}>
          <tbody className={s.tBody}>
            {isFetching || isLoading ? (
              <tr>
                <td className={s.loader}>
                  <Loader />
                </td>
              </tr>
            ) : transactions.length > 0 ? (
              transactions.map(el => (
                <tr key={el._id} className={s.tableRow}>
                  <td className={s.column}>
                    <span className={s.descriptionMobile}>
                      {el.description}
                    </span>
                    <span className={s.date}>{el.date}</span>
                  </td>
                  <td className={s.category}>{el.category}</td>
                  {mode === MODES.expenseMode ? (
                    <td className={s.descriptionExpense}>- {el.amount} грн.</td>
                  ) : (
                    <td className={s.descriptionIncome}>{el.amount} грн.</td>
                  )}
                  <td className={s.lastTD}>
                    <button
                      className={s.btnDelete}
                      onClick={() => deleteTransaction(el._id)}
                    >
                      <svg className={s.calendarIcon} width={18} height={18}>
                        <use href={`${Sprite}#delete-icon`}></use>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className={s.message}>
                <td>
                  <p>You can add your transactions</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired,
  setTransactions: PropTypes.func.isRequired,
  setSummary: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};
