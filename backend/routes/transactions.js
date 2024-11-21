const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Create a new transaction
router.post('/', async (req, res) => {
  console.log('Incoming request:', req.body); // Debug log
  const transaction = new Transaction(req.body);
  try {
    const savedTransaction = await transaction.save();
    console.log('Transaction saved:', savedTransaction); // Debug log
    res.status(201).json(savedTransaction);
  } catch (err) {
    console.error('Error saving transaction:', err); // Debug log
    res.status(400).json({ message: err.message });
  }
});

// Retrieve all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (err) {
    console.error('Error retrieving transactions:', err); // Debug log
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
