import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sprite from '../../images/sprite.svg';
import StyledSelect from './TransactionFormSelect.styled';
import s from './TransactionsForm.module.css';
import {
  getExpenseCategoriesQuery,
  getExpenseTransactionsQuery,
  getIncomeCategoriesQuery,
  getIncomeTransactionsQuery,
  sendExpenseTransactionQuery,
  sendIncomeTransactionQuery,
} from 'service/kapustaAPI';
import { MODES } from 'utils/transactionConstants';
// import Select from 'react-select';
// import { customStyles } from './TransactionFormSelect.styled';

const TransactionsForm = ({
  onSubmit,
  setSummary,
  mode,
  setIsLoading,
  closeModal = () => 7,
}) => {
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(null);
  const [amount, setAmount] = useState('');
  const [categories, setCategories] = useState('');

  useEffect(() => {
    setDate(moment(new Date()).format('YYYY-MM-DD'));
    setDescription('');
    setCategory(null);
    setAmount('');
    if (mode === MODES.expenseMode) {
      getExpenseCategoriesQuery()
        .then(({ data }) => setCategories(data))
        .catch(err => toast.error(err.message));
    }
    if (mode === MODES.incomeMode) {
      getIncomeCategoriesQuery()
        .then(({ data }) => setCategories(data))
        .catch(err => toast.error(err.message));
    }
  }, [mode]);

  const arrKeys = ['value', 'label'];

  const arr = [];
  function selectOptions() {
    for (let i = 0; i < categories.length; i++) {
      let customObject = {
        [arrKeys[0]]: categories[i],
        [arrKeys[1]]: categories[i],
      };

      arr.push(customObject);
    }
    return arr;
  }

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'amount':
        setAmount(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    if (description.trim().length === 0) {
      toast.warning('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    const transactionsList = {
      description: description,
      date: date,
      category: category.value,
      amount: amount,
    };

    closeModal();

    if (mode === MODES.expenseMode) {
      sendExpenseTransactionQuery(transactionsList)
        .then(({ data }) => {
          onSubmit(data.transaction);
        })
        .catch(err => toast.error(err.message));

      getExpenseTransactionsQuery()
        .then(({ data }) => {
          setSummary(data.monthsStats);
        })
        .catch(err => toast.error(err.message));
    }

    if (mode === MODES.incomeMode) {
      sendIncomeTransactionQuery(transactionsList)
        .then(({ data }) => {
          onSubmit(data.transaction);
        })
        .catch(err => toast.error(err.message));

      getIncomeTransactionsQuery()
        .then(({ data }) => {
          setSummary(data.monthsStats);
        })
        .catch(err => toast.error(err.message));
    }

    setDate(moment(new Date()).format('YYYY-MM-DD'));
    setDescription('');
    setCategory(null);
    setAmount('');
  };

  const onHandleResetForm = () => {
    setDate(moment(new Date()).format('YYYY-MM-DD'));
    setDescription('');
    setCategory(null);
    setAmount('');
  };

  return (
    <form className={s.wrap} onSubmit={handleSubmit}>
      <div className={s.wrapInput}>
        <div className={s.dateWrapper}>
          <input
            required
            name="date"
            onChange={handleChange}
            type="date"
            className={s.datePicker}
            value={date}
          />
          <svg className={s.calendarIcon} width={20} height={17}>
            <use href={`${Sprite}#calendar-icon`}></use>
          </svg>
        </div>

        <input
          required
          onChange={handleChange}
          className={s.description}
          name="description"
          type="text"
          placeholder="Product description"
          value={description}
        />
        {/* <Select
          required
          placeholder={<div>Product category</div>}
          width="200px"
          styles={customStyles}
          value={category}
          onChange={setCategory}
          options={selectOptions()}
        /> */}
        <StyledSelect
          required
          placeholder={<div>Product category</div>}
          value={category}
          onChange={setCategory}
          options={selectOptions()}
        />
        <div className={s.inputCountWrapper}>
          <input
            required
            onChange={handleChange}
            type="number"
            name="amount"
            className={s.inputCount}
            placeholder="00.00"
            value={amount}
          />
          <svg className={s.calculatorIcon} width={18} height={20}>
            <use href={`${Sprite}#calculator-icon`}></use>
          </svg>
        </div>
      </div>
      <div className={s.buttonWrap}>
        <button type="submit" className={s.btnInput}>
          input
        </button>
        <button
          type="button"
          className={s.btnClear}
          onClick={onHandleResetForm}
        >
          clear
        </button>
      </div>
    </form>
  );
};

export default TransactionsForm;
