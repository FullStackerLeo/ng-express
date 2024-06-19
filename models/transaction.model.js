const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    id: String,
    date: Date,
    sender: {
        firstName: String,
        lastName: String,
        dateOfBirth: Date,
        IDNumber: String
    },
    recipient: {
        firstName: String,
        lastName: String,
        email: String,
        accountNumber: String,
        bank: String
    },
    Amount: Number,
    CurrencyCd: String,
    Comments: String,
    status: String
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
