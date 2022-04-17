/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { transactionAdd } from '../redux/reducers/transactionsReducer';
import generateId from '../utils/generateId';

function AddTransaction() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransactionAdd = (e) => {
    e.preventDefault();
    if (text && amount && amount !== 0) {
      dispatch(
        transactionAdd({
          id: generateId(),
          text: text.trim(),
          amount: Number(amount),
        })
      );
    }
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleTransactionAdd}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            name="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            name="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button
          type="submit"
          className="btn"
        >
          Add transaction
        </button>
      </form>
    </>
  );
}

export default AddTransaction;
