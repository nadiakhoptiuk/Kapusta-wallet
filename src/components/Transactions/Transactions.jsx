import { useEffect, useState } from 'react';
// import Media from 'react-media';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { MODES } from 'utils/transactionConstants';

const Transactions = ({ mode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [transactionsUpdate, setTransactionsUpdate] = useState([]);
  const [monthsStats, setMonthsStats] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (mode === MODES.expenseMode) {
      getExpenseTransactionsQuery()
        .then(({ data }) => {
          setMonthsStats(data.monthsStats);
        })
        .catch(err => toast.error(err.message))
        .finally(setIsLoading(false));
    }
    if (mode === MODES.incomeMode) {
      getIncomeTransactionsQuery()
        .then(({ data }) => {
          setMonthsStats(data.monthsStats);
        })
        .catch(err => toast.error(err.message))
        .finally(setIsLoading(false));
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
            setIsLoading={setIsLoading}
            modalOpen={modalOpen}
          />
        </div>
        <div className={s.transactionsContainer}>
          <div className={s.formTableWrap}>
            <TransactionsTable
              mode={mode}
              transactions={transactionsUpdate}
              setTransactions={setTransactionsUpdate}
              setSummary={setMonthsStats}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
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
          <TransactionsForm
            setSummary={setMonthsStats}
            onSubmit={onSubmit}
            mode={mode}
            closeModal={onButtonModalClick}
            setIsLoading={setIsLoading}
          />
        </TransactionsModal>
      )}

      {/* <Media
        queries={{
          medium: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.medium && ( */}
      <div className={s.summaryWrap}>
        <TransactionsSummary monthsStats={monthsStats} />
      </div>
      {/* )}
          </>
        )}
      </Media> */}
    </div>
  );
};

export default Transactions;
