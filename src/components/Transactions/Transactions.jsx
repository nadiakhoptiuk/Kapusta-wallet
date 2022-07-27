import TransactionsForm from 'components/TransactionsForm';
import TransactionsModal from 'components/TransactionsModal/TransactionsModal';
import TransactionsSummary from 'components/TransactionsSummary';
import TransactionsTable from 'components/TransactionsTable';
import { useState } from 'react';
import s from './Transactions.module.css';

const Transactions = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onButtonModalClick = () => {
    setModalOpen(!modalOpen);
    console.log('"first"', 'first');
  };

  console.log('modalOpen', modalOpen);

  return (
    <div className={s.relativeContainer}>
      <div className={s.container}>
        <div className={s.formWrap}>
          <TransactionsForm />
        </div>
        <div className={s.transactionsContainer}>
          <div className={s.formTableWrap}>
            <TransactionsTable />
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
            BACK
          </button>
          <TransactionsForm />
        </TransactionsModal>
      )}
      <div className={s.summaryWrap}>
        <TransactionsSummary />
      </div>
    </div>
  );
};

export default Transactions;
