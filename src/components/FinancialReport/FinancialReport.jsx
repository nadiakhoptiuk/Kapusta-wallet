import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { expensesCategory, incomeCategory } from 'utils/localization';
import { currentPeriodDataSelector } from 'redux/currentPeriod/period-selectors';
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
    const data =
      selectedOperation === expenses
        ? currentPeriodData.expenses.expensesData
        : currentPeriodData.incomes.incomesData;

    const arrayOfCategories =
      selectedOperation === expenses ? expensesCategory : incomeCategory;

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

      <ul className={s.categoryList}>
        {operationData ? (
          operationData?.map(
            ({ total, imgPath, backendName, category }, index) => {
              return (
                <li key={index} className={s.categoryItem}>
                  <span className={s.categoryAmount}>
                    {addSpaceForAmount(total)}
                  </span>

                  <div className={s.btnWrap}>
                    <button
                      type="button"
                      className={
                        backendName === selectedCategory
                          ? `${s.categoryBtnActive}`
                          : `${s.categoryBtn}`
                      }
                      onClick={() => changeCategory(backendName)}
                    >
                      <svg className={s.categoryIcon}>
                        <use href={`${Sprite}#${imgPath}`}></use>
                      </svg>
                    </button>
                    <div
                      className={
                        backendName === selectedCategory
                          ? `${s.rectangleActive}`
                          : `${s.rectangle}`
                      }
                    ></div>
                  </div>

                  <p className={s.category}>{transformedString(category)}</p>
                </li>
              );
            }
          )
        ) : (
          <p>You haven't added your ${selectedOperation} for February yet...</p>
        )}
      </ul>
    </section>
  );
}
