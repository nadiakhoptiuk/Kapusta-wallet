import NavBar from 'components/NavBar';
import Transactions from 'components/Transactions';
import s from './TransactionsView.module.css';

const TransactionsView = () => {
  return (
    <div className={s.container}>
      <NavBar />
      <Transactions />
    </div>
  );
};

export default TransactionsView;
