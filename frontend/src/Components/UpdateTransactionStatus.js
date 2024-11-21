import React, { useState } from 'react';
import axios from 'axios';
import './UpdateTransactionStatus.css';

const UpdateTransactionStatus = ({ transactionId }) => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted'); // Debug log

    try {
      const response = await axios.put(`http://localhost:3000/api/transactions/${transactionId}`, { status });
      console.log('Response:', response.data); // Debug log
    } catch (error) {
      console.error('Error:', error); // Debug log
    }
  };

  return (
    <form onSubmit={handleSubmit} className="update-transaction-status">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="New Status"
          required
        />
      </div>
      <button type="submit" className="btn btn-success">Update Status</button>
    </form>
  );
};

export default UpdateTransactionStatus;
