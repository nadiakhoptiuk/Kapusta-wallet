import React from 'react';
import s from './TransactionsSummary.module.css';
import { getMonthStats } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const TransactionsSummary = () => {
  const monthsStats = useSelector(getMonthStats);
  // console.log('monthsStats', monthsStats);
  const renderSummary = () => {
    let markupArray = [];
    for (const key in monthsStats) {
      markupArray.push({ month: key, amount: monthsStats[key] });
    }
    return markupArray;
  };

  return (
    <div className={s.container}>
      <h4 className={s.title}>Summary</h4>
      <ul className={s.list}>
        {renderSummary().map(el =>
          el.amount !== 'N/A' ? (
            <li key={el.month} className={s.item}>
              <span>{el.month}</span>
              <span>{el.amount}</span>
            </li>
          ) : (
            ''
          )
        )}
      </ul>
    </div>
  );
};

export default TransactionsSummary;
