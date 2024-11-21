import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TransactionHistory.css';

const TransactionHistory = ({ userId }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/transactions?user_id=${userId}`);
        setTransactions(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTransactions();
  }, [userId]);

  return (
    <div className="transaction-history">
      {transactions.map((transaction) => (
        <div key={transaction._id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Transaction ID: {transaction._id}</h5>
            <p className="card-text">Amount: {transaction.amount}</p>
            <p className="card-text">Type: {transaction.transaction_type}</p>
            <p className="card-text">Status: {transaction.status}</p>
            <p className="card-text">Timestamp: {new Date(transaction.timestamp).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
