import React from 'react';
import moment from 'moment';
import { MODES } from 'utils/transactionConstants';
import Loader from 'components/Loader';
import Sprite from '../../images/sprite.svg';
import s from './TransactionsTable.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import {
  getExpenseTransactions,
  getIncomeTransactions,
  isDeleting,
} from 'redux/auth/auth-selectors';

const TransactionsTable = ({ mode }) => {
  const isDeletingTransaction = useSelector(isDeleting);

  const dispatch = useDispatch();

  const incomeTransactions = useSelector(getIncomeTransactions);
  const expenseTransactions = useSelector(getExpenseTransactions);
  const currentTransactions =
    mode === MODES.expenseMode ? expenseTransactions : incomeTransactions;
  console.log('currentTransactions', currentTransactions);

  const deleteTransaction = async id => {
    dispatch(authOperations.deleteTransaction(id));
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
          {isDeletingTransaction ? (
            <tr>
              <td className={s.loader}>
                <Loader />
              </td>
            </tr>
          ) : currentTransactions?.length > 0 ? (
            currentTransactions.map(el => (
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

      <div className={s.tableMobileWrap}>
        <table className={s.mobileTable}>
          <tbody className={s.tBody}>
            {isDeletingTransaction ? (
              <tr>
                <td className={s.loader}>
                  <Loader />
                </td>
              </tr>
            ) : currentTransactions?.length > 0 ? (
              currentTransactions.map(el => (
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
