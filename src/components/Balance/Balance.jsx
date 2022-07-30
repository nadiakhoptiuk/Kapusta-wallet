import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import moment from 'moment';
import s from './Balance.module.css';
import sprite from '../../images/sprite.svg';
import BalanceModal from 'components/BalanceModal';
import routes from 'utils/routes';
import { getUserData } from 'redux/auth/auth-selectors';
import {
  getPeriodData,
  setCurrentPeriod,
} from 'redux/currentPeriod/period-operations';
import { authOperations } from 'redux/auth/auth-operations';
import Container from 'components/Container/Container';
import { useLocalStorage } from 'hooks/useLocalStorage';
// import ConfirmModal from 'components/ConfirmModal/ConfirmModal';

const { reports, transactions } = routes;

const balanceRow = s.Balance;
const balanceRowRevers = s.BalanceRevers;

export default function Balance() {
  const [balance, setBalance] = useState('');
  const [counter, setCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const isReportPage = !location.pathname.endsWith('transactions')
    ? true
    : false;
  const classBalance = isReportPage ? balanceRowRevers : balanceRow;
  const nextMonth = moment().add(counter, 'M').format('MMMM YYYY');
  const nextMonthForFetch = moment().add(counter, 'M').format('YYYY-MM');
  const currentBalance = useSelector(getUserData).balance;
  const [isNewUser, setIsNewUser] = useLocalStorage('isNewUser', true);
  const isUserOperations = useSelector(getUserData).transactions.length;

  useEffect(() => {});

  useEffect(() => {
    if (isReportPage) {
      dispatch(getPeriodData(nextMonthForFetch));
      dispatch(setCurrentPeriod(nextMonth));
    }
  }, [isReportPage, nextMonthForFetch, dispatch, nextMonth]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const handleChange = e => {
    setBalance(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (balance < 0) {
      toast.error('Balance cannot be negative');
      return;
    }
    toggleModal();
    dispatch(authOperations.updateUserBalance(Number(balance)));
    setDisabledButton(true);
    setIsNewUser(false);
  };

  const toggleModal = () => {
    return setShowModal(!showModal);
  };

  const handleClick = () => {
    toast.warning('You have not made transactions yet');
  };

  return (
    <div>
      <Container>
        <div className={`${classBalance} ${s.container}`}>
          {isReportPage && (
            <Link to={transactions} className={s.linkToHome}>
              <svg width="18" height="12">
                <use href={`${sprite}#arrow-to-main-icon`}></use>
              </svg>
              <p className={s.linkToHomeText}>Main page</p>
            </Link>
          )}

          <div className={s.wraper}>
            {isReportPage ? (
              <div className={s.currentPeriod}>
                <p className={s.currentPeriodText}>Current period:</p>
                <div className={s.monthChange}>
                  <button
                    onClick={decrement}
                    type="button"
                    className={s.monthChangeBtn}
                  >
                    <svg width={10} height={16}>
                      <use href={`${sprite}#arrow-prev-icon`}></use>
                    </svg>
                  </button>
                  <p className={s.monthChangeTxt}>{nextMonth}</p>
                  <button
                    onClick={increment}
                    type="button"
                    className={s.monthChangeBtn}
                  >
                    <svg width={10} height={16}>
                      <use href={`${sprite}#arrow-next-icon`}></use>
                    </svg>
                  </button>
                </div>
              </div>
            ) : isUserOperations ? (
              <Link to={reports} className={s.linkReports}>
                Reports
                <svg width="14" height="14" className={s.reportsIcon}>
                  <use href={`${sprite}#report-icon`}></use>
                </svg>
              </Link>
            ) : (
              <button
                type="button"
                className={s.linkReportsBtn}
                onClick={handleClick}
              >
                Reports
                <svg width="14" height="14" className={s.reportsIcon}>
                  <use href={`${sprite}#report-icon`}></use>
                </svg>
              </button>
            )}

            {!isReportPage ? (
              <form className={s.form} onSubmit={handleSubmit}>
                <label className={s.label}>
                  <span className={s.labelText}>Balance:</span>

                  <div className={s.modalWraper}>
                    <input
                      className={s.input}
                      type="number"
                      required
                      name="balance"
                      value={isNewUser ? balance : currentBalance}
                      onChange={handleChange}
                      readOnly={!isNewUser}
                    />
                    <p className={s.currency}>UAH</p>
                    {!isReportPage && (
                      <button
                        type="submit"
                        className={
                          isNewUser ? s.buttonForm : s.buttonFormDisabled
                        }
                        disabled={!isNewUser}
                      >
                        Confirm
                      </button>
                    )}
                    {/* <ConfirmModal /> */}
                    {isNewUser && <BalanceModal />}
                  </div>
                </label>
              </form>
            ) : (
              <div className={s.balanceWraper}>
                <p className={s.balanceTxt}>Balance:</p>
                <p className={s.inputReports}>{currentBalance} UAH</p>
              </div>
            )}
          </div>
        </div>
        
          <Outlet />
        
      </Container>
    </div>
  );
}
