import React from 'react';
import { useSelector } from 'react-redux';
import Transaction from './Transaction';

function TransactionList() {
  const transactions = useSelector((state) => state.transactions);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length
          ? transactions.map((transaction) => (
              <Transaction
                key={transaction.id}
                transaction={transaction}
              />
            ))
          : null}
      </ul>
    </>
  );
}

export default TransactionList;
