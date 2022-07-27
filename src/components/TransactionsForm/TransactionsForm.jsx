import TransactionsTable from 'components/TransactionsTable';
import moment from 'moment';
import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import s from './TransactionsForm.module.css';

const TransactionsForm = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className={s.wrap}>
      <form className={s.wrap} onSubmit={e => e.preventDefault()}>
        <div className={s.wrapInput}>
          <input
            type="date"
            className={s.datePicker}
            value={moment(new Date()).format('YYYY-MM-DD')}
          />

          <input
            className={s.description}
            type="text"
            placeholder="Product description"
          />
          <select className={s.select} name="select">
            <option value="value1">Продукты</option>
            <option value="value2">Алкоголь</option>
            <option value="value3">Развлечения</option>
            <option value="value4">Здоровье</option>
            <option value="value5">Транспорт</option>
            <option value="value6">Всё для дома</option>
          </select>
          <input
            type="number"
            className={s.inputCount}
            placeholder="00.00 UAH"
          />
        </div>
        <div className={s.buttonWrap}>
          <button type="submit" className={s.btnInput}>
            input
          </button>
          <button type="button" className={s.btnClear}>
            clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionsForm;
