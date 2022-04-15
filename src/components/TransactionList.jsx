import React from 'react';
import { useSelector } from 'react-redux';

function TransactionList() {
  const transactions = useSelector((state) => state.transactions);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length
          ? transactions.map((item) => (
              <li
                key={item.id}
                className="minus"
              >
                {item.text} <span>{item.amount}</span>
                <button
                  type="button"
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            ))
          : null}
      </ul>
    </>
  );
}

export default TransactionList;
