import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import TransactionsForm from 'components/TransactionsForm';
import TransactionsModal from 'components/TransactionsModal';
import TransactionsSummary from 'components/TransactionsSummary';
import TransactionsTable from 'components/TransactionsTable';

import { MODES } from 'utils/transactionConstants';
import { getUserData } from 'redux/auth/auth-selectors';
import { authOperations } from 'redux/auth/auth-operations';
import Sprite from '../../images/sprite.svg';
import s from './Transactions.module.css';

const Transactions = ({ mode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const userData = useSelector(getUserData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (mode === MODES.expenseMode) {
      dispatch(authOperations.getExpenseTransactions());
    }
    if (mode === MODES.incomeMode) {
      dispatch(authOperations.getIncomeTransactions());
    }
  }, [dispatch, mode]);

  const onButtonModalClick = () => {
    setIsLoading(false);
    setModalOpen(!modalOpen);
  };

  return (
    <div className={s.relativeContainer}>
      <div className={s.container}>
        <div className={s.formWrap}>
          <TransactionsForm
            mode={mode}
            setIsLoading={setIsLoading}
            modalOpen={modalOpen}
            userData={userData}
          />
        </div>
        <div className={s.transactionsContainer}>
          <div className={s.formTableWrap}>
            <TransactionsTable
              mode={mode}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              userData={userData}
            />
          </div>
        </div>

        {!modalOpen && (
          <button
            aria-label="Open modal"
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
            aria-label="Close"
            type="button"
            onClick={onButtonModalClick}
            className={s.buttonClose}
          >
            <svg width={24} height={24}>
              <use href={`${Sprite}#arrow-to-main-icon`}></use>
            </svg>
          </button>
          <TransactionsForm
            modalOpen={modalOpen}
            userData={userData}
            mode={mode}
            closeModal={onButtonModalClick}
            setIsLoading={setIsLoading}
          />
        </TransactionsModal>
      )}
      <div className={s.summaryWrap}>
        <TransactionsSummary />
      </div>
    </div>
  );
};

export default Transactions;
