import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { expensesCategory, incomeCategory } from 'utils/localization';
import {
  currentPeriodDataSelector,
  currentPeriodSelector,
} from 'redux/currentPeriod/period-selectors';
import addSpaceForAmount from 'utils/addSpaceForAmount';
import transactionTypes from 'utils/transactionTypes';
import Sprite from '../../images/sprite.svg';
import s from './FinancialReport.module.css';

export default function FinancialReport({
  selectedCategory,
  setSelectedCategory,
  selectedOperation,
  setSelectedOperation,
}) {
  const { expenses, incomes } = transactionTypes;
  const [operationData, setOperationData] = useState([]);

  const currentPeriodData = useSelector(currentPeriodDataSelector);
  const currentPeriod = useSelector(currentPeriodSelector);

  function transformedString(string) {
    if (!string.includes(' ')) {
      return string;
    }

    return string.split(' ').map((str, index) => {
      return <span key={index}>{str}</span>;
    });
  }

  function changeCategory(newCategoryName) {
    setSelectedCategory(newCategoryName);
  }

  function changeOperationType() {
    selectedOperation === expenses
      ? setSelectedOperation(incomes)
      : setSelectedOperation(expenses);
  }

  useEffect(() => {
    if (Object.keys(currentPeriodData).length > 0) {
      const data =
        selectedOperation === expenses
          ? currentPeriodData?.expenses?.expensesData
          : currentPeriodData?.incomes?.incomesData;

      const arrayOfCategories =
        selectedOperation === expenses ? expensesCategory : incomeCategory;

      const arrayForHandle = Object.entries(data);

      if (arrayForHandle.length === 0) {
        setOperationData(null);
        setSelectedCategory(null);
      } else {
        const dataForOperation = Object.entries(data).map(el => {
          const obj = arrayOfCategories?.find(
            ({ backendName }) => el[0] === backendName
          );

          return {
            total: el[1].total,
            category: obj.category,
            imgPath: obj.imgPath,
            backendName: obj.backendName,
          };
        });

        setOperationData(dataForOperation);
        setSelectedCategory(dataForOperation[0]?.backendName);
      }
    }
  }, [expenses, selectedOperation, currentPeriodData, setSelectedCategory]);

  return (
    <section className={s.reportSection}>
      <div className={s.controls}>
        <button
          type="button"
          className={s.typeReportControlBtn}
          onClick={changeOperationType}
        >
          <svg className={s.arrowIcon}>
            <use href={`${Sprite}#arrow-prev-icon`}></use>
          </svg>
        </button>
        <h2 className={s.reportTypeTitle}>{selectedOperation}</h2>
        <button
          type="button"
          className={s.typeReportControlBtn}
          onClick={changeOperationType}
        >
          <svg className={s.arrowIcon}>
            <use href={`${Sprite}#arrow-next-icon`}></use>
          </svg>
        </button>
      </div>

      {operationData?.length > 0 ? (
        <ul className={s.categoryList}>
          {operationData?.map(
            ({ total, imgPath, backendName, category }, index) => {
              return (
                <li key={index} className={s.categoryItem}>
                  <span className={s.categoryAmount}>
                    {addSpaceForAmount(total)}
                  </span>

                  <CSSTransition classNames={{ ...s }}>
                    <div className={s.btnWrap}>
                      <button
                        type="button"
                        className={
                          backendName === selectedCategory
                            ? `${s.categoryBtnEnterActive}`
                            : `${s.categoryBtnExitActive}`
                        }
                        onClick={() => changeCategory(backendName)}
                        aria-label={`category ${category} button`}
                      >
                        <svg className={s.categoryIcon}>
                          <use href={`${Sprite}#${imgPath}`}></use>
                        </svg>
                      </button>

                      <div
                        className={
                          backendName === selectedCategory
                            ? `${s.rectangleEnterActive}`
                            : `${s.rectangleExitActive}`
                        }
                      ></div>
                    </div>
                  </CSSTransition>

                  <p className={s.category}>{transformedString(category)}</p>
                </li>
              );
            }
          )}
        </ul>
      ) : (
        <p className={s.reportNotify}>
          Sorry, you don't have any {selectedOperation} for {currentPeriod} so I
          can't build your report...
        </p>
      )}
    </section>
  );
}

FinancialReport.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
  selectedOperation: PropTypes.string,
  setSelectedOperation: PropTypes.func,
};
