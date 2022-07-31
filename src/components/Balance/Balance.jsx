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
import addSpaceForAmount from 'utils/addSpaceForAmount';
import CurrencyInput from 'react-currency-input-field';

const { reports, transactions } = routes;

const balanceRow = s.Balance;
const balanceRowRevers = s.BalanceRevers;

export default function Balance() {
  const [balance, setBalance] = useState(0);
  const [counter, setCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [inputNumber, setInputNumber] = useState(null);
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
  const balanceFormated = addSpaceForAmount(Number(currentBalance));

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
    console.log(balance);
    setBalance(e.target.value);
    console.log(balance);
  };

  const handleSubmit = e => {
    const inputNumberFormated = Number.parseFloat(inputNumber);
    e.preventDefault();
    if (inputNumberFormated < 0) {
      toast.warn('Balance cannot be negative');
      return;
    }
    if (Number.isNaN(inputNumberFormated)) {
      toast.warn('Please enter balance');
      return;
    }
    toggleModal();
    dispatch(authOperations.updateUserBalance(inputNumberFormated));
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
              <svg width="24" height="24">
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
                    <svg width={6} height={12}>
                      <use href={`${sprite}#arrow-prev-icon`}></use>
                    </svg>
                  </button>
                  <p className={s.monthChangeTxt}>{nextMonth}</p>
                  <button
                    onClick={increment}
                    type="button"
                    className={s.monthChangeBtn}
                  >
                    <svg width={6} height={12}>
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
                    {isNewUser && !isUserOperations ? (
                      <CurrencyInput
                        className={s.input}
                        id="balance"
                        name="balance"
                        placeholder="00.00"
                        decimalsLimit={2}
                        decimalSeparator={'.'}
                        onValueChange={value => {
                          setInputNumber(value);
                        }}
                      />
                    ) : (
                      <input
                        className={s.input}
                        type="text"
                        required
                        name="balance"
                        value={balanceFormated}
                        onChange={handleChange}
                        readOnly
                      />
                    )}
                    <p className={s.currency}>UAH</p>
                    {!isReportPage && (
                      <button
                        type="submit"
                        className={
                          isNewUser && !isUserOperations
                            ? s.buttonForm
                            : s.buttonFormDisabled
                        }
                        disabled={!isNewUser && !isUserOperations}
                      >
                        Confirm
                      </button>
                    )}
                    {isNewUser && !isUserOperations && <BalanceModal />}
                  </div>
                </label>
              </form>
            ) : (
              <div className={s.balanceWraper}>
                <p className={s.balanceTxt}>Balance:</p>
                <p className={s.inputReports}>{balanceFormated} UAH</p>
              </div>
            )}
          </div>
        </div>
        <div className={!isReportPage ? s.transactionsWrap : undefined}>
          <Outlet />
        </div>
      </Container>
    </div>
  );
}
