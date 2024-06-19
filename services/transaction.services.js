const TransactionModel = require('../models/transaction.model');

exports.getTransactions = async (fromDate, toDate) => {
    try {
        let query = {};

        if (fromDate && toDate) {
            query.date = {
                $gte: new Date(fromDate),
                $lte: new Date(toDate)
            };
        }

        const transactions = await TransactionModel.find(query);
        return transactions;
    } catch (error) {
        throw error; // Re-throw error for handling in controller
    }
};

exports.getTransactionById = async (transactionId) => {
    try {
        const transaction = await TransactionModel.findOne({ id: transactionId });
        return transaction;
    } catch (error) {
        throw error;
    }
};

exports.importTransactions = async (transactions) => {
    try {
        // Insert into MongoDB using Mongoose model
        const result = await TransactionModel.insertMany(transactions);
        return result; // Return the result of insertMany if needed
    } catch (error) {
        throw error; // Re-throw error for handling in controller
    }
};