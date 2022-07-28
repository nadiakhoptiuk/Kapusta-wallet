import { useState } from 'react';
import { expensesCategory } from 'utils/localization';
import addSpaceForAmount from 'utils/addSpaceForAmount';
// import {
//   getExpenseCategoriesQuery,
//   getIncomeCategoriesQuery,
// } from 'service/kapustaAPI';
import transactionTypes from 'utils/transactionTypes';
import Sprite from '../../images/sprite.svg';
import s from './FinancialReport.module.css';

export default function FinancialReport() {
  const { expenses, incomes } = transactionTypes;
  const [selectedCategory, setSelectedCategory] = useState(
    expensesCategory[0].category
  );
  const [selectedOperation, setSelectedOperation] = useState(expenses);

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

  // useEffect(() => {
  //   const data =
  //     selectedOperation === expenses
  //       ? getExpenseCategoriesQuery()
  //       : getIncomeCategoriesQuery();
  //   return data;
  // }, [expenses, selectedOperation]);

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
        {expensesCategory.map(({ total, imgPath, category }, index) => {
          return total === 0 ? null : (
            <li key={index} className={s.categoryItem}>
              <span className={s.categoryAmount}>
                {addSpaceForAmount(total)}
              </span>

              <div className={s.btnWrap}>
                <button
                  type="button"
                  className={
                    category === selectedCategory
                      ? `${s.categoryBtnActive}`
                      : `${s.categoryBtn}`
                  }
                  onClick={() => changeCategory(category)}
                >
                  <svg className={s.categoryIcon}>
                    <use href={`${Sprite}#${imgPath}`}></use>
                  </svg>
                </button>
                <div
                  className={
                    category === selectedCategory
                      ? `${s.rectangleActive}`
                      : `${s.rectangle}`
                  }
                ></div>
              </div>

              <p className={s.category}>{transformedString(category)}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
