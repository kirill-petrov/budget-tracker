import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { transactionDelete } from '../redux/reducers/transactionsReducer';

function Transaction({ transaction }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(transactionDelete(id));
  };

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>{transaction.amount}</span>
      <button
        type="button"
        className="delete-btn"
        onClick={() => handleDelete(transaction.id)}
      >
        Delete
      </button>
    </li>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    amount: PropTypes.number,
  }),
};

export default Transaction;
