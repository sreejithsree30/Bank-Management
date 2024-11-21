import React, { useState } from 'react';
import axios from 'axios';
import './CreateTransaction.css';

const CreateTransaction = () => {
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted'); // Debug log

    try {
      const response = await axios.post('http://localhost:3000/api/transactions', {
        amount,
        transaction_type: transactionType,
        user: userId
      });
      console.log('Response:', response.data); // Debug log
    } catch (error) {
      console.error('Error:', error); // Debug log
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-transaction">
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
          placeholder="Transaction Type"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Create Transaction</button>
    </form>
  );
};

export default CreateTransaction;
