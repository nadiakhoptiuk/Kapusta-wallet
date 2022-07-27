import Sprite from '../../images/sprite.svg';
import { useState } from 'react';
import s from './FinancialReport.module.css';
import { expensesCategory, incomeCategory } from 'utils/localization';

export default function FinancialReport() {
  const [selectedCategory, setSelectedCategory] = useState(
    expensesCategory[0].category
  );
  const [selectedOperation, setSelectedOperation] = useState('expenses');
  console.log(selectedCategory);

  function transformedString(string) {
    if (!string.includes(' ')) {
      return string;
    }

    return string.split(' ').map((str, index) => {
      return <span key={index}>{str}</span>;
    });
  }

  function addSpaceForAmount(amount) {
    const floatNum = amount.toFixed(2);
    const parts = floatNum.toString().split('.');

    const integerReverse = parts[0].split('').reverse();

    const newString = integerReverse
      .map((char, index) => {
        if ((index + 1) % 3 === 0) {
          return ` ${char}`;
        }
        return char;
      })
      .reverse()
      .join('');

    return `${newString}.${parts[1]}`;
  }

  function handleCategoryClick(newCategoryName) {
    setSelectedCategory(newCategoryName);
  }

  return (
    <section className={s.reportSection}>
      <div className={s.controls}>
        <button type="button" className={s.typeReportControlBtn}>
          <svg className={s.arrowIcon}>
            <use href={`${Sprite}#arrow-prev-icon`}></use>
          </svg>
        </button>
        <h2 className={s.reportTypeTitle}>Expenses</h2>
        <button type="button" className={s.typeReportControlBtn}>
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
                  onClick={() => handleCategoryClick(category)}
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
