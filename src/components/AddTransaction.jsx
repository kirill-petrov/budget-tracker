/* eslint-disable no-console */
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import generateId from '../utils/generateId';

function AddTransaction() {
  // const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleTransactionAdd = (e) => {
    e.preventDefault();
    console.log(generateId());
    console.log(e.target.text.value.trim());
    console.log(e.target.amount.value.trim());
    // console.log(e.target);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleTransactionAdd}>
        <div className="form-control">
          <label htmlFor="text">
            Text
            <input
              name="text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
            />
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
            <input
              name="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </label>
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
