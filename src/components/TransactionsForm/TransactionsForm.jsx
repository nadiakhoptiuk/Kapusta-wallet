import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import moment from 'moment';
import { toast } from 'react-toastify';

import {
  getExpenseCategoriesQuery,
  getIncomeCategoriesQuery,
} from 'service/kapustaAPI';
import { MODES } from 'utils/transactionConstants';
import Sprite from '../../images/sprite.svg';
import { customStyles } from './TransactionFormSelect.styled';
import s from './TransactionsForm.module.css';
import { authOperations } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const TransactionsForm = ({ mode, setIsLoading, closeModal = () => 7 }) => {
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setDate(moment(new Date()).format('YYYY-MM-DD'));
    setDescription('');
    setCategory('');
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
        setAmount(Number(value));
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (description.trim().length === 0) {
      toast.warning('Please fill in all fields');
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
      if (
        !transactionsList.category ||
        !transactionsList.description ||
        !transactionsList.amount
      ) {
        return toast.error('Please fill in all fields');
      }
      dispatch(authOperations.sendExpenseTransaction(transactionsList));
    }

    if (mode === MODES.incomeMode) {
      if (
        !transactionsList.category ||
        !transactionsList.description ||
        !transactionsList.amount
      ) {
        return toast.error('Please fill in all fields');
      }
      dispatch(authOperations.sendIncomeTransaction(transactionsList));
    }

    setDate(moment(new Date()).format('YYYY-MM-DD'));
    setDescription('');
    setCategory('');
    setAmount('');
  };

  const onHandleResetForm = () => {
    setDate(moment(new Date()).format('YYYY-MM-DD'));
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form className={s.wrap} onSubmit={handleSubmit}>
      <div className={s.wrapInput}>
        <div className={s.dateWrapper}>
          <input
            aria-label="Date"
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
          aria-label="Text"
          onChange={handleChange}
          className={s.description}
          name="description"
          type="text"
          placeholder="Product description"
          value={description}
        />

        <Select
          aria-label="Select"
          placeholder={<div>Product category</div>}
          width="200px"
          styles={customStyles}
          value={category}
          onChange={setCategory}
          options={selectOptions()}
        />

        <div className={s.inputCountWrapper}>
          <input
            aria-label="Number"
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
        <button aria-label="Input" type="submit" className={s.btnInput}>
          input
        </button>
        <button
          aria-label="Clear"
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
