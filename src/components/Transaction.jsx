import React from 'react';
import PropTypes from 'prop-types';

function Transaction({ transaction }) {
  // const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>{transaction.amount}</span>
      <button
        type="button"
        className="delete-btn"
      >
        Delete
      </button>
    </li>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    text: PropTypes.string,
    amount: PropTypes.number,
  }),
};

export default Transaction;
