import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import s from './Balance.module.css';
import sprite from '../../images/sprite.svg';
import BalanceModal from 'components/BalanceModal';
import routes from 'utils/routes';
import moment from 'moment';
// import { updateUserBalanceQuery } from 'service/kapustaAPI';
import { getUserData } from 'redux/auth/auth-selectors';
import { getPeriodData } from 'redux/currentPeriod/period-operations';
import { authOperations } from '../../redux/auth/auth-operations';
import Container from 'components/Container/Container';
import { toast } from 'react-toastify';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { setCurrentPeriod } from 'redux/currentPeriod/period-operations';

const { reports, transactions } = routes;

const balanceRow = s.Balance;
const balanceRowRevers = s.BalanceRevers;

export default function Balance() {
  const [balance, setBalance] = useState(0);
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
  const isNewUser = useLocalStorage('isNewUser', null);
  console.log(isNewUser[0]);

  // Fetch
  useEffect(() => {
    dispatch(getPeriodData(nextMonthForFetch));
    dispatch(setCurrentPeriod(nextMonth));
  }, [nextMonthForFetch, dispatch, nextMonth]);
  // Fetch

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
    dispatch(authOperations.updateUserBalance(balance));
    setDisabledButton(true);
  };

  const toggleModal = () => {
    return setShowModal(!showModal);
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
                    <svg width={4} height={10}>
                      <use href={`${sprite}#arrow-prev-icon`}></use>
                    </svg>
                  </button>
                  <p className={s.monthChangeTxt}>{nextMonth}</p>
                  <button
                    onClick={increment}
                    type="button"
                    className={s.monthChangeBtn}
                  >
                    <svg width={4} height={10}>
                      <use href={`${sprite}#arrow-next-icon`}></use>
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <Link to={reports} className={s.linkReports}>
                Reports
                <svg width="14" height="14" className={s.reportsIcon}>
                  <use href={`${sprite}#report-icon`}></use>
                </svg>
              </Link>
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
                      value={balance}
                      onChange={handleChange}
                    />
                    {showModal && <BalanceModal />}
                  </div>
                  {!isReportPage && (
                    <button
                      type="submit"
                      className={s.buttonForm}
                      disabled={disabledButton}
                    >
                      Confirm
                    </button>
                  )}
                </label>
              </form>
            ) : (
              <div className={s.balanceWraper}>
                <p className={s.balanceTxt}>Balance:</p>
                <p className={s.inputReports}>{currentBalance} UAH</p>
              </div>
            )}
          </div>
          {/* {showModal && <BalanceModal />} */}
        </div>
        <div>
          <Outlet />
        </div>
      </Container>
    </div>
  );
}
