const transactionService = require('../services/transaction.services');

exports.getTransactions = async (req, res) => {
  try {
    const getTransactions = await transactionService.getTransactions(req.body);
    return res.status(200).json(getTransactions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getTransactionById = async (req, res) => {
  try {
      const transactionId = req.params.id;
      const transaction = await transactionService.getTransactionById(transactionId);

      if (!transaction) {
          return res.status(404).json({ error: 'Transaction not found' });
      }

      res.status(200).json(transaction);
  } catch (error) {
      console.error('Error fetching transaction:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};


// TODO: add logic for double loading
exports.importTransactions = async (req, res) => {
  try {
    const importTransactions = await transactionService.importTransactions(req.body);
    return res.status(201).json(importTransactions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};