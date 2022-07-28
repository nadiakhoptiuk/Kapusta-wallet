import s from './IncomesInMonthly.module.css'

const IncomesInMonthly = () => {
// const incomes = 
//   const outcomes = 
    
    return (
         <div className={s.balance_container}>
      <div className={s.outcomes_div}>
        <p className={s.title}>Expenses:</p>
          <p className={s.outcomes}>{`- 1000 грн.`}</p>
        {/* ${outcomes?.toFixed(2) || 0} грн.`}</p> */}
        </div>
        <div className={s.line}>
        </div>
      <div className={s.incomes_div}>
        <p className={s.title}>Income:</p>
          <p className={s.incomes}>{`+ 1000грн.`}</p>
        {/* ${incomes?.toFixed(2) || 0} грн.`}</p> */}
      </div>
    </div>
    )
}
export {IncomesInMonthly};