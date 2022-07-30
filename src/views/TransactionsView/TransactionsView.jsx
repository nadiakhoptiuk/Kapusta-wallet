import { useState } from 'react';
import { MODES } from 'utils/transactionConstants';
import NavBar from 'components/NavBar';
import Transactions from 'components/Transactions';
import s from './TransactionsView.module.css';

const TransactionsView = () => {
  const [mode, setMode] = useState(MODES.expenseMode);

  return (
    <>
      <div className={s.fon}></div>
      <div className={s.img}></div>
        <NavBar setMode={setMode} mode={mode} />
        <Transactions mode={mode} />
    </>
  );
};

export default TransactionsView;
