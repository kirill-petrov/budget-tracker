import React from 'react';

function TransactionList(props) {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <button
            type="button"
            className="delete-btn"
          >
            Delete
          </button>
        </li>
      </ul>
    </>
  );
}

export default TransactionList;
