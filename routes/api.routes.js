const express = require('express');
const router = express.Router();
const transactionService = require('../services/transaction.services');
const transactionController = require('../controllers/transaction.controller');

router.get('/transactions/:id', transactionController.getTransactionById);

// Define a route to get transactions within a date range
router.get('/transactions', async (req, res) => {
  const { fromDate, toDate } = req.query;
  try {
    const transactions = await transactionService.getTransactions(fromDate, toDate);
    return res.status(200).json(transactions);
  } catch (error) {
    console.error('Error fetching transactions by date range:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a route to import transactions
router.post('/transactions', async (req, res) => {
  try {
    const importedTransactions = await transactionService.importTransactions(req.body);
    return res.status(201).json(importedTransactions);
  } catch (error) {
    console.error('Error importing transactions:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
