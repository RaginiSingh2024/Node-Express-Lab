const transactionService = require('../services/transactionService');
const generateTxnId = require('../utils/generateTxnId');

const createTransaction = async (req, res, next) => {
  try {
    const data = req.body;
    data.txnId = generateTxnId();
    const transaction = await transactionService.createTransaction(data);
    res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    next(error);
  }
};

const getTransactions = async (req, res, next) => {
  try {
    const filters = req.query;
    const options = {
      page: req.query.page,
      limit: req.query.limit,
      sortBy: req.query.sortBy,
      order: req.query.order,
    };
    const result = await transactionService.getTransactions(filters, options);
    res.status(200).json({ success: true, ...result });
  } catch (error) {
    next(error);
  }
};

const getTransactionById = async (req, res, next) => {
  try {
    const transaction = await transactionService.getTransactionById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    res.status(200).json({ success: true, data: transaction });
  } catch (error) {
    next(error);
  }
};

const updateTransaction = async (req, res, next) => {
  try {
    const updated = await transactionService.updateTransaction(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    next(error);
  }
};

const deleteTransaction = async (req, res, next) => {
  try {
    const deleted = await transactionService.deleteTransaction(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    res.status(200).json({ success: true, message: 'Transaction deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
};
