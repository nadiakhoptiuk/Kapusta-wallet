import NavBar from 'components/NavBar';
import Transactions from 'components/Transactions';
import { useState } from 'react';
import { MODES } from 'utils/transactionConstants';
import s from './TransactionsView.module.css';

const TransactionsView = () => {
  const [mode, setMode] = useState(MODES.expenseMode);

  return (
    <div className={s.container}>
      <NavBar setMode={setMode} />
      <Transactions mode={mode} />
    </div>
  );
};

export default TransactionsView;
