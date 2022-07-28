import { useEffect, useState } from 'react';
import TransactionsForm from 'components/TransactionsForm';
import TransactionsModal from 'components/TransactionsModal';
import TransactionsSummary from 'components/TransactionsSummary';
import TransactionsTable from 'components/TransactionsTable';
import Sprite from '../../images/sprite.svg';
import s from './Transactions.module.css';
import {
  getExpenseTransactionsQuery,
  getIncomeTransactionsQuery,
} from 'service/kapustaAPI';

const Transactions = ({ mode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [transactionsUpdate, setTransactionsUpdate] = useState([]);
  const [monthsStats, setMonthsStats] = useState({});

  useEffect(() => {
    if (mode === 'expenseMode') {
      getExpenseTransactionsQuery().then(({ data }) => {
        setMonthsStats(data.monthsStats);
      });
    }
    if (mode === 'incomeMode') {
      getIncomeTransactionsQuery().then(({ data }) => {
        setMonthsStats(data.monthsStats);
      });
    }
  }, [mode, transactionsUpdate]);

  const onSubmit = transactionsList => {
    setTransactionsUpdate([transactionsList, ...transactionsUpdate]);
  };

  const onButtonModalClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={s.relativeContainer}>
      <div className={s.container}>
        <div className={s.formWrap}>
          <TransactionsForm
            mode={mode}
            onSubmit={onSubmit}
            setSummary={setMonthsStats}
          />
        </div>
        <div className={s.transactionsContainer}>
          <div className={s.formTableWrap}>
            <TransactionsTable
              mode={mode}
              transactions={transactionsUpdate}
              setTransactions={setTransactionsUpdate}
              setSummary={setMonthsStats}
            />
          </div>
        </div>

        {!modalOpen && (
          <button
            type="button"
            onClick={onButtonModalClick}
            className={s.buttonModal}
          >
            +
          </button>
        )}
      </div>
      {modalOpen && (
        <TransactionsModal onClose={onButtonModalClick}>
          <button
            type="button"
            onClick={onButtonModalClick}
            className={s.buttonClose}
          >
            <svg width={24} height={24}>
              <use href={`${Sprite}#arrow-to-main-icon`}></use>
            </svg>
          </button>
          <TransactionsForm onSubmit={onSubmit} mode={mode} />
        </TransactionsModal>
      )}
      <div className={s.summaryWrap}>
        <TransactionsSummary monthsStats={monthsStats} />
      </div>
    </div>
  );
};

export default Transactions;
