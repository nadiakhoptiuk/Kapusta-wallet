import s from './TransactionsSummary.module.css';

const TransactionsSummary = () => {
  return (
    <div className={s.container}>
      <h4 className={s.title}>Summary</h4>
      <ul className={s.list}>
        <li className={s.item}>
          <span>June</span>
          <span>10 000.0</span>
        </li>
        <li className={s.item}>
          <span>June</span>
          <span>10 000.0</span>
        </li>
        <li className={s.item}>
          <span>June</span>
          <span>10 000.0</span>
        </li>
        <li className={s.item}>
          <span>June</span>
          <span>10 000.0</span>
        </li>
        <li className={s.item}>
          <span>June</span>
          <span>10 000.0</span>
        </li>
      </ul>
    </div>
  );
};

export default TransactionsSummary;
