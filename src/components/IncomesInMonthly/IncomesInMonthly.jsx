import s from './IncomesInMonthly.module.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  currentPeriodDataSelector  
} from 'redux/currentPeriod/period-selectors';
import { useState } from 'react';
import addSpaceForAmount from 'utils/addSpaceForAmount';


function IncomesInMonthly() {
  const [incomes, setIncomes] = useState('')
  const [outcomes, setOutcomes] = useState('')
  const currentPeriodData = useSelector(currentPeriodDataSelector);
  useEffect(() => {
    if (Object.keys(currentPeriodData).length > 0) {
       const incomesData = addSpaceForAmount(currentPeriodData.incomes.incomeTotal)
      const outcomesData = addSpaceForAmount(currentPeriodData.expenses.expenseTotal)
      setIncomes(incomesData)
      setOutcomes(outcomesData)
    }
}, [currentPeriodData]
  )
    

    return (
         <div className={s.balance_container}>
      <div className={s.outcomes_div}>
        <p className={s.title}>Expenses:</p>
          <p className={s.outcomes}>{`- ${outcomes} грн.`}</p>
        </div>
        <div className={s.line}>
        </div>
      <div className={s.incomes_div}>
        <p className={s.title}>Income:</p>
          <p className={s.incomes}>{`+ ${incomes} грн.`}</p>
      </div>
    </div>
    )
}
export {IncomesInMonthly};