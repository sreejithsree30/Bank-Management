import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateTransaction from './Components/CreateTransaction';
import TransactionHistory from './Components/TransactionHistory';
import UpdateTransactionStatus from './Components/UpdateTransactionStatus';

import "./App.css"

function App() {
  const [userId, setUserId] = useState('');
  const [transactionId, setTransactionId] = useState('');

  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Transaction Management</h1>
        <div className="mb-4">
          <input 
            type="text" 
            className="form-control mb-2"
            value={userId} 
            onChange={(e) => setUserId(e.target.value)} 
            placeholder="User ID" 
          />
          <input 
            type="text" 
            className="form-control"
            value={transactionId} 
            onChange={(e) => setTransactionId(e.target.value)} 
            placeholder="Transaction ID" 
          />
        </div>

        <nav className="mb-4">
          <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history">Transaction History</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update">Update Transaction Status</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CreateTransaction />} />
          <Route path="/history" element={<TransactionHistory userId={userId} />} />
          <Route path="/update" element={<UpdateTransactionStatus transactionId={transactionId} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
